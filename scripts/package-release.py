#!/usr/bin/env python3
"""Crée un ZIP propre hors du projet et un manifeste comparé au ZIP source."""
import argparse
import hashlib
import json
import re
from pathlib import Path, PurePosixPath
from zipfile import ZIP_DEFLATED, ZipFile

ROOT = Path(__file__).resolve().parents[1]
DIRECTORIES = {'app', 'content', 'docs', 'lib', 'public', 'scripts', 'tests', '.github'}
FILES = {'package.json', 'package-lock.json', 'README.md', 'AGENTS.md', 'jsconfig.json',
         'middleware.js', 'next.config.js', 'playwright.config.js', '.gitignore', '.npmrc', '.env.example'}
EXCLUDED = {'node_modules', '.next', '.git', 'reports', 'private-data', '__pycache__',
            'playwright-report', 'test-results', '.lighthouseci', '.DS_Store'}

def included(name):
    path = PurePosixPath(name)
    if path.is_absolute() or '..' in path.parts or any(part in EXCLUDED for part in path.parts):
        return False
    if path.suffix in {'.pyc', '.zip'} or (path.name.startswith('.env') and name != '.env.example'):
        return False
    return name in FILES or (len(path.parts) > 1 and path.parts[0] in DIRECTORIES)

def digest(data):
    return hashlib.sha256(data).hexdigest()

def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument('--output', required=True)
    parser.add_argument('--base', help='ZIP précédent, facultatif, pour décrire les différences')
    args = parser.parse_args()
    output = Path(args.output).resolve()
    if output.suffix != '.zip' or output == ROOT or ROOT in output.parents:
        parser.error('Choisir un nouveau fichier .zip hors du dossier du projet.')
    if output.exists():
        parser.error('Le fichier de destination existe déjà ; choisir un nouveau nom.')
    paths = sorted(p for p in ROOT.rglob('*') if p.is_file() and included(p.relative_to(ROOT).as_posix()))
    for path in paths:
        if path.is_symlink():
            parser.error(f'Lien symbolique à examiner : {path.relative_to(ROOT)}')
        if path.name == '.npmrc' and re.search(r'_auth|token|password', path.read_text(), re.I):
            parser.error('La configuration npm contient une clé potentiellement sensible ; ne pas la livrer.')
    current = {p.relative_to(ROOT).as_posix(): digest(p.read_bytes()) for p in paths}
    previous = {}
    if args.base:
        with ZipFile(args.base) as base:
            previous = {name: digest(base.read(name)) for name in base.namelist() if included(name) and not name.endswith('/')}
    manifest = {
        'base': Path(args.base).name if args.base else None,
        'note': 'Manifeste des fichiers projet. Les caches, dépendances, exports privés et secrets ne sont pas inclus.',
        'added': sorted(current.keys() - previous.keys()),
        'changed': sorted(name for name in current.keys() & previous.keys() if current[name] != previous[name]),
        'removed': sorted(previous.keys() - current.keys()),
        'sha256': current,
    }
    output.parent.mkdir(parents=True, exist_ok=True)
    with ZipFile(output, 'x', ZIP_DEFLATED) as archive:
        for path in paths:
            archive.write(path, path.relative_to(ROOT).as_posix())
        archive.writestr('manifest-release.json', json.dumps(manifest, ensure_ascii=False, indent=2) + '\n')
    with ZipFile(output) as archive:
        if archive.testzip() is not None:
            raise RuntimeError('Le contrôle d’intégrité du ZIP a échoué.')
        for name, value in current.items():
            if digest(archive.read(name)) != value:
                raise RuntimeError(f'Empreinte incorrecte : {name}')
    print(json.dumps({'file': str(output), 'files': len(paths) + 1, 'bytes': output.stat().st_size,
                      'added': len(manifest['added']), 'changed': len(manifest['changed']),
                      'removed': manifest['removed'], 'sha256': digest(output.read_bytes())}, ensure_ascii=False, indent=2))

if __name__ == '__main__':
    main()
