import importlib.util
from pathlib import Path
import tempfile
import unittest
spec=importlib.util.spec_from_file_location('gsc',Path(__file__).with_name('analyse-search-console.py'))
gsc=importlib.util.module_from_spec(spec);spec.loader.exec_module(gsc)
class ExportTests(unittest.TestCase):
    def load(self, text):
        with tempfile.TemporaryDirectory() as directory:
            path=Path(directory)/'Pages.csv';path.write_text(text,encoding='utf-8-sig');return gsc.load_csv(path)
    def test_french_decimal_and_semicolon(self):
        result=self.load('Pages les plus populaires;Clics;Impressions;Position\nhttps://www.chimiemaison.fr/articles/notion-saponification;2;100;12,5\n')
        self.assertEqual(result['/articles/notion-saponification']['position'],12.5)
    def test_queries_export_rejected(self):
        with self.assertRaises(ValueError): self.load('Top queries,Clicks,Impressions\nsavon,1,10\n')
    def test_foreign_domain_rejected(self):
        with self.assertRaises(ValueError): self.load('Top pages,Clicks,Impressions\nhttps://example.com/,1,10\n')
    def test_clicks_cannot_exceed_impressions(self):
        with self.assertRaises(ValueError): self.load('Top pages,Clicks,Impressions\nhttps://www.chimiemaison.fr/,20,10\n')
    def test_notions_and_equipment_separate(self):
        text=gsc.report({'/a':{'clicks':1,'impressions':10,'position':3},'/b':{'clicks':2,'impressions':10,'position':4}},None,{'/a':{'type':'notion'},'/b':{'type':'guide','category':'bien-sequiper'}})
        self.assertIn('| Notions | 1 | 1 | 10 | 10.00 % |',text)
        self.assertIn('| Matériel | 1 | 2 | 10 | 20.00 % |',text)
if __name__=='__main__':unittest.main()
