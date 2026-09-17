#!/usr/bin/env python3
"""Analyse un export Pages CSV (FR/EN) de Search Console, sans compte ni API."""
import argparse
import csv
import json
import math
import subprocess
import unicodedata
from collections import defaultdict
from pathlib import Path
from urllib.parse import urlsplit

def normalize(text):
    return ''.join(c for c in unicodedata.normalize('NFD', text.lower()) if unicodedata.category(c)!='Mn').strip()

def number(text):
    value=float(text.replace('\u202f','').replace('\xa0','').replace(' ','').replace(',','.'))
    if not math.isfinite(value) or value<0: raise ValueError('valeur non positive ou non finie')
    return value

def load_csv(file):
    text=Path(file).read_text(encoding='utf-8-sig')
    try: dialect=csv.Sniffer().sniff(text[:4096],delimiters=',;\t')
    except csv.Error: dialect=csv.excel
    reader=csv.DictReader(text.splitlines(),dialect=dialect)
    headers={normalize(h):h for h in reader.fieldnames or []}
    def column(options):
        return next((headers[o] for o in options if o in headers),None)
    page=column(['top pages','pages','page','pages les plus populaires','url'])
    clicks=column(['clicks','clics']); impressions=column(['impressions']); position=column(['position','position moyenne','average position'])
    if not all([page,clicks,impressions]): raise ValueError('Exporter l’onglet Pages avec clics et impressions ; les exports Requêtes ne conviennent pas.')
    output={}
    for index,row in enumerate(reader,2):
        url=urlsplit(row[page].strip())
        if url.scheme!='https' or url.hostname not in ['www.chimiemaison.fr','chimiemaison.fr']: raise ValueError(f'Ligne {index} : URL hors du site')
        path=url.path.rstrip('/') or '/'
        c,i=number(row[clicks]),number(row[impressions])
        pos=number(row[position]) if position and row[position].strip() else None
        if not c.is_integer() or not i.is_integer() or c>i: raise ValueError(f'Ligne {index} : métriques incohérentes')
        if path in output: raise ValueError(f'Ligne {index} : plusieurs variantes de {path}, regrouper les URL avant analyse')
        output[path]={'clicks':int(c),'impressions':int(i),'position':pos}
    return output

def report(current, previous, inventory):
    groups=defaultdict(lambda:{'pages':0,'clicks':0,'impressions':0})
    for path,row in current.items():
        meta=inventory.get(path,{})
        group='Matériel' if meta.get('category')=='bien-sequiper' else {'notion':'Notions','repere':'Notions','recette':'Recettes','guide':'Méthodes et dépannage'}.get(meta.get('type'),'Autres pages')
        groups[group]['pages']+=1
        for metric in ['clicks','impressions']: groups[group][metric]+=row[metric]
    lines=['# Analyse Search Console — pages exportées','', 'Les chiffres ci-dessous proviennent uniquement du CSV fourni. Une absence dans cet export ne prouve ni une désindexation, ni zéro impression sur toute autre période. Les ventes et revenus Amazon ne sont pas mesurés ici.','', '| Type | URL dans le CSV | Clics | Impressions | CTR calculé |','|---|---:|---:|---:|---:|']
    for name,g in groups.items():
        ctr=f"{100*g['clicks']/g['impressions']:.2f} %" if g['impressions'] else '—'
        lines.append(f"| {name} | {g['pages']} | {g['clicks']} | {g['impressions']} | {ctr} |")
    lines+=['','## Pages à examiner','', '| Page | Clics | Impressions | Position moyenne exportée | Suite à examiner |','|---|---:|---:|---:|---|']
    for path,row in sorted(current.items(),key=lambda item:item[1]['impressions'],reverse=True)[:20]:
        meta=inventory.get(path,{})
        next_action='Examiner les requêtes avant de modifier la page'
        if meta.get('type') in ['notion','repere']: next_action='Observer les passages vers la recette et le matériel'
        elif meta.get('category')=='bien-sequiper': next_action='Examiner l’intention d’achat et les clics marchands'
        elif row['impressions'] and not row['clicks']: next_action='Comparer titre et requêtes ; vérifier la position'
        pos=f"{row['position']:.1f}" if row['position'] is not None else 'non fournie'
        lines.append(f"| [{path}](https://www.chimiemaison.fr{path}) | {row['clicks']} | {row['impressions']} | {pos} | {next_action} |")
    if previous is not None:
        lines+=['','## Comparaison avec l’autre export','', 'Comparer des périodes de même durée et avec les mêmes filtres. Les différences sont descriptives, sans attribution causale à une modification du site.','', '| Page présente dans les deux exports | Variation clics | Variation impressions |','|---|---:|---:|']
        for path in sorted(current.keys() & previous.keys()):
            lines.append(f"| {path} | {current[path]['clicks']-previous[path]['clicks']:+d} | {current[path]['impressions']-previous[path]['impressions']:+d} |")
    return '\n'.join(lines)+'\n'

def main():
    parser=argparse.ArgumentParser(description=__doc__)
    parser.add_argument('csv'); parser.add_argument('--previous'); parser.add_argument('--output',default='reports/search-console.md')
    args=parser.parse_args()
    raw=subprocess.check_output(['node','--input-type=module','-e',"import {getAllArticlesMeta} from './lib/articles.js'; console.log(JSON.stringify(Object.fromEntries(getAllArticlesMeta().map(a=>['/articles/'+a.slug,{type:a.type,category:a.category}]))));"],text=True)
    try: text=report(load_csv(args.csv),load_csv(args.previous) if args.previous else None,json.loads(raw))
    except (ValueError,KeyError) as e: parser.error(str(e))
    out=Path(args.output); out.parent.mkdir(parents=True,exist_ok=True); out.write_text(text)
    print(f'Rapport créé : {out}')
if __name__=='__main__': main()
