/* ============================================================
   VELUNOO — script.js
   Languages: de · ch-de · en · fr · it
   ============================================================ */

/* ================================================================
   TRANSLATIONS
   ================================================================ */
const translations = {

  /* ── ZÜRICH GERMAN ── */
  'zh-züri': {
    'nav.why':'Warum Velunoo','nav.game':'Spile','nav.reviews':'Bwertinge','nav.contact':'Kontakt','nav.cta':'Entdecke',
    'hero.badge':'500 glückliche Tier-Familien',
    'hero.title':'Gib dim Tier s\'<br /><span class="highlight">Bäschte Läbe</span>',
    'hero.sub':'Premium-Produkt mit Liebi für Hünd und Chätze. Fröid, Gmüetlichkeit und Liebi — für jeds pelzigs Familiemitglied.',
    'hero.cta1':'Meh entdecke','hero.cta2':'Mit em Max spile',
    'hero.stat1':'Glückliche Tier','hero.stat2':'Produkt','hero.stat3':'Ø Bwertung',
    'fc1.label':'Bstellig glieferet','fc1.value':'Grad itz','fc2.text':'"Mim Hund gfallt\'s mega!"','fc3.text':'500 Glückliche Tiere',
    'trust.1':'Premium Qualität','trust.2':'Gratis Versand ab CHF 50','trust.3':'30 Tag Rückgab','trust.4':'Mit Liebi gmacht',
    'features.tag':'Warum mir?','features.title':'De Velunoo-Unterschied','features.sub':'Mir gond über s\'Normalmaass use, um dim Tier es usserordentlichs Läbe z\'gä',
    'feat1.title':'Sorgfältig usegsuecht','feat1.text':'Jeds Produkt wird sorgfältig überprüeft und usegsuecht — für s\'Wohlbefinde, d\'Gsundheit und d\'Fröid vo dim Tier.',
    'feat2.title':'Schnälli Lieferig','feat2.text':'Versand am gliche Tag bi Bsteltige vor 14 Uhr. Dis Tier mues nöd lang warte.',
    'feat3.title':'Persönliche Beratig','feat3.text':'Hast du Fraage? Üses Team isch für dich do — per Chat oder E-Mail. Mir hälfe dir, s\'Beschte für dim Tier z\'finde.',
    'feat4.title':'Experte-Support','feat4.text':'Üses Team vo Tierexperte steit dir 7 Tag die Wuche zur Verfüegig, damit mer dir d\'beschte Entscheidiging ermögliche chönd.',
    'feat5.title':'Für Hünd und Chätze','feat5.text':'Sorgfältig usegsuecht für Hünd und Chätze. Jeds Produkt isch uf d\'Bedürfnis vo dim Begleiter abgschtimmt.',
    'feat6.title':'Vo 500 Tierbesitzern gliäbt','feat6.text':'Wärd Teil vo ener wachsende Gmeinschaft vo glückliche Tierhalter, wo Velunoo vertrauend.',
    'game.tag':'Spil mit üs','game.title':'Apportiere mit em Max','game.sub':'Züüg und wirf de Ball — de Max holt ne und bringt ne zruck!',
    'game.overlaySub':'Das isch de Max — er spilt mega gern!','game.start':'Spil starte','game.hint':'👆 Züüg zum Wärfe','game.throws':'Würf:','game.restart':'Nomol spile',
    'testi.tag':'Glückliche Kunde','testi.title':'Was Tiereltern säged','testi.sub':'Echti Gschichte vo echte Tierhalter',
    't1.text':'"Min Golden Retriever isch no nie so glücklich gsi. Velunoo versteit wirklich, was Tier bruuched — und de Kundidienst isch top!"',
    't1.name':'Sarah M.','t1.pet':'Golden-Retriever-Besitzerin',
    't2.text':'"Endscho e Marke, wo mim wählerische Siamkater gfallt! Schnälli Lieferig und es top Team."',
    't2.name':'James K.','t2.pet':'Siamchatze-Besitzer',
    't3.text':'"D\'Produkt sind eifach top. Alles chunnt pünktlich und min Hund freut sich jedes Mol riesig. Ich bi sehr zfride!"',
    't3.name':'Amelia R.','t3.pet':'Labrador-Besitzerin',
    't4.text':'"Wunderbare Produkt und es tolls Team. Mini Chätze sind glücklich und ich bi vollständig zfride mit Velunoo."',
    't4.name':'Priya D.','t4.pet':'Mehreri Chätze',
    'nl.title':'Blib uf em Laufende','nl.sub':'Krieg exklusivi Angebote, Tipps zur Tierhaltig und Nouikeite in dim Poschtfach.',
    'nl.placeholder':'E-Mail-Adress iigä','nl.btn':'Abonniere','nl.note':'Kei Spam, jederziit chündbar.',
    'footer.tagline':'Premium-Produkt mit Liebi für Hünd und Chätze. S\'bäschte Läbe für dini pelzige Familiemitglieder.',
    'footer.col1':'Entdecke','footer.col2':'Hilf','footer.col3':'Firma',
    'footer.faq':'FAQ','footer.shipping':'Versandinformatione','footer.returns':'Rückgab','footer.track':'Bstellig verfolgä','footer.contactUs':'Kontakt',
    'footer.about':'Über üs','footer.blog':'Blog','footer.privacy':'Dateschütz','footer.terms':'Nutzigsbedingige',
    'footer.copy':'© 2026 Velunoo. Alli Rächt vorbehalte. Mit Liebi für Tier gmacht.',
  },

  /* ── BERN GERMAN ── */
  'zh-bern': {
    'nav.why':'Warum Velunoo','nav.game':'Spile','nav.reviews':'Bewärtige','nav.contact':'Kontakt','nav.cta':'Entdecke',
    'hero.badge':'500 glückliche Tier-Familien',
    'hero.title':'Gib dim Tier s\'<br /><span class="highlight">Beschte Läbe</span>',
    'hero.sub':'Premium-Produkt mit Sorg für Hung und Chatze. Freud, Gmüetlichkeit und Liebi — für jedes pelzige Familiemitglied.',
    'hero.cta1':'Meh entdecke','hero.cta2':'Mit em Max spile',
    'hero.stat1':'Glückliche Tier','hero.stat2':'Produkt','hero.stat3':'Ø Bewärtig',
    'fc1.label':'Bstellig gliefere','fc1.value':'Grad jetzt','fc2.text':'"Mim Hung gfallt\'s super!"','fc3.text':'500 Glückliche Tiere',
    'trust.1':'Premium Qualität','trust.2':'Gratis Versand ab CHF 50','trust.3':'30 Tag Rückgab','trust.4':'Mit Liebi gmacht',
    'features.tag':'Warum mir?','features.title':'De Velunoo-Unterschied','features.sub':'Mir gönd über s\'Normalmaass use, um dim Tier es usserordentlichs Läbe z\'gä',
    'feat1.title':'Sorgfältig usegsuecht','feat1.text':'Jedes Produkt wird sorgfältig überprüeft und usegsuecht — für s\'Wohlbefinde, d\'Gsundheit und d\'Fröid vo dim Tier.',
    'feat2.title':'Schnälli Lieferig','feat2.text':'Versand am gliche Tag bi Bstellige vor 14 Uhr. Dis Tier mues nit lang warte.',
    'feat3.title':'Persönliche Beratig','feat3.text':'Hast du Fraage? Üses Team isch für dich do — per Chat oder E-Mail. Mir hälfe dir, s\'Beschte für dim Tier z\'finde.',
    'feat4.title':'Experte-Unterstützig','feat4.text':'Üses Team vo Tierexperte isch 7 Tag die Wuche für dich do, damit du d\'beschte Entscheide für dis Tier träffe chasch.',
    'feat5.title':'Für Hung und Chatze','feat5.text':'Sorgfältig usegsuecht für Hung und Chatze. Jedes Produkt isch uf d\'Bedürfnis vo dim Begleiter abgstimmt.',
    'feat6.title':'Vo 500 Tierbesitzern gliäbt','feat6.text':'Wärd Teil vo einer wachsende Gmeinschaft vo glückliche Tierhalter, wo Velunoo vertrauet.',
    'game.tag':'Spil mit üs','game.title':'Apportiere mit em Max','game.sub':'Züüg und wirf de Ball — de Max holt ihn und bringt ihn zruck!',
    'game.overlaySub':'Das isch de Max — ehr spilt dr am liebste!','game.start':'Spil starte','game.hint':'👆 Züüg zum Werfe','game.throws':'Würf:','game.restart':'Nomol spile',
    'testi.tag':'Glückliche Kunde','testi.title':'Was Tiereltern säge','testi.sub':'Echti Gschichte vo echte Tierhalter',
    't1.text':'"Min Golden Retriever isch no nie so glücklich gsi. Velunoo versteit wirklich, was Tier bruuche — und de Kundidienst isch super!"',
    't1.name':'Sarah M.','t1.pet':'Golden-Retriever-Besitzerin',
    't2.text':'"Endscho e Marke, wo mim wählerische Siamkater gfallt! Schnälli Lieferig und es super hilfrichs Team."',
    't2.name':'James K.','t2.pet':'Siamchatze-Besitzer',
    't3.text':'"D\'Produkt sind eifach top. Alles chunnt pünktlich und mim Hung gfallt\'s mega. Ich bi sehr zfride!"',
    't3.name':'Amelia R.','t3.pet':'Labrador-Besitzerin',
    't4.text':'"Wunderbare Produkt und es tolls Team. Mini Chatze sind glücklich und ich bi vollständig zfride mit Velunoo."',
    't4.name':'Priya D.','t4.pet':'Mehreri Chatze',
    'nl.title':'Blib uf em Laufende','nl.sub':'Krieg exklusivi Angebote, Tipps zur Tierhaltig und Neuikete i dim Poschtfach.',
    'nl.placeholder':'E-Mail-Adresse iigä','nl.btn':'Abonniere','nl.note':'Kei Spam, jederziit chündbar.',
    'footer.tagline':'Premium-Produkt mit Sorg für Hung und Chatze. S\'beschte Läbe für dini pelzige Familiemitglieder.',
    'footer.col1':'Entdecke','footer.col2':'Hilf','footer.col3':'Firma',
    'footer.faq':'FAQ','footer.shipping':'Versandinformatione','footer.returns':'Rückgab','footer.track':'Bstellig verfolgä','footer.contactUs':'Kontakt',
    'footer.about':'Über üs','footer.blog':'Blog','footer.privacy':'Dateschutz','footer.terms':'Nutzigsbedingige',
    'footer.copy':'© 2026 Velunoo. Alli Rächt vorbehalte. Mit Liebi für Tier gmacht.',
  },

  /* ── BASEL GERMAN ── */
  'zh-basel': {
    'nav.why':'Warum Velunoo','nav.game':'Spiele','nav.reviews':'Rezensione','nav.contact':'Kontakt','nav.cta':'Entdecke',
    'hero.badge':'500 glückliche Tier-Familien',
    'hero.title':'Gib dim Dier s\'<br /><span class="highlight">Beschte Läbe</span>',
    'hero.sub':'Premium-Produkt mit Sorg für Hund und Chatz. Freud, Gmüetlichkeit und Liebi — für jede pelzige Familienangehörige.',
    'hero.cta1':'Meh entdecke','hero.cta2':'Mit em Max spiele',
    'hero.stat1':'Glückliche Dier','hero.stat2':'Produkt','hero.stat3':'Ø Bewärtig',
    'fc1.label':'Bstellig glieferet','fc1.value':'Grad jetzt','fc2.text':'"Mim Hund gfallt\'s sehr guet!"','fc3.text':'500 Glückliche Tiere',
    'trust.1':'Premium Qualität','trust.2':'Gratis Versand ab CHF 50','trust.3':'30 Tag Rückgab','trust.4':'Mit Liebi gmacht',
    'features.tag':'Warum mir?','features.title':'De Velunoo-Unterschied','features.sub':'Mir gönt über s\'Normalmaass usi, um dim Dier es usserordentlichs Läbe z\'gä',
    'feat1.title':'Sorgfältig usegsuecht','feat1.text':'Jedes Produkt wird sorgfältig überprüeft und usegsuecht — für s\'Wohlbefinde, d\'Gsundheit und d\'Fröid vo dim Dier.',
    'feat2.title':'Schnälli Lieferig','feat2.text':'Versand am gliche Tag bi Bstellige vor 14 Uhr. Dis Dier mues nit lang warte.',
    'feat3.title':'Persönliche Beratig','feat3.text':'Hast du Fraage? Üses Team isch für dich do — per Chat oder E-Mail. Mir hälfe dir, s\'Beschte für dim Dier z\'finde.',
    'feat4.title':'Experte-Support','feat4.text':'Üses Team vo Dier-Experte isch 7 Tag die Wuche für dich do, damit du d\'beschte Entscheide trefffe chasch.',
    'feat5.title':'Für Hund und Chatz','feat5.text':'Sorgfältig usegsuecht für Hund und Chatz. Jedes Produkt isch uf d\'Bedürfnis vo dim Begleiter abgstimmt.',
    'feat6.title':'Vo 500 Tierbesitzern gliäbt','feat6.text':'Wärd Teil vo ere wachsende Gmeinschaft vo glückliche Tierhaltere, wo Velunoo vertrauet.',
    'game.tag':'Spiel mit üs','game.title':'Apportiere mit em Max','game.sub':'Züüg und wirf de Ball — de Max holt ihn und bringt ihn zruck!',
    'game.overlaySub':'Das isch de Max — er spielt sehr gern!','game.start':'Spiel starte','game.hint':'👆 Züüg zum Werfe','game.throws':'Würf:','game.restart':'Nomol spiele',
    'testi.tag':'Glückliche Kunde','testi.title':'Was Dier-Elter säge','testi.sub':'Echti Gschichte vo echte Tierhaltere',
    't1.text':'"Min Golden Retriever isch no nie so glücklich gsi. Velunoo versteit wirklich, was Dier bruuche — und de Kundidienst isch wunderbar!"',
    't1.name':'Sarah M.','t1.pet':'Golden-Retriever-Besitzerin',
    't2.text':'"Endlich e Marke, wo mim wählerische Siamkater gfallt! Schnälli Lieferig und es top Team."',
    't2.name':'James K.','t2.pet':'Siamchatz-Besitzer',
    't3.text':'"S\'Abo isch e echte Game-Changer. Alles chunnt pünktlich jede Monet. I und min Hund sind beidi sehr glücklich!"',
    't3.name':'Amelia R.','t3.pet':'Labrador-Besitzerin',
    't4.text':'"Wunderbare Produkt und es tolls Team. Mini Chätze sind glücklich und i bi vollständig zfride mit Velunoo."',
    't4.name':'Priya D.','t4.pet':'Mehreri Chätze',
    'nl.title':'Blib uf em Laufende','nl.sub':'Krieg exklusivi Angebote, Tipps zur Dierhaltung und Neuikeite in dim Poschtfach.',
    'nl.placeholder':'E-Mail-Adresse iigä','nl.btn':'Abonniere','nl.note':'Kei Spam, jederziit chündbar.',
    'footer.tagline':'Premium-Produkt mit Sorg für Hund und Chatz. S\'beschte Läbe für dini pelzige Familiemitglieder.',
    'footer.col1':'Entdecke','footer.col2':'Hilf','footer.col3':'Firma',
    'footer.faq':'FAQ','footer.shipping':'Versandinformatione','footer.returns':'Rückgab','footer.track':'Bstellig verfolgä','footer.contactUs':'Kontakt',
    'footer.about':'Über üs','footer.blog':'Blog','footer.privacy':'Dateschutz','footer.terms':'Nutzigsbedingige',
    'footer.copy':'© 2026 Velunoo. Alli Rächt vorbehalte. Mit Liebi für Dier gmacht.',
  },

  /* ── GERMAN ── */
  de: {
    'nav.why':'Warum Velunoo','nav.game':'Spielen','nav.reviews':'Bewertungen','nav.contact':'Kontakt','nav.cta':'Entdecken',
    'hero.badge':'500 glückliche Tier-Familien',
    'hero.title':'Schenke deinem Tier das<br /><span class="highlight">Beste Leben</span>',
    'hero.sub':'Premium-Produkte mit Sorgfalt für Hunde und Katzen. Glück, Komfort und Freude — für jedes Familienmitglied mit Fell.',
    'hero.cta1':'Mehr entdecken','hero.cta2':'Mit Max spielen',
    'hero.stat1':'Glückliche Tiere','hero.stat2':'Produkte','hero.stat3':'Ø Bewertung',
    'fc1.label':'Bestellung geliefert','fc1.value':'Gerade eben','fc2.text':'"Mein Hund liebt es!"','fc3.text':'50K+ Glückliche Tiere',
    'trust.1':'Premium Qualität','trust.2':'Kostenloser Versand ab CHF 50','trust.3':'30 Tage Rückgabe','trust.4':'Mit Liebe gemacht',
    'features.tag':'Warum wir?','features.title':'Der Velunoo-Unterschied','features.sub':'Wir gehen über das Gewöhnliche hinaus, um deinem Tier ein außergewöhnliches Leben zu geben',
    'feat1.title':'Sorgfältig ausgewählt','feat1.text':'Jedes Produkt wird sorgfältig geprüft und ausgewählt — für das Wohlbefinden, die Gesundheit und die Freude deines Tieres.',
    'feat2.title':'Schnelle Lieferung','feat2.text':'Versand am gleichen Tag bei Bestellungen vor 14 Uhr. Dein Tier muss nicht lange warten.',
    'feat3.title':'Persönliche Beratung','feat3.text':'Hast du Fragen? Unser Team ist für dich da — per Chat oder E-Mail. Wir helfen dir, das Beste für dein Tier zu finden.',
    'feat4.title':'Experten-Support','feat4.text':'Unser Team aus Tierexperten steht dir 7 Tage die Woche zur Verfügung, um dir die besten Entscheidungen zu ermöglichen.',
    'feat5.title':'Für Hunde & Katzen','feat5.text':'Sorgfältig für Hunde und Katzen zusammengestellt. Jedes Produkt ist auf die Bedürfnisse deines Begleiters abgestimmt.',
    'feat6.title':'Von 500 Tierbesitzern geliebt','feat6.text':'Werde Teil einer wachsenden Gemeinschaft glücklicher Tierbesitzer, die Velunoo jeden Tag vertrauen.',
    'game.tag':'Spiel mit uns','game.title':'Apportieren mit Max','game.sub':'Ziehe & wirf den Ball — Max holt ihn und bringt ihn zurück!',
    'game.overlaySub':'Das ist Max — er spielt sehr gerne!','game.start':'Spiel starten','game.hint':'👆 Ziehen zum Werfen','game.throws':'Würfe:','game.restart':'Nochmal spielen',
    'testi.tag':'Glückliche Kunden','testi.title':'Was Tiereltern sagen','testi.sub':'Echte Geschichten von echten Tierbesitzern',
    't1.text':'"Mein Golden Retriever war noch nie so glücklich. Velunoo versteht wirklich, was Tiere brauchen — der Kundenservice ist hervorragend!"',
    't1.name':'Sarah M.','t1.pet':'Golden-Retriever-Besitzerin',
    't2.text':'"Endlich eine Marke, die meine wählerische Siamkatze liebt! Schnelle Lieferung und ein unglaublich hilfreiches Team."',
    't2.name':'James K.','t2.pet':'Siamkatzen-Besitzer',
    't3.text':'"Die Produkte sind einfach top. Alles kommt pünktlich an und mein Hund freut sich jedes Mal riesig. Ich bin sehr zufrieden!"',
    't3.name':'Amelia R.','t3.pet':'Labrador-Besitzerin',
    't4.text':'"Wunderbare Produkte und ein tolles Team. Meine Katzen sind glücklich und ich bin vollständig zufrieden mit Velunoo."',
    't4.name':'Priya D.','t4.pet':'Mehrere Katzen',
    'nl.title':'Bleib auf dem Laufenden','nl.sub':'Erhalte exklusive Angebote, Tipps zur Tierpflege und Neuheitenbenachrichtigungen.',
    'nl.placeholder':'E-Mail-Adresse eingeben','nl.btn':'Abonnieren','nl.note':'Kein Spam, jederzeit kündbar.',
    'footer.tagline':'Premium-Produkte mit Sorgfalt für Hunde und Katzen. Das beste Leben für deine pelzigen Familienmitglieder.',
    'footer.col1':'Entdecken','footer.col2':'Hilfe','footer.col3':'Unternehmen',
    'footer.faq':'FAQ','footer.shipping':'Versandinfos','footer.returns':'Rückgabe','footer.track':'Bestellung verfolgen','footer.contactUs':'Kontakt',
    'footer.about':'Über uns','footer.blog':'Blog','footer.privacy':'Datenschutz','footer.terms':'Nutzungsbedingungen',
    'footer.copy':'© 2026 Velunoo. Alle Rechte vorbehalten. Mit Liebe für Tiere gemacht.',
  },

  /* ── ENGLISH ── */
  en: {
    'nav.why':'Why Velunoo','nav.game':'Play','nav.reviews':'Reviews','nav.contact':'Contact','nav.cta':'Discover',
    'hero.badge':'500 happy pet families',
    'hero.title':'Give Your Pet the<br /><span class="highlight">Best Life</span> Possible',
    'hero.sub':'Premium products made with care for dogs and cats. Happiness, comfort, and joy — for every furry family member.',
    'hero.cta1':'Discover More','hero.cta2':'Play with Max',
    'hero.stat1':'Happy Pets','hero.stat2':'Products','hero.stat3':'Avg. Rating',
    'fc1.label':'Order Delivered','fc1.value':'Just now','fc2.text':'"My dog loves it!"','fc3.text':'500 Happy Pets',
    'trust.1':'Premium Quality','trust.2':'Free Shipping Over CHF 50','trust.3':'30-Day Returns','trust.4':'Made with Love',
    'features.tag':'Why Choose Us','features.title':'The Velunoo Difference','features.sub':'We go beyond the ordinary to give your pet an extraordinary life',
    'feat1.title':'Carefully Selected','feat1.text':'Every product is carefully chosen for your pet\'s wellbeing, health and happiness — with love and attention to detail.',
    'feat2.title':'Fast Delivery','feat2.text':'Same-day dispatch on orders placed before 2 pm. Your pet won\'t have to wait long for their new favourites.',
    'feat3.title':'Personal Support','feat3.text':'Have questions? Our team is here for you — via chat or email. We help you find the best products for your pet.',
    'feat4.title':'Expert Pet Support','feat4.text':'Our team of pet care experts is available 7 days a week to help you make the best choices for your pet.',
    'feat5.title':'For Dogs & Cats','feat5.text':'Carefully curated for both dogs and cats. Every product is designed with your specific companion\'s needs in mind.',
    'feat6.title':'Loved by 500 Pet Owners','feat6.text':'Join a growing community of happy pet owners who trust Velunoo to bring joy to their companions every day.',
    'game.tag':'Play with Us','game.title':'Play Fetch with Max','game.sub':'Drag & throw the ball — Max fetches it and brings it back!',
    'game.overlaySub':'Meet Max — he loves to play!','game.start':'Start Game','game.hint':'👆 Drag to aim & throw','game.throws':'Throws:','game.restart':'Play Again',
    'testi.tag':'Happy Customers','testi.title':'What Pet Parents Say','testi.sub':'Real stories from real pet owners',
    't1.text':'"My golden retriever has never been happier. Velunoo truly understands what pets need — and their customer support is outstanding!"',
    't1.name':'Sarah M.','t1.pet':'Golden Retriever owner',
    't2.text':'"Finally a brand my picky Siamese cat approves of! Fast delivery and an incredibly helpful team. Highly recommended."',
    't2.name':'James K.','t2.pet':'Siamese cat owner',
    't3.text':'"The products are simply amazing. Everything arrives on time and my dog gets so excited every time. Very happy!"',
    't3.name':'Amelia R.','t3.pet':'Labrador owner',
    't4.text':'"Wonderful products and a great team. My cats are happy and I couldn\'t be more satisfied with Velunoo."',
    't4.name':'Priya D.','t4.pet':'Multi-cat household',
    'nl.title':'Stay in the Loop','nl.sub':'Get exclusive deals, pet care tips, and new product alerts delivered to your inbox.',
    'nl.placeholder':'Enter your email address','nl.btn':'Subscribe','nl.note':'No spam, unsubscribe at any time.',
    'footer.tagline':'Premium products crafted with care for dogs and cats. Giving your furry family members the best life possible.',
    'footer.col1':'Explore','footer.col2':'Help','footer.col3':'Company',
    'footer.faq':'FAQ','footer.shipping':'Shipping Info','footer.returns':'Returns','footer.track':'Track Order','footer.contactUs':'Contact Us',
    'footer.about':'About Us','footer.blog':'Blog','footer.privacy':'Privacy Policy','footer.terms':'Terms of Service',
    'footer.copy':'© 2026 Velunoo. All rights reserved. Made with love for pets.',
  },

  /* ── DUTCH ── */
  nl: {
    'nav.why':'Waarom Velunoo','nav.game':'Spelen','nav.reviews':'Beoordelingen','nav.contact':'Contact','nav.cta':'Ontdekken',
    'hero.badge':'500 gelukkige dierenfamilies',
    'hero.title':'Geef je huisdier het<br /><span class="highlight">Beste Leven</span> Mogelijk',
    'hero.sub':'Premium producten gemaakt met zorg voor honden en katten. Geluk, comfort en vreugde — voor elk bont familielid.',
    'hero.cta1':'Ontdek meer','hero.cta2':'Speel met Max',
    'hero.stat1':'Blije huisdieren','hero.stat2':'Producten','hero.stat3':'Gem. beoordeling',
    'fc1.label':'Bestelling geleverd','fc1.value':'Zojuist','fc2.text':'"Mijn hond is er dol op!"','fc3.text':'500 Blije huisdieren',
    'trust.1':'Premium kwaliteit','trust.2':'Gratis verzending vanaf CHF 50','trust.3':'30 dagen retour','trust.4':'Gemaakt met liefde',
    'features.tag':'Waarom wij?','features.title':'Het Velunoo-verschil','features.sub':'We gaan verder dan het gewone om jouw huisdier een buitengewoon leven te geven',
    'feat1.title':'Zorgvuldig geselecteerd','feat1.text':'Elk product wordt zorgvuldig geselecteerd voor het welzijn, de gezondheid en het geluk van je huisdier.',
    'feat2.title':'Snelle levering','feat2.text':'Dezelfde dag verzonden bij bestellingen voor 14:00 uur. Je huisdier hoeft niet lang te wachten.',
    'feat3.title':'Persoonlijke ondersteuning','feat3.text':'Heb je vragen? Ons team staat voor je klaar — via chat of e-mail. We helpen je het beste voor je huisdier te vinden.',
    'feat4.title':'Expert huisdierondersteuning','feat4.text':'Ons team van huisdierexperts is 7 dagen per week beschikbaar om je te helpen de beste keuzes te maken.',
    'feat5.title':'Voor honden en katten','feat5.text':'Zorgvuldig samengesteld voor zowel honden als katten. Elk product is ontworpen met de behoeften van jouw metgezel in gedachten.',
    'feat6.title':'Geliefd door 500 huisdiereigenaren','feat6.text':'Word lid van een groeiende gemeenschap van gelukkige huisdiereigenaren die Velunoo dagelijks vertrouwen.',
    'game.tag':'Speel met ons','game.title':'Apporteren met Max','game.sub':'Sleep en gooi de bal — Max haalt hem op en brengt hem terug!',
    'game.overlaySub':'Dit is Max — hij speelt heel graag!','game.start':'Start spel','game.hint':'👆 Sleep om te gooien','game.throws':'Worpen:','game.restart':'Opnieuw spelen',
    'testi.tag':'Tevreden klanten','testi.title':'Wat huisdiereigenaren zeggen','testi.sub':'Echte verhalen van echte huisdiereigenaren',
    't1.text':'"Mijn golden retriever is nooit zo gelukkig geweest. Velunoo begrijpt echt wat huisdieren nodig hebben — de klantenservice is uitstekend!"',
    't1.name':'Sarah M.','t1.pet':'Golden retriever eigenaar',
    't2.text':'"Eindelijk een merk dat mijn kieskeurige Siamees goedkeurt! Snelle levering en een ongelooflijk behulpzaam team."',
    't2.name':'James K.','t2.pet':'Siamees kat eigenaar',
    't3.text':'"De producten zijn gewoon geweldig. Alles komt op tijd en mijn hond is elke keer zo blij. Heel tevreden!"',
    't3.name':'Amelia R.','t3.pet':'Labrador eigenaar',
    't4.text':'"Prachtige producten en een geweldig team. Mijn katten zijn gelukkig en ik ben volledig tevreden met Velunoo."',
    't4.name':'Priya D.','t4.pet':'Meerdere katten',
    'nl.title':'Blijf op de hoogte','nl.sub':'Ontvang exclusieve deals, huisdierenverzorgingstips en nieuwe productalerts in je inbox.',
    'nl.placeholder':'Vul je e-mailadres in','nl.btn':'Abonneren','nl.note':'Geen spam, op elk moment uitschrijven.',
    'footer.tagline':'Premium producten gemaakt met zorg voor honden en katten. Het beste leven voor je bonte familieleden.',
    'footer.col1':'Ontdekken','footer.col2':'Hulp','footer.col3':'Bedrijf',
    'footer.faq':'FAQ','footer.shipping':'Verzendinfo','footer.returns':'Retouren','footer.track':'Bestelling volgen','footer.contactUs':'Neem contact op',
    'footer.about':'Over ons','footer.blog':'Blog','footer.privacy':'Privacybeleid','footer.terms':'Gebruiksvoorwaarden',
    'footer.copy':'© 2026 Velunoo. Alle rechten voorbehouden. Gemaakt met liefde voor huisdieren.',
  },

  /* ── FRENCH ── */
  fr: {
    'nav.why':'Pourquoi Velunoo','nav.game':'Jouer','nav.reviews':'Avis','nav.contact':'Contact','nav.cta':'Découvrir',
    'hero.badge':'500 familles d\'animaux heureuses',
    'hero.title':'Offrez à votre animal la<br /><span class="highlight">Meilleure Vie</span> Possible',
    'hero.sub':'Des produits premium conçus avec soin pour les chiens et les chats. Bonheur, confort et joie — pour chaque membre de la famille.',
    'hero.cta1':'Découvrir','hero.cta2':'Jouer avec Max',
    'hero.stat1':'Animaux heureux','hero.stat2':'Produits','hero.stat3':'Note moy.',
    'fc1.label':'Commande livrée','fc1.value':'À l\'instant','fc2.text':'« Mon chien adore ! »','fc3.text':'500 Animaux heureux',
    'trust.1':'Qualité premium','trust.2':'Livraison gratuite dès CHF 50','trust.3':'Retours sous 30 jours','trust.4':'Fait avec amour',
    'features.tag':'Pourquoi nous choisir','features.title':'La différence Velunoo','features.sub':'Nous allons au-delà de l\'ordinaire pour offrir une vie extraordinaire à votre animal',
    'feat1.title':'Sélectionné avec soin','feat1.text':'Chaque produit est soigneusement sélectionné pour le bien-être, la santé et le bonheur de votre animal.',
    'feat2.title':'Livraison rapide','feat2.text':'Expédition le jour même pour les commandes passées avant 14h. Votre animal n\'attendra pas longtemps.',
    'feat3.title':'Support personnalisé','feat3.text':'Des questions ? Notre équipe est là pour vous — par chat ou e-mail. Nous vous aidons à trouver le meilleur pour votre animal.',
    'feat4.title':'Support expert','feat4.text':'Notre équipe d\'experts en soins animaliers est disponible 7 jours sur 7 pour vous aider à faire les meilleurs choix.',
    'feat5.title':'Pour chiens & chats','feat5.text':'Soigneusement sélectionné pour les chiens et les chats. Chaque produit est conçu en fonction des besoins de votre compagnon.',
    'feat6.title':'Adoré par 500 propriétaires','feat6.text':'Rejoignez une communauté grandissante de propriétaires heureux qui font confiance à Velunoo chaque jour.',
    'game.tag':'Jouez avec nous','game.title':'Jouez à la balle avec Max','game.sub':'Faites glisser et lancez la balle — Max la rapporte !',
    'game.overlaySub':'Voici Max — il adore jouer !','game.start':'Démarrer le jeu','game.hint':'👆 Glissez pour lancer','game.throws':'Lancers :','game.restart':'Rejouer',
    'testi.tag':'Clients heureux','testi.title':'Ce que disent les parents d\'animaux','testi.sub':'Des histoires vraies de vrais propriétaires',
    't1.text':'« Mon golden retriever n\'a jamais été aussi heureux. Velunoo comprend vraiment les besoins des animaux — et le service client est exceptionnel ! »',
    't1.name':'Sarah M.','t1.pet':'Propriétaire de golden retriever',
    't2.text':'« Enfin un merk que mon siamois difficile approuve ! Livraison rapide et équipe incroyablement serviable. »',
    't2.name':'James K.','t2.pet':'Propriétaire de siamois',
    't3.text':'« Les produits sont tout simplement géniaux. Tout arrive à temps et mon chien est ravi. Je suis très satisfaite ! »',
    't3.name':'Amelia R.','t3.pet':'Propriétaire de labrador',
    't4.text':'« Produits merveilleux et équipe formidable. Mes chats sont heureux et je suis entièrement satisfaite de Velunoo. »',
    't4.name':'Priya D.','t4.pet':'Foyer multi-chats',
    'nl.title':'Restez informé','nl.sub':'Recevez des offres exclusives, des conseils et des alertes de nouveaux produits dans votre boîte mail.',
    'nl.placeholder':'Entrez votre adresse e-mail','nl.btn':'S\'abonner','nl.note':'Pas de spam, désinscription à tout moment.',
    'footer.tagline':'Produits premium conçus avec soin pour les chiens et les chats. La meilleure vie pour vos compagnons.',
    'footer.col1':'Explorer','footer.col2':'Aide','footer.col3':'Entreprise',
    'footer.faq':'FAQ','footer.shipping':'Infos livraison','footer.returns':'Retours','footer.track':'Suivre ma commande','footer.contactUs':'Nous contacter',
    'footer.about':'À propos','footer.blog':'Blog','footer.privacy':'Politique de confidentialité','footer.terms':'Conditions d\'utilisation',
    'footer.copy':'© 2026 Velunoo. Tous droits réservés. Fait avec amour pour les animaux.',
  },

  /* ── ITALIAN ── */
  it: {
    'nav.why':'Perché Velunoo','nav.game':'Giocare','nav.reviews':'Recensioni','nav.contact':'Contatto','nav.cta':'Scopri',
    'hero.badge':'500 famiglie di animali felici',
    'hero.title':'Dai al tuo animale la<br /><span class="highlight">Vita Migliore</span> Possibile',
    'hero.sub':'Prodotti premium realizzati con cura per cani e gatti. Felicità, comfort e gioia — per ogni membro peloso della famiglia.',
    'hero.cta1':'Scopri di più','hero.cta2':'Gioca con Max',
    'hero.stat1':'Animali felici','hero.stat2':'Prodotti','hero.stat3':'Val. media',
    'fc1.label':'Ordine consegnato','fc1.value':'Adesso','fc2.text':'"Al mio cane piace tantissimo!"','fc3.text':'500 Animali felici',
    'trust.1':'Qualità premium','trust.2':'Spedizione gratuita oltre CHF 50','trust.3':'Resi entro 30 giorni','trust.4':'Fatto con amore',
    'features.tag':'Perché sceglierci','features.title':'La differenza Velunoo','features.sub':'Andiamo oltre l\'ordinario per dare al tuo animale una vita straordinaria',
    'feat1.title':'Selezionato con cura','feat1.text':'Ogni prodotto è selezionato con cura per il benessere, la salute e la felicità del tuo animale.',
    'feat2.title':'Consegna rapida','feat2.text':'Spedizione in giornata per ordini effettuati entro le 14:00. Il tuo animale non dovrà aspettare a lungo.',
    'feat3.title':'Supporto personale','feat3.text':'Hai domande? Il nostro team è qui per te — via chat o e-mail. Ti aiutiamo a trovare il meglio per il tuo animale.',
    'feat4.title':'Supporto esperto','feat4.text':'Il nostro team di esperti è disponibile 7 giorni su 7 per aiutarti a fare le scelte migliori per il tuo animale.',
    'feat5.title':'Per cani e gatti','feat5.text':'Selezionato con cura per cani e gatti. Ogni prodotto è progettato tenendo conto delle esigenze del tuo compagno.',
    'feat6.title':'Amato da 500 proprietari','feat6.text':'Unisciti a una comunità crescente di proprietari felici che si fidano di Velunoo ogni giorno.',
    'game.tag':'Gioca con noi','game.title':'Gioca a palla con Max','game.sub':'Trascina e lancia la palla — Max la va a prendere e la riporta!',
    'game.overlaySub':'Ecco Max — ama giocare!','game.start':'Inizia il gioco','game.hint':'👆 Trascina per lanciare','game.throws':'Lanci:','game.restart':'Gioca ancora',
    'testi.tag':'Clienti felici','testi.title':'Cosa dicono i proprietari','testi.sub':'Storie vere di veri proprietari di animali',
    't1.text':'"Il mio golden retriever non è mai stato così felice. Velunoo capisce davvero di cosa hanno bisogno gli animali — e il servizio clienti è eccellente!"',
    't1.name':'Sarah M.','t1.pet':'Proprietaria di golden retriever',
    't2.text':'"Finalmente un brand approvato dal mio esigente siamese! Consegna rapida e un team incredibilmente disponibile."',
    't2.name':'James K.','t2.pet':'Proprietario di siamese',
    't3.text':'"I prodotti sono semplicemente fantastici. Tutto arriva puntuale e il mio cane è entusiasta ogni volta. Molto soddisfatta!"',
    't3.name':'Amelia R.','t3.pet':'Proprietaria di labrador',
    't4.text':'"Prodotti meravigliosi e un team fantastico. I miei gatti sono felici e sono pienamente soddisfatta di Velunoo."',
    't4.name':'Priya D.','t4.pet':'Casa con più gatti',
    'nl.title':'Rimani aggiornato','nl.sub':'Ricevi offerte esclusive, consigli sulla cura degli animali e avvisi sui nuovi prodotti nella tua casella di posta.',
    'nl.placeholder':'Inserisci il tuo indirizzo email','nl.btn':'Iscriviti','nl.note':'Nessuno spam, disdici in qualsiasi momento.',
    'footer.tagline':'Prodotti premium realizzati con cura per cani e gatti. La vita migliore per i tuoi compagni di vita.',
    'footer.col1':'Esplora','footer.col2':'Aiuto','footer.col3':'Azienda',
    'footer.faq':'FAQ','footer.shipping':'Info spedizioni','footer.returns':'Resi','footer.track':'Traccia ordine','footer.contactUs':'Contattaci',
    'footer.about':'Chi siamo','footer.blog':'Blog','footer.privacy':'Informativa sulla privacy','footer.terms':'Termini di servizio',
    'footer.copy':'© 2026 Velunoo. Tutti i diritti riservati. Fatto con amore per gli animali.',
  },
  /* ── SCHWEIZERDEUTSCH ── */
  'ch-de': {
    'nav.why':'Warum Velunoo','nav.game':'Spile','nav.reviews':'Bwertinge','nav.contact':'Kontakt','nav.cta':'Entdecke',
    'hero.badge':'500 glückliche Tier-Familien',
    'hero.title':'Gib dim Tier s\'<br /><span class="highlight">Bäschte Läbe</span>',
    'hero.sub':'Premium-Produkt mit Liebi für Hünd und Chätze. Fröid, Gmüetlichkeit und Liebi — für jeds pelzigs Familiemitglied.',
    'hero.cta1':'Meh entdecke','hero.cta2':'Mit em Max spile',
    'hero.stat1':'Glückliche Tier','hero.stat2':'Produkt','hero.stat3':'Ø Bwertung',
    'fc1.label':'Bstellig glieferet','fc1.value':'Grad itz','fc2.text':'"Mim Hund gfallt\'s mega!"','fc3.text':'500 Glückliche Tiere',
    'trust.1':'Premium Qualität','trust.2':'Gratis Versand ab CHF 50','trust.3':'Mit Liebi gmacht',
    'features.tag':'Warum mir?','features.title':'De Velunoo-Unterschied','features.sub':'Mir gond über s\'Normalmaass use, um dim Tier es usserordentlichs Läbe z\'gä',
    'feat1.title':'Sorgfältig usegsuecht','feat1.text':'Jeds Produkt wird sorgfältig überprüeft und usegsuecht — für s\'Wohlbefinde, d\'Gsundheit und d\'Fröid vo dim Tier.',
    'feat2.title':'Schnälli Lieferig','feat2.text':'Versand am gliche Tag bi Bsteltige vor 14 Uhr. Dis Tier mues nöd lang warte.',
    'feat3.title':'Persönliche Beratig','feat3.text':'Hast du Fraage? Üses Team isch für dich do — per Chat oder E-Mail. Mir hälfe dir, s\'Beschte für dim Tier z\'finde.',
    'feat4.title':'Experte-Support','feat4.text':'Üses Team vo Tierexperte steit dir 7 Tag die Wuche zur Verfüegig, damit mer dir d\'beschte Entscheidiging ermögliche chönd.',
    'feat5.title':'Für Hünd und Chätze','feat5.text':'Sorgfältig usegsuecht für Hünd und Chätze. Jeds Produkt isch uf d\'Bedürfnis vo dim Begleiter abgschtimmt.',
    'feat6.title':'Vo 500 Tierbesitzern gliäbt','feat6.text':'Wärd Teil vo ener wachsende Gmeinschaft vo glückliche Tierhalter, wo Velunoo vertrauend.',
    'game.tag':'Spil mit üs','game.title':'Apportiere mit em Max','game.sub':'Züüg und wirf de Ball — de Max holt ne und bringt ne zruck!',
    'game.overlaySub':'Das isch de Max — er spilt mega gern!','game.start':'Spil starte','game.hint':'👆 Züüg zum Wärfe','game.throws':'Würf:','game.restart':'Nomol spile',
    'testi.tag':'Glückliche Kunde','testi.title':'Was Tiereltern säged','testi.sub':'Echti Gschichte vo echte Tierhalter',
    't1.text':'"Min Golden Retriever isch no nie so glücklich gsi. Velunoo versteit wirklich, was Tier bruuched — und de Kundidienst isch top!"',
    't1.name':'Sarah M.','t1.pet':'Golden-Retriever-Besitzerin',
    't2.text':'"Endscho e Marke, wo mim wählerische Siamkater gfallt! Schnälli Lieferig und es top Team."',
    't2.name':'James K.','t2.pet':'Siamchatze-Besitzer',
    't3.text':'"D\'Produkt sind eifach top. Alles chunnt pünktlich und min Hund freut sich jedes Mol riesig. Ich bi sehr zfride!"',
    't3.name':'Amelia R.','t3.pet':'Labrador-Besitzerin',
    't4.text':'"Wunderbare Produkt und es tolls Team. Mini Chätze sind glücklich und ich bi vollständig zfride mit Velunoo."',
    't4.name':'Priya D.','t4.pet':'Mehreri Chätze',
    'nl.title':'Blib uf em Laufende','nl.sub':'Krieg exklusivi Angebote, Tipps zur Tierhaltig und Nouikeite in dim Poschtfach.',
    'nl.placeholder':'E-Mail-Adress iigä','nl.btn':'Abonniere','nl.note':'Kei Spam, jederziit chündbar.',
    'footer.tagline':'Premium-Produkt mit Liebi für Hünd und Chätze. S\'bäschte Läbe für dini pelzige Familiemitglieder.',
    'footer.col1':'Entdecke','footer.col2':'Hilf','footer.col3':'Firma',
    'footer.faq':'FAQ','footer.contactUs':'Kontakt',
    'footer.about':'Über üs','footer.blog':'Blog','footer.privacy':'Dateschütz',
    'footer.copy':'© 2026 Velunoo. Alli Rächt vorbehalte. Mit Liebi für Tier gmacht.',
  },
};

const langMeta = {
  de:      { flag: '🇩🇪', code: 'DE' },
  'ch-de': { flag: '🇨🇭', code: 'CH' },
  en:      { flag: '🇬🇧', code: 'EN' },
  fr:      { flag: '🇫🇷', code: 'FR' },
  it:      { flag: '🇮🇹', code: 'IT' },
};

let currentLang = 'de';

function applyLang(lang) {
  if (!translations[lang]) return;
  currentLang = lang;
  const t = translations[lang];

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (t[key] !== undefined) el.textContent = t[key];
  });
  document.querySelectorAll('[data-i18n-html]').forEach(el => {
    const key = el.getAttribute('data-i18n-html');
    if (t[key] !== undefined) el.innerHTML = t[key];
  });
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder');
    if (t[key] !== undefined) el.placeholder = t[key];
  });

  document.documentElement.lang = lang === 'ch-de' ? 'gsw' : lang;

  const meta = langMeta[lang];
  const flagEl = document.getElementById('currentFlag');
  if (flagEl) flagEl.textContent = meta.flag;

  document.querySelectorAll('.lang-option').forEach(btn =>
    btn.classList.toggle('active', btn.dataset.lang === lang));
  document.querySelectorAll('.mobile-lang-btn').forEach(btn =>
    btn.classList.toggle('active', btn.dataset.lang === lang));

  try { localStorage.setItem('velunoo-lang', lang); } catch(e) {}
}

/* ================================================================
   MAIN
   ================================================================ */
document.addEventListener('DOMContentLoaded', () => {

  // Default: Deutsch; restore saved if present
  try {
    const saved = localStorage.getItem('velunoo-lang');
    applyLang((saved && translations[saved]) ? saved : 'de');
  } catch(e) { applyLang('de'); }

  // ── Navbar scroll ──
  const navbar    = document.getElementById('navbar');
  const backToTop = document.getElementById('backToTop');
  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 20);
    backToTop.classList.toggle('visible', window.scrollY > 400);
  }, { passive: true });
  backToTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

  // ── Hamburger ──
  const hamburger  = document.getElementById('hamburger');
  const mobileMenu = document.getElementById('mobileMenu');
  hamburger.addEventListener('click', () => {
    const open = mobileMenu.classList.toggle('open');
    const spans = hamburger.querySelectorAll('span');
    spans[0].style.transform = open ? 'rotate(45deg) translate(5px, 5px)' : '';
    spans[1].style.opacity   = open ? '0' : '';
    spans[2].style.transform = open ? 'rotate(-45deg) translate(5px, -5px)' : '';
  });
  mobileMenu.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
    mobileMenu.classList.remove('open');
    hamburger.querySelectorAll('span').forEach(s => { s.style.transform = ''; s.style.opacity = ''; });
  }));

  // ── Language switcher (desktop) ──
  const langBtn      = document.getElementById('langBtn');
  const langDropdown = document.getElementById('langDropdown');
  langBtn.addEventListener('click', e => {
    e.stopPropagation();
    const isOpen = langDropdown.classList.toggle('open');
    langBtn.setAttribute('aria-expanded', isOpen);
    langDropdown.setAttribute('aria-hidden', !isOpen);
  });
  document.addEventListener('click', e => {
    if (!langDropdown.contains(e.target) && !langBtn.contains(e.target)) {
      langDropdown.classList.remove('open');
      langBtn.setAttribute('aria-expanded', 'false');
    }
  });
  langDropdown.querySelectorAll('.lang-option').forEach(btn =>
    btn.addEventListener('click', () => {
      applyLang(btn.dataset.lang);
      langDropdown.classList.remove('open');
      langBtn.setAttribute('aria-expanded', 'false');
    }));

  // ── Language switcher (mobile) ──
  document.querySelectorAll('.mobile-lang-btn').forEach(btn =>
    btn.addEventListener('click', () => applyLang(btn.dataset.lang)));

  // ── Scroll animations ──
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        setTimeout(() => entry.target.classList.add('animated'),
          parseInt(entry.target.dataset.delay || 0));
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
  document.querySelectorAll('[data-animate]').forEach(el => observer.observe(el));

  // ── Active nav link ──
  const navLinks = document.querySelectorAll('.nav-links a');
  const sectionObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting)
        navLinks.forEach(link => {
          link.style.color = link.getAttribute('href') === `#${entry.target.id}` ? 'var(--green-dark)' : '';
        });
    });
  }, { threshold: 0.4 });
  document.querySelectorAll('section[id]').forEach(s => sectionObserver.observe(s));

  // ── Newsletter ──
  window.handleNewsletterSubmit = (e) => {
    e.preventDefault();
    const t   = translations[currentLang];
    const inp = e.target.querySelector('.newsletter-input');
    const btn = e.target.querySelector('button[type="submit"]');
    btn.textContent = '✓ ' + (t['nl.btn'] || 'Subscribe') + '!';
    btn.style.background = 'var(--green-light)';
    btn.disabled = true; inp.value = '';
    setTimeout(() => { btn.textContent = t['nl.btn'] || 'Subscribe'; btn.style.background = ''; btn.disabled = false; }, 3000);
  };

  // ── Game ──
  initFetchGame();
});

/* ================================================================
   DOG FETCH MINI-GAME
   ================================================================ */
function initFetchGame() {
  const canvas      = document.getElementById('gameCanvas');
  if (!canvas) return;
  const ctx         = canvas.getContext('2d');
  const overlay     = document.getElementById('gameOverlay');
  const gameUI      = document.getElementById('gameUI');
  const gameActions = document.getElementById('gameActions');
  const startBtn    = document.getElementById('gameStartBtn');
  const restartBtn  = document.getElementById('gameRestartBtn');
  const throwCountEl= document.getElementById('throwCount');
  const hintEl      = document.getElementById('gameHint');

  // Polyfill roundRect for older browsers
  if (!CanvasRenderingContext2D.prototype.roundRect) {
    CanvasRenderingContext2D.prototype.roundRect = function(x, y, w, h, r) {
      this.beginPath();
      this.moveTo(x+r, y); this.lineTo(x+w-r, y);
      this.quadraticCurveTo(x+w, y, x+w, y+r); this.lineTo(x+w, y+h-r);
      this.quadraticCurveTo(x+w, y+h, x+w-r, y+h); this.lineTo(x+r, y+h);
      this.quadraticCurveTo(x, y+h, x, y+h-r); this.lineTo(x, y+r);
      this.quadraticCurveTo(x, y, x+r, y); this.closePath();
    };
  }

  function resize() { canvas.width = canvas.offsetWidth; canvas.height = canvas.offsetHeight; }
  resize();
  window.addEventListener('resize', () => { resize(); if (gameStarted) drawFrame(); });

  const GRAVITY    = 0.44;
  const GND_PCT    = 0.80;
  const DOG_HOME_X = 85;
  const DOG_SPEED  = 5;

  let gameStarted = false;
  let throwCount  = 0;
  // State: 'ready' | 'aiming' | 'flying' | 'fetching' | 'returning'
  let state = 'ready';

  let dog  = { x: DOG_HOME_X, facingRight: true, bobY: 0, bobPhase: 0 };
  let ball = { x: 0, y: 0, vx: 0, vy: 0, active: false };
  let dragStart = null, dragCurrent = null;

  function gnd() { return canvas.height * GND_PCT; }

  function canvasPos(e) {
    const r = canvas.getBoundingClientRect();
    // touchend has empty touches[] — use changedTouches instead
    const c = e.changedTouches ? e.changedTouches[0]
            : e.touches        ? e.touches[0]
            : e;
    return { x: c.clientX - r.left, y: c.clientY - r.top };
  }

  startBtn.addEventListener('click', () => {
    overlay.style.display = 'none';
    gameUI.style.display  = 'block';
    gameStarted = true;
    resetRound();
    loop();
  });
  restartBtn.addEventListener('click', () => {
    gameActions.style.display = 'none';
    gameUI.style.display      = 'block';
    throwCount = 0; updateCount();
    resetRound(); loop();
  });

  function resetRound() {
    const gy = gnd();
    dog.x = DOG_HOME_X; dog.facingRight = true; dog.bobPhase = 0; dog.bobY = 0;
    ball.active = true;
    ball.x = DOG_HOME_X + 70; ball.y = gy - 18;
    ball.vx = 0; ball.vy = 0;
    state = 'ready';
    hintEl.classList.remove('hidden');
    dragStart = null; dragCurrent = null;
  }

  function updateCount() { if (throwCountEl) throwCountEl.textContent = throwCount; }

  canvas.addEventListener('mousedown',  e => onDown(canvasPos(e)));
  canvas.addEventListener('mousemove',  e => onMove(canvasPos(e)));
  canvas.addEventListener('mouseup',    e => onUp(canvasPos(e)));
  canvas.addEventListener('mouseleave', () => { if (state === 'aiming') { state = 'ready'; dragStart = null; } });
  canvas.addEventListener('touchstart', e => { e.preventDefault(); onDown(canvasPos(e)); }, { passive: false });
  canvas.addEventListener('touchmove',  e => { e.preventDefault(); onMove(canvasPos(e)); }, { passive: false });
  canvas.addEventListener('touchend',   e => { e.preventDefault(); onUp(canvasPos(e)); },  { passive: false });

  function onDown(p) {
    if (!gameStarted || state !== 'ready') return;
    dragStart = p; dragCurrent = p; state = 'aiming';
  }
  function onMove(p) { if (state === 'aiming') dragCurrent = p; }
  function onUp(p) {
    if (state !== 'aiming' || !dragStart) return;
    const dx = p.x - dragStart.x, dy = p.y - dragStart.y;
    const len = Math.hypot(dx, dy);
    if (len < 8) { state = 'ready'; dragStart = null; return; }

    const power = Math.min(len / 11, 20);
    const angle = Math.atan2(dy, dx);
    ball.x  = canvas.width * 0.35;
    ball.y  = gnd() - 55;
    ball.vx = Math.cos(angle) * power;
    ball.vy = Math.sin(angle) * power - 2.5;
    ball.active = true;

    // ── FIX: dog immediately faces the throw direction ──
    dog.facingRight = ball.vx >= 0;

    state = 'flying';
    throwCount++; updateCount();
    hintEl.classList.add('hidden');
    dragStart = null; dragCurrent = null;
  }

  function update() {
    const gy = gnd();

    if (state === 'flying') {
      // Keep dog turned toward ball while it flies
      dog.facingRight = ball.x > dog.x;
      dog.bobPhase += 0.05;

      ball.vy += GRAVITY;
      ball.x  += ball.vx; ball.y += ball.vy;

      if (ball.x < 12)              { ball.x = 12; ball.vx *= -0.5; }
      if (ball.x > canvas.width-12) { ball.x = canvas.width-12; ball.vx *= -0.5; }

      if (ball.y >= gy - 12) {
        ball.y = gy - 12;
        ball.vy *= -0.36; ball.vx *= 0.74;
        if (Math.abs(ball.vy) < 1.5 && Math.abs(ball.vx) < 0.8) {
          ball.vy = 0; ball.vx = 0;
          state = 'fetching';
        }
      }
    }

    if (state === 'fetching') {
      const dx = ball.x - dog.x;
      dog.facingRight = dx > 0;
      if (Math.abs(dx) > DOG_SPEED + 1) {
        dog.x += Math.sign(dx) * DOG_SPEED;
        dog.bobPhase += 0.38; dog.bobY = Math.sin(dog.bobPhase) * 4;
      } else {
        dog.x = ball.x; ball.active = false; state = 'returning';
      }
    }

    if (state === 'returning') {
      const dx = DOG_HOME_X - dog.x;
      dog.facingRight = dx > 0;
      if (Math.abs(dx) > DOG_SPEED + 1) {
        dog.x += Math.sign(dx) * DOG_SPEED;
        dog.bobPhase += 0.38; dog.bobY = Math.sin(dog.bobPhase) * 4;
        ball.active = true;
        ball.x = dog.x + (dog.facingRight ? 32 : -32);
        ball.y = gy - 38;
      } else {
        dog.x = DOG_HOME_X; dog.bobY = 0; dog.facingRight = true;
        ball.active = true;
        ball.x = DOG_HOME_X + 55; ball.y = gy - 14;
        state = 'ready'; hintEl.classList.remove('hidden');
      }
    }

    if (state === 'ready') {
      dog.bobPhase += 0.04; dog.bobY = Math.sin(dog.bobPhase) * 2;
    }
    if (state === 'aiming') {
      dog.bobPhase += 0.04; dog.bobY = Math.sin(dog.bobPhase) * 2;
    }
  }

  /* ── DRAWING ── */
  function drawFrame() {
    const W = canvas.width, H = canvas.height, gy = gnd();
    ctx.clearRect(0, 0, W, H);

    // Sky gradient
    const sky = ctx.createLinearGradient(0, 0, 0, gy);
    sky.addColorStop(0, '#BDE0FF'); sky.addColorStop(1, '#DDF2C8');
    ctx.fillStyle = sky; ctx.fillRect(0, 0, W, gy);

    // Clouds
    drawCloud(W * 0.18, H * 0.14, 0.65);
    drawCloud(W * 0.65, H * 0.08, 0.48);

    // Ground
    const grd = ctx.createLinearGradient(0, gy, 0, H);
    grd.addColorStop(0, '#6DB535'); grd.addColorStop(0.4, '#4E9A22'); grd.addColorStop(1, '#357015');
    ctx.fillStyle = grd; ctx.fillRect(0, gy, W, H - gy);
    ctx.fillStyle = 'rgba(255,255,255,.22)'; ctx.fillRect(0, gy, W, 3);

    // Aim preview
    if (state === 'aiming' && dragStart && dragCurrent) {
      drawAim(dragStart, dragCurrent, canvas.width * 0.35, gy - 55);
    }

    // Player hand hint
    if (state === 'ready' || state === 'aiming') {
      ctx.save();
      const hintSize = Math.max(32, Math.round(canvas.height * 0.1));
      ctx.font = `${hintSize}px serif`; ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
      ctx.globalAlpha = 0.5;
      ctx.fillText('🙋', canvas.width * 0.35, gy - hintSize * 1.8);
      ctx.restore();
    }

    // Ball
    if (ball.active) {
      ctx.save();
      const ballSize = Math.max(28, Math.round(canvas.height * 0.09));
      ctx.font = `${ballSize}px serif`; ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
      ctx.fillText('🎾', ball.x, ball.y);
      ctx.restore();
    }

    // Dog
    drawDog(dog.x, gy + dog.bobY, dog.facingRight);
  }

  function drawCloud(x, y, s) {
    ctx.save(); ctx.translate(x, y); ctx.scale(s, s);
    ctx.fillStyle = 'rgba(255,255,255,.78)'; ctx.beginPath();
    ctx.arc(0, 0, 28, 0, Math.PI*2); ctx.arc(26, -8, 22, 0, Math.PI*2);
    ctx.arc(50, 0, 25, 0, Math.PI*2); ctx.arc(25, 10, 19, 0, Math.PI*2);
    ctx.fill(); ctx.restore();
  }

  function drawAim(from, to, lx, ly) {
    const dx = to.x - from.x, dy = to.y - from.y;
    const len = Math.hypot(dx, dy);
    if (len < 4) return;
    const power = Math.min(len / 11, 20);
    const angle = Math.atan2(dy, dx);
    const vx = Math.cos(angle) * power, vy = Math.sin(angle) * power - 2.5;
    const gy = gnd();

    // Trajectory dots
    ctx.save();
    ctx.strokeStyle = 'rgba(35,76,47,.45)'; ctx.lineWidth = 2;
    ctx.setLineDash([5, 8]); ctx.beginPath();
    let px = lx, py = ly, pvx = vx, pvy = vy;
    ctx.moveTo(px, py);
    for (let i = 0; i < 32; i++) {
      pvy += GRAVITY; px += pvx; py += pvy;
      if (py > gy) break; ctx.lineTo(px, py);
    }
    ctx.stroke();

    // Arrow
    ctx.setLineDash([]);
    ctx.strokeStyle = 'rgba(119,174,58,.9)'; ctx.lineWidth = 3; ctx.lineCap = 'round';
    const al = Math.min(len * 0.55, 65);
    const ex = lx + Math.cos(angle) * al, ey = ly + Math.sin(angle) * al;
    ctx.beginPath(); ctx.moveTo(lx, ly); ctx.lineTo(ex, ey); ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(ex, ey); ctx.lineTo(ex - Math.cos(angle-0.5)*11, ey - Math.sin(angle-0.5)*11);
    ctx.moveTo(ex, ey); ctx.lineTo(ex - Math.cos(angle+0.5)*11, ey - Math.sin(angle+0.5)*11);
    ctx.stroke();
    ctx.restore();
  }

  /* ── Canvas-drawn dog (direction-reliable) ── */
  function drawDog(cx, gy, facingRight) {
    ctx.save();
    ctx.translate(cx, gy);
    // Flip for direction: dog naturally faces RIGHT
    if (!facingRight) ctx.scale(-1, 1);

    const run = (state === 'fetching' || state === 'returning');
    const sw  = run ? Math.sin(dog.bobPhase * 2.2) * 10 : 0; // leg swing

    // Shadow
    ctx.fillStyle = 'rgba(0,0,0,0.10)';
    ctx.beginPath(); ctx.ellipse(0, -2, 30, 6, 0, 0, Math.PI*2); ctx.fill();

    // Back legs (behind body)
    ctx.fillStyle = '#A86225';
    rr(-22, -30 + sw*0.6,  12, 30, 6);
    rr( 8,  -30 - sw*0.6,  12, 30, 6);

    // Body
    ctx.fillStyle = '#E29040';
    ctx.beginPath(); ctx.ellipse(-2, -44, 34, 24, 0, 0, Math.PI*2); ctx.fill();

    // Belly highlight
    ctx.fillStyle = '#F5B060';
    ctx.beginPath(); ctx.ellipse(2, -37, 18, 14, 0, 0, Math.PI*2); ctx.fill();

    // Front legs
    ctx.fillStyle = '#C47830';
    rr(-13, -26 - sw, 12, 28, 6);
    rr(  2, -26 + sw, 12, 28, 6);

    // Neck
    ctx.fillStyle = '#E29040';
    ctx.beginPath(); ctx.ellipse(24, -58, 15, 13, -0.3, 0, Math.PI*2); ctx.fill();

    // Head
    ctx.fillStyle = '#E29040';
    ctx.beginPath(); ctx.arc(30, -72, 23, 0, Math.PI*2); ctx.fill();

    // Ear (floppy)
    ctx.fillStyle = '#A86225';
    ctx.save(); ctx.translate(41, -88); ctx.rotate(0.35);
    ctx.beginPath(); ctx.ellipse(0, 6, 10, 15, 0, 0, Math.PI*2); ctx.fill();
    ctx.restore();

    // Snout
    ctx.fillStyle = '#C47830';
    ctx.beginPath(); ctx.ellipse(48, -66, 14, 10, 0, 0, Math.PI*2); ctx.fill();

    // Muzzle lighter
    ctx.fillStyle = '#D89050';
    ctx.beginPath(); ctx.ellipse(51, -64, 9, 7, 0, 0, Math.PI*2); ctx.fill();

    // Eye white
    ctx.fillStyle = '#fff';
    ctx.beginPath(); ctx.arc(33, -78, 6, 0, Math.PI*2); ctx.fill();
    // Pupil
    ctx.fillStyle = '#1A1008';
    ctx.beginPath(); ctx.arc(34, -77, 4, 0, Math.PI*2); ctx.fill();
    // Shine
    ctx.fillStyle = '#fff';
    ctx.beginPath(); ctx.arc(35.5, -78.5, 1.5, 0, Math.PI*2); ctx.fill();

    // Nose
    ctx.fillStyle = '#1A1008';
    ctx.beginPath(); ctx.ellipse(57, -68, 5, 4, 0, 0, Math.PI*2); ctx.fill();
    ctx.fillStyle = 'rgba(255,255,255,.3)';
    ctx.beginPath(); ctx.ellipse(55.5, -69.5, 2, 1.5, -0.5, 0, Math.PI*2); ctx.fill();

    // Smile
    ctx.strokeStyle = '#1A1008'; ctx.lineWidth = 1.5; ctx.lineCap = 'round';
    ctx.beginPath();
    ctx.moveTo(52, -61); ctx.quadraticCurveTo(57, -57, 62, -61); ctx.stroke();

    // Tongue when running
    if (run) {
      ctx.fillStyle = '#F07878';
      ctx.beginPath(); ctx.ellipse(57, -54, 5, 6, 0.15, 0, Math.PI*2); ctx.fill();
      ctx.strokeStyle = '#D05858'; ctx.lineWidth = 1;
      ctx.beginPath(); ctx.moveTo(57, -55); ctx.lineTo(57, -49); ctx.stroke();
    }

    // Tail (left side, wags in ready state)
    const tailWag = (state === 'ready' || state === 'aiming')
      ? Math.sin(dog.bobPhase * 1.6) * 18 : -8;
    ctx.strokeStyle = '#B07028'; ctx.lineWidth = 8; ctx.lineCap = 'round';
    ctx.save(); ctx.translate(-34, -50);
    const rad = (tailWag * Math.PI) / 180;
    ctx.beginPath(); ctx.moveTo(0, 0);
    ctx.quadraticCurveTo(-12, -16, -9 + Math.sin(rad)*14, -32 + Math.cos(rad)*6);
    ctx.stroke(); ctx.restore();

    // Collar (brand green)
    ctx.fillStyle = '#77AE3A';
    ctx.beginPath(); ctx.roundRect(13, -62, 24, 8, 4); ctx.fill();
    ctx.fillStyle = '#9DC840'; ctx.beginPath(); ctx.roundRect(13, -62, 24, 3.5, 4); ctx.fill();
    ctx.fillStyle = '#234C2F';
    ctx.beginPath(); ctx.arc(25, -54, 3.5, 0, Math.PI*2); ctx.fill();

    // Ball in mouth when returning
    if (state === 'returning' && ball.active) {
      ctx.font = '16px serif'; ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
      ctx.fillText('🎾', 64, -60);
    }

    ctx.restore();
  }

  // Helper: filled rounded rect
  function rr(x, y, w, h, r) {
    ctx.beginPath(); ctx.roundRect(x, y, w, h, r); ctx.fill();
  }

  function loop() { update(); drawFrame(); requestAnimationFrame(loop); }
}

/* ── Paw cursor interaction ── */
(function() {
  const paw = document.getElementById('heroPaw');
  const hero = document.getElementById('home');
  if (!paw || !hero) return;
  // Only on non-touch devices
  if (!window.matchMedia('(hover: hover)').matches) return;
  let ticking = false;
  hero.addEventListener('mousemove', (e) => {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(() => {
      const rect = hero.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width  - 0.5) * 2; // -1 to 1
      const y = ((e.clientY - rect.top)  / rect.height - 0.5) * 2;
      const rotateX = y * -6;   // tilt up/down
      const rotateY = x *  8;   // tilt left/right
      const tx = x * 10;
      const ty = y * 6;
      paw.style.transform = `perspective(600px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translate(${tx}px, ${ty}px)`;
      ticking = false;
    });
  });
  hero.addEventListener('mouseleave', () => {
    paw.style.transform = '';
  });
})();


/* ── Unboxing Video: Scroll-triggered play/pause ── */
(function () {
  const video   = document.getElementById('unboxingVideo')
  const overlay = document.getElementById('unboxingOverlay')
  const playBtn = document.getElementById('unboxingPlayBtn')
  if (!video) return

  let userPaused = false

  // Toggle on play button click
  playBtn && playBtn.addEventListener('click', () => {
    if (video.paused) {
      video.play()
      userPaused = false
      overlay.classList.add('hidden')
    } else {
      video.pause()
      userPaused = true
      overlay.classList.remove('hidden')
    }
  })

  // Also hide overlay once video starts playing
  video.addEventListener('play', () => overlay.classList.add('hidden'))
  video.addEventListener('pause', () => {
    if (userPaused) overlay.classList.remove('hidden')
  })

  // IntersectionObserver: auto play when 50% visible, pause when out
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        if (!userPaused && video.paused) {
          video.play().catch(() => {})
          overlay.classList.add('hidden')
        }
      } else {
        if (!video.paused) {
          video.pause()
          // Don't set userPaused — auto pause due to scroll
        }
      }
    })
  }, { threshold: 0.5 })

  observer.observe(video)
})()
