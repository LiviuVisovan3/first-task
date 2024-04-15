const wordList = [
  {
    slug: "nonlogism",
    word: "nonlogism",
    partOfSpeech: "substantiv",
    partOfSpeechType: "comun",
    definition:
      "Cuvânt pentru un concept care nu există într-o limbă, dar care ar trebui să existe conform realității lingvistice.",
    examples: [
      "Crearea de <b>nonlogisme</b> este procesul care asigură limbii flexibilitatea de-a exprima noi idei și concepte.",
      "Profesorul de lingvistică a folosit termenul de „<b>nonlogism</b>” atunci când povestea cum limbile se adaptează la noi idei și realități culturale.",
      "În timpul dezbaterii despre limbaj și evoluția sa, am introdus conceptul de „<b>nonlogism</b>” pentru a descrie cuvintele care nu există încă, dar care ar putea fi utile.",
    ],
    etymology: "prin sudare (non + logism)",
  },
  {
    slug: "morfosinteza",
    word: "morfosinteză",
    partOfSpeech: "substantiv",
    partOfSpeechType: "comun",
    definition:
      "Proces de creare a cuvintelor noi într-o limbă prin combinarea și manipularea formelor morfologice existente.",
    examples: [
      "La cursul de lingvistică am aflat cum, folosind <b>morfosinteza</b>, o limbă își poate crea concepte noi pe baza celor deja existente.",
      "Derivarea cu sufixe și prefixe este un tip de <b>morfosinteză</b> în cadrul unei limbi.",
    ],
    etymology:
      '"morf" (de la morfologie - studiul formei cuvintelor) + "sinteză"',
  },
  {
    slug: "acunci",
    word: "acunci",
    partOfSpeech: "adverb",
    partOfSpeechType: "de timp",
    definition: "Adverbul „acum”, doar că relativ la „atunci”.",
    examples: [
      "Era anul 2009, iar România celebra revoluția de <b>acunci</b> 20 de ani.",
      "M-a întrebat Adrian miercurea trecută dacă vreau să vin la fotbal dar am refuzat, deoarece eu tocmai jucasem <b>acunci</b> 2 zile.",
    ],
    etymology: "prin fuziune „acum” + „atunci”",
  },
  {
    slug: "fiut",
    word: "fiut",
    partOfSpeech: "substantiv",
    partOfSpeechType: "comun",
    definition:
      "Formă de participiu a verbului „a fi”. Poate fi folosit în același mod în care sunt folosite participiile altor verbe.",
    examples: [
      "<b>Fiutul</b> de președinte este o mare responsabilitate.",
      "<b>Fiutul</b> de student la medicină implică multe ore de studiu și dedicare.",
      "<b>Fiutul</b> de cetățean străin într-o țară nouă e cu-adevărat o provocare.",
    ],
    etymology: "morfosinteză",
  },
  {
    slug: "hat",
    word: "hăt",
    partOfSpeech: "adverb",
    partOfSpeechType: "de loc",
    definition:
      "Oriunde, dar nu aici. Generalizarea regionalismului „hăt” și echivalentul cuvântului englezesc „away”.",
    examples: ["Du-te <b>hăt</b>! („Go away!”)"],
    etymology: "generalizare intralinguală",
  },
  {
    slug: "ecoic",
    word: "ecoic(ă)",
    partOfSpeech: "adjectiv",
    definition: "Cu ecou (despre o cameră, încăpere, container, etc.)",
    examples: [
      "Camera aceasta este prea <b>ecoică</b> pentru a efectua înregistrări de calitate.",
    ],
    etymology: "derivare cu sufix (ecou + ic)",
  },
  {
    slug: "salot",
    word: "șalot(ă)",
    partOfSpeech: "adjectiv",
    definition:
      "Care se caracterizează prin adâncime mică sau lipsa adâncimii. Antonimul cuvântului „adânc”.",
    examples: [
      "Această fântână este <b>șalotă</b>.",
      "Această piscină are o zonă foarte adâncă și o zonă mai <b>șalotă</b>, unde copiii pot înota în siguranță.",
    ],
    etymology:
      'calchiere. de la termenul englez "shallow" prin adaptare fonetică și morfologică.',
  },
  {
    slug: "suez",
    word: "suez(ă)",
    partOfSpeech: "adjectiv",
    definition: "Originar din/aparținând statului SUA.",
    examples: [
      "La fel cum un om din Franța este francez, un om din SUA este <b>suez</b>.",
      "Acest om este <b>suez</b>, din SUA.",
    ],
    etymology: "derivare cu sufix (SUA + ez)",
  },
  {
    slug: "verinat",
    word: "verinat(ă)",
    partOfSpeech: "substantiv",
    partOfSpeechType: "comun",
    definition: "Soțul sau soția unui verișor. Verișor + cumnat.",
    examples: [
      "La nunta surorii mele am avut ocazia să-l întâlnesc pentru prima dată pe <b>verinatul</b> meu, soțul verișoarei mele.",
      "Andrei, unde-i unchiu-to Adi? -Nu mi-e unchi! E soțul verișoarei mele: mi-e <b>verinat</b>!",
    ],
    etymology: "sudare (verișor + cumnat)",
  },
  {
    slug: "milant",
    word: "milant(ă)",
    partOfSpeech: "adjectiv",
    definition: "Ceva ce-ți creează sentimentul de milă.",
    examples: [
      "Am văzut videoul.. nu știu ce să zic, mi s-a părut mai degrabă <b>milant</b> decât amuzant, văzând acei copii întinzând mâna spre cameraman.",
    ],
    etymology: "derivare cu sufix (milă + ant)",
  },
  {
    slug: "patrisc",
    word: "pătrisc",
    partOfSpeech: "substantiv",
    partOfSpeechType: "comun",
    definition:
      "Suprafața poligonală de formă pătratică. Analog cu discul pentru cerc.",
    examples: [
      "-George, care e aria acestui pătrat? -Pătratul nu are arie. Vrei să spui al acestui <b>pătrisc</b>?",
    ],
    etymology: "morfosinteză (pătrat + isc)",
  },
  {
    slug: "trisc",
    word: "trisc",
    partOfSpeech: "substantiv",
    partOfSpeechType: "comun",
    definition:
      "Suprafața poligonală de formă triunghică. Analog cu discul pentru cerc.",
    examples: [
      "-George, care e aria acestui triunghi? -Triunghiul nu are arie. Vrei să spui al acestui <b>trisc</b>?",
    ],
    etymology: "morfosinteză (triunghi + isc)",
    groupId: "patrisc",
  },
  {
    slug: "dreptisc",
    word: "dreptisc",
    partOfSpeech: "substantiv",
    partOfSpeechType: "comun",
    definition:
      "Suprafața poligonală de formă dreptunghiulară. Analog cu discul pentru cerc.",
    examples: [
      "-George, care e aria acestui dreptunghi? -Dreptunghiul nu are arie. Vrei să spui al acestui <b>dreptisc</b>?",
    ],
    etymology: "morfosinteză (dreptunghi + isc)",
    groupId: "patrisc",
  },
  {
    slug: "rombisc",
    word: "rombisc",
    partOfSpeech: "substantiv",
    partOfSpeechType: "comun",
    definition:
      "Suprafața poligonală de formă rombică. Analog cu discul pentru cerc.",
    examples: [
      "-George, care e aria acestui romb? -Rombul nu are arie. Vrei să spui al acestui <b>rombisc</b>?",
    ],
    etymology: "morfosinteză (romb + isc)",
    groupId: "patrisc",
  },
  {
    slug: "trapisc",
    word: "trapisc",
    partOfSpeech: "substantiv",
    partOfSpeechType: "comun",
    definition:
      "Suprafața poligonală de formă trapezoidală. Analog cu discul pentru cerc.",
    examples: [
      "-George, care e aria acestui trapez? -Trapezul nu are arie. Vrei să spui al acestui <b>trapisc</b>?",
    ],
    etymology: "morfosinteză (trapez + isc)",
    groupId: "patrisc",
  },
  {
    slug: "pentisc",
    word: "pentisc",
    partOfSpeech: "substantiv",
    partOfSpeechType: "comun",
    definition:
      "Suprafața poligonală de formă pentagonală. Analog cu discul pentru cerc.",
    examples: [
      "-George, care e aria acestui pentagon? -Pentagonul nu are arie. Vrei să spui al acestui <b>pentisc</b>?",
    ],
    etymology: "morfosinteză (pentagon + isc)",
    groupId: "patrisc",
  },
  {
    slug: "hexisc",
    word: "hexisc",
    partOfSpeech: "substantiv",
    partOfSpeechType: "comun",
    definition:
      "Suprafața poligonală de formă hexagonală. Analog cu discul pentru cerc.",
    examples: [
      "-George, care e aria acestui hexagon? -Hexagonul nu are arie. Vrei să spui al acestui <b>hexisc</b>?",
    ],
    etymology: "morfosinteză (hexagon + isc)",
    groupId: "patrisc",
  },
  {
    slug: "heptisc",
    word: "heptisc",
    partOfSpeech: "substantiv",
    partOfSpeechType: "comun",
    definition:
      "Suprafața poligonală de formă heptagonală. Analog cu discul pentru cerc.",
    examples: [
      "-George, care e aria acestui heptagon? -Heptagonul nu are arie. Vrei să spui al acestui <b>heptisc</b>?",
    ],
    etymology: "morfosinteză (heptagon + isc)",
    groupId: "patrisc",
  },
  {
    slug: "octisc",
    word: "octisc",
    partOfSpeech: "substantiv",
    partOfSpeechType: "comun",
    definition:
      "Suprafața poligonală de formă octogonală. Analog cu discul pentru cerc.",
    examples: [
      "-George, care e aria acestui octogon? -Octogonul nu are arie. Vrei să spui al acestui <b>octisc</b>?",
    ],
    etymology: "morfosinteză (octogon + isc)",
    groupId: "patrisc",
  },
  {
    slug: "facubil",
    word: "făcubil(ă)",
    partOfSpeech: "adjectiv",
    definition: "Ceva ce poate fi făcut.",
    examples: [
      "Am analizat proiectul și-am ajuns la concluzia că, deși ambițios, este <b>făcubil</b> în timp care ne-a rămas.",
      "Lumea se plânge de dificultatea acestui puzzle, dar în realitate este <b>făcubil</b> chiar și de copii.",
    ],
    etymology: "prin sudare (a face + abil)",
  },
  {
    slug: "chemabil",
    word: "chemabil(ă)",
    partOfSpeech: "adjectiv",
    definition: "Ceva/cineva care poate fi chemat.",
    examples: [
      "În echipa noastră, avem nevoie de oameni <b>chemabili</b> în orice moment pentru situații de urgență.",
      "Când organizăm petreceri de ultim moment, Luca este întotdeauna <b>chemabil</b>. El aduce mereu atmosfera potrivită.",
      "-Nu știu pe cine să chem la fotbal… ce zici de Ștefan, joacă bine? -Da, joacă ok, e <b>chemabil</b>.",
    ],
    etymology: "prin sudare (a chema + abil)",
  },
  {
    slug: "pusabil",
    word: "pusabil(ă)",
    partOfSpeech: "adjectiv",
    definition: "Ceva ce poate fi pus.",
    examples: [
      "Am cumpărat o nouă canapea și am fost foarte bucuros să constat că este <b>pusabilă</b> în orice cameră din casă, datorită dimensiunilor și designului său versatil.",
      "Aș zice că acest ghiveci de flori artificiale este foarte <b>pusabil</b> pe biroul tău, deoarece adaugă un strop de culoare fără a necesita îngrijire constantă.",
      "Ce zici de melodia asta? Crezi că e <b>pusabilă</b> ca și muzică de fundal diseară?",
    ],
    etymology: "prin sudare (a pune + abil)",
  },
  {
    slug: "divers",
    word: "divers(ă)",
    partOfSpeech: "adjectiv",
    definition: "Participiul verbului „a diverge”.",
    examples: [
      "În timpul expediției noastre, drumul pe care îl urmăream <b>a divers</b> în mod neașteptat, ducându-ne într-o zonă complet neexplorată.",
      "La scurt timp după ce am început să discutăm despre politică, discuția <b>a divers</b> în diferite direcții etice și filozofice.",
      "<b>Am divers</b> de la planul inițial atunci când am decis să evităm autostrada și să explorăm drumurile secundare, care s-au dovedit a fi mai pitoreși.",
      "Când ne-am apropiat de oraș, drumul principal <b>a divers</b> în mai multe ramificații, făcând dificilă alegerea rutei corecte fără un GPS.",
    ],
    etymology: "prin conjugare (diverge)",
  },
  {
    slug: "luni",
    word: "Luni",
    partOfSpeech: "substantiv",
    partOfSpeechType: "propriu",
    definition:
      "Numele primei zile a săptămânii, scris cu literă mare, fiindcă e nume.",
    examples: ["Astăzi este <b>Luni</b>, prima zi din săptămână."],
    etymology: 'din latinescul "Lunis".',
    useAsGroupImage: true,
  },
  {
    slug: "marti",
    word: "Marți",
    partOfSpeech: "substantiv",
    partOfSpeechType: "propriu",
    definition:
      "Numele celei de-a doua zi a săptămânii, scris cu literă mare, fiindcă e nume.",
    examples: ["Astăzi este <b>Marți</b>, cea de-a doua zi din săptămână."],
    etymology: 'din latinescul "Martis"',
    groupId: "luni",
  },
  {
    slug: "miercuri",
    word: "Miercuri",
    partOfSpeech: "substantiv",
    partOfSpeechType: "propriu",
    definition:
      "Numele celei de-a treia zi a săptămânii, scris cu literă mare, fiindcă e nume.",
    examples: ["Astăzi este <b>Miercuri</b> cea de-a treia zi din săptămână."],
    etymology: 'din latinescul "Mercuris"',
    groupId: "luni",
  },
  {
    slug: "joi",
    word: "Joi",
    partOfSpeech: "substantiv",
    partOfSpeechType: "propriu",
    definition:
      "Numele celei de-a patra zi a săptămânii, scris cu literă mare, fiindcă e nume.",
    examples: ["Astăzi este <b>Joi</b>, cea de-a patra zi a săptămânii."],
    etymology: 'din latinescul "Jovis"',
    groupId: "luni",
  },
  {
    slug: "vineri",
    word: "Vineri",
    partOfSpeech: "substantiv",
    partOfSpeechType: "propriu",
    definition:
      "Numele celei de-a cincea zi a săptămânii, scris cu literă mare, fiindcă e nume.",
    examples: ["Azi este <b>Vineri</b>, cea de-a cincea zi a săptămânii."],
    etymology: 'din latinescul "Veneris"',
    groupId: "luni",
  },
  {
    slug: "sambata",
    word: "Sâmbătă",
    partOfSpeech: "substantiv",
    partOfSpeechType: "propriu",
    definition:
      "Numele celei de-a șasea zi a săptămânii, scris cu literă mare, fiindcă e nume.",
    examples: ["Astăzi este <b>Sâmbătă</b>, cea de-a șasea zi a săptămânii."],
    etymology: 'din latinescul "Sambata"',
    groupId: "luni",
  },
  {
    slug: "duminica",
    word: "Duminică",
    partOfSpeech: "substantiv",
    partOfSpeechType: "propriu",
    definition:
      "Numele celei de-a șaptea zi a săptămânii, scris cu literă mare, fiindcă e nume.",
    examples: ["Astăzi este <b>Duminică</b>, cea de-a șaptea zi a săptămânii."],
    etymology: 'din latinescul "Dominica"',
    groupId: "luni",
  },
  {
    slug: "ianuarie",
    word: "Ianuarie",
    partOfSpeech: "substantiv",
    partOfSpeechType: "propriu",
    definition:
      "Prima lună a anului în calendarul Gregorian, scrisă cu literă mare, fiindcă e nume.",
    examples: ["Ne aflăm în luna <b>Ianuarie</b>, prima lună a anului."],
    etymology: "din latinescul 'Ianuarius', numit după zeul roman Ianus.",
    useAsGroupImage: true,
  },
  {
    slug: "februarie",
    word: "Februarie",
    partOfSpeech: "substantiv",
    partOfSpeechType: "propriu",
    definition:
      "Cea de-a doua lună a anului în calendarul Gregorian, scrisă cu literă mare, fiindcă e nume.",
    examples: [
      "Ne aflăm în luna <b>Februarie</b>, cea de-a doua lună a anului.",
    ],
    etymology:
      "din latinescul 'Februarius', numit după festivalul de purificare 'Februa'.",
    groupId: "ianuarie",
  },
  {
    slug: "martie",
    word: "Martie",
    partOfSpeech: "substantiv",
    partOfSpeechType: "propriu",
    definition:
      "Cea de-a treia lună a anului în calendarul Gregorian, scrisă cu literă mare, fiindcă e nume.",
    examples: ["Ne aflăm în luna <b>Martie</b>, cea de-a treia lună a anului."],
    etymology:
      "din latinescul 'Martius', numit după zeul roman al războiului, Marte.",
    groupId: "ianuarie",
  },
  {
    slug: "aprilie",
    word: "Aprilie",
    partOfSpeech: "substantiv",
    partOfSpeechType: "propriu",
    definition:
      "Cea de-a patra lună a anului în calendarul Gregorian, scrisă cu literă mare, fiindcă e nume.",
    examples: [
      "Ne aflăm în luna <b>Aprilie</b>, cea de-a patra lună a anului.",
    ],
    etymology:
      "din latinescul 'Aprilis', posibil derivat de la verbul 'aperire', care înseamnă 'a deschide'.",
    groupId: "ianuarie",
  },
  {
    slug: "mai",
    word: "Mai",
    partOfSpeech: "substantiv",
    partOfSpeechType: "propriu",
    definition:
      "Cea de-a cincea lună a anului în calendarul Gregorian, scrisă cu literă mare, fiindcă e nume.",
    examples: ["Ne aflăm în luna <b>Mai</b>, cea de-a cincea lună a anului."],
    etymology: "din latinescul 'Maius', numit probabil după zeița romană Maia.",
    groupId: "ianuarie",
  },
  {
    slug: "iunie",
    word: "Iunie",
    partOfSpeech: "substantiv",
    partOfSpeechType: "propriu",
    definition:
      "Cea de-a șasea lună a anului în calendarul Gregorian, scrisă cu literă mare, fiindcă e nume.",
    examples: ["Ne aflăm în luna <b>Iunie</b>, cea de-a șasea lună a anului."],
    etymology: "din latinescul 'Iunius', posibil numit după zeița romană Juno.",
    groupId: "ianuarie",
  },
  {
    slug: "iulie",
    word: "Iulie",
    partOfSpeech: "substantiv",
    partOfSpeechType: "propriu",
    definition:
      "Cea de-a șaptea lună a anului în calendarul Gregorian, scrisă cu literă mare, fiindcă e nume.",
    examples: ["Ne aflăm în luna <b>Iulie</b>, cea de-a șaptea lună a anului."],
    etymology:
      "din latinescul 'Iulius', redenumit în onoarea lui Iulius Cezar.",
    groupId: "ianuarie",
  },
  {
    slug: "august",
    word: "August",
    partOfSpeech: "substantiv",
    partOfSpeechType: "propriu",
    definition:
      "Cea de-a opta lună a anului în calendarul Gregorian, scrisă cu literă mare, fiindcă e nume.",
    examples: ["Ne aflăm în luna <b>August</b>, cea de-a opta lună a anului."],
    etymology:
      "din latinescul 'Augustus', redenumit în onoarea împăratului roman Augustus.",
    groupId: "ianuarie",
  },
  {
    slug: "septembrie",
    word: "Septembrie",
    partOfSpeech: "substantiv",
    partOfSpeechType: "propriu",
    definition:
      "Cea de-a noua lună a anului în calendarul Gregorian, scrisă cu literă mare, fiindcă e nume.",
    examples: [
      "Ne aflăm în luna <b>Septembrie</b>, cea de-a noua lună a anului.",
    ],
    etymology:
      "din latinescul 'September', care înseamnă 'a șaptea lună' în calendarul roman original.",
    groupId: "ianuarie",
  },
  {
    slug: "octombrie",
    word: "Octombrie",
    partOfSpeech: "substantiv",
    partOfSpeechType: "propriu",
    definition:
      "Cea de-a zecea lună a anului în calendarul Gregorian, scrisă cu literă mare, fiindcă e nume.",
    examples: [
      "Ne aflăm în luna <b>Octombrie</b>, cea de-a zecea lună a anului.",
    ],
    etymology:
      "din latinescul 'October', care înseamnă 'a opta lună' în calendarul roman original.",
    groupId: "ianuarie",
  },
  {
    slug: "noiembrie",
    word: "Noiembrie",
    partOfSpeech: "substantiv",
    partOfSpeechType: "propriu",
    definition:
      "Cea de-a unsprezecea lună a anului în calendarul Gregorian, scrisă cu literă mare, fiindcă e nume.",
    examples: [
      "Ne aflăm în luna <b>Noiembrie</b>, cea de-a unsprezecea lună a anului.",
    ],
    etymology:
      "din latinescul 'November', care înseamnă 'a noua lună' în calendarul roman original.",
    groupId: "ianuarie",
  },
  {
    slug: "decembrie",
    word: "Decembrie",
    partOfSpeech: "substantiv",
    partOfSpeechType: "propriu",
    definition:
      "Cea de-a douăsprezecea lună a anului în calendarul Gregorian, scrisă cu literă mare, fiindcă e nume.",
    examples: [
      "Ne aflăm în luna <b>Decembrie</b>, cea de-a douăsprezecea lună a anului.",
    ],
    etymology:
      "din latinescul 'December', care înseamnă 'a zecea lună' în calendarul roman original.",
    groupId: "ianuarie",
  },
  {
    slug: "indoibil",
    word: "îndoibil(ă)",
    partOfSpeech: "adjectiv",
    definition: "Ceva ce poate fi îndoit (cu ușurință).",
    examples: [
      "Se vede că acest telefon e făcut din aluminiu, e mult mai <b>îndoibil</b> decât varianta din oțel.",
      "Tehnologia modernă a făcut posibile ecranele îndoibile, revoluționând designul dispozitivelor mobile.",
      "În arta origami, este esențial să folosești hârtie ușor îndoibilă pentru a crea forme complexe.",
    ],
    etymology: "prin sudare (a îndoi + abil)",
  },
  {
    slug: "frasor",
    word: "frăsor",
    partOfSpeech: "substantiv",
    partOfSpeechType: "comun",
    definition: "Termen neutru de gen care se referă la un frate sau o soră.",
    examples: [
      "-Andrei, câți <b>frăsori</b> ai? -Am trei <b>frăsori</b>: un frate și două surori.",
      "La reuniunea de familie de anul acesta vor fi prezenți toți <b>frăsorii</b> mei, inclusiv cei care locuiesc în străinătate.",
      "Adriana se înțelege foarte bine cu <b>frăsorii</b> ei.",
    ],
    etymology: 'Amestec între "frate" și "soră".',
  },
  {
    slug: "fil",
    word: "fil",
    partOfSpeech: "substantiv",
    partOfSpeechType: "comun",
    definition: "Termen neutru de gen care se referă la un fiu sau o fiică.",
    examples: [
      "Am doi <b>fili</b>: Marian și Diana.",
      "Majoritatea copiilor de la grădiniță se entuziasmează imediat când li se propune o excursie în aer liber, pe când <b>filii</b> mei sunt mai rezervați, preferând să exploreze natura pe cont propriu.",
      "Weekendul acesta voi avea grijă de 3 copii dar doar 2 dintre ei sunt <b>filii</b> mei.",
    ],
    etymology: "inventare",
  },
  {
    slug: "adultie",
    word: "adulție",
    partOfSpeech: "substantiv",
    partOfSpeechType: "comun",
    definition: "Partea din viața unui om în care este adult.",
    examples: [
      "După copilărie și adolescență, urmează <b>adulția</b>.",
      "Oamenii au de obicei mai mult timp la bătrânețe decât la <b>adulție</b>.",
      "Multe din deciziile importante în viață, cum ar fi alegerea carierei sau stabilirea unei familii, sunt luate în perioada de <b>adulție</b>.",
    ],
    etymology: "prin sufixarea cuvântului „adult”",
  },
  {
    slug: "ai-doia",
    word: "ai doia",
    partOfSpeech: "numeral",
    partOfSpeechType: "ordinal",
    definition:
      "Numeral ordinal plural pentru numărul 2. Pluralul numeralului „al doilea”.",
    examples: ["Ei sunt primii, noi suntem <b>ai doia</b>."],
    etymology: "prin pluralizarea numeralului ordinal „al doilea”",
    useAsGroupImage: true,
  },
  {
    slug: "ai-treia",
    word: "ai treia",
    partOfSpeech: "numeral",
    partOfSpeechType: "ordinal",
    definition:
      "Numeral ordinal plural pentru numărul 3. Pluralul numeralului „al treilea”.",
    examples: ["Ei sunt primii, noi suntem <b>ai treia</b>."],
    etymology: "prin pluralizarea numeralului ordinal „al treilea”",
    groupId: "ai-doia",
  },
  {
    slug: "ai-patruia",
    word: "ai patruia",
    partOfSpeech: "numeral",
    partOfSpeechType: "ordinal",
    definition:
      "Numeral ordinal plural pentru numărul 4. Pluralul numeralului „al patrulea”.",
    examples: ["Ei sunt primii, noi suntem <b>ai patruia</b>."],
    etymology: "prin pluralizarea numeralului ordinal „al patrulea”",
    groupId: "ai-doia",
  },
  {
    slug: "ai-cincia",
    word: "ai cincia",
    partOfSpeech: "numeral",
    partOfSpeechType: "ordinal",
    definition:
      "Numeral ordinal plural pentru numărul 5. Pluralul numeralului „al cincilea”.",
    examples: ["Ei sunt primii, noi suntem <b>ai cincia</b>."],
    etymology: "prin pluralizarea numeralului ordinal „al cincilea”",
    groupId: "ai-doia",
  },
  {
    slug: "ai-saseia",
    word: "ai șaseia",
    partOfSpeech: "numeral",
    partOfSpeechType: "ordinal",
    definition:
      "Numeral ordinal plural pentru numărul 6. Pluralul numeralului „al șaselea”.",
    examples: ["Ei sunt primii, noi suntem <b>ai șaseia</b>."],
    etymology: "prin pluralizarea numeralului ordinal „al șaselea”",
    groupId: "ai-doia",
  },
  {
    slug: "ai-sapteia",
    word: "ai șapteia",
    partOfSpeech: "numeral",
    partOfSpeechType: "ordinal",
    definition:
      "Numeral ordinal plural pentru numărul 7. Pluralul numeralului „al șaptelea”.",
    examples: ["Ei sunt primii, noi suntem <b>ai șapteia</b>."],
    etymology: "prin pluralizarea numeralului ordinal „al șaptelea”",
    groupId: "ai-doia",
  },
  {
    slug: "ai-optaia",
    word: "ai optâia",
    partOfSpeech: "numeral",
    partOfSpeechType: "ordinal",
    definition:
      "Numeral ordinal plural pentru numărul 8. Pluralul numeralului „al optulea”.",
    examples: ["Ei sunt primii, noi suntem <b>ai optâia</b>."],
    etymology: "prin pluralizarea numeralului ordinal „al optulea”",
    groupId: "ai-doia",
  },
  {
    slug: "ai-nouaia",
    word: "ai nouăia",
    partOfSpeech: "numeral",
    partOfSpeechType: "ordinal",
    definition:
      "Numeral ordinal plural pentru numărul 9. Pluralul numeralului „al nouălea”.",
    examples: ["Ei sunt primii, noi suntem <b>ai nouăia</b>."],
    etymology: "prin pluralizarea numeralului ordinal „al nouălea”",
    groupId: "ai-doia",
  },
  {
    slug: "ai-zeceia",
    word: "ai zeceia",
    partOfSpeech: "numeral",
    partOfSpeechType: "ordinal",
    definition:
      "Numeral ordinal plural pentru numărul 10. Pluralul numeralului „al zecelea”.",
    examples: ["Ei sunt primii, noi suntem <b>ai zeceia</b>."],
    etymology: "prin pluralizarea numeralului ordinal „al zecelea”",
    groupId: "ai-doia",
  },
  {
    slug: "ai-unspracezeia",
    word: "ai unsprăzeceia",
    partOfSpeech: "numeral",
    partOfSpeechType: "ordinal",
    definition:
      "Numeral ordinal plural pentru numărul 11. Pluralul numeralului „al unsprezecelea”.",
    examples: ["Ei sunt primii, noi suntem <b>ai unșpeia</b>."],
    etymology: "prin pluralizarea numeralului ordinal „al unsprezecelea”",
    groupId: "ai-doia",
  },
  {
    slug: "ai-doisprezeceia",
    word: "ai doisprezeceia",
    partOfSpeech: "numeral",
    partOfSpeechType: "ordinal",
    definition:
      "Numeral ordinal plural pentru numărul 12. Pluralul numeralului „al doisprezecelea”.",
    examples: ["Ei sunt primii, noi suntem <b>ai doișpeia</b>."],
    etymology: "prin pluralizarea numeralului ordinal „al doisprezecelea”",
    groupId: "ai-doia",
  },
  {
    slug: "manal",
    word: "mânal(ă)",
    partOfSpeech: "adjectiv",
    definition: "Cu referire la mână/mâini.",
    examples: [
      "Medicul i-a recomandat să evite eforturile <b>mânale</b> timp de câteva săptămâni pentru a se vindeca complet.",
      "Datorită durerilor la încheieturi, nu a putut face niciun fel de efort <d>mânal</d> timp de mai multe zile.",
      "Activitățile <b>mânale</b> au devenit dificile pentru ea după ce și-a luxat mâna.",
    ],
    etymology: "prin sufixarea substantivului „mână”",
  },
  {
    slug: "picioral",
    word: "picioral(ă)",
    partOfSpeech: "adjectiv",
    definition: "Cu referire la picior/picioare.",
    examples: [
      "După accidentarea de la fotbal, ortopedul i-a recomandat să evite eforturile <b>piciorale</b> pentru o perioadă.",
      "Daniel nu a putut face niciun fel de activitate <b>piciorală</b> timp de o săptămână, din cauza durerii de la gleznă.",
    ],
    etymology: "prin sufixarea substantivului „picior”",
  },
  {
    slug: "alui-alei",
    word: "alui/alei",
    partOfSpeech: "pronume",
    definition: "Pronume posesivo-posesiv.",
    examples: [
      "Să știi că jantele mașinii tale par mult mai curate decât <b>alei</b> mele.",
      "De Crăciun, Ionuț i-a cumpărat un portofel tatălui său, iar eu i-am luat o cămașă <b>alui</b> meu.",
    ],
    etymology: "prin extinderea pronumelor posesive „al (meu)” / „a (mea)”",
  },
  {
    slug: "dabil",
    word: "dabil(ă)",
    partOfSpeech: "adjectiv",
    definition: "Ceva ce poate fi dat.",
    examples: [
      "Toate aceste cărți sunt <b>dabile</b>, le-am citit deja și mi-ar plăcea să le împărtășesc cu alții.",
      "Am adunat o mulțime de jucării <b>dabile</b> copiilor de la orfelinat.",
      "Hainele acestea sunt încă într-o condiție excelentă și perfect <b>dabile</b> pentru magazinul second-hand.",
    ],
    etymology: "prin sudare (a da + abil)",
  },
  {
    slug: "autoritativ",
    word: "autoritativ(ă)",
    partOfSpeech: "adjectiv",
    definition:
      "Informație sau sursă de informație care are o încredere și recunoaștere largă, fiind adesea considerată definitivă, concludentă sau oficială.",
    examples: [
      "Această publicație e considerată o sursă <b>autoritativă</b> în domeniul medicinei.",
      "Informația <b>autoritativă</b> prezentată în raportul oficial a clarificat multe dintre îndoielile existente.",
    ],
    etymology:
      'calchiere. de la termenul englez "authoritative" prin adaptare fonetică și morfologică',
  },
  {
    slug: "monoplanetar",
    word: "monoplanetar(ă)",
    partOfSpeech: "adjectiv",
    definition: "Care implică sau este caracteristic unei singure planete.",
    examples: [
      "Deși tehnologic avansată, umanitatea este încă o civilizație <b>monoplanetară</b>, dependentă de resursele Terrei.",
      "În diversitatea galaxiei noastre, întâlnim atât sisteme solare cu multiple planete (precum Sistemul Solar), cât și sisteme solare <b>monoplanetare</b>, care sunt formate dintr-o singură planetă ce orbitează o stea.",
    ],
    etymology:
      'Combinarea termenilor "mono" (singur, unic) și "planetar" (referitor la planetă)',
  },
  {
    slug: "multiplanetar",
    word: "multiplanetar(ă)",
    partOfSpeech: "adjectiv",
    definition: "Care implică sau este caracteristic mai multor planete.",
    examples: [
      "Tranziția de la o civilizație <b>monoplanetară</b> la una <b>multiplanetară</b> ar reprezenta un salt major în evoluția umanității.",
      "Sistemele solare <b>multiplanetare</b>, cu mai multe planete orbitând o singură stea, sunt cele mai comune în galaxia noastră.",
    ],
    etymology:
      'Combinarea termenilor "multi" (mulți, numeroși) și "planetar" (referitor la planetă)',
  },
  {
    slug: "viata",
    word: "Viață",
    partOfSpeech: "substantiv",
    partOfSpeechType: "comun",
    definition:
      "Entitate/organism imaterial care înglobează toate formele de viață într-un scop unic și comun.",
    examples: [
      "Spre deosebire de conceptul tradițional de viață atribuit fiecărui individ, <b>Viața</b> (cu V mare) reprezintă sinergia vastă dintre toate entitățile vii, formând o entitate unitară cu o misiune comună.",
      "Prin contrast cu viața asignată unui individ, <b>Viața</b> reprezintă o rețea complexă ce unește toate formele de existență care au viață, reflectând un scop comun și interconectat.",
      "Studiind <b>Viața</b> în sensul său holistic, putem descoperi cum diferite specii interacționează și contribuie la un scop comun al existenței.",
    ],
    etymology:
      'Extindere a cuvântului "viață" referitor la individ pentru a include o dimensiune holistică',
  },
  {
    slug: "divertiza",
    word: "a divertiza",
    partOfSpeech: "verb",
    definition: "A oferi divertisment.",
    examples: [
      "La petrecerea lui Paul a venit un magician care <b>divertizat</b> copiii de toate vârstele cu trucurile sale.",
      "Compania a angajat un grup de actori pentru <b>a divertiza</b> invitații la evenimentul de caritate.",
      "Aseară m-am <b>divertizat</b> uitându-mă la trei episoade din telenovela mea preferată.",
    ],
    etymology:
      'Derivat de la cuvântul "divertisment" provenind din latinescul "divertere" (a distrage, a abate), cu adăugarea sufixului "-iza" pentru formarea verbelor.',
  },
  {
    slug: "insosetat",
    word: "înșosetat(ă)",
    partOfSpeech: "adjectiv",
    definition: "Cu șosete, dar fără încălțăminte.",
    examples: [
      "Când am ajuns la cursul de yoga mi-am dat jos pantofiii și-am rămas înșosetat, însă majoritatea celorlalți erau desculți.",
      "Când au sosit părinții lui Andrei, acesta s-a bucurat atât de tare încât a ieșit înșosetat în curte să-i întâmpine.",
    ],
    etymology:
      'Derivat de la cuvântul "șosetă" cu adăugarea prefixului "în-" pentru a indica starea de a purta șosete, dar fără încălțăminte.',
  },
  {
    slug: "vantos",
    word: "Vântos/Vântoasă",
    partOfSpeech: "adjectiv",
    definition: "Care este expus la vânt sau care este caracterizat de vânt.",
    examples: [
      "Nu am putut lăsa ghivecele pe balcon deoarece era prea vântos.",
      "Vremea din ultimele zile a fost foarte ploioasă, iar astăzi a devenit și vântoasă.",
      "Prognoza meteo prevede o după-amiază vântoasă.",
    ],
    etymology:
      'Derivat de la cuvântul "vânt" cu adăugarea sufixului "-os" pentru a indica caracteristicile vântului.',
  },
];

export default wordList;
