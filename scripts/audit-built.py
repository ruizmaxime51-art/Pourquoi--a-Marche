#!/usr/bin/env python3
"""Contrôle du HTML produit, indépendamment des composants et de leurs tests."""
from html.parser import HTMLParser
from pathlib import Path
from urllib.parse import urlsplit, unquote
import json
import sys

ORIGIN = 'https://www.chimiemaison.fr'
class Page(HTMLParser):
    def __init__(self):
        super().__init__(convert_charrefs=True)
        self.h1=0; self.ids=[]; self.links=[]; self.images=[]; self.canon=[]; self.robots=''
        self.faq=0; self.schema=[]; self.in_json=False; self.in_title=False; self.title=''; self.json=''
        self.desc=[]
    def handle_starttag(self, tag, attrs):
        a=dict(attrs)
        if tag=='h1': self.h1+=1
        if a.get('id'): self.ids.append(a['id'])
        if tag=='a' and a.get('href'): self.links.append(a)
        if tag=='img': self.images.append(a)
        if tag=='link' and a.get('rel')=='canonical': self.canon.append(a.get('href'))
        if tag=='meta' and a.get('name')=='robots': self.robots=a.get('content','')
        if tag=='meta' and a.get('name')=='description': self.desc.append(a.get('content',''))
        if tag=='section' and 'faq-section' in a.get('class','').split(): self.faq+=1
        if tag=='title': self.in_title=True
        if tag=='script' and a.get('type')=='application/ld+json': self.in_json=True; self.json=''
    def handle_data(self, data):
        if self.in_json: self.json+=data
        if self.in_title: self.title+=data
    def handle_endtag(self, tag):
        if tag=='title': self.in_title=False
        if tag=='script' and self.in_json:
            self.schema.append(json.loads(self.json)); self.in_json=False

root=Path('.next/server/app')
files=list(root.rglob('*.html'))
if not files: sys.exit('Build absent : lancer npm run build avant audit:built.')
pages={}
for f in files:
    route='/'+str(f.relative_to(root)).removesuffix('.html')
    if route in ['/_not-found','/_global-error']: continue
    if route=='/index': route='/'
    p=Page(); p.feed(f.read_text()); pages[route]=p
errors=[]; warnings=[]; titles={}
for route,p in pages.items():
    if p.h1!=1: errors.append(f'{route}: {p.h1} H1')
    if len(set(p.ids))!=len(p.ids): errors.append(f'{route}: IDs dupliqués')
    if p.faq>1: errors.append(f'{route}: FAQ répétée')
    expected=ORIGIN+route if route!='/' else ORIGIN+'/'
    canonical_ok = len(p.canon)==1 and (p.canon[0]==expected or (route=='/' and p.canon[0]==ORIGIN))
    if not canonical_ok: errors.append(f'{route}: canonical incorrect {p.canon}')
    if len(p.desc)!=1 or not p.desc[0]: errors.append(f'{route}: description absente ou répétée')
    if not p.title: errors.append(f'{route}: titre vide')
    if p.title in titles: errors.append(f'{route}: titre identique à {titles[p.title]}')
    titles[p.title]=route
    if p.title.count('Chimie Maison')>1: errors.append(f'{route}: marque répétée dans le titre')
    if len(p.title)>75: warnings.append(f'{route}: titre long à examiner ({len(p.title)} caractères, pas une limite Google)')
    if route.startswith('/articles/') and 'noindex' in p.robots: errors.append(f'{route}: article noindex')
    for image in p.images:
        if 'alt' not in image: errors.append(f'{route}: image sans alt')
    for link in p.links:
        href=link['href']; target=urlsplit(href)
        if target.netloc and target.netloc != 'www.chimiemaison.fr':
            if target.netloc.endswith('amazon.fr') and 'sponsored' not in link.get('rel','').split(): errors.append(f'{route}: affiliation non signalée')
            continue
        if target.scheme not in ('','https','http'): continue
        dest=target.path or route
        if dest in pages:
            if target.fragment and unquote(target.fragment) not in pages[dest].ids: errors.append(f'{route}: ancre introuvable {href}')
        elif dest.startswith(('/articles/','/outils/')) and not Path('public'+dest).exists(): errors.append(f'{route}: destination introuvable {href}')
    if route.startswith('/articles/') and not any(any(e.get('@type')=='Article' for e in s.get('@graph',[])) for s in p.schema): errors.append(f'{route}: données Article absentes')
Path('reports').mkdir(exist_ok=True)
Path('reports/rendered-audit.json').write_text(json.dumps({'pages':len(pages),'errors':errors,'warnings':warnings},ensure_ascii=False,indent=2))
print(f'{len(pages)} pages : {len(errors)} erreur(s), {len(warnings)} titre(s) à examiner.')
for error in errors: print(error)
sys.exit(bool(errors))
