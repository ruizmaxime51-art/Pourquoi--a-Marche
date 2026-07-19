// ─────────────────────────────────────────────────────────────
// SYSTÈME CENTRALISÉ DES LIENS D'AFFILIATION
//
// Tous les liens d'affiliation sont regroupés ici, une seule fois.
// Pour modifier un lien : changer la valeur "url" ci-dessous —
// le changement se répercute AUTOMATIQUEMENT dans tous les articles
// qui utilisent ce produit.
//
// Pour insérer un produit dans un article markdown, écrire :
//   {{affil:balance}}              → une fiche produit (bloc CTA)
//   {{affil-inline:balance}}       → un lien simple dans le texte
//
// Vérification : parcourir cette liste tous les 3 mois et tester
// les liens (Amazon ne permet pas de détection automatique fiable).
// ─────────────────────────────────────────────────────────────

export const affiliations = {
  // — Cosmétique / savon —
  soude: {
    nom: 'Soude caustique SOLUP (NaOH)',
    descriptif: 'Le réactif de la saponification, en pureté contrôlée',
    reassurance: 'Expédié par Amazon',
    asin: 'B0DM1YZ1K6',
    url: 'https://www.amazon.fr/-/en/SOLUP-Caustic-Hydroxide-Cleaning-Degreasing/dp/B0DM1YZ1K6?linkCode=ll2&tag=maxscience06-21&linkId=d4123ea4095081d557b94ed82468cbd1&ref_=as_li_ss_tl',
  },
  balance: {
    nom: 'Balance de précision 0,1 g / 5 kg',
    descriptif: 'Le dosage qui ne pardonne pas',
    reassurance: 'Retours gratuits',
    asin: 'B0CMH96FTJ',
    url: 'https://www.amazon.fr/-/en/Waterproof-Precision-Washable-Stainless-Rechargeable/dp/B0CMH96FTJ?linkCode=ll2&tag=maxscience06-21&linkId=9d90d060797e8abe82176de2c7369a67&ref_=as_li_ss_tl',
  },
  thermometre: {
    nom: 'Thermomètre digital ThermoPro',
    descriptif: 'Pour suivre la température des huiles et de la soude',
    reassurance: 'Expédié par Amazon',
    asin: 'B01LXI5HYH',
    url: 'https://www.amazon.fr/-/en/ThermoPro-Instant-Digital-Thermometer-Beverages/dp/B01LXI5HYH?linkCode=ll2&tag=maxscience06-21&linkId=3e12615d5c9fd288808ae727c12bef03&ref_=as_li_ss_tl',
  },
  mixeur: {
    nom: 'Mixeur plongeant Amazon Basics',
    descriptif: 'Pour atteindre la trace en quelques minutes',
    reassurance: 'Expédié par Amazon',
    asin: 'B0DBTCKLKX',
    url: 'https://www.amazon.fr/Amazon-Basics-Multispeed-Blender-Included/dp/B0DBTCKLKX?linkCode=ll2&tag=maxscience06-21&linkId=7c8f8dedac636e88a2cf75591bbea113&ref_=as_li_ss_tl',
  },
  moule: {
    nom: 'Moule à savon en silicone',
    descriptif: 'Démoulage facile, format pain',
    reassurance: 'Expédié par Amazon',
    asin: 'B08S3G5RVH',
    url: 'https://www.amazon.fr/dp/B08S3G5RVH?linkCode=ll2&tag=maxscience06-21&linkId=50f426f5b45cec57dc827514741579d1&ref_=as_li_ss_tl',
  },

  // — Entretien —
  'bandelettes-ph': {
    nom: 'Bandelettes de pH universelles',
    descriptif: 'Pour vérifier l\'acidité de vos préparations',
    reassurance: 'Expédié par Amazon',
    asin: 'B079K71HJM',
    url: 'https://www.amazon.fr/Universal-pH-Test-Strips-Roll/dp/B079K71HJM?linkCode=ll2&tag=maxscience06-21&linkId=9e985d19e995714722739527a0691d9b&ref_=as_li_ss_tl',
  },
  'acide-citrique': {
    nom: 'Acide citrique Jacques Briochin',
    descriptif: 'Détartrant naturel et économique',
    reassurance: 'Expédié par Amazon',
    asin: 'B0D3HQKPXS',
    url: 'https://www.amazon.fr/JACQUES-BRIOCHIN-Citrique-Naturelle-Economique/dp/B0D3HQKPXS?linkCode=ll2&tag=maxscience06-21&linkId=244d0237491b3651901e13f868c2c0ed&ref_=as_li_ss_tl',
  },
  'cristaux-soude': {
    nom: 'Cristaux de soude St Marc',
    descriptif: 'Carbonate de sodium — dégraissant et adoucisseur d\'eau',
    reassurance: 'Expédié par Amazon',
    asin: 'B0D3DXLC2X',
    url: 'https://www.amazon.fr/St-Marc-Nettoyant-Multi-Usage-Naturelle/dp/B0D3DXLC2X?linkCode=ll2&tag=maxscience06-21&linkId=cd6411ddc7c8e31f5041af1f2c449bc4&ref_=as_li_ss_tl',
  },
  'flacon-spray': {
    nom: 'Flacon spray Delta Clean',
    descriptif: 'Rechargeable, pour vos nettoyants maison',
    reassurance: 'Expédié par Amazon',
    asin: 'B08DHYZW93',
    url: 'https://www.amazon.fr/Delta-Clean-Pulv%C3%A9risateur-Vaporisateur-Rechargeable/dp/B08DHYZW93?linkCode=ll2&tag=maxscience06-21&linkId=911b1dc17c018b0fc9f6dd04c7d1f83d&ref_=as_li_ss_tl',
  },


  // — Mesure, étiquetage et protection —
  'ph-metre': {
    nom: 'pH-mètre numérique pour préparations alimentaires et cosmétiques',
    descriptif: 'Pour les mesures régulières qui nécessitent étalonnage et entretien',
    reassurance: 'Lien affilié Amazon',
    asin: 'B0C7GGMYZL',
    url: 'https://www.amazon.fr/Alimentaire-Num%C3%A9rique-Fabrication-pH-M%C3%A8tre-Cosm%C3%A9tique/dp/B0C7GGMYZL?__mk_fr_FR=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=1HANO9MJPI09K&dib=eyJ2IjoiMSJ9.3CRnmaDlfPRLGZ27viCiq8J_FPuw-J-XN9ZIEuXZNpy6ktua0avi8Jv5IRfj3vOaOcqWk3WNvS773mFYU9pbS3sPlVuhQOEIKUDtIenMyql129--U9lnjFKcJyoh4WR6k3s8zhEz6GbMWXbV4M_xeeNQSQiHBIukUJruoa-36SWCeAwGs2AeYN1yii0tki3LpbJ_nexERyBS8XEoqldlBurHS4ru7e9LHtXYAMBYHwI50cS954gFv_yZlAvjscUGMLHvpPWoXT7_Tl4vAgl1zNlSNW3Nc2VcueZJwpnfqxY.4pJCueVr7vdIkUmjdi_DdcnSxi91GILa4WQj-qjzJJE&dib_tag=se&keywords=ph%2Bmetre%2Balimentaire&qid=1784203821&sprefix=ph%2Bmetre%2Balimentaire%2Caps%2C332&sr=8-1-spons&aref=Qh7xzplPYO&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY&th=1&linkCode=ll2&tag=maxscience06-21&linkId=0db637b171d62d0dab4e3d686c1a9883&ref_=as_li_ss_tl',
  },
  'etiquettes-autocollantes': {
    nom: 'Étiquettes autocollantes rectangulaires',
    descriptif: 'Pour identifier le produit, la concentration, la date et les incompatibilités',
    reassurance: 'Lien affilié Amazon',
    asin: 'B08XWJ1JPR',
    url: 'https://www.amazon.fr/%C3%89tiquettes-Autocollantes-Autocollants-Rectangulaires-Imprimantes/dp/B08XWJ1JPR?crid=5STGVAO7PBKE&dib=eyJ2IjoiMSJ9.nP2uiSjZNTjoXRMlZumOg3zihTjR6ffp7mG-zsKtRo9FwoPkblQgiqy0rP0LMrwIENoZqcbgOU-sO7OAYpZNPx3xzClGWrP_7bONJD-3A8EnaFWaNbN4Tlttgp8JUt1UOlYKoAZgWn3arwHZR2XWobdyU48bJFC_SPISHfCvBmWG92_MY3wslbPXkdgwSgSZ2J3bXWWERBF62a0X01HP279eUrndqy-IpgwDMVUL5NsN6mlvtJOyxkUjpQVpVX2xFNqgoWxfnxv-O3wJg_QOzUEg2kwRBwNVYS4SnWbOOCs.zJk5vFUBn2fs6dcOUjNcTfsZZkZcNQ1-tUP8Pg3df0M&dib_tag=se&keywords=etiquettes%2Bautocollantes&qid=1784204006&sprefix=etiquette%2Caps%2C298&sr=8-1-spons&aref=buuXl4KQat&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY&th=1&linkCode=ll2&tag=maxscience06-21&linkId=9f56d8c514b8cbbeea78ad0ecd11842e&ref_=as_li_ss_tl',
  },
  'lunettes-securite': {
    nom: 'Surlunettes de sécurité Dräger X-pect 8120',
    descriptif: 'Protection enveloppante contre les projections pendant la manipulation',
    reassurance: 'Lien affilié Amazon',
    asin: 'B00RJT61ZI',
    url: 'https://www.amazon.fr/Dr%C3%A4ger-X-pect-8120-Surlunettes-lagriculture/dp/B00RJT61ZI?__mk_fr_FR=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=SBGL72BFA0EB&dib=eyJ2IjoiMSJ9.9Y5GizNXYhxOHIgdh5aRGRHbpLDXyb2PZg4Rinpzlc7KXMB4yFv_krV3OqNtnVBfHhm0DiaeKozMZHDiEXjXVk9TDervKwmZYA5yCAEeJoyT5lUllfFqCK5eAlnRlr2tXYvoEU40nYSPZJaAVi-0TZyKjcwSuvaNbKMLfKTBeKl9C8HnzkWcdOl6XVwYspqNv_K3CjM6Wa1OGdfoY0sbOj7QSux87Y9Mbwy1dOM0MIOxZitfpbs0tOPnq4oDBklD5PfVJbYxi1uBtiWqry9eRzIbPIO5Nkm80Hzqzr64ipg.wwUTJmUSshOqPaZgfzt57Zay3Mp0I9DS9EUb3qQt10Y&dib_tag=se&keywords=lunette+s%C3%A9curit%C3%A9&qid=1784204132&sprefix=lunette+s%C3%A9curit%C3%A9+%2Caps%2C266&sr=8-5-spons&aref=nEtNT7mBBZ&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY&psc=1&linkCode=ll2&tag=maxscience06-21&linkId=5758ac29a899bca8f1e9d073f49c5776&ref_=as_li_ss_tl',
  },
  'gants-chimiques-reutilisables': {
    nom: 'Gants chimiques réutilisables Gebol',
    descriptif: 'Manchette longue pour la manipulation ; vérifier la compatibilité fabricant avec votre usage',
    reassurance: 'Lien affilié Amazon',
    asin: 'B0BT6XCXY4',
    url: 'https://www.amazon.fr/Gebol-caoutchouc-chimiques-imperm%C3%A9ables-antid%C3%A9rapants/dp/B0BT6XCXY4?crid=18DLX9WNNJPSG&dib=eyJ2IjoiMSJ9.4WS8uYTU7EDbH2iz9pBHUxqnH2Q6WXhbTszKaZu1I7ox3A91Wa9FtEq9y76CK84UZhkTPjgqVGj14nRuvRACdtsLwUIq67HrsYhnWgBdN8Q6rLywv1tYAGFzKdRu4nIGBTSWaWFu9ogyFk-E1wsLlkzmNDtiAPPm_IBcwEs_gLJpRFZsm2qXZq-ENhsNAI72FpltpDcpkpnRc-dzTEg_oZ2UA3W6lQQQjVsjL7JmOyWN9hAFlg-95S-1IvREr5z37M1E3ZZU4lbFzq5bZB_4wXTEfZYwNlB4zF-Hq4p8sDM.96oTpHEiGg9wRBsOtyH-fmvmGblXAoOAvsViriO9oOE&dib_tag=se&keywords=gant%2Bsoude%2Bcaustique&qid=1784204195&rdc=1&sprefix=gant%2Bsoude%2Bcaus%2Caps%2C196&sr=8-1&th=1&linkCode=ll2&tag=maxscience06-21&linkId=952a05c316ae3a49c421d69ab9c06426&ref_=as_li_ss_tl',
  },
  'gants-nitrile-jetables': {
    nom: 'Gants jetables en nitrile Saraya',
    descriptif: 'Pour les contacts brefs et tâches légères, sans remplacer un gant chimique réutilisable',
    reassurance: 'Lien affilié Amazon',
    asin: 'B0D8NS182Y',
    url: 'https://www.amazon.fr/%E3%82%B5%E3%83%A9%E3%83%A4-SARAYA-Gants-Nitrile-Anti-D%C3%A9rapants/dp/B0D8NS182Y?__mk_fr_FR=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=38KBBBIGN9HKZ&dib=eyJ2IjoiMSJ9.WsXA0XoSHnydytroCblm_7bNCCfXEVpoWbPhf3xSf4-aS3lgHF2PymnND4qT1Ni69bQL0bvf7wr3AU1ZspdbV4_7GkahT0lSBPG0J0SxAxQkwiSeSNwzVxPH7CUyPioyYH_tHgOM6IEHT7e3a2lo0VvkC4c5a9EhzcJFJjNFXRVIhtZ3F1WeieJ32zsxH5s7eXrDSVgkhsUBTQb8UgfSgmZ-JeuhKDfgXIF1eym17_gpucfd9CQOlXv5MsSrtyOTxi_8pcfa0JBRFFUKsK9kL0abIhMxTMnRulCSg07ZYDU.TEodX9kRRAEoa6D6zI-BwKGrgQJErORMzbeYbhuuHZc&dib_tag=se&keywords=gant%2Bsoude%2Bcaustique%2Bjetable&qid=1784204255&sprefix=gant%2Bsoude%2Bcaustique%2Bjetabl%2Caps%2C196&sr=8-6&th=1&linkCode=ll2&tag=maxscience06-21&linkId=dfad3f11bcad6e3c7156df011a6c7738&ref_=as_li_ss_tl',
  },


  // — Comparatif flacons et étiquettes —
  'spray-hr-hogar-pehd-500': {
    nom: 'HR Hogar — 3 sprays PEHD de 500 ml',
    descriptif: 'Flacons opaques colorés avec buse réglable, adaptés aux préparations ménagères compatibles',
    reassurance: 'Lien affilié Amazon',
    asin: 'B0GFGH3T7Z',
    url: 'https://www.amazon.fr/HR-Hogar-Pulverisateur-Spray-Couleurs/dp/B0GFGH3T7Z?__mk_fr_FR=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=35FNFVUQLXP12&dib=eyJ2IjoiMSJ9.GVBhDhbohR-_jFq51XRZe80KTj_JKRlGTS8b3CKoUj80sWi8sB_ulxDdMihroyo_whl7OnbipG22mA_D5G5dTaR_RyquBPXia6lCwQPcLHRphec3PtF-pagmTct6ZQXJ4sQbqO0CY9-MSe3m6jpcB_NxRljGt3WszG8o_i1HK_NjvjP_5WnpshYCAMVYYBOvzHg9CV4BKI25Yt4-McU6LUEW-QiLs8S57KZP8FXWzAfXifmYoUpWzdfOFkpTkVBXCD6lOMh90dpsyvMYx_2Xdpw54UiGrzzEwWoYWu32l3M.P9Y6oXqB-UpsiCI1Ms4GQCQWAOEGLW1UifLltGH_JG0&dib_tag=se&keywords=flacon%2Bspray%2BPEHD%2B500%2Bml%2Br%C3%A9sistant%2Bproduits%2Bchimiques&qid=1784294240&sprefix=flacon%2Bspray%2Bpehd%2B500%2Bml%2Br%C3%A9sistant%2Bproduits%2Bchimiques%2Caps%2C468&sr=8-3&th=1&linkCode=ll2&tag=maxscience06-21&linkId=bfc8f12c85001d35125f714dc0fe2321&ref_=as_li_ss_tl',
  },
  'spray-cozydiscount-pet-500': {
    nom: 'cozydiscount — 3 sprays PET transparents de 500 ml',
    descriptif: 'Format économique pour les préparations aqueuses douces dont on veut voir le niveau',
    reassurance: 'Lien affilié Amazon',
    asin: 'B0H4RMNV6L',
    url: 'https://www.amazon.fr/cozydiscount-Vaporisateur-Nettoyage-Lot-Economique/dp/B0H4RMNV6L?__mk_fr_FR=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=3FIX3XEDB6N8L&dib=eyJ2IjoiMSJ9.dgp85YHvovj09bfwDE5TUHVLzY7YD1iAr6T_Z8fDd6vGmuTT5gkzwk-w8PA9Haa4nmD0X4u48TibVOxSjseJ4bmjoiUv9imSPGWCGLZDav2ghLaVujeqc6tmm2hzvTYm11nh9aNCcz3VkQ3DmjuyILLbaXsVhlo66nL-ph_eaJdcxaaz5u1_kvnf8bkUAgnd09stnNvpohF-4bLGDs5rDJEpGM-K6bmANY2Zdxjld-qYQtwLJx6l_AlaJXDQAjeUWk_Dm_dWls4zkioMPc0VtJw54UiGrzzEwWoYWu32l3M.3hCOKVNQ3a0pi43Qk15w2ZbersCCgARcSzEL4yuNi5A&dib_tag=se&keywords=flacon+spray+PET+transparent+500+ml&qid=1784294352&sprefix=flacon+spray+pet+transparent+500+ml%2Caps%2C206&sr=8-1&linkCode=ll2&tag=maxscience06-21&linkId=9b8177dc7f6f8e78698a29fbb43d66dd&ref_=as_li_ss_tl',
  },
  'flacons-pompe-pet-500': {
    nom: 'wiksite — 3 flacons pompe PET de 500 ml',
    descriptif: 'Avec entonnoir et étiquettes, pour savon liquide, gel douche ou liquide vaisselle fluide',
    reassurance: 'Lien affilié Amazon',
    asin: 'B098NVDY4T',
    url: 'https://www.amazon.fr/rechargeables-plastique-r%C3%A9utilisables-%C3%A9tiquettes-shampooing/dp/B098NVDY4T?__mk_fr_FR=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=2HUD44GYBT21E&dib=eyJ2IjoiMSJ9.IeF7ZYR4SPXBPkHjuZGrCvnE9InByd5y9EB9WjBxz9mxVRX8fBM4L9_8C9NRTJ2twjk4KMhvX4t6Y94Cmy1JvlAWj73kF264ehmgZ9TezczEISydUu2nea5VradMz_sAEl4BrS5lHnqPwg1XBGy536ybMCngS8l-H1B6g-phf1CBJyJQHqRm8HHQ6JUZkA_cw9GfZdzgWghb-QqJFAzMoNWJbMoTsKrsPPs5V_vck_N99AeEzSR3uNW6C6am3nY6gaB5joj3sXOW5FxTjG6Fg0-Y9uj7QX9FzMhlKHkZ5zA.jfBw7IvarceNY1A3Cd4_jzrGPW7eMrLsG5l12RGfgk4&dib_tag=se&keywords=Flacon+pompe+%E2%80%94+500+ml&qid=1784294460&sprefix=flacon+pompe+500+ml%2Caps%2C185&sr=8-9&linkCode=ll2&tag=maxscience06-21&linkId=e46be8576d85cde81410ca93a905e4ed&ref_=as_li_ss_tl',
  },
  'distributeurs-lessive-23l': {
    nom: 'LDHHYH — 2 distributeurs de lessive de 2,3 L',
    descriptif: 'Grand format transparent avec bouchon doseur, réservé aux lessives douces compatibles',
    reassurance: 'Lien affilié Amazon',
    asin: 'B0CYPC4TPJ',
    url: 'https://www.amazon.fr/Distributeur-Lessive-Herm%C3%A9tique-lessive-Liquide/dp/B0CYPC4TPJ?__mk_fr_FR=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=1EUC78G0DPYJL&dib=eyJ2IjoiMSJ9.5s2UGlcgQtdU6GPFnazDPVvuW4e_d_r2XzODioWIigoFBQU3CzciNo-z1OS_g3m7KaKf3bbxMboJjDf5lmCguSH0XtLjZJ4fPXZ1cnUG6jCjOrrSiOTwz2eiCJ1muMsU_qyyU3HcOccZb9nz9bdp-adXiEywJai3RBkFPZYfhs6OmmtapwaBwuUuFmLNQUroSROTC-tDvjWuLpJARskpXh9GJtt9kKfcXHGKiPAXdxicoUgHK5pUjz3cCxY11-r3_KFP8D2ooeqzU-k-FTXuyUiakd-JgiKySCOE8vBZGcw.k8-ncMOhxKplXAgSUxiSdER23WLTCTcVIVX0nwU6Q_c&dib_tag=se&keywords=bidon+PEHD+2+litres+bouchon+lessive&qid=1784294519&sprefix=bidon+pehd+2+litres+bouchon+lessive%2Caps%2C209&sr=8-8&linkCode=ll2&tag=maxscience06-21&linkId=233a2ca8ef5e32e6b653ba95d3392b30&ref_=as_li_ss_tl',
  },
  'flacons-verre-ambre-250': {
    nom: 'Comptoir des boîtes — 6 flacons en verre ambré de 250 ml',
    descriptif: 'Petit format à bouchon vissé pour les préparations compatibles réellement sensibles à la lumière',
    reassurance: 'Lien affilié Amazon',
    asin: 'B0747QNLKB',
    url: 'https://www.amazon.fr/flacons-vides-verre-ambr%C3%A9-bouchon/dp/B0747QNLKB?__mk_fr_FR=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=2D0PC1HZQY7NH&dib=eyJ2IjoiMSJ9.ZW0LRqYSoFtrnkmhNtRt3P1SW53G9ABuFhrr3evqezJuFaw1imaY3JkrTLOdi50XF0i6nqBwsntoBbLIo_YUB7XVATYRra-UOHvGd2z_oByfelu4cglA586rJbIRIr2c7HsAtHCfnLnl8pWjAyMsebRqIbnYRoRgdUkyPdaV4zSUhi4SlbD3cGH-fQLoxfNiyuujH9EFRq4UH1upo8hQC5iwBDcrtbVjXx8_UrtlQvqW1_x3XAR3fkTJh5PTzaQwOc3Ekm-csZt7p6X9Gu4qDW7_defgJIVAu8E_-QUyafw.HvKWnCok2GNBKDliBRA2ufl0ixW36aDeiQ4fAFls6Fg&dib_tag=se&keywords=flacon+verre+ambr%C3%A9+bouchon+250+ml&qid=1784294595&sprefix=flacon+verre+ambr%C3%A9+bouchon+250+ml%2Caps%2C209&sr=8-1&linkCode=ll2&tag=maxscience06-21&linkId=2dc66160c827ac135465a79b89450b54&ref_=as_li_ss_tl',
  },


  // — Comparatif balances —
  'balance-zivacate-1g': {
    nom: 'Balance Zivacate 5 kg / 1 g',
    descriptif: 'Le choix économique pour l’eau, les huiles, la farine et les grandes masses',
    reassurance: 'Lien affilié Amazon',
    asin: 'B0G4VP1WMR',
    url: 'https://www.amazon.fr/Zivacate-Alimentaire-R%C3%A9tro%C3%A9clair%C3%A9-Inoxydable-P%C3%A2tisserie/dp/B0G4VP1WMR?__mk_fr_FR=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=1PTAEYQ2QKPA7&dib=eyJ2IjoiMSJ9._fibGFWvPis6QpZR_TR5R-E0OgYy2GCUqViiyLkEd8UFEIobmELuFtYKbclAQC-gyKQjRt7xfuf4hhraCqFi58CMXJMqOThptL0N-N9pLzMMZVGCgQKfbrZxsoTGm3Lg-KrgVIHarObsIJV0zLXfCbIWVAk1L9AgSlN0V1MUzYRchdzzYGF2AmPz7JE4EqlH5vov2Gh1A0Mh3ZTpJh2R_Im43Dh1iuOQTMSrRX8I4HH96vsHtDy8_NV7aJwGL-rishfYbtU3SVj5tAgB-YltsCzwEHKYdfdv1453PVeK71I.NXU0tOrjGtCjyiK_MFZQNBKDzjz310Gm626I0rO4HZI&dib_tag=se&keywords=Balance+de+cuisine+%C3%A9conomique%2C+pr%C3%A9cision+1+g%2C+capacit%C3%A9+5+kg&qid=1784205396&sprefix=balance+de+cuisine+%C3%A9conomique%2C+pr%C3%A9cision+1+g%2C+capacit%C3%A9+5+kg%2Caps%2C279&sr=8-1-spons&aref=imTSHPNq5e&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY&psc=1&linkCode=ll2&tag=maxscience06-21&linkId=fb88d6c113371065ffafdb923f2f0684&ref_=as_li_ss_tl',
  },
  'balance-acct-001g': {
    nom: 'Balance de poche ACCT 200 g / 0,01 g',
    descriptif: 'Pour les très petites masses et les additifs, avec poids de calibration',
    reassurance: 'Lien affilié Amazon',
    asin: 'B09N35L591',
    url: 'https://www.amazon.fr/ACCT-pr%C3%A9cision-alimentaire-num%C3%A9rique-conversion/dp/B09N35L591?__mk_fr_FR=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=3RRD1F5BB7GX3&dib=eyJ2IjoiMSJ9.q7RRe_tHu9NP0qhDtUzVyvuQwHvDOMpaSgWNNpQAzY4AED5SY8uYRDkBrKTilWGxSvYb23nPHpUvyCAyF9Se4wlbwqIAzzsb-R0T9LQvUCImAZdwQaHVYG6Z0A-P7mXlXqrtrfnIm63MdJ8urRp0oms68ark3cpD6qylZ72FSIKfKbWLI6SSdnBsepF9x4hqW83H7UCL-A0uyEVacwzy786dtCoiOqmOgZgN8yIIBH8URWEMGsZDV_kV2n3Dt9XlOVX3_vK2WfSCqBDkYjqAxzrBKZziz8jvvvE8Rmh-qcE._gGPFw8_21EC7uMgi8rVNBP7nGlY6MnWMkC5hFeIT1g&dib_tag=se&keywords=Balance%2Bde%2Bpoche%2C%2Bpr%C3%A9cision%2B0%2C01%2Bg%2C%2Bcapacit%C3%A9%2B200%2B%C3%A0%2B500%2Bg&qid=1784205463&sprefix=balance%2Bde%2Bpoche%2C%2Bpr%C3%A9cision%2B0%2C01%2Bg%2C%2Bcapacit%C3%A9%2B200%2B%C3%A0%2B500%2Bg%2Caps%2C259&sr=8-3-spons&aref=kiAExsgmEN&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY&th=1&linkCode=ll2&tag=maxscience06-21&linkId=9cd760f0b852d896e8610cf00ea888a4&ref_=as_li_ss_tl',
  },
  'balance-bomata-01g': {
    nom: 'Balance BOMATA 5 kg / 0,1 g',
    descriptif: 'Le choix polyvalent pour le savon, la fermentation et les recettes précises',
    reassurance: 'Lien affilié Amazon',
    asin: 'B0CP74BLCZ',
    url: 'https://www.amazon.fr/BOMATA-boulangerie-pourcentage-rechargeable-r%C3%A9tro%C3%A9clairage/dp/B0CP74BLCZ?__mk_fr_FR=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=1UTW68JN66Y8X&dib=eyJ2IjoiMSJ9.jVGWKM4VryawgYC9lc3uVjpdd4XWMjMfbGhcmY-TnFILm1HmeI2hbMChaFFsO7rNzDVOVt4sFqs0_UzX-gysRB31UnSsryhIsSthSd9dg9-By1el-Zo-C387e9jSEi0EUd2oeiZSI_MJNJmkq4MvnP4E5KwrlRzLP4B8kXcGtQAKS4Nmy1ZtwAbOKbKk0z4e5vov2Gh1A0Mh3ZTpJh2R_LZQ2sVBS7A3CLxsOtC-srMejqs63oI9lcjvSZc4HR79Fa5QV4Rntsm3-gbXCI9RgFCs5IDMGHHKc99tWdyreB0.WdGTIY4POb6v5L78tTImONDdHAi-BC7ApdoA5b3B_1M&dib_tag=se&keywords=Balance%2Bpremium%2B0%2C1%2Bg%2C%2Bcapacit%C3%A9%2B5%2Bkg&qid=1784205524&sprefix=balance%2Bpremium%2B0%2C1%2Bg%2C%2Bcapacit%C3%A9%2B5%2Bkg%2Caps%2C170&sr=8-1-spons&aref=GVPL3ROG2o&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY&th=1&linkCode=ll2&tag=maxscience06-21&linkId=01d325f88d318ae92be52077264f063b&ref_=as_li_ss_tl',
  },

  // — Comparatif mesure du pH —
  'ph-metre-gidigi-sonde': {
    nom: 'pH-mètre alimentaire GIDIGI à sonde pointue',
    descriptif: 'Pour levain, pâte, fromage, conserves et préparations semi-solides',
    reassurance: 'Lien affilié Amazon',
    asin: 'B0FXWXSR6P',
    url: 'https://www.amazon.fr/fermentation-alimentaire-compensation-automatique-temp%C3%A9rature/dp/B0FXWXSR6P?__mk_fr_FR=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=1HKIDJ097BL0E&dib=eyJ2IjoiMSJ9.t9E7nKgOZiJK9DKh4l9M8whR3bFe_3ag2Ju2Pg4MKA4bNTS6YBsn-76UPJbxzbKGQKuBU9BR05PAE328Yel6obCuZee0QOlghforpjrCoKHH955jseXN8wp9XeSKGfWZ-IxNAL_WZtnr3HR42hT8z6BYaLeiPgXmMFgkslUBArFlSqwInuGR4yICpZcWgyXwNmzmemQbwkTE2wbFFN69KHVOM6b54v2xWPvsdNp1LUsWLcKYT1yjuhZSQUczyQFLgSYs4MtiRb7OB4s8ohMdmtdoeJZZcYqCBef5Re3Tna0.NPArzCTG2k-PRCrsQnp4nMNUQIf22D7auHI_l__K638&dib_tag=se&keywords=pH-m%C3%A8tre+d%E2%80%99entr%C3%A9e+de+gamme&qid=1784205585&sprefix=ph-m%C3%A8tre+d+entr%C3%A9e+de+gamme%2Caps%2C311&sr=8-8&linkCode=ll2&tag=maxscience06-21&linkId=37cef6c6a0cf1c07fd3e31fb6ccd961a&ref_=as_li_ss_tl',
  },
  'kit-tampons-ph-uiuzmar': {
    nom: 'Kit UIUZMAR de tampons et stockage pour pH-mètre',
    descriptif: 'Solutions pH 4, 7 et 10 avec solution de stockage pour la sonde',
    reassurance: 'Lien affilié Amazon',
    asin: 'B0DFTQJGZZ',
    url: 'https://www.amazon.fr/UIUZMAR-Solution-D%C3%A9talonnage-Stockage-Tampon/dp/B0DFTQJGZZ?__mk_fr_FR=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=13HLYZ8GJQ1Z3&dib=eyJ2IjoiMSJ9.WyZIRX3DaQ0GX0LzClE_F0Hj9BU0XysXK6BM3FmG0DFiYxxWGvImT4jwwULKUVHAHnQyOelqOoT40StvYa7nst27zQiLVM9q3kH8LUasKQYvxQeupWGRS8eMtEfHNsjgyIYbhLh31HeY9HOEvpXtG0JaE8e920EfeuoGJeG1p2SrXO9EuqUmnlrQTTC4pUrmWQmaEHbndRsNssamBAVmn53iF2NtYtV_YKIhazhXIaRxwOfgS6m52i5Yx7eROD4mUkoTi8QW-pzjlb68l7M4ofQzYdit25tGkl_hk2QpJyk.Wx0zseGH7Aox8DobjG6lkiLV9VnVB7iGLhX8B4Kzn_A&dib_tag=se&keywords=kit%2Bde%2Bsolutions%2Btampon%2Bph%2B4.com%2B7%2Bet%2B10&qid=1784205781&sprefix=kit%2Bde%2Bsolutions%2Btampons%2Bph%2B4%2C%2B7%2Bet%2B10%2Caps%2C156&sr=8-3&th=1&linkCode=ll2&tag=maxscience06-21&linkId=1fe9238fa9c9481d91b809bf3892ce71&ref_=as_li_ss_tl',
  },

  // — Comparatif protections chimiques —
  'lunettes-genyed-en166': {
    nom: 'Lunettes de sécurité GENYED certifiées EN 166',
    descriptif: 'Légères et enveloppantes pour les personnes sans lunettes de vue',
    reassurance: 'Lien affilié Amazon',
    asin: 'B0BTYWKZHK',
    url: 'https://www.amazon.fr/Protection-Certifi%C3%A9es-Anti-rayures-Ajustement-Enveloppantes/dp/B0BTYWKZHK?__mk_fr_FR=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=3RUET4QDTMR2D&dib=eyJ2IjoiMSJ9.ShCp6YaJEbUo53mrs1pmDf0EIYk2QsIB3FRJ9iHvT5KaPq1RcCzs-JdlqTOE8mpwvuSJRdQF2yYf0uIyu-pjsR9C8F8mW-obrXBU1d20Iot4RbcP_shH6BB2sL3an4XZjY7RijIUO2YaaIQaqkBTZqk-Z6QEMrtk_kxdU8vObZhpvI0lzcfdouiAVSLq4uSm3U81v2uFw0CU3zGFTigJ1TGhoZPXamCt4Az-CU2G0l9CApyKmh-0k4Dml1baSekyKbZED4qZJGXsBQKWSp27rmLByE8opOE-xcmHkedWItY.i9keXE4-oi0eJzxdLtI_JHFViJDZPqe3mMPDFYM-Q3w&dib_tag=se&keywords=lunette+EN166%2C&qid=1784205851&sprefix=lunette+en166%2C%2Caps%2C222&sr=8-1-spons&aref=oX1A5Kgchk&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY&psc=1&linkCode=ll2&tag=maxscience06-21&linkId=dd45cd1a16564d2daff28015ccc9471d&ref_=as_li_ss_tl',
  },
  'gants-lanon-en374': {
    nom: 'Gants chimiques LANON U100 certifiés EN ISO 374',
    descriptif: 'Le choix normé pour la soude et les manipulations chimiques régulières',
    reassurance: 'Lien affilié Amazon',
    asin: 'B07KQ7FNJJ',
    url: 'https://www.amazon.fr/LANON-Protection-U100-Industrial-Mechanical/dp/B07KQ7FNJJ?__mk_fr_FR=%C3%85M%C3%85%C5%BD%C3%95%C3%91&dib=eyJ2IjoiMSJ9.Fen6Lv6liFBjFkKh3jU9UY8Jke_M_NYKqi6GX5OIi7PtaiiPmi9Sc_fm8pod7qdJUIGTyMRYhiEGfwxZ_u9McggeHaz_1xdq658i5WnVL5EuQ9v6jHHVY1yWS76rwPajJOKULI2zz3FRCO99aVu4c4PM1WwyIvIFFGwhOOk4PNB2HwaQLLRr4tdR74VgjJbbCE6eW9hxgemHSv7QAEL0w-Ns-VBDZv5m1IG2RYHuKuiklDj4AvFz7LOctTTLLBQ4jcIyCtCNPxR00xqzGhs7NKtXAzY3OmA0nWLatUtOhLk.xYGXLwRLUFTEdShZ0brZ_k-sAF6HKMIVbbNE7CUELK8&dib_tag=se&keywords=gant%2Bchimique%2BEN%2BISO%2B374&qid=1784205950&sr=8-5-spons&aref=UH45Sga1SH&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY&th=1&linkCode=ll2&tag=maxscience06-21&linkId=e0f1daed10d695baf94928b257c3ccfe&ref_=as_li_ss_tl',
  },
  'visiere-oregon': {
    nom: 'Visière transparente Oregon en polycarbonate',
    descriptif: 'Protection complémentaire du visage contre les projections',
    reassurance: 'Lien affilié Amazon',
    asin: 'B001P15NGO',
    url: 'https://www.amazon.fr/Oregon-Visi%C3%A8re-Polycarbonate-Q515063-combinaison/dp/B001P15NGO?__mk_fr_FR=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=PFNXESHB6ZO5&dib=eyJ2IjoiMSJ9.fqK2-yat1yvuhafFR1rlA1jPCykmsC0RWBUPm8FDgpZTpNVP3Mta5dXlUmkpr1Pflt_0Enjv8Nefpf35bYXhynItX2O255Ra5QoawgBzEj9SmfQqULzaFyJ9mbCoeRyB1Ir7H__unNUePHBHY6BiW8QEHL8kHtxAquuAEJDyldH9M1DG7AUPFQonvZTfkySsRiVYnhpROFQzzifKEFqcBXMtq3zoNGWl_BNOJTPERMG_qGEzXH9qG3cyhCcGy8J1RNsbV1oLABVgo8enMs_WYSEfF6ZP2neeQKDbdtMg3fI.m1xf0UJKKnQ7hoTndDLcxZQsogL5dHe3d1_uVGdJfbg&dib_tag=se&keywords=Visi%C3%A8re%2Bde%2Bprotection%2Bfaciale&qid=1784206008&sprefix=visi%C3%A8re%2Bde%2Bprotection%2Bfaciale%2Caps%2C185&sr=8-6&th=1&linkCode=ll2&tag=maxscience06-21&linkId=bc9812ec588563bc460d012578ce0824&ref_=as_li_ss_tl',
  },
  'tablier-tonling': {
    nom: 'Tablier imperméable long TonLing',
    descriptif: 'Pour protéger le torse et les vêtements lors des manipulations salissantes',
    reassurance: 'Lien affilié Amazon',
    asin: 'B0894MJLL6',
    url: 'https://www.amazon.fr/caoutchouc-imperm%C3%A9able-r%C3%A9sistant-chimiques-vaisselle/dp/B0894MJLL6?__mk_fr_FR=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=2D7QZ6C5FEHVL&dib=eyJ2IjoiMSJ9.RcEPKxEe6PjEt7-ZmCNjE-pm2fxYs24oC-SwuvcIpUs-utYFcvE0dVeoX6Xg9AhSh50lc3fvLU9xPjOfAVF-V3rneL7dWSdIa8aJfgH2JJr5JORP9oufyVvkDz9fNbmLi5HdikXhCTulJC-GbKpQr6oylR_LlNhkxkHyBkv6Djx3rmCjFnT68pfOj3VYFTsnttoKTxhx4HnLaIWRW157Z49zzw4CtyxhqKVpIbebai1G2eS-sBMYrROPNOpLocNOqPogcwWN4EcHgR4oL2LX46ffI7NQ60QOwVIBcdZ7zto.Ds0-b2DuYdaxm_vxS9a8VQj-9Ga0gCiXZrAmdh5dNho&dib_tag=se&keywords=Tablier+chimique+ou+imperm%C3%A9able&qid=1784206069&sprefix=tablier+chimique+ou+imperm%C3%A9able%2Caps%2C195&sr=8-8&linkCode=ll2&tag=maxscience06-21&linkId=327f881381221d104f839ad62bcc2fc0&ref_=as_li_ss_tl',
  },

  // — Comparatif bocaux de lacto-fermentation —
  'bocal-le-parfait-075l': {
    nom: 'Le Parfait Super 0,75 L — lot de 6',
    descriptif: 'Le choix économique et durable pour démarrer avec des bocaux mécaniques classiques',
    reassurance: 'Lien affilié Amazon',
    asin: 'B0001IW56S',
    url: 'https://www.amazon.fr/Parfait-Bocaux-Supercapacite-Diametre-85cm-6585002/dp/B0001IW56S?crid=1LEY72K97V41U&dib=eyJ2IjoiMSJ9.Y4Lf2hr0oNvx9hZgPvgI1_4f6lww6hfPk8kFezwSpIa8R1kFeBDskvTV_7vp1qQgjjTX48Lc_1NZ6Z2UG653UW46MgryIgeDk1lcIUav2h5wyOvDR0zNYJ6nhHaMPVEFdHQEliVoLheRkw7yZGoGbHWsm3q3An4ExKzpx9eB7P8SWsL8GqVSmYXhTgI1MWqwCxiBqs_Sk6x-y3E52U2OS5WHU3WCUe4j389nRqy66BESdzv-QG3t16QnOx86c1GsI5QJ9DlOjRkD_xlCsB8-OmZvh582UgdUJemUUCsGIwQ.DdoK-uc-j38ifP8rWpaTjX7f4T3TToo6TPEP5aBAkFc&dib_tag=se&keywords=bocal%2Ble%2Bparfait%2B1l&qid=1784292916&sprefix=bocal%2Ble%2Bparf%2Caps%2C209&sr=8-5&th=1&linkCode=ll2&tag=maxscience06-21&linkId=f3f670510f260931dcc8cc39b801b61f&ref_=as_li_ss_tl',
  },
  'bocaux-ushop-14l': {
    nom: 'USHOP — 2 bocaux de fermentation de 1,4 L',
    descriptif: 'Kit compact avec valves unidirectionnelles, poids en verre et pince',
    reassurance: 'Lien affilié Amazon',
    asin: 'B0DTPD13TN',
    url: 'https://www.amazon.fr/USHOP-Kit-de-Fermentation-compos%C3%A9/dp/B0DTPD13TN?__mk_fr_FR=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=2X4KFRUYP24N0&dib=eyJ2IjoiMSJ9.hlT0UOjR2cWKnn7q_p2pUXZh5-ClJkC7eAoC6-WpwORZhiVX2mIOx6JpM3-0BoNJRcMWKN9r44ejBfeyhclrcQZTZeF6XnhWTTBG73K1QAIc3K3fhqJaLdJkvYU4Av9lg2xRQOkrV6-DpfFu9XpH1I7TW1cjcydRkwjJIPRBmCMEB5-lDT723LR-L8AZNu-3pD-cPzaGnhwpp1cJ4jzOv7vzWq0M7oiHBU2VDZAkRffSsocTA32oZQBNeSyorYuYEaY3WkC4z_vmkBjTHhMyXjH8RcoeQQtfsb6ndfYulX8.-QtPUxqGFGeZmNknQiGvVzFxDCETgsCdFJl_xzhMyvQ&dib_tag=se&keywords=bocaux+fermentation+avec+valve+et+poids+inclus&qid=1784293117&sprefix=bocaux+fermentati+avec+valve+et+poids+inclus%2Caps%2C310&sr=8-44&linkCode=ll2&tag=maxscience06-21&linkId=6869b22b8dbbcd7a6f052b69af61cf08&ref_=as_li_ss_tl',
  },
  'bocaux-heftman-2l': {
    nom: 'HEFTMAN — 2 bocaux de fermentation de 2 L',
    descriptif: 'Grand kit avec couvercles à sas, ouverture large et poids en verre',
    reassurance: 'Lien affilié Amazon',
    asin: 'B0DJTBY69F',
    url: 'https://www.amazon.fr/HEFTMAN-Lot-bocaux-fermentation-avec/dp/B0DJTBY69F?__mk_fr_FR=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=17DGGC1EE7OGQ&dib=eyJ2IjoiMSJ9.SrQM-IEe1u7lc9VSlw3Hen6yg4C1pYKiwyYvILfAFkNDCLzxJtgRy5qi0LNoUf4fC7aMsqgulZfz8yELI4aQ_j8V9VOXb2OxpUkfxrTAZVg_eKlsSrFl4x7m-pCK_SjY81URAVAwg-RbMGqfE9MfTWQyM9dHGxGqZvk5fELOnYciqn8jyiNuQQA2aRppdJ2SXIx_XN83nJkSSeoBiw5CLmYVO1m7CXW6BdBFh9-LgtCR_7R84anMP9pNKG9nLCUyIhwDs1i7Hjg7PsD1Zga526LkdOR_o-Ujhq6ROGtPUFA.Rz1Sj_T-hPBEBl4I_n512v5CtWJiCq9jmlNg9ggZlhk&dib_tag=se&keywords=kit+de+2+%C3%A0+4+bocaux+avec+valve+et+poids+inclus&qid=1784292970&sprefix=kit+de+2+%C3%A0+4+bocaux+avec+valves+et+poids+inclus%2Caps%2C239&sr=8-4&linkCode=ll2&tag=maxscience06-21&linkId=a80d93a94481f66d0733835d3c27f92c&ref_=as_li_ss_tl',
  },

  // — Fermentation / Conservation —
  'kit-levain': {
    nom: 'Kit de démarrage levain Praknu',
    descriptif: 'Tout le nécessaire pour lancer son levain',
    reassurance: 'Expédié par Amazon',
    asin: 'B0FBX1C13Z',
    url: 'https://www.amazon.fr/Praknu-Kit-d%C3%A9marrage-Complet-d%C3%A9butants/dp/B0FBX1C13Z?linkCode=ll2&tag=maxscience06-21&linkId=0617d432b0592b417f012fe54efd8eeb&ref_=as_li_ss_tl',
  },
  'bocal-fermentation': {
    nom: 'Bocal de fermentation Diesisa 1 L',
    descriptif: 'Verre borosilicaté avec valve d\'aération',
    reassurance: 'Expédié par Amazon',
    asin: 'B0H158V3C4',
    url: 'https://www.amazon.fr/Diesisa-Borosilicat%C3%A9-Bocal-Fermentation-A%C3%A9rations/dp/B0H158V3C4?linkCode=ll2&tag=maxscience06-21&linkId=1e8f018d1187e889a0ce712844a8104c&ref_=as_li_ss_tl',
  },
  'poids-fermentation': {
    nom: 'Poids de fermentation Okllen (verre)',
    descriptif: 'Pour maintenir les légumes sous la saumure',
    reassurance: 'Expédié par Amazon',
    asin: 'B0BLTKGTPH',
    url: 'https://www.amazon.fr/Okllen-fermentation-ouverture-ramassage-lave-vaisselle/dp/B0BLTKGTPH?linkCode=ll2&tag=maxscience06-21&linkId=00ed55f78e9da4cb3823fc9f6d9e08d7&ref_=as_li_ss_tl',
  },
};

// Rendu d'une fiche produit complète (bloc CTA)
export function renderAffiliationBlock(key) {
  const a = affiliations[key];
  if (!a) return `<!-- affiliation inconnue: ${key} -->`;
  return `<div class="cta-block">
  <div class="cta-text"><strong>${a.nom}</strong><span>${a.descriptif}</span></div>
  <div class="cta-action">
    <a class="cta-button" href="${a.url}" target="_blank" rel="nofollow sponsored noopener">Voir le prix →</a>
    <span class="cta-reassurance">${a.reassurance}</span>
  </div>
</div>`;
}

// Rendu d'un lien inline simple
export function renderAffiliationInline(key) {
  const a = affiliations[key];
  if (!a) return `<!-- affiliation inconnue: ${key} -->`;
  return `<a href="${a.url}" target="_blank" rel="nofollow sponsored noopener">${a.nom}</a>`;
}
