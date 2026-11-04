// جميع الأسئلة الكاملة والنهائية - 400+ سؤال!
const questionBank = [
  // ========== الجزء الأول: المباني الحكومية والوزارات ==========
  {
    "id": 1, "question_ar": "أين يقع البرلمان النمساوي (المجلس الوطني والمجلس الاتحادي)؟",
    "question_de": "Wo befindet sich das Parlament (Nationalrat und Bundesrat)?",
    "correct_answer": "1., Dr.-Karl-Renner-Ring 3",
    "wrong_answers": ["1., Ballhausplatz (Hofburg)", "1., Ballhausplatz 2", "1., Herrengasse 7", "1., Minoritenplatz 8"]
  },
  {
    "id": 2, "question_ar": "أين توجد مستشارية الرئيس الاتحادي؟",
    "question_de": "Wo ist die Präsidentschaftskanzlei des Bundespräsidenten?",
    "correct_answer": "1., Ballhausplatz (Hofburg)",
    "wrong_answers": ["1., Dr.-Karl-Renner-Ring 3", "1., Ballhausplatz 2", "1., Herrengasse 7", "1., Minoritenplatz 8"]
  },
  {
    "id": 3, "question_ar": "أين يقع المكتب الفدرالي (مكتب المستشارية)؟",
    "question_de": "Wo ist das Bundeskanzleramt?",
    "correct_answer": "1., Ballhausplatz 2",
    "wrong_answers": ["1., Dr.-Karl-Renner-Ring 3", "1., Ballhausplatz (Hofburg)", "1., Herrengasse 7", "1., Minoritenplatz 8"]
  },
  {
    "id": 4, "question_ar": "أين مقر وزارة الداخلية؟",
    "question_de": "Wo hat das Bundesministerium für Inneres seinen Sitz?",
    "correct_answer": "1., Herrengasse 7",
    "wrong_answers": ["1., Dr.-Karl-Renner-Ring 3", "1., Ballhausplatz (Hofburg)", "1., Ballhausplatz 2", "1., Minoritenplatz 8"]
  },
  {
    "id": 5, "question_ar": "أين مقر وزارة الشؤون الأوروبية والدولية؟",
    "question_de": "Wo befindet sich das Bundesministerium für Europäische und Internationale Angelegenheiten?",
    "correct_answer": "1., Minoritenplatz 8",
    "wrong_answers": ["1., Dr.-Karl-Renner-Ring 3", "1., Ballhausplatz (Hofburg)", "1., Ballhausplatz 2", "1., Herrengasse 7"]
  },
  {
    "id": 6, "question_ar": "أين مقر وزارة التعليم والعلوم والبحث؟",
    "question_de": "Wo ist das Bundesministerium für Bildung, Wissenschaft und Forschung?",
    "correct_answer": "1., Minoritenplatz 5",
    "wrong_answers": ["1., Minoritenplatz 8", "1., Dr.-Karl-Renner-Ring 3", "2., Taborstraße 1-3", "3., Radetzkystraße 2"]
  },
  {
    "id": 7, "question_ar": "أين مقر وزارة الرقمنة وموقع الأعمال؟",
    "question_de": "Wo hat das Bundesministerium für Digitalisierung und Wirtschaftsstandort seinen Sitz?",
    "correct_answer": "1., Stubenring 1",
    "wrong_answers": ["1., Herrengasse 7", "1., Johannesgasse 5", "3., Radetzkystraße 2", "1., Minoritenplatz 8"]
  },
  {
    "id": 8, "question_ar": "أين مقر وزارة العمل؟",
    "question_de": "Wo befindet sich das Bundesministerium für Arbeit?",
    "correct_answer": "2., Taborstraße 1-3",
    "wrong_answers": ["1., Herrengasse 7", "1., Johannesgasse 5", "3., Radetzkystraße 2", "1., Minoritenplatz 8"]
  },
  {
    "id": 9, "question_ar": "أين مقر وزارة المالية؟",
    "question_de": "Wo ist das Bundesministerium für Finanzen?",
    "correct_answer": "1., Johannesgasse 5",
    "wrong_answers": ["1., Herrengasse 7", "1., Stubenring 1", "3., Radetzkystraße 2", "2., Taborstraße 1-3"]
  },
  {
    "id": 10, "question_ar": "أين مقر وزارة حماية المناخ والبيئة والطاقة والنقل والابتكار والتكنولوجيا؟",
    "question_de": "Wo hat das Bundesministerium für Klimaschutz, Umwelt, Energie, Mobilität, Innovation und Technologie seinen Sitz?",
    "correct_answer": "3., Radetzkystraße 2",
    "wrong_answers": ["1., Herrengasse 7", "1., Stubenring 1", "7., Museumstraße 7", "1., Minoritenplatz 8"]
  },
  {
    "id": 11, "question_ar": "أين مقر وزارة الفنون والثقافة والخدمة العامة والرياضة؟",
    "question_de": "Wo befindet sich das Bundesministerium für Kunst, Kultur, öffentlichen Dienst und Sport?",
    "correct_answer": "3., Radetzkystraße 2",
    "wrong_answers": ["1., Herrengasse 7", "1., Stubenring 1", "7., Museumstraße 7", "1., Minoritenplatz 8"]
  },
  {
    "id": 12, "question_ar": "أين مقر وزارة الزراعة والمناطق والسياحة؟",
    "question_de": "Wo ist das Bundesministerium für Landwirtschaft, Regionen und Tourismus?",
    "correct_answer": "1., Stubenring 1",
    "wrong_answers": ["1., Herrengasse 7", "1., Johannesgasse 5", "3., Radetzkystraße 2", "1., Minoritenplatz 8"]
  },
  {
    "id": 13, "question_ar": "أين مقر وزارة الشؤون الاجتماعية والصحة والرعاية وحماية المستهلك؟",
    "question_de": "Wo hat das Bundesministerium für Soziales, Gesundheit, Pflege und Konsumentenschutz seinen Sitz?",
    "correct_answer": "1., Stubenring 1",
    "wrong_answers": ["1., Herrengasse 7", "2., Taborstraße 1-3", "3., Radetzkystraße 2", "1., Minoritenplatz 8"]
  },
  {
    "id": 14, "question_ar": "أين مقر وزارة العدل؟",
    "question_de": "Wo befindet sich das Bundesministerium für Justiz?",
    "correct_answer": "7., Museumstraße 7",
    "wrong_answers": ["1., Herrengasse 7", "1., Stubenring 1", "3., Radetzkystraße 2", "1., Minoritenplatz 8"]
  },
  {
    "id": 15, "question_ar": "أين مقر وزارة الدفاع الوطني؟",
    "question_de": "Wo ist das Bundesministerium für Landesverteidigung?",
    "correct_answer": "9., Roßauer Lände 1",
    "wrong_answers": ["1., Herrengasse 7", "3., Radetzkystraße 2", "7., Museumstraße 7", "1., Minoritenplatz 8"]
  },
  {
    "id": 16, "question_ar": "أين يقع مبنى البرلمان الإقليمي والحكومة الإقليمية والإدارة البلدية لفينا؟",
    "question_de": "Wo befinden sich Landtag, Landesregierung und Gemeindeverwaltung für Wien?",
    "correct_answer": "1., Rathausplatz (Rathaus)",
    "wrong_answers": ["1., Ballhausplatz (Hofburg)", "1., Dr.-Karl-Renner-Ring 3", "1., Freyung 8", "1., Herrengasse 7"]
  },
  
  // ========== الجزء الثاني: المباني القضائية ==========
  {
    "id": 17, "question_ar": "أين يقع المحكمة الدستورية؟",
    "question_de": "Wo ist der Verfassungsgerichtshof?",
    "correct_answer": "1., Freyung 8",
    "wrong_answers": ["1., Judenplatz 11", "1., Schmerlingplatz 10-11", "8., Landesgerichtsstraße 11", "3., Marxergasse 1a"]
  },
  {
    "id": 18, "question_ar": "أين يقع المحكمة الإدارية؟",
    "question_de": "Wo ist der Verwaltungsgerichtshof?",
    "correct_answer": "1., Judenplatz 11",
    "wrong_answers": ["1., Freyung 8", "1., Schmerlingplatz 10-11", "8., Landesgerichtsstraße 11", "3., Marxergasse 1a"]
  },
  {
    "id": 19, "question_ar": "أين يقع مبنى 'قصر العدالة' (يضم محكمة النقض، محكمة الاستئناف، النيابة العامة، المحكمة الإقليمية للقضايا المدنية)؟",
    "question_de": "Wo befindet sich der 'Justizpalast' (Oberster Gerichtshof, Oberlandesgericht Wien, Oberstaatsanwaltschaft, Landesgericht f. Zivilrechtssachen)?",
    "correct_answer": "1., Schmerlingplatz 10-11",
    "wrong_answers": ["1., Freyung 8", "1., Judenplatz 11", "8., Landesgerichtsstraße 11", "3., Marxergasse 1a"]
  },
  {
    "id": 20, "question_ar": "أين يقع المحكمة الإقليمية للقضايا الجنائية؟",
    "question_de": "Wo ist das Landesgericht f. Strafsachen?",
    "correct_answer": "8., Landesgerichtsstraße 11",
    "wrong_answers": ["1., Freyung 8", "1., Judenplatz 11", "1., Schmerlingplatz 10-11", "3., Marxergasse 1a"]
  },
  {
    "id": 21, "question_ar": "أين يقع السجن المركزي فيينا جوزيفشتات؟",
    "question_de": "Wo ist die Justizanstalt Wien Josefstadt?",
    "correct_answer": "8., Wickenburggasse 18-20",
    "wrong_answers": ["8., Landesgerichtsstraße 11", "8., Hernalser Gürtel 6-12", "3., Marxergasse 1a", "1., Schmerlingplatz 10-11"]
  },
  {
    "id": 22, "question_ar": "أين يقع مركز العدالة فيينا ميتي (المحكمة التجارية، محكمة المقاطعة للقضايا التجارية ومحكمة المقاطعة للمدينة الداخلية)؟",
    "question_de": "Wo ist das Justiz-Zentrum Wien Mitte (Handelsgericht Wien, Bezirksgericht für Handelssachen und Bezirksgericht Innere Stadt)?",
    "correct_answer": "3., Marxergasse 1a",
    "wrong_answers": ["1., Schmerlingplatz 10-11", "8., Landesgerichtsstraße 11", "9., Althanstraße 39-45", "8., Wickenburggasse 18-20"]
  },
  {
    "id": 23, "question_ar": "أين يقع المحكمة الاجتماعية والعملية فيينا؟",
    "question_de": "Wo ist das Arbeits- und Sozialgericht Wien?",
    "correct_answer": "9., Althanstraße 39-45",
    "wrong_answers": ["3., Marxergasse 1a", "8., Landesgerichtsstraße 11", "1., Schmerlingplatz 10-11", "8., Wickenburggasse 18-20"]
  },
  {
    "id": 24, "question_ar": "أين يقع سجن المحكمة الإقليمية II؟",
    "question_de": "Wo ist das Landesgerichtliche Gefangenenhaus II?",
    "correct_answer": "8., Hernalser Gürtel 6-12",
    "wrong_answers": ["8., Wickenburggasse 18-20", "8., Landesgerichtsstraße 11", "3., Marxergasse 1a", "9., Althanstraße 39-45"]
  },
  {
    "id": 25, "question_ar": "أين يقع ديوان المحاسبة؟",
    "question_de": "Wo ist der Rechnungshof?",
    "correct_answer": "3., Dampfschiffstraße 2",
    "wrong_answers": ["1., Freyung 8", "1., Judenplatz 11", "1., Schmerlingplatz 10-11", "3., Marxergasse 1a"]
  },
  
  // ========== الجزء الثالث: الشرطة والدوائر الأمنية ==========
  {
    "id": 26, "question_ar": "أين توجد مديرية الشرطة الفيدرالية فيينا - إدارة الأمن؟",
    "question_de": "Wo ist die Bundespolizeidirektion Wien - Sicherheitsdirektion?",
    "correct_answer": "1., Schottenring 7-9",
    "wrong_answers": ["8., Hernalser Gürtel 6-12", "3., Dietrichgasse 27", "1., Deutschmeisterplatz 3", "3., Juchgasse 19"]
  },
  {
    "id": 27, "question_ar": "أين يقع مكتب شرطة الأجانب؟",
    "question_de": "Wo ist das Fremdenpolizeiliche Büro?",
    "correct_answer": "8., Hernalser Gürtel 6-12",
    "wrong_answers": ["1., Schottenring 7-9", "3., Dietrichgasse 27", "1., Deutschmeisterplatz 3", "3., Juchgasse 19"]
  },
  {
    "id": 28, "question_ar": "أين يقع مكتب المرور (قسم رخصة القيادة/التاكسي)؟",
    "question_de": "Wo ist das Verkehrsamt (Führerschein/Taxireferat)?",
    "correct_answer": "3., Dietrichgasse 27",
    "wrong_answers": ["1., Schottenring 7-9", "8., Hernalser Gürtel 6-12", "1., Deutschmeisterplatz 3", "3., Juchgasse 19"]
  },
  {
    "id": 29, "question_ar": "أين يقع مركز شرطة المنطقة الداخلية؟",
    "question_de": "Wo ist das Stadtpolizeikommando Innere Stadt?",
    "correct_answer": "1., Deutschmeisterplatz 3",
    "wrong_answers": ["3., Juchgasse 19", "5., Viktor Christ-Gasse 19", "8., Fuhrmannsgasse 5", "10., Van der Nüll-Gasse 11"]
  },
  {
    "id": 30, "question_ar": "أين يقع مركز شرطة المنطقة الثالثة؟",
    "question_de": "Wo ist das Stadtpolizeikommando Landstraße?",
    "correct_answer": "3., Juchgasse 19",
    "wrong_answers": ["1., Deutschmeisterplatz 3", "5., Viktor Christ-Gasse 19", "8., Fuhrmannsgasse 5", "10., Van der Nüll-Gasse 11"]
  },
  {
    "id": 31, "question_ar": "أين يقع مركز شرطة المنطقة الخامسة (للمناطق 4، 5 و 6)؟",
    "question_de": "Wo ist das Stadtpolizeikommando Margareten (f.d. Bezirke 4, 5 und 6)?",
    "correct_answer": "5., Viktor Christ-Gasse 19",
    "wrong_answers": ["1., Deutschmeisterplatz 3", "3., Juchgasse 19", "8., Fuhrmannsgasse 5", "10., Van der Nüll-Gasse 11"]
  },
  {
    "id": 32, "question_ar": "أين يقع مركز شرطة المنطقة الثامنة (للمناطق 7، 8 و 9)؟",
    "question_de": "Wo ist das Stadtpolizeikommando Josefstadt (f.d. Bezirke 7, 8 und 9)?",
    "correct_answer": "8., Fuhrmannsgasse 5",
    "wrong_answers": ["1., Deutschmeisterplatz 3", "3., Juchgasse 19", "5., Viktor Christ-Gasse 19", "10., Van der Nüll-Gasse 11"]
  },
  {
    "id": 33, "question_ar": "أين يقع مركز شرطة المنطقة العاشرة؟",
    "question_de": "Wo ist das Stadtpolizeikommando Favoriten?",
    "correct_answer": "10., Van der Nüll-Gasse 11",
    "wrong_answers": ["1., Deutschmeisterplatz 3", "3., Juchgasse 19", "5., Viktor Christ-Gasse 19", "8., Fuhrmannsgasse 5"]
  },
  {
    "id": 34, "question_ar": "أين يقع مركز شرطة المنطقة الحادية عشر؟",
    "question_de": "Wo ist das Stadtpolizeikommando Simmering?",
    "correct_answer": "11., Enkplatz 3",
    "wrong_answers": ["10., Van der Nüll-Gasse 11", "12., Hohenbergstraße 1", "15., Tannengasse 6", "16., Wattgasse 15"]
  },
  {
    "id": 35, "question_ar": "أين يقع مركز شرطة المنطقة الثانية عشر (للمناطق 12 و 13)؟",
    "question_de": "Wo ist das Stadtpolizeikommando Meidling (f.d. Bezirke 12 und 13)?",
    "correct_answer": "12., Hohenbergstraße 1",
    "wrong_answers": ["10., Van der Nüll-Gasse 11", "11., Enkplatz 3", "15., Tannengasse 6", "16., Wattgasse 15"]
  },
  {
    "id": 36, "question_ar": "أين يقع مركز شرطة المنطقة الخامسة عشر (للمناطق 14 و 15)؟",
    "question_de": "Wo ist das Stadtpolizeikommando Fünfhaus (f.d. Bezirke 14 und 15)?",
    "correct_answer": "15., Tannengasse 6",
    "wrong_answers": ["12., Hohenbergstraße 1", "16., Wattgasse 15", "19., Hohe Warte 32", "20., Pappenheimgasse 33"]
  },
  {
    "id": 37, "question_ar": "أين يقع مركز شرطة المنطقة السادسة عشر (للمناطق 16 و 17)؟",
    "question_de": "Wo ist das Stadtpolizeikommando Ottakring (f.d. Bezirke 16 und 17)?",
    "correct_answer": "16., Wattgasse 15",
    "wrong_answers": ["12., Hohenbergstraße 1", "15., Tannengasse 6", "19., Hohe Warte 32", "20., Pappenheimgasse 33"]
  },
  {
    "id": 38, "question_ar": "أين يقع مركز شرطة المنطقة التاسعة عشر (للمناطق 18 و 19)؟",
    "question_de": "Wo ist das Stadtpolizeikommando Döbling (f.d. Bezirke 18 und 19)?",
    "correct_answer": "19., Hohe Warte 32",
    "wrong_answers": ["16., Wattgasse 15", "20., Pappenheimgasse 33", "21., Hermann Bahr-Straße 3", "22., Wagramer Straße 89"]
  },
  {
    "id": 39, "question_ar": "أين يقع مركز شرطة المنطقة العشرون (للمناطق 2 و 20)؟",
    "question_de": "Wo ist das Stadtpolizeikommando Brigittenau (f.d. Bezirke 2 und 20)?",
    "correct_answer": "20., Pappenheimgasse 33",
    "wrong_answers": ["19., Hohe Warte 32", "21., Hermann Bahr-Straße 3", "22., Wagramer Straße 89", "23., Lehmanngasse 3a"]
  },
  {
    "id": 40, "question_ar": "أين يقع مركز شرطة المنطقة الحادية والعشرون؟",
    "question_de": "Wo ist das Stadtpolizeikommando Floridsdorf?",
    "correct_answer": "21., Hermann Bahr-Straße 3",
    "wrong_answers": ["19., Hohe Warte 32", "20., Pappenheimgasse 33", "22., Wagramer Straße 89", "23., Lehmanngasse 3a"]
  },
  {
    "id": 41, "question_ar": "أين يقع مركز شرطة المنطقة الثانية والعشرون؟",
    "question_de": "Wo ist das Stadtpolizeikommando Donaustadt?",
    "correct_answer": "22., Wagramer Straße 89",
    "wrong_answers": ["20., Pappenheimgasse 33", "21., Hermann Bahr-Straße 3", "23., Lehmanngasse 3a", "19., Hohe Warte 32"]
  },
  {
    "id": 42, "question_ar": "أين يقع مركز شرطة المنطقة الثالثة والعشرون؟",
    "question_de": "Wo ist das Stadtpolizeikommando Liesing?",
    "correct_answer": "23., Lehmanngasse 3a",
    "wrong_answers": ["21., Hermann Bahr-Straße 3", "22., Wagramer Straße 89", "20., Pappenheimgasse 33", "19., Hohe Warte 32"]
  },
  
  // ========== الجزء الرابع: البريد والمواصلات والنقل ==========
  {
    "id": 43, "question_ar": "أين يقع مكتب البريد الرئيسي؟",
    "question_de": "Wo ist das Hauptpostamt?",
    "correct_answer": "1., Fleischmarkt 19",
    "wrong_answers": ["9., Althanstraße 10", "15., Europaplatz 3", "23., Halban-Kurz-Straße 11", "10., Am Hauptbahnhof 1"]
  },
  {
    "id": 44, "question_ar": "أين يقع مكتب البريد في محطة فرانز يوزف؟",
    "question_de": "Wo ist das Postamt am Franz Josefs-Bahnhof?",
    "correct_answer": "9., Althanstraße 10",
    "wrong_answers": ["1., Fleischmarkt 19", "15., Europaplatz 3", "23., Halban-Kurz-Straße 11", "10., Am Hauptbahnhof 1"]
  },
  {
    "id": 45, "question_ar": "أين يقع مكتب البريد في محطة القطار الغربية (Westbahnhof)؟",
    "question_de": "Wo ist das Postamt am Westbahnhof?",
    "correct_answer": "15., Europaplatz 3",
    "wrong_answers": ["1., Fleischmarkt 19", "9., Althanstraße 10", "23., Halban-Kurz-Straße 11", "10., Am Hauptbahnhof 1"]
  },
  {
    "id": 46, "question_ar": "أين يقع مركز توزيع البريد؟",
    "question_de": "Wo ist das Post-Verteilerzentrum?",
    "correct_answer": "23., Halban-Kurz-Straße 11",
    "wrong_answers": ["1., Fleischmarkt 19", "9., Althanstraße 10", "15., Europaplatz 3", "10., Am Hauptbahnhof 1"]
  },
  {
    "id": 47, "question_ar": "أين يقع محطة القطارات الرئيسية فيينا؟",
    "question_de": "Wo ist der Hauptbahnhof Wien?",
    "correct_answer": "10., Am Hauptbahnhof 1",
    "wrong_answers": ["9., Nordbergstraße", "15., Europaplatz/Felberstraße", "3., Landstraßer Hauptstraße", "1., Fleischmarkt 19"]
  },
  {
    "id": 48, "question_ar": "أين يقع محطة فرانز يوزف للقطارات؟",
    "question_de": "Wo ist der Franz Josefs-Bahnhof?",
    "correct_answer": "9., Nordbergstraße",
    "wrong_answers": ["10., Am Hauptbahnhof 1", "15., Europaplatz/Felberstraße", "3., Landstraßer Hauptstraße", "2., Praterstern"]
  },
  {
    "id": 49, "question_ar": "أين يقع محطة القطار الغربية؟",
    "question_de": "Wo ist der Westbahnhof?",
    "correct_answer": "15., Europaplatz/Felberstraße",
    "wrong_answers": ["10., Am Hauptbahnhof 1", "9., Nordbergstraße", "3., Landstraßer Hauptstraße", "2., Praterstern"]
  },
  {
    "id": 50, "question_ar": "أين يقع محطة القطار فيينا-ميتي؟",
    "question_de": "Wo ist der Bahnhof Wien-Mitte?",
    "correct_answer": "3., Landstraßer Hauptstraße",
    "wrong_answers": ["10., Am Hauptbahnhof 1", "9., Nordbergstraße", "15., Europaplatz/Felberstraße", "2., Praterstern"]
  },
  {
    "id": 51, "question_ar": "أين يقع City Airport Train (CAT)؟",
    "question_de": "Wo ist der City-Air-Terminal / CAT (City Airport Train)?",
    "correct_answer": "3., Gigergasse/ Marxergasse",
    "wrong_answers": ["3., Landstraßer Hauptstraße", "10., Am Hauptbahnhof 1", "9., Nordbergstraße", "15., Europaplatz/Felberstraße"]
  },
  {
    "id": 52, "question_ar": "أين يقع محطة القطار فيينا-نورد؟",
    "question_de": "Wo ist der Bahnhof Wien-Nord?",
    "correct_answer": "2., Praterstern",
    "wrong_answers": ["10., Am Hauptbahnhof 1", "9., Nordbergstraße", "15., Europaplatz/Felberstraße", "3., Landstraßer Hauptstraße"]
  },
  {
    "id": 53, "question_ar": "أين يقع محطة القطار هيتلدورف؟",
    "question_de": "Wo ist der Bahnhof Hütteldorf?",
    "correct_answer": "14., Keißlergasse",
    "wrong_answers": ["10., Am Hauptbahnhof 1", "9., Nordbergstraße", "15., Europaplatz/Felberstraße", "3., Landstraßer Hauptstraße"]
  },
  {
    "id": 54, "question_ar": "أين يقع محطة القطار مايدلينغ؟",
    "question_de": "Wo ist der Bahnhof Meidling?",
    "correct_answer": "12., Eichenstraße",
    "wrong_answers": ["14., Keißlergasse", "10., Am Hauptbahnhof 1", "9., Nordbergstraße", "15., Europaplatz/Felberstraße"]
  },
  {
    "id": 55, "question_ar": "أين يقع محطة الحافلات الدولية؟",
    "question_de": "Wo ist der Autobusbahnhof (Intern. Busse)?",
    "correct_answer": "3., Erdbergstraße/ U3",
    "wrong_answers": ["10., Südtirolerplatz", "21., Floridsdorf", "22., Dr. Adolf-Schärf-Platz", "11., Simmeringer Platz"]
  },
  {
    "id": 56, "question_ar": "أين يقع محطة الحافلات في سودتيورلربلاتس؟",
    "question_de": "Wo ist der Autobusbahnhof Südtiroler Platz?",
    "correct_answer": "10., Südtirolerplatz/ Wiedner Gürtel/U1",
    "wrong_answers": ["3., Erdbergstraße/ U3", "21., Floridsdorf", "22., Dr. Adolf-Schärf-Platz", "11., Simmeringer Platz"]
  },
  {
    "id": 57, "question_ar": "أين يقع محطة الحافلات فلوريدزدورف؟",
    "question_de": "Wo ist der Autobusbahnhof Floridsdorf?",
    "correct_answer": "21., Floridsdorf/ Schloßhofer Str./U6",
    "wrong_answers": ["3., Erdbergstraße/ U3", "10., Südtirolerplatz", "22., Dr. Adolf-Schärf-Platz", "11., Simmeringer Platz"]
  },
  {
    "id": 58, "question_ar": "أين يقع محطة الحافلات كاغران؟",
    "question_de": "Wo ist der Autobusbahnhof Kagran?",
    "correct_answer": "22., Dr. Adolf-Schärf-Platz/U1",
    "wrong_answers": ["3., Erdbergstraße/ U3", "10., Südtirolerplatz", "21., Floridsdorf", "11., Simmeringer Platz"]
  },
  {
    "id": 59, "question_ar": "أين يقع محطة الحافلات سيمرينغ؟",
    "question_de": "Wo ist der Autobusbahnhof Simmering?",
    "correct_answer": "11., Simmeringer Platz/U3",
    "wrong_answers": ["3., Erdbergstraße/ U3", "10., Südtirolerplatz", "21., Floridsdorf", "22., Dr. Adolf-Schärf-Platz"]
  },
  {
    "id": 60, "question_ar": "أين يقع Vienna Busterminal Stadion Center؟",
    "question_de": "Wo ist der Vienna Busterminal Stadion Center?",
    "correct_answer": "2., Olympiaplatz/ Engerthstraße 242",
    "wrong_answers": ["3., Erdbergstraße/ U3", "10., Südtirolerplatz", "11., Simmeringer Platz", "22., Dr. Adolf-Schärf-Platz"]
  },
  {
    "id": 61, "question_ar": "أين يقع مركز الرحلات البحرية DDSG (جسر الرايخ)؟",
    "question_de": "Wo ist das DDSG-Schifffahrtszentrum (Wien-Reichsbrücke)?",
    "correct_answer": "2., Handelskai 265",
    "wrong_answers": ["1., Franz-Josefs-Kai/Schwedenbrücke", "2., Seitenhafenstraße 15", "2., Freudenauer Hafenstraße 8-10", "11., Alberner Hafen Zufahrtsstraße"]
  },
  {
    "id": 62, "question_ar": "أين توجد محطة القوارب البخارية عند جسر السويد؟",
    "question_de": "Wo ist die Dampfschiffstation Schwedenbrücke (Wien-Rundfahrten)?",
    "correct_answer": "1., Franz-Josefs-Kai/Schwedenbrücke",
    "wrong_answers": ["2., Handelskai 265", "2., Seitenhafenstraße 15", "2., Freudenauer Hafenstraße 8-10", "11., Alberner Hafen Zufahrtsstraße"]
  },
  {
    "id": 63, "question_ar": "أين يقع ميناء فيينا (المنطقة الحرة الجمركية)؟",
    "question_de": "Wo ist der Wiener Hafen (Zollfreizone)?",
    "correct_answer": "2., Seitenhafenstraße 15",
    "wrong_answers": ["1., Franz-Josefs-Kai/Schwedenbrücke", "2., Handelskai 265", "2., Freudenauer Hafenstraße 8-10", "11., Alberner Hafen Zufahrtsstraße"]
  },
  {
    "id": 64, "question_ar": "أين يقع ميناء فريدناور؟",
    "question_de": "Wo ist der Freudenauer Hafen?",
    "correct_answer": "2., Freudenauer Hafenstraße 8-10",
    "wrong_answers": ["2., Handelskai 265", "1., Franz-Josefs-Kai/Schwedenbrücke", "2., Seitenhafenstraße 15", "11., Alberner Hafen Zufahrtsstraße"]
  },
  {
    "id": 65, "question_ar": "أين يقع ميناء ألبيرنر؟",
    "question_de": "Wo ist der Alberner Hafen?",
    "correct_answer": "11., Alberner Hafen Zufahrtsstraße",
    "wrong_answers": ["2., Freudenauer Hafenstraße 8-10", "2., Handelskai 265", "19., Kuchelauer Hafenstraße", "2., Seitenhafenstraße 15"]
  },
  {
    "id": 66, "question_ar": "أين يقع ميناء كوتشيلاور؟",
    "question_de": "Wo ist der Kuchelauer Hafen?",
    "correct_answer": "19., Kuchelauer Hafenstraße",
    "wrong_answers": ["11., Alberner Hafen Zufahrtsstraße", "2., Freudenauer Hafenstraße 8-10", "2., Handelskai 265", "2., Seitenhafenstraße 15"]
  },
  {
    "id": 67, "question_ar": "أين توجد مستودعات تخزين المركبات MA 48؟",
    "question_de": "Wo ist die Kfz-Verwahrstelle der MA 48?",
    "correct_answer": "11., Jedletzbergerstraße 1",
    "wrong_answers": ["21., Trauzlgasse 1", "2., Handelskai 265", "2., Seitenhafenstraße 15", "3., Dietrichgasse 27"]
  },
  {
    "id": 68, "question_ar": "أين يقع مركز الاختبارات الفيدرالية للمرور؟",
    "question_de": "Wo ist die Bundesanstalt Verkehr (Bundesprüfanstalt)?",
    "correct_answer": "21., Trauzlgasse 1",
    "wrong_answers": ["11., Jedletzbergerstraße 1", "3., Dietrichgasse 27", "1., Deutschmeisterplatz 3", "2., Handelskai 265"]
  },
  
  // ========== الجزء الخامس: وسائل الإعلام والصحف ==========
  {
    "id": 69, "question_ar": "أين يقع مقر الإذاعة النمساوية ORF؟",
    "question_de": "Wo befindet sich der ORF/Rundfunk?",
    "correct_answer": "4., Argentinierstraße 30a",
    "wrong_answers": ["19., Heiligenstädter Lände 27c", "13., Würzburggasse 30", "19., Muthgasse 2", "19., Leopold-Ungar-Platz 1"]
  },
  {
    "id": 70, "question_ar": "أين يقع استوديو ORF/Ö3؟",
    "question_de": "Wo ist der ORF/Rundfunk/Ö3?",
    "correct_answer": "19., Heiligenstädter Lände 27c",
    "wrong_answers": ["4., Argentinierstraße 30a", "13., Würzburggasse 30", "19., Muthgasse 2", "19., Leopold-Ungar-Platz 1"]
  },
  {
    "id": 71, "question_ar": "أين يقع مقر التلفزيون النمساوي ORF؟",
    "question_de": "Wo ist das ORF/Fernsehen?",
    "correct_answer": "13., Würzburggasse 30",
    "wrong_answers": ["4., Argentinierstraße 30a", "19., Heiligenstädter Lände 27c", "19., Muthgasse 2", "19., Leopold-Ungar-Platz 1"]
  },
  {
    "id": 72, "question_ar": "أين توجد صحيفة 'كرونن تسايتونغ'؟",
    "question_de": "Wo ist die 'Kronen-Zeitung'?",
    "correct_answer": "19., Muthgasse 2",
    "wrong_answers": ["19., Leopold-Ungar-Platz 1", "23., Richard-Strauss-Straße 16", "23., Tenschertstraße 7", "4., Argentinierstraße 30a"]
  },
  {
    "id": 73, "question_ar": "أين توجد صحيفة 'كورييه'؟",
    "question_de": "Wo ist der 'Kurier' – Redaktion?",
    "correct_answer": "19., Leopold-Ungar-Platz 1",
    "wrong_answers": ["19., Muthgasse 2", "23., Richard-Strauss-Straße 16", "23., Tenschertstraße 7", "4., Argentinierstraße 30a"]
  },
  {
    "id": 74, "question_ar": "أين يقع مركز الطباعة 'Media-Print'؟",
    "question_de": "Wo ist das Druckzentrum 'Media-Print'?",
    "correct_answer": "23., Richard-Strauss-Straße 16",
    "wrong_answers": ["19., Muthgasse 2", "19., Leopold-Ungar-Platz 1", "23., Tenschertstraße 7", "4., Argentinierstraße 30a"]
  },
  {
    "id": 75, "question_ar": "أين توجد دار الطباعة الحكومية النمساوية؟",
    "question_de": "Wo ist die Österreichische Staatsdruckerei?",
    "correct_answer": "23., Tenschertstraße 7",
    "wrong_answers": ["19., Muthgasse 2", "19., Leopold-Ungar-Platz 1", "23., Richard-Strauss-Straße 16", "6., Laimgrubengasse 10"]
  },
  {
    "id": 76, "question_ar": "أين توجد وكالة الأنباء النمساوية؟",
    "question_de": "Wo ist die APA-Austria Presseagentur (IPZ)?",
    "correct_answer": "6., Laimgrubengasse 10",
    "wrong_answers": ["23., Tenschertstraße 7", "19., Muthgasse 2", "19., Leopold-Ungar-Platz 1", "23., Richard-Strauss-Straße 16"]
  },
  
  // ========== الجزء السادس: الغرف المهنية ==========
  {
    "id": 77, "question_ar": "أين توجد غرفة العمال فيينا؟",
    "question_de": "Wo ist die Arbeiterkammer Wien?",
    "correct_answer": "4., Prinz-Eugen-Straße 20-22",
    "wrong_answers": ["4., Wiedner Hauptstraße 63", "2., Straße der Wiener Wirtschaft 1", "2., Straße der Wiener Wirtschaft 1 (Fachgruppe)", "1., Wipplingerstraße 8"]
  },
  {
    "id": 78, "question_ar": "أين توجد غرفة الاقتصاد النمساوية؟",
    "question_de": "Wo ist die Wirtschaftskammer Österreich?",
    "correct_answer": "4., Wiedner Hauptstraße 63",
    "wrong_answers": ["4., Prinz-Eugen-Straße 20-22", "2., Straße der Wiener Wirtschaft 1", "2., Straße der Wiener Wirtschaft 1 (Fachgruppe)", "1., Wipplingerstraße 8"]
  },
  {
    "id": 79, "question_ar": "أين توجد غرفة الاقتصاد في فيينا؟",
    "question_de": "Wo ist die Wirtschaftskammer Wien?",
    "correct_answer": "2., Straße der Wiener Wirtschaft 1",
    "wrong_answers": ["4., Prinz-Eugen-Straße 20-22", "4., Wiedner Hauptstraße 63", "1., Wipplingerstraße 8", "2., Karmelitergasse 9"]
  },
  {
    "id": 80, "question_ar": "أين توجد المجموعة المتخصصة في فيينا لنقل الأشخاص؟",
    "question_de": "Wo ist die Fachgruppe Wien für Personenbeförderungsgewerbe?",
    "correct_answer": "2., Straße der Wiener Wirtschaft 1",
    "wrong_answers": ["4., Prinz-Eugen-Straße 20-22", "4., Wiedner Hauptstraße 63", "2., Straße der Wiener Wirtschaft 1 (WKW)", "1., Wipplingerstraße 8"]
  },
  
  // ========== الجزء السابع: المكاتب البلدية ==========
  {
    "id": 81, "question_ar": "أين يقع المكتب البلدي للمنطقتين 1 و 8؟",
    "question_de": "Wo ist das Magistratische Bezirksamt für den 1. und 8. Bezirk?",
    "correct_answer": "1., Wipplingerstraße 8",
    "wrong_answers": ["2., Karmelitergasse 9", "3., Karl-Boromäus-Platz 3", "5., Rechte Wienzeile 105", "4., Prinz-Eugen-Straße 20-22"]
  },
  {
    "id": 82, "question_ar": "أين يقع المكتب البلدي للمنطقة الثانية؟",
    "question_de": "Wo ist das Magistratische Bezirksamt für den 2. Bezirk?",
    "correct_answer": "2., Karmelitergasse 9",
    "wrong_answers": ["1., Wipplingerstraße 8", "3., Karl-Boromäus-Platz 3", "5., Rechte Wienzeile 105", "7., Hermanngasse 24-26"]
  },
  {
    "id": 83, "question_ar": "أين يقع المكتب البلدي للمنطقة الثالثة؟",
    "question_de": "Wo ist das Magistratische Bezirksamt für den 3. Bezirk?",
    "correct_answer": "3., Karl-Boromäus-Platz 3",
    "wrong_answers": ["1., Wipplingerstraße 8", "2., Karmelitergasse 9", "5., Rechte Wienzeile 105", "7., Hermanngasse 24-26"]
  },
  {
    "id": 84, "question_ar": "أين يقع المكتب البلدي للمنطقتين 4 و 5؟",
    "question_de": "Wo ist das Magistratische Bezirksamt für den 4. und 5. Bezirk?",
    "correct_answer": "5., Rechte Wienzeile 105",
    "wrong_answers": ["1., Wipplingerstraße 8", "2., Karmelitergasse 9", "3., Karl-Boromäus-Platz 3", "7., Hermanngasse 24-26"]
  },
  {
    "id": 85, "question_ar": "أين يقع المكتب البلدي للمنطقتين 6 و 7؟",
    "question_de": "Wo ist das Magistratische Bezirksamt für den 6. und 7. Bezirk?",
    "correct_answer": "7., Hermanngasse 24-26",
    "wrong_answers": ["1., Wipplingerstraße 8", "2., Karmelitergasse 9", "3., Karl-Boromäus-Platz 3", "5., Rechte Wienzeile 105"]
  },
  {
    "id": 86, "question_ar": "أين يقع المكتب البلدي للمنطقة التاسعة؟",
    "question_de": "Wo ist das Magistratische Bezirksamt für den 9. Bezirk?",
    "correct_answer": "9., Wilhelm Exner-Gasse 5",
    "wrong_answers": ["5., Rechte Wienzeile 105", "7., Hermanngasse 24-26", "10., Laxenburger Straße 43-45", "11., Enkplatz 2"]
  },
  {
    "id": 87, "question_ar": "أين يقع المكتب البلدي للمنطقة العاشرة؟",
    "question_de": "Wo ist das Magistratische Bezirksamt für den 10. Bezirk?",
    "correct_answer": "10., Laxenburger Straße 43-45",
    "wrong_answers": ["9., Wilhelm Exner-Gasse 5", "11., Enkplatz 2", "12., Schönbrunner Straße 259", "13., Hietzinger Kai 1-3"]
  },
  {
    "id": 88, "question_ar": "أين يقع المكتب البلدي للمنطقة الحادية عشرة؟",
    "question_de": "Wo ist das Magistratische Bezirksamt für den 11. Bezirk?",
    "correct_answer": "11., Enkplatz 2",
    "wrong_answers": ["9., Wilhelm Exner-Gasse 5", "10., Laxenburger Straße 43-45", "12., Schönbrunner Straße 259", "13., Hietzinger Kai 1-3"]
  },
  {
    "id": 89, "question_ar": "أين يقع المكتب البلدي للمنطقة الثانية عشرة؟",
    "question_de": "Wo ist das Magistratische Bezirksamt für den 12. Bezirk?",
    "correct_answer": "12., Schönbrunner Straße 259",
    "wrong_answers": ["10., Laxenburger Straße 43-45", "11., Enkplatz 2", "13., Hietzinger Kai 1-3", "15., Gasgasse 8-10"]
  },
  {
    "id": 90, "question_ar": "أين يقع المكتب البلدي للمنطقتين 13 و 14؟",
    "question_de": "Wo ist das Magistratische Bezirksamt für den 13. und 14. Bezirk?",
    "correct_answer": "13., Hietzinger Kai 1-3",
    "wrong_answers": ["11., Enkplatz 2", "12., Schönbrunner Straße 259", "15., Gasgasse 8-10", "16., Richard-Wagner Platz 19"]
  },
  {
    "id": 91, "question_ar": "أين يقع المكتب البلدي للمنطقة الخامسة عشرة؟",
    "question_de": "Wo ist das Magistratische Bezirksamt für den 15. Bezirk?",
    "correct_answer": "15., Gasgasse 8-10",
    "wrong_answers": ["13., Hietzinger Kai 1-3", "16., Richard-Wagner Platz 19", "17., Elterleinplatz 14", "18., Martinstraße 100"]
  },
  {
    "id": 92, "question_ar": "أين يقع المكتب البلدي للمنطقة السادسة عشرة؟",
    "question_de": "Wo ist das Magistratische Bezirksamt für den 16. Bezirk?",
    "correct_answer": "16., Richard-Wagner Platz 19",
    "wrong_answers": ["13., Hietzinger Kai 1-3", "15., Gasgasse 8-10", "17., Elterleinplatz 14", "18., Martinstraße 100"]
  },
  {
    "id": 93, "question_ar": "أين يقع المكتب البلدي للمنطقة السابعة عشرة؟",
    "question_de": "Wo ist das Magistratische Bezirksamt für den 17. Bezirk?",
    "correct_answer": "17., Elterleinplatz 14",
    "wrong_answers": ["15., Gasgasse 8-10", "16., Richard-Wagner Platz 19", "18., Martinstraße 100", "19., Pfarrwiesengasse 23c"]
  },
  {
    "id": 94, "question_ar": "أين يقع المكتب البلدي للمنطقة الثامنة عشرة؟",
    "question_de": "Wo ist das Magistratische Bezirksamt für den 18. Bezirk?",
    "correct_answer": "18., Martinstraße 100",
    "wrong_answers": ["16., Richard-Wagner Platz 19", "17., Elterleinplatz 14", "19., Pfarrwiesengasse 23c", "20., Brigittaplatz 10"]
  },
  {
    "id": 95, "question_ar": "أين يقع المكتب البلدي للمنطقة التاسعة عشرة؟",
    "question_de": "Wo ist das Magistratische Bezirksamt für den 19. Bezirk?",
    "correct_answer": "19., Pfarrwiesengasse 23c",
    "wrong_answers": ["17., Elterleinplatz 14", "18., Martinstraße 100", "20., Brigittaplatz 10", "21., Am Spitz 1"]
  },
  {
    "id": 96, "question_ar": "أين يقع المكتب البلدي للمنطقة العشرين؟",
    "question_de": "Wo ist das Magistratische Bezirksamt für den 20. Bezirk?",
    "correct_answer": "20., Brigittaplatz 10",
    "wrong_answers": ["18., Martinstraße 100", "19., Pfarrwiesengasse 23c", "21., Am Spitz 1", "22., Schrödingerplatz 1"]
  },
  {
    "id": 97, "question_ar": "أين يقع المكتب البلدي للمنطقة الحادية والعشرين؟",
    "question_de": "Wo ist das Magistratische Bezirksamt für den 21. Bezirk?",
    "correct_answer": "21., Am Spitz 1",
    "wrong_answers": ["19., Pfarrwiesengasse 23c", "20., Brigittaplatz 10", "22., Schrödingerplatz 1", "23., Perchtoldsdorfer Straße 2"]
  },
  {
    "id": 98, "question_ar": "أين يقع المكتب البلدي للمنطقة الثانية والعشرين؟",
    "question_de": "Wo ist das Magistratische Bezirksamt für den 22. Bezirk?",
    "correct_answer": "22., Schrödingerplatz 1",
    "wrong_answers": ["20., Brigittaplatz 10", "21., Am Spitz 1", "23., Perchtoldsdorfer Straße 2", "1., Wipplingerstraße 8"]
  },
  {
    "id": 99, "question_ar": "أين يقع المكتب البلدي للمنطقة الثالثة والعشرين؟",
    "question_de": "Wo ist das Magistratische Bezirksamt für den 23. Bezirk?",
    "correct_answer": "23., Perchtoldsdorfer Straße 2",
    "wrong_answers": ["21., Am Spitz 1", "22., Schrödingerplatz 1", "1., Wipplingerstraße 8", "2., Karmelitergasse 9"]
  },
  {
    "id": 100, "question_ar": "أين يقع مكتب الخدمة المعثور عليها؟",
    "question_de": "Wo ist der Fundservice Wien?",
    "correct_answer": "5., Siebenbrunnenfeldgasse 3",
    "wrong_answers": ["1., Wipplingerstraße 8", "10., Laxenburger Straße 43-45", "23., Perchtoldsdorfer Straße 2", "2., Karmelitergasse 9"]
  },
  
  // ========== الجزء الثامن: الفنادق (محدث وكامل) ==========
  {
    "id": 101, "question_ar": "أين يقع فندق بريستول؟",
    "question_de": "Wo ist das Hotel Bristol?",
    "correct_answer": "1., Kärntner Ring 1",
    "wrong_answers": ["1., Kärntner Ring 16", "1., Coburgbastei 4", "1., Schottenring 24", "1., Philharmonikerstraße 4"]
  },
  {
    "id": 102, "question_ar": "أين يقع فندق إمبريال؟",
    "question_de": "Wo ist das Hotel Imperial?",
    "correct_answer": "1., Kärntner Ring 16",
    "wrong_answers": ["1., Kärntner Ring 1", "1., Coburgbastei 4", "1., Schottenring 24", "1., Philharmonikerstraße 4"]
  },
  {
    "id": 103, "question_ar": "أين يقع Palais Coburg Residenz؟",
    "question_de": "Wo ist das Palais Coburg Residenz?",
    "correct_answer": "1., Coburgbastei 4",
    "wrong_answers": ["1., Kärntner Ring 1", "1., Kärntner Ring 16", "1., Schottenring 24", "1., Philharmonikerstraße 4"]
  },
  {
    "id": 104, "question_ar": "أين يقع Palais Hansen Kempinski Vienna؟",
    "question_de": "Wo ist das Palais Hansen Kempinski Vienna?",
    "correct_answer": "1., Schottenring 24",
    "wrong_answers": ["1., Kärntner Ring 1", "1., Kärntner Ring 16", "1., Coburgbastei 4", "1., Philharmonikerstraße 4"]
  },
  {
    "id": 105, "question_ar": "أين يقع فندق ساشر فيينا؟",
    "question_de": "Wo ist das Sacher Wien?",
    "correct_answer": "1., Philharmonikerstraße 4",
    "wrong_answers": ["1., Kärntner Ring 1", "1., Parkring 12a", "1., Uraniastraße 2/Julius-Raab-Platz", "1., Kärntner Ring 16"]
  },
  {
    "id": 106, "question_ar": "أين يقع Vienna Marriott Hotel؟",
    "question_de": "Wo ist das Vienna Marriott Hotel?",
    "correct_answer": "1., Parkring 12a",
    "wrong_answers": ["1., Kärntner Ring 1", "1., Philharmonikerstraße 4", "1., Uraniastraße 2/Julius-Raab-Platz", "1., Schottenring 24"]
  },
  {
    "id": 107, "question_ar": "أين يقع Adagio Vienna City؟",
    "question_de": "Wo ist das Adagio Vienna City?",
    "correct_answer": "1., Uraniastraße 2/Julius-Raab-Platz",
    "wrong_answers": ["1., Parkring 12a", "3., Am Heumarkt 35-37", "1., Stephansplatz 9", "5., Rechte Wienzeile 93-95"]
  },
  {
    "id": 108, "question_ar": "أين يقع فندق Am Konzerthaus؟",
    "question_de": "Wo ist das Am Konzerthaus?",
    "correct_answer": "3., Am Heumarkt 35-37",
    "wrong_answers": ["1., Uraniastraße 2/Julius-Raab-Platz", "1., Parkring 12", "1., Stephansplatz 9", "5., Rechte Wienzeile 93-95"]
  },
  {
    "id": 109, "question_ar": "أين يقع فندق Am Parkring؟",
    "question_de": "Wo ist das Am Parkring?",
    "correct_answer": "1., Parkring 12",
    "wrong_answers": ["3., Am Heumarkt 35-37", "1., Stephansplatz 9", "5., Rechte Wienzeile 93-95", "7., Neubaugürtel 34-36"]
  },
  {
    "id": 110, "question_ar": "أين يقع فندق Am Stephansplatz؟",
    "question_de": "Wo ist das Am Stephansplatz?",
    "correct_answer": "1., Stephansplatz 9",
    "wrong_answers": ["1., Parkring 12", "5., Rechte Wienzeile 93-95", "7., Neubaugürtel 34-36", "10., Gutheil-Schoder-Gasse 7b"]
  },
  {
    "id": 111, "question_ar": "أين يقع فندق أناناس؟",
    "question_de": "Wo ist das Ananas?",
    "correct_answer": "5., Rechte Wienzeile 93-95",
    "wrong_answers": ["1., Stephansplatz 9", "7., Neubaugürtel 34-36", "10., Gutheil-Schoder-Gasse 7b", "2., Taborstraße 8"]
  },
  {
    "id": 112, "question_ar": "أين يقع Arcotel Wimberger Wien؟",
    "question_de": "Wo ist das Arcotel Wimberger Wien?",
    "correct_answer": "7., Neubaugürtel 34-36",
    "wrong_answers": ["5., Rechte Wienzeile 93-95", "10., Gutheil-Schoder-Gasse 7b", "2., Taborstraße 8", "3., Rennweg 99 /Rinnböckstraße 1"]
  },
  {
    "id": 113, "question_ar": "أين يقع فندق Bosei؟",
    "question_de": "Wo ist das Bosei?",
    "correct_answer": "10., Gutheil-Schoder-Gasse 7b",
    "wrong_answers": ["7., Neubaugürtel 34-36", "2., Taborstraße 8", "3., Rennweg 99 /Rinnböckstraße 1", "4., Wiedner Hauptstraße 27-29"]
  },
  {
    "id": 114, "question_ar": "أين يقع City Central Hotel؟",
    "question_de": "Wo ist das City Central?",
    "correct_answer": "2., Taborstraße 8",
    "wrong_answers": ["10., Gutheil-Schoder-Gasse 7b", "3., Rennweg 99 /Rinnböckstraße 1", "4., Wiedner Hauptstraße 27-29", "3., Landstraßer Hauptstraße 120"]
  },
  {
    "id": 115, "question_ar": "أين يقع فندق Doppio؟",
    "question_de": "Wo ist das Doppio?",
    "correct_answer": "3., Rennweg 99 /Rinnböckstraße 1",
    "wrong_answers": ["2., Taborstraße 8", "4., Wiedner Hauptstraße 27-29", "3., Landstraßer Hauptstraße 120", "7., Neubaugürtel 26-28"]
  },
  {
    "id": 116, "question_ar": "أين يقع فندق Erzherzog Rainer؟",
    "question_de": "Wo ist das Erzherzog Rainer?",
    "correct_answer": "4., Wiedner Hauptstraße 27-29",
    "wrong_answers": ["3., Rennweg 99 /Rinnböckstraße 1", "3., Landstraßer Hauptstraße 120", "7., Neubaugürtel 26-28", "5., Margaretenstraße 53"]
  },
  {
    "id": 117, "question_ar": "أين يقع Eurostars Embassy Hotel؟",
    "question_de": "Wo ist das Eurostars Embassy?",
    "correct_answer": "3., Landstraßer Hauptstraße 120",
    "wrong_answers": ["4., Wiedner Hauptstraße 27-29", "7., Neubaugürtel 26-28", "5., Margaretenstraße 53", "7., Mariahilfer Straße 122/Kaiserstraße 1-3"]
  },
  {
    "id": 118, "question_ar": "أين يقع Fleming's Hotel Wien-Westbahnhof؟",
    "question_de": "Wo ist das Fleming`s Hotel Wien-Westbahnhof?",
    "correct_answer": "7., Neubaugürtel 26-28",
    "wrong_answers": ["3., Landstraßer Hauptstraße 120", "5., Margaretenstraße 53", "7., Mariahilfer Straße 122/Kaiserstraße 1-3", "4., Favoritenstraße 12"]
  },
  {
    "id": 119, "question_ar": "أين يقع Holiday Inn Vienna City؟",
    "question_de": "Wo ist das Holiday Inn Vienna City?",
    "correct_answer": "5., Margaretenstraße 53",
    "wrong_answers": ["7., Neubaugürtel 26-28", "7., Mariahilfer Straße 122/Kaiserstraße 1-3", "4., Favoritenstraße 12", "7., Kirchberggasse 6-8"]
  },
  {
    "id": 120, "question_ar": "أين يقع InterCityHotel Wien؟",
    "question_de": "Wo ist das InterCityHotel Wien?",
    "correct_answer": "7., Mariahilfer Straße 122/Kaiserstraße 1-3",
    "wrong_answers": ["5., Margaretenstraße 53", "4., Favoritenstraße 12", "7., Kirchberggasse 6-8", "14., Linzer Straße 165"]
  },
  {
    "id": 121, "question_ar": "أين يقع فندق Johann Strauss؟",
    "question_de": "Wo ist das Johann Strauss?",
    "correct_answer": "4., Favoritenstraße 12",
    "wrong_answers": ["7., Mariahilfer Straße 122/Kaiserstraße 1-3", "7., Kirchberggasse 6-8", "14., Linzer Straße 165", "3., Rennweg 12"]
  },
  {
    "id": 122, "question_ar": "أين يقع K+K Hotel Maria Theresia؟",
    "question_de": "Wo ist das K+K Hotel Maria Theresia?",
    "correct_answer": "7., Kirchberggasse 6-8",
    "wrong_answers": ["4., Favoritenstraße 12", "14., Linzer Straße 165", "3., Rennweg 12", "3., Landstraßer Hauptstraße 28"]
  },
  {
    "id": 123, "question_ar": "أين يقع فندق Kavalier؟",
    "question_de": "Wo ist das Kavalier?",
    "correct_answer": "14., Linzer Straße 165",
    "wrong_answers": ["7., Kirchberggasse 6-8", "3., Rennweg 12", "3., Landstraßer Hauptstraße 28", "8., Josefsgasse 4-6"]
  },
  {
    "id": 124, "question_ar": "أين يقع Lindner Hotel Am Belvedere؟",
    "question_de": "Wo ist das Lindner Hotel Am Belvedere?",
    "correct_answer": "3., Rennweg 12",
    "wrong_answers": ["14., Linzer Straße 165", "3., Landstraßer Hauptstraße 28", "8., Josefsgasse 4-6", "6., Getreidemarkt 5"]
  },
  {
    "id": 125, "question_ar": "أين يقع Mercure Grand Hotel Biedermeier Wien؟",
    "question_de": "Wo ist das Mercure Grand Hotel Biedermeier Wien?",
    "correct_answer": "3., Landstraßer Hauptstraße 28",
    "wrong_answers": ["3., Rennweg 12", "8., Josefsgasse 4-6", "6., Getreidemarkt 5", "2., Hollandstraße 3"]
  },
  {
    "id": 126, "question_ar": "أين يقع Mercure Josefshof Wien am Rathaus؟",
    "question_de": "Wo ist das Mercure Josefshof Wien am Rathaus?",
    "correct_answer": "8., Josefsgasse 4-6",
    "wrong_answers": ["3., Landstraßer Hauptstraße 28", "6., Getreidemarkt 5", "2., Hollandstraße 3", "15., Felberstraße 4"]
  },
  {
    "id": 127, "question_ar": "أين يقع Mercure Secession Wien؟",
    "question_de": "Wo ist das Mercure Secession Wien?",
    "correct_answer": "6., Getreidemarkt 5",
    "wrong_answers": ["8., Josefsgasse 4-6", "2., Hollandstraße 3", "15., Felberstraße 4", "2., Rotensterngasse 12"]
  },
  {
    "id": 128, "question_ar": "أين يقع Mercure Wien City؟",
    "question_de": "Wo ist das Mercure Wien City?",
    "correct_answer": "2., Hollandstraße 3",
    "wrong_answers": ["6., Getreidemarkt 5", "15., Felberstraße 4", "2., Rotensterngasse 12", "22., Wagramer Straße 21"]
  },
  {
    "id": 129, "question_ar": "أين يقع Mercure Wien Westbahnhof؟",
    "question_de": "Wo ist das Mercure Wien Westbahnhof?",
    "correct_answer": "15., Felberstraße 4",
    "wrong_answers": ["2., Hollandstraße 3", "2., Rotensterngasse 12", "22., Wagramer Straße 21", "3., Rennweg 12a"]
  },
  {
    "id": 130, "question_ar": "أين يقع Nestroy Wien Imlauer؟",
    "question_de": "Wo ist das Nestroy Wien Imlauer?",
    "correct_answer": "2., Rotensterngasse 12",
    "wrong_answers": ["15., Felberstraße 4", "22., Wagramer Straße 21", "3., Rennweg 12a", "7., Mariahilfer Straße 32-34"]
  },
  {
    "id": 131, "question_ar": "أين يقع NH Danube City؟",
    "question_de": "Wo ist das NH Danube City?",
    "correct_answer": "22., Wagramer Straße 21",
    "wrong_answers": ["2., Rotensterngasse 12", "3., Rennweg 12a", "7., Mariahilfer Straße 32-34", "2., Aspernbrückengasse 1"]
  },
  {
    "id": 132, "question_ar": "أين يقع NH Wien Belvedere؟",
    "question_de": "Wo ist das NH Wien Belvedere?",
    "correct_answer": "3., Rennweg 12a",
    "wrong_answers": ["22., Wagramer Straße 21", "7., Mariahilfer Straße 32-34", "2., Aspernbrückengasse 1", "19., Hasenauerstraße 12"]
  },
  {
    "id": 133, "question_ar": "أين يقع NH Wien City؟",
    "question_de": "Wo ist das NH Wien City?",
    "correct_answer": "7., Mariahilfer Straße 32-34",
    "wrong_answers": ["3., Rennweg 12a", "2., Aspernbrückengasse 1", "19., Hasenauerstraße 12", "22., Wagramer Straße 16-18"]
  },
  {
    "id": 134, "question_ar": "أين يقع Novotel Wien City؟",
    "question_de": "Wo ist das Novotel Wien City?",
    "correct_answer": "2., Aspernbrückengasse 1",
    "wrong_answers": ["7., Mariahilfer Straße 32-34", "19., Hasenauerstraße 12", "22., Wagramer Straße 16-18", "9., Rooseveltplatz 15"]
  },
  {
    "id": 135, "question_ar": "أين يقع Park Villa؟",
    "question_de": "Wo ist das Park Villa?",
    "correct_answer": "19., Hasenauerstraße 12",
    "wrong_answers": ["2., Aspernbrückengasse 1", "22., Wagramer Straße 16-18", "9., Rooseveltplatz 15", "11., Simmeringer Hauptstraße 55"]
  },
  {
    "id": 136, "question_ar": "أين يقع Park Inn by Radisson Uno City Vienna؟",
    "question_de": "Wo ist das Park Inn by Radisson Uno City Vienna?",
    "correct_answer": "22., Wagramer Straße 16-18",
    "wrong_answers": ["19., Hasenauerstraße 12", "9., Rooseveltplatz 15", "11., Simmeringer Hauptstraße 55", "3., Am Heumarkt 15"]
  },
  {
    "id": 137, "question_ar": "أين يقع فندق Regina؟",
    "question_de": "Wo ist das Regina?",
    "correct_answer": "9., Rooseveltplatz 15",
    "wrong_answers": ["22., Wagramer Straße 16-18", "11., Simmeringer Hauptstraße 55", "3., Am Heumarkt 15", "1., Renngasse 13"]
  },
  {
    "id": 138, "question_ar": "أين يقع Schloss Wilhelminenberg؟",
    "question_de": "Wo ist das Schloss Wilhelminenberg?",
    "correct_answer": "16., Savoyenstraße 2",
    "wrong_answers": ["9., Rooseveltplatz 15", "11., Simmeringer Hauptstraße 55", "3., Am Heumarkt 15", "1., Renngasse 13"]
  },
  {
    "id": 139, "question_ar": "أين يقع فندق Simm's؟",
    "question_de": "Wo ist das Simm`s?",
    "correct_answer": "11., Simmeringer Hauptstraße 55",
    "wrong_answers": ["16., Savoyenstraße 2", "3., Am Heumarkt 15", "1., Renngasse 13", "1., Salzgries 12"]
  },
  {
    "id": 140, "question_ar": "أين يقع Starlight Suiten Hotels Wien Heumarkt؟",
    "question_de": "Wo ist das Starlight Suiten Hotels Wien Heumarkt?",
    "correct_answer": "3., Am Heumarkt 15",
    "wrong_answers": ["11., Simmeringer Hauptstraße 55", "1., Renngasse 13", "1., Salzgries 12", "2., Taborstraße 12"]
  },
  {
    "id": 141, "question_ar": "أين يقع Starlight Suiten Hotels Wien Renngasse؟",
    "question_de": "Wo ist das Starlight Suiten Hotels Wien Renngasse?",
    "correct_answer": "1., Renngasse 13",
    "wrong_answers": ["3., Am Heumarkt 15", "1., Salzgries 12", "2., Taborstraße 12", "9., Pasteurgasse 1"]
  },
  {
    "id": 142, "question_ar": "أين يقع Starlight Suiten Hotels Wien Salzgries؟",
    "question_de": "Wo ist das Starlight Suiten Hotels Wien Salzgries?",
    "correct_answer": "1., Salzgries 12",
    "wrong_answers": ["1., Renngasse 13", "2., Taborstraße 12", "9., Pasteurgasse 1", "10., Hertha-Firnberg-Straße 5"]
  },
  {
    "id": 143, "question_ar": "أين يقع فندق Stefanie؟",
    "question_de": "Wo ist das Stefanie?",
    "correct_answer": "2., Taborstraße 12",
    "wrong_answers": ["1., Salzgries 12", "9., Pasteurgasse 1", "10., Hertha-Firnberg-Straße 5", "3., Baumgasse 83"]
  },
  {
    "id": 144, "question_ar": "أين يقع Strudlhof Hotel & Palais؟",
    "question_de": "Wo ist das Strudlhof Hotel & Palais?",
    "correct_answer": "9., Pasteurgasse 1",
    "wrong_answers": ["2., Taborstraße 12", "10., Hertha-Firnberg-Straße 5", "3., Baumgasse 83", "19., Döblinger Hauptstraße 2"]
  },
  {
    "id": 145, "question_ar": "أين يقع Vienna South Hilton Garden Inn؟",
    "question_de": "Wo ist das Vienna South Hilton Garden Inn?",
    "correct_answer": "10., Hertha-Firnberg-Straße 5",
    "wrong_answers": ["9., Pasteurgasse 1", "3., Baumgasse 83", "19., Döblinger Hauptstraße 2", "5., Schönbrunner Straße 92"]
  },
  {
    "id": 146, "question_ar": "أين يقع Vienna Sporthotel؟",
    "question_de": "Wo ist das Vienna Sporthotel?",
    "correct_answer": "3., Baumgasse 83",
    "wrong_answers": ["10., Hertha-Firnberg-Straße 5", "19., Döblinger Hauptstraße 2", "5., Schönbrunner Straße 92", "6., Mariahilfer Gürtel 22-24"]
  },
  {
    "id": 147, "question_ar": "أين يقع Ibis Styles Wien City؟",
    "question_de": "Wo ist das Ibis Styles Wien City?",
    "correct_answer": "19., Döblinger Hauptstraße 2",
    "wrong_answers": ["3., Baumgasse 83", "5., Schönbrunner Straße 92", "6., Mariahilfer Gürtel 22-24", "2., Lassallestraße 7a"]
  },
  {
    "id": 148, "question_ar": "أين يقع Ibis Wien City؟",
    "question_de": "Wo ist das Ibis Wien City?",
    "correct_answer": "5., Schönbrunner Straße 92",
    "wrong_answers": ["19., Döblinger Hauptstraße 2", "6., Mariahilfer Gürtel 22-24", "2., Lassallestraße 7a", "2., Messestraße 2"]
  },
  {
    "id": 149, "question_ar": "أين يقع Ibis Wien Mariahilf؟",
    "question_de": "Wo ist das Ibis Wien Mariahilf?",
    "correct_answer": "6., Mariahilfer Gürtel 22-24",
    "wrong_answers": ["5., Schönbrunner Straße 92", "2., Lassallestraße 7a", "2., Messestraße 2", "1., Fleischmarkt 24"]
  },
  {
    "id": 150, "question_ar": "أين يقع Ibis Wien Messe؟",
    "question_de": "Wo ist das Ibis Wien Messe?",
    "correct_answer": "2., Lassallestraße 7a",
    "wrong_answers": ["6., Mariahilfer Gürtel 22-24", "2., Messestraße 2", "1., Fleischmarkt 24", "7., Lerchenfelder Straße 1-3"]
  },
  {
    "id": 151, "question_ar": "أين يقع Messe Prater Wien؟",
    "question_de": "Wo ist das Messe Prater Wien?",
    "correct_answer": "2., Messestraße 2",
    "wrong_answers": ["2., Lassallestraße 7a", "1., Fleischmarkt 24", "7., Lerchenfelder Straße 1-3", "1., Kärntner Straße 22 /Neuer Markt 5"]
  },
  {
    "id": 152, "question_ar": "أين يقع فندق Post؟",
    "question_de": "Wo ist das Post?",
    "correct_answer": "1., Fleischmarkt 24",
    "wrong_answers": ["2., Messestraße 2", "7., Lerchenfelder Straße 1-3", "1., Kärntner Straße 22 /Neuer Markt 5", "12., Schönbrunner Schloßstraße 38-40"]
  },
  
  // الفنادق بدون تصنيف (Hotels ohne Klassifizierung)
  {
    "id": 153, "question_ar": "أين يقع 25hours Hotel beim MuseumsQuartier؟",
    "question_de": "Wo ist das 25hours Hotel beim MuseumsQuartier?",
    "correct_answer": "7., Lerchenfelder Straße 1-3",
    "wrong_answers": ["1., Fleischmarkt 24", "1., Kärntner Straße 22 /Neuer Markt 5", "12., Schönbrunner Schloßstraße 38-40", "3., Landstraßer Gürtel 5"]
  },
  {
    "id": 154, "question_ar": "أين يقع فندق Ambassador؟",
    "question_de": "Wo ist der Ambassador?",
    "correct_answer": "1., Kärntner Straße 22 /Neuer Markt 5",
    "wrong_answers": ["7., Lerchenfelder Straße 1-3", "12., Schönbrunner Schloßstraße 38-40", "3., Landstraßer Gürtel 5", "4., Wiedner Hauptstraße 12"]
  },
  {
    "id": 155, "question_ar": "أين يقع Courtyard by Marriott Wien Schönbrunn؟",
    "question_de": "Wo ist das Courtyard by Marriott Wien Schönbrunn?",
    "correct_answer": "12., Schönbrunner Schloßstraße 38-40",
    "wrong_answers": ["1., Kärntner Straße 22 /Neuer Markt 5", "3., Landstraßer Gürtel 5", "4., Wiedner Hauptstraße 12", "1., Schubertring 10-12"]
  },
  {
    "id": 156, "question_ar": "أين يقع فندق Daniel Vienna؟",
    "question_de": "Wo ist das Daniel Vienna?",
    "correct_answer": "3., Landstraßer Gürtel 5",
    "wrong_answers": ["12., Schönbrunner Schloßstraße 38-40", "4., Wiedner Hauptstraße 12", "1., Schubertring 10-12", "1., Kärntner Ring 9"]
  },
  {
    "id": 157, "question_ar": "أين يقع Das Triest؟",
    "question_de": "Wo ist das Das Triest?",
    "correct_answer": "4., Wiedner Hauptstraße 12",
    "wrong_answers": ["3., Landstraßer Gürtel 5", "1., Schubertring 10-12", "1., Kärntner Ring 9", "3., Am Stadtpark 1"]
  },
  {
    "id": 158, "question_ar": "أين يقع Flemings Deluxe Hotel Wien-City؟",
    "question_de": "Wo ist das Flemings Deluxe Hotel Wien-City?",
    "correct_answer": "8., Josefstädter Straße 10-12",
    "wrong_answers": ["4., Wiedner Hauptstraße 12", "1., Schubertring 10-12", "1., Kärntner Ring 9", "3., Am Stadtpark 1"]
  },
  {
    "id": 159, "question_ar": "أين يقع Grand Ferdinand؟",
    "question_de": "Wo ist das Grand Ferdinand?",
    "correct_answer": "1., Schubertring 10-12",
    "wrong_answers": ["8., Josefstädter Straße 10-12", "1., Kärntner Ring 9", "3., Am Stadtpark 1", "1., Schottenring 11"]
  },
  {
    "id": 160, "question_ar": "أين يقع Grand Hotel Wien؟",
    "question_de": "Wo ist das Grand Hotel?",
    "correct_answer": "1., Kärntner Ring 9",
    "wrong_answers": ["1., Schubertring 10-12", "3., Am Stadtpark 1", "1., Schottenring 11", "2., Handelskai 269"]
  },
  {
    "id": 161, "question_ar": "أين يقع فندق هيلتون فيينا؟",
    "question_de": "Wo ist das Hilton Vienna?",
    "correct_answer": "3., Am Stadtpark 1",
    "wrong_answers": ["1., Kärntner Ring 9", "1., Schottenring 11", "2., Handelskai 269", "3., Ungargasse 60"]
  },
  {
    "id": 162, "question_ar": "أين يقع فندق هيلتون فيينا بلازا؟",
    "question_de": "Wo ist das Hilton Vienna Plaza?",
    "correct_answer": "1., Schottenring 11",
    "wrong_answers": ["3., Am Stadtpark 1", "2., Handelskai 269", "3., Ungargasse 60", "3., Johannesgasse 28"]
  },
  {
    "id": 163, "question_ar": "أين يقع Hilton Vienna Danube Waterfront؟",
    "question_de": "Wo ist das Hilton Vienna Danube Waterfront?",
    "correct_answer": "2., Handelskai 269",
    "wrong_answers": ["1., Schottenring 11", "3., Ungargasse 60", "3., Johannesgasse 28", "1., Robert Stolz Platz 1"]
  },
  {
    "id": 164, "question_ar": "أين يقع Imperial Riding School Renaissance Vienna؟",
    "question_de": "Wo ist das Imperial Riding School Renaissance Vienna?",
    "correct_answer": "3., Ungargasse 60",
    "wrong_answers": ["2., Handelskai 269", "3., Johannesgasse 28", "1., Robert Stolz Platz 1", "22., Donau-City-Straße 7"]
  },
  {
    "id": 165, "question_ar": "أين يقع فندق إنتركونتيننتال فيينا؟",
    "question_de": "Wo ist das Intercontinental Wien?",
    "correct_answer": "3., Johannesgasse 28",
    "wrong_answers": ["3., Ungargasse 60", "1., Robert Stolz Platz 1", "22., Donau-City-Straße 7", "1., Fleischmarkt 1a"]
  },
  {
    "id": 166, "question_ar": "أين يقع LeMeridien Wien؟",
    "question_de": "Wo ist das LeMeridien Wien?",
    "correct_answer": "1., Robert Stolz Platz 1",
    "wrong_answers": ["3., Johannesgasse 28", "22., Donau-City-Straße 7", "1., Fleischmarkt 1a", "1., Am Hof 2"]
  },
  {
    "id": 167, "question_ar": "أين يقع Melia Vienna؟",
    "question_de": "Wo ist das Melia Vienna?",
    "correct_answer": "22., Donau-City-Straße 7",
    "wrong_answers": ["1., Robert Stolz Platz 1", "1., Fleischmarkt 1a", "1., Am Hof 2", "2., Praterstraße 1"]
  },
  {
    "id": 168, "question_ar": "أين يقع Mercure Wien Zentrum؟",
    "question_de": "Wo ist das Mercure Wien Zentrum?",
    "correct_answer": "1., Fleischmarkt 1a",
    "wrong_answers": ["22., Donau-City-Straße 7", "1., Am Hof 2", "2., Praterstraße 1", "1., Schubertring 5-7"]
  },
  {
    "id": 169, "question_ar": "أين يقع Park Hyatt Vienna؟",
    "question_de": "Wo ist das Park Hyatt Vienna?",
    "correct_answer": "1., Am Hof 2",
    "wrong_answers": ["1., Fleischmarkt 1a", "2., Praterstraße 1", "1., Schubertring 5-7", "1., Herrengasse 10"]
  },
  {
    "id": 170, "question_ar": "أين يقع Sofitel Vienna Stephansdom؟",
    "question_de": "Wo ist das Sofitel Vienna Stephansdom?",
    "correct_answer": "2., Praterstraße 1",
    "wrong_answers": ["1., Am Hof 2", "1., Schubertring 5-7", "1., Herrengasse 10", "1., Kärntner Ring 8"]
  },
  {
    "id": 171, "question_ar": "أين يقع The Ritz Carlton Vienna؟",
    "question_de": "Wo ist das The Ritz Carlton?",
    "correct_answer": "1., Schubertring 5-7",
    "wrong_answers": ["2., Praterstraße 1", "1., Herrengasse 10", "1., Kärntner Ring 8", "1., Lichtensteg 3"]
  },
  {
    "id": 172, "question_ar": "أين يقع Steigenberger Hotel Herrenhof؟",
    "question_de": "Wo ist das Steigenberger Hotel Herrenhof?",
    "correct_answer": "1., Herrengasse 10",
    "wrong_answers": ["1., Schubertring 5-7", "1., Kärntner Ring 8", "1., Lichtensteg 3", "15., Ullmannstraße 71/Linke Wienzeile"]
  },
  {
    "id": 173, "question_ar": "أين يقع The Ring Hotel Vienna؟",
    "question_de": "Wo ist das The Ring?",
    "correct_answer": "1., Kärntner Ring 8",
    "wrong_answers": ["1., Herrengasse 10", "1., Lichtensteg 3", "15., Ullmannstraße 71/Linke Wienzeile", "1., Herrengasse 14"]
  },
  {
    "id": 174, "question_ar": "أين يقع Topazz Hotel؟",
    "question_de": "Wo ist das Topazz?",
    "correct_answer": "1., Lichtensteg 3",
    "wrong_answers": ["1., Kärntner Ring 8", "15., Ullmannstraße 71/Linke Wienzeile", "1., Herrengasse 14", "2., Obere Augartenstraße"]
  },
  {
    "id": 175, "question_ar": "أين يقع Renaissance Wien Hotel؟",
    "question_de": "Wo ist das Renaissance Wien Hotel?",
    "correct_answer": "15., Ullmannstraße 71/Linke Wienzeile",
    "wrong_answers": ["1., Lichtensteg 3", "1., Herrengasse 14", "2., Obere Augartenstraße", "1., Rathausplatz 8"]
  },
  
  // ========== الجزء التاسع: المقاهي ==========
  {
    "id": 176, "question_ar": "أين يقع مقهى سنترال؟",
    "question_de": "Wo ist das Café Central?",
    "correct_answer": "1., Herrengasse 14 (im Palais Ferstl)",
    "wrong_answers": ["1., Rathausplatz 8", "1., Dorotheergasse 6", "1., Universitätsring 4", "1., Kärntner Ring 1"]
  },
  {
    "id": 177, "question_ar": "أين يقع مقهى إينشتاين؟",
    "question_de": "Wo ist das Café Einstein?",
    "correct_answer": "1., Rathausplatz 8",
    "wrong_answers": ["1., Herrengasse 14", "1., Universitätsring 4", "1., Albertinaplatz 2", "1., Stubenring 24"]
  },
  {
    "id": 178, "question_ar": "أين يقع مقهى هويلكا؟",
    "question_de": "Wo ist das Café Hawelka?",
    "correct_answer": "1., Dorotheergasse 6",
    "wrong_answers": ["1., Herrengasse 14", "1., Universitätsring 4", "1., Albertinaplatz 2", "1., Stubenring 24"]
  },
  {
    "id": 179, "question_ar": "أين يقع مقهى لاندتمان؟",
    "question_de": "Wo ist das Café Landtmann?",
    "correct_answer": "1., Universitätsring 4",
    "wrong_answers": ["1., Herrengasse 14", "1., Rathausplatz 8", "1., Albertinaplatz 2", "1., Dorotheergasse 6"]
  },
  {
    "id": 180, "question_ar": "أين يقع مقهى موتسارت؟",
    "question_de": "Wo ist das Café Mozart?",
    "correct_answer": "1., Albertinaplatz 2",
    "wrong_answers": ["1., Herrengasse 14", "1., Universitätsring 4", "1., Stubenring 24", "1., Dorotheergasse 6"]
  },
  {
    "id": 181, "question_ar": "أين يقع مقهى Museum؟",
    "question_de": "Wo ist das Café Museum?",
    "correct_answer": "1., Operngasse 7",
    "wrong_answers": ["1., Albertinaplatz 2", "1., Stubenring 24", "1., Kärntner Ring 17", "2., Freudenau 254/Aspernallee"]
  },
  {
    "id": 182, "question_ar": "أين يقع مقهى بروكل؟",
    "question_de": "Wo ist das Café Prückel?",
    "correct_answer": "1., Stubenring 24",
    "wrong_answers": ["1., Operngasse 7", "1., Kärntner Ring 17", "2., Freudenau 254/Aspernallee", "6., Linke Wienzeile 22"]
  },
  {
    "id": 183, "question_ar": "أين يقع مقهى شوارتسينبيرغ؟",
    "question_de": "Wo ist das Café Schwarzenberg?",
    "correct_answer": "1., Kärntner Ring 17",
    "wrong_answers": ["1., Stubenring 24", "2., Freudenau 254/Aspernallee", "6., Linke Wienzeile 22", "6., Mariahilfer Straße 73"]
  },
  {
    "id": 184, "question_ar": "أين يقع مقهى لاستهاوس؟",
    "question_de": "Wo ist das Lusthaus?",
    "correct_answer": "2., Freudenau 254/Aspernallee",
    "wrong_answers": ["1., Kärntner Ring 17", "6., Linke Wienzeile 22", "6., Mariahilfer Straße 73", "6., Gumpendorfer Straße 11"]
  },
  {
    "id": 185, "question_ar": "أين يقع مقهى دريكسلر؟",
    "question_de": "Wo ist das Café Drechsler?",
    "correct_answer": "6., Linke Wienzeile 22",
    "wrong_answers": ["2., Freudenau 254/Aspernallee", "6., Mariahilfer Straße 73", "6., Gumpendorfer Straße 11", "8., Josefstädter Straße 2"]
  },
  {
    "id": 186, "question_ar": "أين يقع مقهى Ritter؟",
    "question_de": "Wo ist das Café Ritter?",
    "correct_answer": "6., Mariahilfer Straße 73",
    "wrong_answers": ["6., Linke Wienzeile 22", "6., Gumpendorfer Straße 11", "8., Josefstädter Straße 2", "8., Josefstädter Straße 66"]
  },
  {
    "id": 187, "question_ar": "أين يقع مقهى Sperl؟",
    "question_de": "Wo ist das Café Sperl?",
    "correct_answer": "6., Gumpendorfer Straße 11",
    "wrong_answers": ["6., Mariahilfer Straße 73", "8., Josefstädter Straße 2", "8., Josefstädter Straße 66", "13., Auhofstraße 2"]
  },
  {
    "id": 188, "question_ar": "أين يقع مقهى Eiles؟",
    "question_de": "Wo ist das Café Eiles?",
    "correct_answer": "8., Josefstädter Straße 2",
    "wrong_answers": ["6., Gumpendorfer Straße 11", "8., Josefstädter Straße 66", "13., Auhofstraße 2", "1., Herrengasse 14"]
  },
  {
    "id": 189, "question_ar": "أين يقع مقهى Hummel؟",
    "question_de": "Wo ist das Café Hummel?",
    "correct_answer": "8., Josefstädter Straße 66",
    "wrong_answers": ["8., Josefstädter Straße 2", "13., Auhofstraße 2", "1., Herrengasse 14", "1., Rathausplatz 8"]
  },
  {
    "id": 190, "question_ar": "أين يقع مقهى دومماير؟",
    "question_de": "Wo ist das Café Dommayer?",
    "correct_answer": "13., Auhofstraße 2",
    "wrong_answers": ["8., Josefstädter Straße 66", "1., Herrengasse 14", "1., Rathausplatz 8", "1., Universitätsring 4"]
  },
  
  // ========== الجزء العاشر: أسماء المناطق ==========
  {
    "id": 191, "question_ar": "ما هو اسم المنطقة 1؟",
    "question_de": "Wie heißt der 1. Bezirk?",
    "correct_answer": "Innere Stadt",
    "wrong_answers": ["Leopoldstadt", "Landstraße", "Wieden", "Margareten", "Mariahilf", "Neubau", "Josefstadt"]
  },
  {
    "id": 192, "question_ar": "ما هو اسم المنطقة 2؟",
    "question_de": "Wie heißt der 2. Bezirk?",
    "correct_answer": "Leopoldstadt",
    "wrong_answers": ["Innere Stadt", "Landstraße", "Wieden", "Margareten", "Mariahilf", "Neubau", "Josefstadt"]
  },
  {
    "id": 193, "question_ar": "ما هو اسم المنطقة 3؟",
    "question_de": "Wie heißt der 3. Bezirk?",
    "correct_answer": "Landstraße",
    "wrong_answers": ["Leopoldstadt", "Wieden", "Margareten", "Innere Stadt", "Mariahilf", "Neubau", "Josefstadt"]
  },
  {
    "id": 194, "question_ar": "ما هو اسم المنطقة 4؟",
    "question_de": "Wie heißt der 4. Bezirk?",
    "correct_answer": "Wieden",
    "wrong_answers": ["Innere Stadt", "Leopoldstadt", "Landstraße", "Margareten", "Mariahilf", "Neubau", "Josefstadt"]
  },
  {
    "id": 195, "question_ar": "ما هو اسم المنطقة 5؟",
    "question_de": "Wie heißt der 5. Bezirk?",
    "correct_answer": "Margareten",
    "wrong_answers": ["Wieden", "Mariahilf", "Neubau", "Josefstadt", "Alservorstadt", "Favoriten", "Simmering"]
  },
  {
    "id": 196, "question_ar": "ما هو اسم المنطقة 6؟",
    "question_de": "Wie heißt der 6. Bezirk?",
    "correct_answer": "Mariahilf",
    "wrong_answers": ["Margareten", "Neubau", "Josefstadt", "Alservorstadt", "Favoriten", "Simmering", "Meidling"]
  },
  {
    "id": 197, "question_ar": "ما هو اسم المنطقة 7؟",
    "question_de": "Wie heißt der 7. Bezirk?",
    "correct_answer": "Neubau",
    "wrong_answers": ["Mariahilf", "Josefstadt", "Alservorstadt", "Favoriten", "Simmering", "Meidling", "Hietzing"]
  },
  {
    "id": 198, "question_ar": "ما هو اسم المنطقة 8؟",
    "question_de": "Wie heißt der 8. Bezirk?",
    "correct_answer": "Josefstadt",
    "wrong_answers": ["Neubau", "Alservorstadt", "Favoriten", "Simmering", "Meidling", "Hietzing", "Penzing"]
  },
  {
    "id": 199, "question_ar": "ما هو اسم المنطقة 9؟",
    "question_de": "Wie heißt der 9. Bezirk?",
    "correct_answer": "Alservorstadt",
    "wrong_answers": ["Josefstadt", "Favoriten", "Simmering", "Meidling", "Hietzing", "Penzing", "Rudolfsheim-Fünfhaus"]
  },
  {
    "id": 200, "question_ar": "ما هو اسم المنطقة 10؟",
    "question_de": "Wie heißt der 10. Bezirk?",
    "correct_answer": "Favoriten",
    "wrong_answers": ["Simmering", "Meidling", "Hietzing", "Penzing", "Rudolfsheim-Fünfhaus", "Ottakring", "Hernals"]
  },
  {
    "id": 201, "question_ar": "ما هو اسم المنطقة 11؟",
    "question_de": "Wie heißt der 11. Bezirk?",
    "correct_answer": "Simmering",
    "wrong_answers": ["Favoriten", "Meidling", "Hietzing", "Penzing", "Rudolfsheim-Fünfhaus", "Ottakring", "Hernals"]
  },
  {
    "id": 202, "question_ar": "ما هو اسم المنطقة 12؟",
    "question_de": "Wie heißt der 12. Bezirk?",
    "correct_answer": "Meidling",
    "wrong_answers": ["Simmering", "Hietzing", "Penzing", "Rudolfsheim-Fünfhaus", "Ottakring", "Hernals", "Währing"]
  },
  {
    "id": 203, "question_ar": "ما هو اسم المنطقة 13؟",
    "question_de": "Wie heißt der 13. Bezirk?",
    "correct_answer": "Hietzing",
    "wrong_answers": ["Penzing", "Rudolfsheim-Fünfhaus", "Ottakring", "Hernals", "Währing", "Döbling", "Brigittenau"]
  },
  {
    "id": 204, "question_ar": "ما هو اسم المنطقة 14؟",
    "question_de": "Wie heißt der 14. Bezirk?",
    "correct_answer": "Penzing",
    "wrong_answers": ["Hietzing", "Rudolfsheim-Fünfhaus", "Ottakring", "Hernals", "Währing", "Döbling", "Brigittenau"]
  },
  {
    "id": 205, "question_ar": "ما هو اسم المنطقة 15؟",
    "question_de": "Wie heißt der 15. Bezirk?",
    "correct_answer": "Rudolfsheim-Fünfhaus",
    "wrong_answers": ["Hietzing", "Penzing", "Ottakring", "Hernals", "Währing", "Döbling", "Brigittenau"]
  },
  {
    "id": 206, "question_ar": "ما هو اسم المنطقة 16؟",
    "question_de": "Wie heißt der 16. Bezirk?",
    "correct_answer": "Ottakring",
    "wrong_answers": ["Penzing", "Rudolfsheim-Fünfhaus", "Hernals", "Währing", "Döbling", "Brigittenau", "Floridsdorf"]
  },
  {
    "id": 207, "question_ar": "ما هو اسم المنطقة 17؟",
    "question_de": "Wie heißt der 17. Bezirk?",
    "correct_answer": "Hernals",
    "wrong_answers": ["Rudolfsheim-Fünfhaus", "Ottakring", "Währing", "Döbling", "Brigittenau", "Floridsdorf", "Donaustadt"]
  },
  {
    "id": 208, "question_ar": "ما هو اسم المنطقة 18؟",
    "question_de": "Wie heißt der 18. Bezirk?",
    "correct_answer": "Währing",
    "wrong_answers": ["Ottakring", "Hernals", "Döbling", "Brigittenau", "Floridsdorf", "Donaustadt", "Liesing"]
  },
  {
    "id": 209, "question_ar": "ما هو اسم المنطقة 19؟",
    "question_de": "Wie heißt der 19. Bezirk?",
    "correct_answer": "Döbling",
    "wrong_answers": ["Hernals", "Währing", "Brigittenau", "Floridsdorf", "Donaustadt", "Liesing", "Innere Stadt"]
  },
  {
    "id": 210, "question_ar": "ما هو اسم المنطقة 20؟",
    "question_de": "Wie heißt der 20. Bezirk?",
    "correct_answer": "Brigittenau",
    "wrong_answers": ["Währing", "Döbling", "Floridsdorf", "Donaustadt", "Liesing", "Innere Stadt", "Leopoldstadt"]
  },
  {
    "id": 211, "question_ar": "ما هو اسم المنطقة 21؟",
    "question_de": "Wie heißt der 21. Bezirk?",
    "correct_answer": "Floridsdorf",
    "wrong_answers": ["Döbling", "Brigittenau", "Donaustadt", "Liesing", "Innere Stadt", "Leopoldstadt", "Landstraße"]
  },
  {
    "id": 212, "question_ar": "ما هو اسم المنطقة 22؟",
    "question_de": "Wie heißt der 22. Bezirk?",
    "correct_answer": "Donaustadt",
    "wrong_answers": ["Brigittenau", "Floridsdorf", "Liesing", "Innere Stadt", "Leopoldstadt", "Landstraße", "Wieden"]
  },
  {
    "id": 213, "question_ar": "ما هو اسم المنطقة 23؟",
    "question_de": "Wie heißt der 23. Bezirk?",
    "correct_answer": "Liesing",
    "wrong_answers": ["Floridsdorf", "Donaustadt", "Innere Stadt", "Leopoldstadt", "Landstraße", "Wieden", "Margareten"]
  },
  
  // ========== الجزء الحادي عشر: مناطق الخمر التقليدية ==========
  {
    "id": 214, "question_ar": "ما هي مناطق الخمر التقليدية في المنطقة 19؟",
    "question_de": "Welche sind Heurigenorte im 19. Bezirk?",
    "correct_answer": "Grinzing, Heiligenstadt, Kahlenbergerdorf, Neustift am Walde, Nussdorf, Sievering",
    "wrong_answers": ["Ottakring, Hernals, Währing", "Liesing, Mauer, Rodaun", "Floridsdorf, Jedlersdorf, Strebersdorf", "Döbling, Währing, Hernals"]
  },
  {
    "id": 215, "question_ar": "ما هي مناطق الخمر التقليدية في المنطقة 21؟",
    "question_de": "Welche sind Heurigenorte im 21. Bezirk?",
    "correct_answer": "Groß-Jedlersdorf, Stammersdorf, Strebersdorf",
    "wrong_answers": ["Grinzing, Heiligenstadt, Neustift am Walde", "Ottakring, Hernals, Währing", "Liesing, Mauer, Rodaun", "Döbling, Währing, Hernals"]
  },
  {
    "id": 216, "question_ar": "ما هي مناطق الخمر التقليدية في المنطقة 23؟",
    "question_de": "Welche sind Heurigenorte im 23. Bezirk?",
    "correct_answer": "Mauer, Rodaun",
    "wrong_answers": ["Grinzing, Heiligenstadt, Neustift am Walde", "Groß-Jedlersdorf, Stammersdorf, Strebersdorf", "Ottakring, Hernals, Währing", "Döbling, Währing, Hernals"]
  },
  {
    "id": 217, "question_ar": "ما هي مناطق الخمر التقليدية في المنطقة 10؟",
    "question_de": "Welche sind Heurigenorte im 10. Bezirk?",
    "correct_answer": "Oberlaa",
    "wrong_answers": ["Mauer", "Rodaun", "Grinzing", "Heiligenstadt"]
  },
  {
    "id": 218, "question_ar": "ما هي مناطق الخمر التقليدية في المنطقة 16؟",
    "question_de": "Welche sind Heurigenorte im 16. Bezirk?",
    "correct_answer": "Alt-Ottakring",
    "wrong_answers": ["Oberlaa", "Mauer", "Rodaun", "Grinzing"]
  },
  
  // ========== الجزء الثاني عشر: المقابر ==========
  {
    "id": 219, "question_ar": "أين يقع المقبرة المركزية؟",
    "question_de": "Wo ist der Zentralfriedhof?",
    "correct_answer": "11., Simmeringer Hauptstraße",
    "wrong_answers": ["19., Hartäckerstraße 65", "17., Leopold-Kunschak-Platz 7", "13., Maxingstraße 15", "11., Simmeringer Hauptstraße 337"]
  },
  {
    "id": 220, "question_ar": "أين توجد محرقة الجثث؟",
    "question_de": "Wo ist die Feuerhalle?",
    "correct_answer": "11., Simmeringer Hauptstraße 337",
    "wrong_answers": ["11., Simmeringer Hauptstraße (Zentralfriedhof)", "23., Friedensstraße 6-16", "21., Stammersdorfer Straße 244-260", "19., Hartäckerstraße 65"]
  },
  {
    "id": 221, "question_ar": "أين يقع مقبرة فيينا المركزية في شتامرسدورف؟",
    "question_de": "Wo ist der Stammersdorfer Zentralfriedhof?",
    "correct_answer": "21., Stammersdorfer Straße 244-260",
    "wrong_answers": ["11., Simmeringer Hauptstraße", "11., Simmeringer Hauptstraße 337", "23., Friedensstraße 6-16", "19., Hartäckerstraße 65"]
  },
  {
    "id": 222, "question_ar": "أين يقع مقبرة Aspern؟",
    "question_de": "Wo ist der Friedhof Aspern?",
    "correct_answer": "22., Langobardenstraße 180",
    "wrong_answers": ["11., Simmeringer Hauptstraße", "14., Waidhausenstraße 52", "19., Hartäckerstraße 65", "17., Alszeile 28"]
  },
  {
    "id": 223, "question_ar": "أين يقع مقبرة Baumgarten؟",
    "question_de": "Wo ist der Friedhof Baumgarten?",
    "correct_answer": "14., Waidhausenstraße 52",
    "wrong_answers": ["22., Langobardenstraße 180", "19., Hartäckerstraße 65", "17., Alszeile 28", "19., An den Langen Lüssen 33"]
  },
  {
    "id": 224, "question_ar": "أين يقع مقبرة Döbling؟",
    "question_de": "Wo ist der Friedhof Döbling?",
    "correct_answer": "19., Hartäckerstraße 65",
    "wrong_answers": ["14., Waidhausenstraße 52", "17., Alszeile 28", "19., An den Langen Lüssen 33", "19., Wildgrubgasse 20"]
  },
  {
    "id": 225, "question_ar": "أين يقع مقبرة Dornbach؟",
    "question_de": "Wo ist der Friedhof Dornbach?",
    "correct_answer": "17., Alszeile 28",
    "wrong_answers": ["19., Hartäckerstraße 65", "19., An den Langen Lüssen 33", "19., Wildgrubgasse 20", "17., Leopold-Kunschak-Platz 7"]
  },
  {
    "id": 226, "question_ar": "أين يقع مقبرة Grinzing؟",
    "question_de": "Wo ist der Friedhof Grinzing?",
    "correct_answer": "19., An den Langen Lüssen 33",
    "wrong_answers": ["17., Alszeile 28", "19., Wildgrubgasse 20", "17., Leopold-Kunschak-Platz 7", "13., Maxingstraße 15"]
  },
  {
    "id": 227, "question_ar": "أين يقع مقبرة Großjedlersdorf؟",
    "question_de": "Wo ist der Friedhof Großjedlersdorf?",
    "correct_answer": "21., Strebersdorfer Straße 2",
    "wrong_answers": ["19., An den Langen Lüssen 33", "19., Wildgrubgasse 20", "17., Leopold-Kunschak-Platz 7", "13., Maxingstraße 15"]
  },
  {
    "id": 228, "question_ar": "أين يقع مقبرة Heiligenstadt؟",
    "question_de": "Wo ist der Friedhof Heiligenstadt?",
    "correct_answer": "19., Wildgrubgasse 20",
    "wrong_answers": ["21., Strebersdorfer Straße 2", "17., Leopold-Kunschak-Platz 7", "13., Maxingstraße 15", "14., Samptwandnergasse 6"]
  },
  {
    "id": 229, "question_ar": "أين يقع مقبرة Hernals؟",
    "question_de": "Wo ist der Friedhof Hernals?",
    "correct_answer": "17., Leopold-Kunschak-Platz 7",
    "wrong_answers": ["19., Wildgrubgasse 20", "13., Maxingstraße 15", "14., Samptwandnergasse 6", "23., Kolbegasse 34"]
  },
  {
    "id": 230, "question_ar": "أين يقع مقبرة Hietzing؟",
    "question_de": "Wo ist der Friedhof Hietzing?",
    "correct_answer": "13., Maxingstraße 15",
    "wrong_answers": ["17., Leopold-Kunschak-Platz 7", "14., Samptwandnergasse 6", "23., Kolbegasse 34", "23., Großmarktstraße"]
  },
  {
    "id": 231, "question_ar": "أين يقع مقبرة Hütteldorf؟",
    "question_de": "Wo ist der Friedhof Hütteldorf?",
    "correct_answer": "14., Samptwandnergasse 6",
    "wrong_answers": ["13., Maxingstraße 15", "23., Kolbegasse 34", "23., Großmarktstraße", "23., Friedensstraße 6-16"]
  },
  {
    "id": 232, "question_ar": "أين يقع مقبرة Inzersdorf؟",
    "question_de": "Wo ist der Friedhof Inzersdorf?",
    "correct_answer": "23., Kolbegasse 34",
    "wrong_answers": ["14., Samptwandnergasse 6", "23., Großmarktstraße", "23., Friedensstraße 6-16", "12., Eibesbrunner Gasse 1a (Haidackergasse 6)"]
  },
  {
    "id": 233, "question_ar": "أين يقع المقبرة الإسلامية؟",
    "question_de": "Wo ist der Islamische Friedhof?",
    "correct_answer": "23., Großmarktstraße",
    "wrong_answers": ["23., Kolbegasse 34", "23., Friedensstraße 6-16", "12., Eibesbrunner Gasse 1a (Haidackergasse 6)", "18., Pötzleinsdorfer Höhe 2"]
  },
  {
    "id": 234, "question_ar": "أين يقع مقبرة Mauer؟",
    "question_de": "Wo ist der Friedhof Mauer?",
    "correct_answer": "23., Friedensstraße 6-16",
    "wrong_answers": ["23., Großmarktstraße", "12., Eibesbrunner Gasse 1a (Haidackergasse 6)", "18., Pötzleinsdorfer Höhe 2", "10., Friedhofstraße 33"]
  },
  {
    "id": 235, "question_ar": "أين يقع مقبرة Meidling؟",
    "question_de": "Wo ist der Friedhof Meidling?",
    "correct_answer": "12., Eibesbrunner Gasse 1a (Haidackergasse 6)",
    "wrong_answers": ["23., Friedensstraße 6-16", "18., Pötzleinsdorfer Höhe 2", "10., Friedhofstraße 33", "16., Gallitzinstraße 5"]
  },
  {
    "id": 236, "question_ar": "أين يقع مقبرة Neustift؟",
    "question_de": "Wo ist der Friedhof Neustift?",
    "correct_answer": "18., Pötzleinsdorfer Höhe 2",
    "wrong_answers": ["12., Eibesbrunner Gasse 1a (Haidackergasse 6)", "10., Friedhofstraße 33", "16., Gallitzinstraße 5", "19., Nottebohmstraße 51"]
  },
  {
    "id": 237, "question_ar": "أين يقع مقبرة Oberlaa؟",
    "question_de": "Wo ist der Friedhof Oberlaa?",
    "correct_answer": "10., Friedhofstraße 33",
    "wrong_answers": ["18., Pötzleinsdorfer Höhe 2", "16., Gallitzinstraße 5", "19., Nottebohmstraße 51", "11., Unter der Kirche 5"]
  },
  {
    "id": 238, "question_ar": "أين يقع مقبرة Ottakring؟",
    "question_de": "Wo ist der Friedhof Ottakring?",
    "correct_answer": "16., Gallitzinstraße 5",
    "wrong_answers": ["10., Friedhofstraße 33", "19., Nottebohmstraße 51", "11., Unter der Kirche 5", "12., Herviciusgasse 44 bzw. Wundtgasse 1A"]
  },
  {
    "id": 239, "question_ar": "أين يقع مقبرة Sievering؟",
    "question_de": "Wo ist der Friedhof Sievering?",
    "correct_answer": "19., Nottebohmstraße 51",
    "wrong_answers": ["16., Gallitzinstraße 5", "11., Unter der Kirche 5", "12., Herviciusgasse 44 bzw. Wundtgasse 1A", "11., Simmeringer Hauptstraße"]
  },
  {
    "id": 240, "question_ar": "أين يقع مقبرة Simmering؟",
    "question_de": "Wo ist der Friedhof Simmering?",
    "correct_answer": "11., Unter der Kirche 5",
    "wrong_answers": ["19., Nottebohmstraße 51", "12., Herviciusgasse 44 bzw. Wundtgasse 1A", "11., Simmeringer Hauptstraße", "21., Stammersdorfer Straße 244-260"]
  },
  {
    "id": 241, "question_ar": "أين يقع مقبرة Südwestfriedhof؟",
    "question_de": "Wo ist der Südwestfriedhof?",
    "correct_answer": "12., Herviciusgasse 44 bzw. Wundtgasse 1A",
    "wrong_answers": ["11., Unter der Kirche 5", "11., Simmeringer Hauptstraße", "21., Stammersdorfer Straße 244-260", "19., An den Langen Lüssen 33"]
  },
  
  // ========== الجزء الثالث عشر: المستشفيات ==========
  {
    "id": 242, "question_ar": "أين يقع المستشفى العام (AKH)؟",
    "question_de": "Wo ist das Allgemeine Krankenhaus (AKH)?",
    "correct_answer": "9., Währinger Gürtel 18",
    "wrong_answers": ["9., Lazarettgasse 14", "20., Donaueschingenstraße 13", "6., Stumpergasse 13-15", "22., Langobardenstraße 122"]
  },
  {
    "id": 243, "question_ar": "أين يقع مركز الصدمات AUVA فيينا مايدلينغ؟",
    "question_de": "Wo ist das AUVA-Traumazentrum Wien Meidling?",
    "correct_answer": "12., Kundratstraße 37",
    "wrong_answers": ["10., Kundratstraße 3", "20., Donaueschingenstraße 13", "9., Währinger Gürtel 18", "6., Stumpergasse 13-15"]
  },
  {
    "id": 244, "question_ar": "أين يقع مركز الصدمات AUVA فيينا لورينز بولر؟",
    "question_de": "Wo ist das AUVA-Traumazentrum Wien Lorenz Böhler?",
    "correct_answer": "20., Donaueschingenstraße 13",
    "wrong_answers": ["12., Kundratstraße 37", "10., Kundratstraße 3", "9., Währinger Gürtel 18", "22., Langobardenstraße 122"]
  },
  {
    "id": 245, "question_ar": "أين يقع مستشفى الإخوة الرحمة؟",
    "question_de": "Wo ist das Krankenhaus Barmherzige Schwestern?",
    "correct_answer": "6., Stumpergasse 13-15",
    "wrong_answers": ["9., Währinger Gürtel 18", "2., Johannes von Gott-Platz 1", "8., Skodagasse 32", "22., Langobardenstraße 122"]
  },
  {
    "id": 246, "question_ar": "أين يقع مستشفى الإخوة الرحمة (Barmherzige Brüder)؟",
    "question_de": "Wo ist das Krankenhaus Barmherzige Brüder?",
    "correct_answer": "2., Johannes von Gott-Platz 1",
    "wrong_answers": ["6., Stumpergasse 13-15", "8., Skodagasse 32", "9., Lazarettgasse 16-18", "17., Dornbacher Straße 20-30"]
  },
  {
    "id": 247, "question_ar": "أين توجد العيادة الخاصة كونفراترنيتات؟",
    "question_de": "Wo ist die Privatklinik Confraternität?",
    "correct_answer": "8., Skodagasse 32",
    "wrong_answers": ["2., Johannes von Gott-Platz 1", "9., Lazarettgasse 16-18", "17., Dornbacher Straße 20-30", "19., Billrothstraße 78"]
  },
  {
    "id": 248, "question_ar": "أين يقع مستشفى دوناوشتات (سابقاً 'SMZ Ost')؟",
    "question_de": "Wo ist die Klinik Donaustadt (vormals 'SMZ Ost')?",
    "correct_answer": "22., Langobardenstraße 122",
    "wrong_answers": ["21., Brünner Straße 68", "10., Kundratstraße 3", "16., Montleartstraße 37", "9., Währinger Gürtel 18"]
  },
  {
    "id": 249, "question_ar": "أين يقع المستشفى الإنجيلي؟",
    "question_de": "Wo ist das Evangelische Krankenhaus?",
    "correct_answer": "18., Hans-Sachs-Gasse 10-12",
    "wrong_answers": ["22., Langobardenstraße 122", "23., Gräfin Zichy Straße 6", "3., Landstraßer Hauptstraße 4a", "5., Nikolsdorfergasse 32"]
  },
  {
    "id": 250, "question_ar": "أين يقع معهد أنتون بروكش؟",
    "question_de": "Wo ist das Anton-Proksch-Institut?",
    "correct_answer": "23., Gräfin Zichy Straße 6",
    "wrong_answers": ["18., Hans-Sachs-Gasse 10-12", "3., Landstraßer Hauptstraße 4a", "5., Nikolsdorfergasse 32", "9., Lazarettgasse 16-18"]
  },
  {
    "id": 251, "question_ar": "أين يقع مستشفى فرانزيسكوس لاندستراسه (سابقاً 'مستشفى القديسة إليزابيث')؟",
    "question_de": "Wo ist das Franziskus Spital Landstraße (vormals 'St. Elisabeth-Spital')?",
    "correct_answer": "3., Landstraßer Hauptstraße 4a",
    "wrong_answers": ["23., Gräfin Zichy Straße 6", "5., Nikolsdorfergasse 32", "13., Riedelgasse 5", "10., Kundratstraße 3"]
  },
  {
    "id": 252, "question_ar": "أين يقع مستشفى فرانزيسكوس مارغاريتن (سابقاً 'مستشفى هارتمان')؟",
    "question_de": "Wo ist das Franziskus Spital Margareten (vormals 'Hartmannspital')?",
    "correct_answer": "5., Nikolsdorfergasse 32",
    "wrong_answers": ["3., Landstraßer Hauptstraße 4a", "13., Riedelgasse 5", "10., Kundratstraße 3", "14., Baumgartner Höhe 1"]
  },
  {
    "id": 253, "question_ar": "أين توجد العيادة الخاصة الذهبية الصليب؟",
    "question_de": "Wo ist die Privatklinik Goldenes Kreuz?",
    "correct_answer": "9., Lazarettgasse 16-18",
    "wrong_answers": ["8., Skodagasse 32", "19., Billrothstraße 78", "19., Heiligenstädter Straße 55", "9., Pelikangasse 15"]
  },
  {
    "id": 254, "question_ar": "أين يقع مستشفى المخلص الإلهي؟",
    "question_de": "Wo ist das Krankenhaus Göttlicher Heiland?",
    "correct_answer": "17., Dornbacher Straße 20-30",
    "wrong_answers": ["14., Heinrich-Collin Straße 30", "21., Brünner Straße 238", "3., Baumgasse 20A", "13., Wolkersbergenstraße 1"]
  },
  {
    "id": 255, "question_ar": "أين يقع مستشفى هانوش؟",
    "question_de": "Wo ist das Hanusch Krankenhaus?",
    "correct_answer": "14., Heinrich-Collin Straße 30",
    "wrong_answers": ["17., Dornbacher Straße 20-30", "21., Brünner Straße 238", "13., Wolkersbergenstraße 1", "19., Billrothstraße 78"]
  },
  {
    "id": 256, "question_ar": "أين يقع مركز الصحة الشرقي (سابقاً مستشفى الجيش)؟",
    "question_de": "Wo ist das Sanitätszentrum Ost (ehem. Heeresspital)?",
    "correct_answer": "21., Brünner Straße 238",
    "wrong_answers": ["14., Heinrich-Collin Straße 30", "3., Baumgasse 20A", "13., Wolkersbergenstraße 1", "13., Speisinger Straße 109"]
  },
  {
    "id": 257, "question_ar": "أين يقع مستشفى القلب المقدس؟",
    "question_de": "Wo ist das Herz-Jesu-Krankenhaus?",
    "correct_answer": "3., Baumgasse 20A",
    "wrong_answers": ["21., Brünner Straße 238", "13., Wolkersbergenstraße 1", "13., Speisinger Straße 109", "19., Billrothstraße 78"]
  },
  {
    "id": 258, "question_ar": "أين يقع مستشفى Hietzing (سابقاً 'KH Hietzing')؟",
    "question_de": "Wo ist die Klinik Hietzing (vorm. 'KH Hietzing')?",
    "correct_answer": "13., Wolkersbergenstraße 1",
    "wrong_answers": ["3., Baumgasse 20A", "13., Speisinger Straße 109", "13., Riedelgasse 5", "3., Juchgasse 25"]
  },
  {
    "id": 259, "question_ar": "أين يقع المستشفى العصبي Rosenhügel؟",
    "question_de": "Wo ist das Neurologische Krankenhaus Rosenhügel?",
    "correct_answer": "13., Riedelgasse 5",
    "wrong_answers": ["13., Wolkersbergenstraße 1", "13., Speisinger Straße 109", "3., Juchgasse 25", "9., Löblichgasse 14"]
  },
  {
    "id": 260, "question_ar": "أين يقع المستشفى العظمي (Speising)؟",
    "question_de": "Wo ist das Orthopädische Spital (Speising)?",
    "correct_answer": "13., Speisinger Straße 109",
    "wrong_answers": ["13., Riedelgasse 5", "3., Juchgasse 25", "9., Löblichgasse 14", "16., Kollburggasse 6-10"]
  },
  {
    "id": 261, "question_ar": "أين يقع Rudolfiner Haus؟",
    "question_de": "Wo ist das Rudolfiner Haus?",
    "correct_answer": "19., Billrothstraße 78",
    "wrong_answers": ["3., Juchgasse 25", "9., Löblichgasse 14", "16., Kollburggasse 6-10", "19., Heiligenstädter Straße 55 und 63"]
  },
  {
    "id": 262, "question_ar": "أين يقع Klinik Landstraße (سابقاً 'Rudolfstiftung')؟",
    "question_de": "Wo ist die Klinik Landstraße (vorm. 'Rudolfstiftung')?",
    "correct_answer": "3., Juchgasse 25",
    "wrong_answers": ["9., Löblichgasse 14", "16., Kollburggasse 6-10", "19., Heiligenstädter Straße 55 und 63", "14., Baumgartner Höhe 1"]
  },
  {
    "id": 263, "question_ar": "أين يقع Sanatorium Hera؟",
    "question_de": "Wo ist das Sanatorium Hera?",
    "correct_answer": "9., Löblichgasse 14",
    "wrong_answers": ["16., Kollburggasse 6-10", "19., Heiligenstädter Straße 55 und 63", "14., Baumgartner Höhe 1", "10., Kundratstraße 3"]
  },
  {
    "id": 264, "question_ar": "أين يقع Sanatorium Liebhartsthal؟",
    "question_de": "Wo ist das Sanatorium Liebhartsthal?",
    "correct_answer": "16., Kollburggasse 6-10",
    "wrong_answers": ["9., Löblichgasse 14", "19., Heiligenstädter Straße 55 und 63", "14., Baumgartner Höhe 1", "10., Kundratstraße 3"]
  },
  {
    "id": 265, "question_ar": "أين توجد العيادة الخاصة Döbling - Vienna Int.Health Center؟",
    "question_de": "Wo ist die Privatklinik Döbling – Vienna Int.Health Center?",
    "correct_answer": "19., Heiligenstädter Straße 55 und 63",
    "wrong_answers": ["16., Kollburggasse 6-10", "14., Baumgartner Höhe 1", "10., Kundratstraße 3", "9., Kinderspitalgasse 6"]
  },
  {
    "id": 266, "question_ar": "أين يقع Klinik Penzing (سابقاً SMZ Baumgartnerhöhe + Otto Wagner-Spital)؟",
    "question_de": "Wo ist die Klinik Penzing (vorm.SMZ Baumgartnerhöhe + Otto WagnerSpital)?",
    "correct_answer": "14., Baumgartner Höhe 1",
    "wrong_answers": ["19., Heiligenstädter Straße 55 und 63", "10., Kundratstraße 3", "9., Kinderspitalgasse 6", "13., Auhofstraße 189"]
  },
  {
    "id": 267, "question_ar": "أين يقع Klinik Favoriten (سابقاً 'SMZ Süd - Kaiser Franz Josef Spital' + 'Preyer'sches Kinderspital')؟",
    "question_de": "Wo ist die Klinik Favoriten (vormals 'SMZ Süd - Kaiser Franz Josef Spital' + 'Preyer'sches Kinderspital ')?",
    "correct_answer": "10., Kundratstraße 3",
    "wrong_answers": ["14., Baumgartner Höhe 1", "9., Kinderspitalgasse 6", "13., Auhofstraße 189", "9., Sensengasse 2a"]
  },
  {
    "id": 268, "question_ar": "أين يقع مستشفى St. Anna للأطفال؟",
    "question_de": "Wo ist das St. Anna Kinderspital?",
    "correct_answer": "9., Kinderspitalgasse 6",
    "wrong_answers": ["10., Kundratstraße 3", "13., Auhofstraße 189", "9., Sensengasse 2a", "21., Brünner Straße 68"]
  },
  {
    "id": 269, "question_ar": "أين يقع مستشفى St. Josef؟",
    "question_de": "Wo ist das St. Josef-Krankenhaus?",
    "correct_answer": "13., Auhofstraße 189",
    "wrong_answers": ["9., Kinderspitalgasse 6", "9., Sensengasse 2a", "21., Brünner Straße 68", "16., Montleartstraße 37"]
  },
  {
    "id": 270, "question_ar": "أين توجد العيادة الجامعية لطب الأسنان؟",
    "question_de": "Wo ist die Universitäts- Zahnklinik?",
    "correct_answer": "9., Sensengasse 2a",
    "wrong_answers": ["13., Auhofstraße 189", "21., Brünner Straße 68", "16., Montleartstraße 37", "9., Pelikangasse 15"]
  },
  {
    "id": 271, "question_ar": "أين يقع Klinik Floridsdorf (سابقاً 'Krankenhaus Nord')؟",
    "question_de": "Wo ist die Klinik Floridsdorf (vorm. 'Krankenhaus Nord')?",
    "correct_answer": "21., Brünner Straße 68",
    "wrong_answers": ["9., Sensengasse 2a", "16., Montleartstraße 37", "9., Pelikangasse 15", "19., Heiligenstädter Straße 55"]
  },
  {
    "id": 272, "question_ar": "أين يقع مستشفى أوتاكرينغ (سابقاً 'Wilhelminenspital')؟",
    "question_de": "Wo ist die Klinik Ottakring (vorm. 'Wilhelminenspital')?",
    "correct_answer": "16., Montleartstraße 37",
    "wrong_answers": ["21., Brünner Straße 68", "9., Pelikangasse 15", "19., Heiligenstädter Straße 55", "9., Seegasse 11"]
  },
  {
    "id": 273, "question_ar": "أين توجد العيادة الخاصة في فيينا؟",
    "question_de": "Wo ist die Wiener Privatklinik?",
    "correct_answer": "9., Pelikangasse 15",
    "wrong_answers": ["16., Montleartstraße 37", "19., Heiligenstädter Straße 55", "9., Seegasse 11", "1., Universitätsring 2"]
  },
  
  // ========== الجزء الرابع عشر: المؤسسات الثقافية ==========
  {
    "id": 274, "question_ar": "أين يقع المسرح الوطني؟",
    "question_de": "Wo ist das Burgtheater?",
    "correct_answer": "1., Universitätsring 2",
    "wrong_answers": ["1., Opernring 2", "6., Linke Wienzeile 6", "9., Währinger Straße 78", "1., Musikvereinsplatz 1"]
  },
  {
    "id": 275, "question_ar": "أين يقع مسرح Kammerspiele؟",
    "question_de": "Wo ist das Kammerspiele?",
    "correct_answer": "1., Rotenturmstraße 20",
    "wrong_answers": ["1., Universitätsring 2", "1., Opernring 2", "1., Seilerstätte/Himmelpfortgasse 25", "1., Fleischmarkt 24"]
  },
  {
    "id": 276, "question_ar": "أين يقع قاعة الموسيقى؟",
    "question_de": "Wo ist der Musikverein?",
    "correct_answer": "1., Musikvereinsplatz 1",
    "wrong_answers": ["3., Lothringerstraße 20", "1., Opernring 2", "15., Roland-Rainer-Platz 1", "1., Universitätsring 2"]
  },
  {
    "id": 277, "question_ar": "أين يقع Ronacher Etablissement؟",
    "question_de": "Wo ist das Ronacher Etablissement?",
    "correct_answer": "1., Seilerstätte/Himmelpfortgasse 25",
    "wrong_answers": ["1., Rotenturmstraße 20", "1., Musikvereinsplatz 1", "1., Opernring 2", "3., Lisztstraße 1"]
  },
  {
    "id": 278, "question_ar": "أين يقع مسرح الدولة للأوبرا؟",
    "question_de": "Wo ist die Staatsoper?",
    "correct_answer": "1., Opernring 2",
    "wrong_answers": ["1., Universitätsring 2", "3., Lothringerstraße 20", "6., Wallgasse 18-20", "1., Musikvereinsplatz 1"]
  },
  {
    "id": 279, "question_ar": "أين يقع Wiener Kammeroper؟",
    "question_de": "Wo ist die Wiener Kammeroper?",
    "correct_answer": "1., Fleischmarkt 24",
    "wrong_answers": ["1., Opernring 2", "3., Lisztstraße 1", "3., Lothringerstraße 20", "6., Wallgasse 18-20"]
  },
  {
    "id": 280, "question_ar": "أين يقع مسرح Akademietheater؟",
    "question_de": "Wo ist das Akademietheater?",
    "correct_answer": "3., Lisztstraße 1",
    "wrong_answers": ["1., Fleischmarkt 24", "3., Lothringerstraße 20", "6., Wallgasse 18-20", "6., Linke Wienzeile 6"]
  },
  {
    "id": 281, "question_ar": "أين يقع قصر المؤتمرات؟",
    "question_de": "Wo ist das Konzerthaus?",
    "correct_answer": "3., Lothringerstraße 20",
    "wrong_answers": ["1., Musikvereinsplatz 1", "1., Opernring 2", "15., Roland-Rainer-Platz 1", "1., Universitätsring 2"]
  },
  {
    "id": 282, "question_ar": "أين يقع مسرح Raimundtheater؟",
    "question_de": "Wo ist das Raimundtheater?",
    "correct_answer": "6., Wallgasse 18-20",
    "wrong_answers": ["3., Lothringerstraße 20", "6., Linke Wienzeile 6", "7., Arthur-Schnitzler-Platz 1", "8., Josefstädter Straße 26"]
  },
  {
    "id": 283, "question_ar": "أين يقع Theater an der Wien؟",
    "question_de": "Wo ist das Theater an der Wien?",
    "correct_answer": "6., Linke Wienzeile 6",
    "wrong_answers": ["6., Wallgasse 18-20", "7., Arthur-Schnitzler-Platz 1", "8., Josefstädter Straße 26", "9., Währinger Straße 78"]
  },
  {
    "id": 284, "question_ar": "أين يقع مسرح Volkstheater؟",
    "question_de": "Wo ist das Volkstheater?",
    "correct_answer": "7., Arthur-Schnitzler-Platz 1",
    "wrong_answers": ["6., Linke Wienzeile 6", "8., Josefstädter Straße 26", "9., Währinger Straße 78", "15., Roland-Rainer-Platz 1"]
  },
  {
    "id": 285, "question_ar": "أين يقع مسرح Theater in der Josefstadt؟",
    "question_de": "Wo ist das Theater in der Josefstadt?",
    "correct_answer": "8., Josefstädter Straße 26",
    "wrong_answers": ["7., Arthur-Schnitzler-Platz 1", "9., Währinger Straße 78", "15., Roland-Rainer-Platz 1", "1., Universitätsring 2"]
  },
  {
    "id": 286, "question_ar": "أين توجد أوبرا الشعب؟",
    "question_de": "Wo ist die Volksoper?",
    "correct_answer": "9., Währinger Straße 78",
    "wrong_answers": ["1., Opernring 2", "6., Linke Wienzeile 6", "7., Arthur-Schnitzler-Platz 1", "1., Universitätsring 2"]
  },
  {
    "id": 287, "question_ar": "أين توجد قاعة المدينة؟",
    "question_de": "Wo ist die Stadthalle?",
    "correct_answer": "15., Roland-Rainer-Platz 1/Hütteldorfer Straße",
    "wrong_answers": ["3., Lothringerstraße 20", "1., Musikvereinsplatz 1", "6., Wallgasse 18-20", "1., Universitätsring 2"]
  },
  
  // ========== الجزء الخامس عشر: الجامعات والمؤسسات التعليمية ==========
  {
    "id": 288, "question_ar": "أين توجد جامعة فيينا؟",
    "question_de": "Wo ist die Universität Wien?",
    "correct_answer": "1., Universitätsring 1",
    "wrong_answers": ["4., Karlsplatz 13", "2., Welthandelsplatz 1", "18., Gregor-Mendel-Straße 33", "1., Opernring 2"]
  },
  {
    "id": 289, "question_ar": "أين توجد Hochschule für angewandte Kunst؟",
    "question_de": "Wo ist die Hochschule für angewandte Kunst?",
    "correct_answer": "1., Oskar Kokoschka Platz 2",
    "wrong_answers": ["1., Universitätsring 1", "1., Schillerplatz 3", "3., Lothringerstraße 20", "2., Welthandelsplatz 1"]
  },
  {
    "id": 290, "question_ar": "أين توجد أكاديمية الفنون الجميلة؟",
    "question_de": "Wo ist die Akademie der bildenden Künste?",
    "correct_answer": "1., Schillerplatz 3",
    "wrong_answers": ["1., Oskar Kokoschka Platz 2", "3., Lothringerstraße 20", "2., Welthandelsplatz 1", "21., Veterinärplatz 1"]
  },
  {
    "id": 291, "question_ar": "أين توجد Hochschule für Musik und darstellende Kunst؟",
    "question_de": "Wo ist die Hochschule für Musik und darstellende Kunst (Konzerthaus)?",
    "correct_answer": "3., Lothringerstraße 20",
    "wrong_answers": ["1., Schillerplatz 3", "4., Karlsplatz 13", "2., Welthandelsplatz 1", "18., Gregor-Mendel-Straße 33"]
  },
  {
    "id": 292, "question_ar": "أين يقع Tech Gate Vienna؟",
    "question_de": "Wo ist das Tech Gate Vienna?",
    "correct_answer": "22., Donau-City-Straße 9",
    "wrong_answers": ["4., Karlsplatz 13", "2., Welthandelsplatz 1", "18., Gregor-Mendel-Straße 33", "21., Veterinärplatz 1"]
  },
  {
    "id": 293, "question_ar": "أين توجد الجامعة التقنية؟",
    "question_de": "Wo ist die Technische Universität?",
    "correct_answer": "4., Karlsplatz 13",
    "wrong_answers": ["1., Universitätsring 1", "2., Welthandelsplatz 1", "18., Gregor-Mendel-Straße 33", "1., Universitätsring 2"]
  },
  {
    "id": 294, "question_ar": "أين توجد جامعة الاقتصاد (WU)؟",
    "question_de": "Wo ist die Wirtschaftsuniversität (WU)?",
    "correct_answer": "2., Welthandelsplatz 1",
    "wrong_answers": ["1., Universitätsring 1", "4., Karlsplatz 13", "18., Gregor-Mendel-Straße 33", "1., Universitätsring 2"]
  },
  {
    "id": 295, "question_ar": "أين توجد جامعة الموارد الطبيعية وعلوم الحياة (BOKU)؟",
    "question_de": "Wo ist die Universität für Bodenkultur ('BOKU')?",
    "correct_answer": "18., Gregor-Mendel-Straße 33",
    "wrong_answers": ["1., Universitätsring 1", "4., Karlsplatz 13", "2., Welthandelsplatz 1", "21., Veterinärplatz 1"]
  },
  {
    "id": 296, "question_ar": "أين توجد جامعة الطب البيطري؟",
    "question_de": "Wo ist die Veterinärmedizinische Universität?",
    "correct_answer": "21., Veterinärplatz 1",
    "wrong_answers": ["1., Universitätsring 1", "4., Karlsplatz 13", "18., Gregor-Mendel-Straße 33", "2., Welthandelsplatz 1"]
  },
  {
    "id": 297, "question_ar": "أين توجد الكلية التربوية فيينا؟",
    "question_de": "Wo ist die Pädagogische Hochschule Wien?",
    "correct_answer": "10., Grenzackerstraße 18",
    "wrong_answers": ["1., Universitätsring 1", "4., Karlsplatz 13", "18., Gregor-Mendel-Straße 33", "21., Veterinärplatz 1"]
  },
  
  // ========== الجزء السادس عشر: المتاحف ==========
  {
    "id": 298, "question_ar": "أين يقع متحف الفنون الجميلة؟",
    "question_de": "Wo ist das Kunsthistorische Museum?",
    "correct_answer": "1., Burgring 5",
    "wrong_answers": ["1., Burgring 7", "1., Albertinaplatz 1", "7., Museumsplatz 1", "4., Karlsplatz 8"]
  },
  {
    "id": 299, "question_ar": "أين يقع متحف التاريخ الطبيعي؟",
    "question_de": "Wo ist das Naturhistorische Museum?",
    "correct_answer": "1., Burgring 7",
    "wrong_answers": ["1., Burgring 5", "1., Albertinaplatz 1", "7., Museumsplatz 1", "4., Karlsplatz 8"]
  },
  {
    "id": 300, "question_ar": "أين يقع ألبرتينا؟",
    "question_de": "Wo ist die Albertina?",
    "correct_answer": "1., Albertinaplatz 1",
    "wrong_answers": ["1., Burgring 5", "1., Burgring 7", "7., Museumsplatz 1", "4., Karlsplatz 8"]
  },
  {
    "id": 301, "question_ar": "أين يقع متحف الفنون التطبيقية (MAK)؟",
    "question_de": "Wo ist das Museum für angewandte Kunst ('MAK')?",
    "correct_answer": "1., Stubenring 5",
    "wrong_answers": ["1., Burgring 5", "1., Albertinaplatz 1", "7., Museumsplatz 1", "4., Karlsplatz 8"]
  },
  {
    "id": 302, "question_ar": "أين يقع مبنى الانفصال (Secession)؟",
    "question_de": "Wo ist die Secession?",
    "correct_answer": "1., Friedrichstraße 12",
    "wrong_answers": ["1., Burgring 5", "1., Stubenring 5", "7., Museumsplatz 1", "4., Karlsplatz 8"]
  },
  {
    "id": 303, "question_ar": "أين يقع المتحف العالمي فيينا؟",
    "question_de": "Wo ist das Weltmuseum Wien?",
    "correct_answer": "1., Neue Burg (Heldenplatz)",
    "wrong_answers": ["1., Burgring 5", "1., Stubenring 5", "1., Friedrichstraße 12", "4., Karlsplatz 8"]
  },
  {
    "id": 304, "question_ar": "أين يقع متحف سيسي فيينا؟",
    "question_de": "Wo ist das Sissi-Museum Wien?",
    "correct_answer": "1., Hofburg/Michaelerkuppel",
    "wrong_answers": ["1., Neue Burg (Heldenplatz)", "13., Schönbrunner Schloßstraße 47", "1., Tegetthoffstraße 2/Neuer Markt", "3., Arsenal Objekt 1"]
  },
  {
    "id": 305, "question_ar": "أين توجد القبو الإمبراطوري (قبو الكبوشيين)؟",
    "question_de": "Wo ist die Kaisergruft (Kapuzinergruft)?",
    "correct_answer": "1., Tegetthoffstraße 2/Neuer Markt",
    "wrong_answers": ["1., Hofburg/Michaelerkuppel", "1., Neue Burg (Heldenplatz)", "3., Arsenal Objekt 1", "3., Untere Weißgerberstraße 13"]
  },
  {
    "id": 306, "question_ar": "أين يقع متحف التاريخ العسكري؟",
    "question_de": "Wo ist das Heeresgeschichtliches Museum?",
    "correct_answer": "3., Arsenal Objekt 1",
    "wrong_answers": ["1., Tegetthoffstraße 2/Neuer Markt", "3., Untere Weißgerberstraße 13", "4., Karlsplatz 8", "7., Museumsplatz 1"]
  },
  {
    "id": 307, "question_ar": "أين يقع متحف الفن فيينا؟",
    "question_de": "Wo ist das KunstHaus Wien?",
    "correct_answer": "3., Untere Weißgerberstraße 13",
    "wrong_answers": ["3., Arsenal Objekt 1", "4., Karlsplatz 8", "7., Museumsplatz 1", "14., Mariahilfer Straße 212"]
  },
  {
    "id": 308, "question_ar": "أين يقع المتحف التاريخي لمدينة فيينا؟",
    "question_de": "Wo ist das Historische Museum der Stadt Wien?",
    "correct_answer": "4., Karlsplatz 8",
    "wrong_answers": ["3., Untere Weißgerberstraße 13", "7., Museumsplatz 1", "14., Mariahilfer Straße 212", "1., Burgring 5"]
  },
  {
    "id": 309, "question_ar": "أين يقع حي المتاحف؟",
    "question_de": "Wo ist das Museumsquartier?",
    "correct_answer": "7., Museumsplatz 1",
    "wrong_answers": ["4., Karlsplatz 8", "14., Mariahilfer Straße 212", "1., Burgring 5", "1., Burgring 7"]
  },
  {
    "id": 310, "question_ar": "أين يقع المتحف التقني؟",
    "question_de": "Wo ist das Technische Museum?",
    "correct_answer": "14., Mariahilfer Straße 212",
    "wrong_answers": ["7., Museumsplatz 1", "4., Karlsplatz 8", "1., Burgring 5", "1., Burgring 7"]
  },
  
  // ========== الجزء السابع عشر: المعالم السياحية ==========
  {
    "id": 311, "question_ar": "أين يقع قصر شونبرون؟",
    "question_de": "Wo ist Schloss Schönbrunn?",
    "correct_answer": "13., Schönbrunner Schloßstraße 47",
    "wrong_answers": ["3., Prinz-Eugen-Straße 27", "1., Hofburg", "2., Riesenradplatz", "3., Löwengasse/Kegelgasse 36"]
  },
  {
    "id": 312, "question_ar": "أين يقع قصر بلفيدير؟",
    "question_de": "Wo ist Schloss Belvedere?",
    "correct_answer": "3., Prinz-Eugen-Straße 27",
    "wrong_answers": ["13., Schönbrunner Schloßstraße 47", "1., Hofburg", "2., Riesenradplatz", "3., Löwengasse/Kegelgasse 36"]
  },
  {
    "id": 313, "question_ar": "أين يقع عجلة فيريس؟",
    "question_de": "Wo ist das Riesenrad?",
    "correct_answer": "2., Riesenradplatz",
    "wrong_answers": ["1., Praterstern", "2., Krieau", "2., Freudenau", "13., Schönbrunner Schloßstraße 47"]
  },
  {
    "id": 314, "question_ar": "أين يقع منزل هوندرتفاسر؟",
    "question_de": "Wo ist das Hundertwasser-Haus?",
    "correct_answer": "3., Löwengasse/Kegelgasse 36",
    "wrong_answers": ["1., Hoher Markt 10-11", "6., Fritz-Grünbaum-Platz 1", "9., Berggasse 19", "2., Riesenradplatz"]
  },
  {
    "id": 315, "question_ar": "أين يقع منزل البحر؟",
    "question_de": "Wo ist das Haus des Meeres?",
    "correct_answer": "6., Fritz-Grünbaum-Platz 1",
    "wrong_answers": ["3., Löwengasse/Kegelgasse 36", "1., Hoher Markt 10-11", "9., Berggasse 19", "2., Riesenradplatz"]
  },
  {
    "id": 316, "question_ar": "أين يقع براء الدانوب؟",
    "question_de": "Wo ist der Donauturm?",
    "correct_answer": "22., Donauturmstraße 8",
    "wrong_answers": ["22., Wagramer Straße 5", "22., Bruno-Kreisky-Platz 1", "2., Handelskai 269", "6., Fritz-Grünbaum-Platz 1"]
  },
  {
    "id": 317, "question_ar": "أين توجد مدينة الأمم المتحدة؟",
    "question_de": "Wo ist die UNO-City?",
    "correct_answer": "22., Wagramer Straße 5",
    "wrong_answers": ["22., Donauturmstraße 8", "22., Bruno-Kreisky-Platz 1", "2., Handelskai 269", "6., Fritz-Grünbaum-Platz 1"]
  },
  {
    "id": 318, "question_ar": "أين يقع مركز المؤتمرات النمساوي؟",
    "question_de": "Wo ist das Austria Center Vienna?",
    "correct_answer": "22., Bruno-Kreisky-Platz 1",
    "wrong_answers": ["22., Wagramer Straße 5", "22., Donauturmstraße 8", "2., Handelskai 269", "6., Fritz-Grünbaum-Platz 1"]
  },
  {
    "id": 319, "question_ar": "أين يقع كاتدرائية القديس ستيفان؟",
    "question_de": "Wo ist der Stephansdom?",
    "correct_answer": "1., Stephansplatz 3",
    "wrong_answers": ["1., Petersplatz 1", "9., Rooseveltplatz", "4., Kreuzherrengasse 1", "1., Hofburg"]
  },
  {
    "id": 320, "question_ar": "أين توجد كنيسة القديس كارل؟",
    "question_de": "Wo ist die Karlskirche?",
    "correct_answer": "4., Kreuzherrengasse 1",
    "wrong_answers": ["1., Stephansplatz 3", "9., Rooseveltplatz", "1., Petersplatz 1", "1., Hofburg"]
  },
  {
    "id": 321, "question_ar": "أين توجد كنيسة فوتيف؟",
    "question_de": "Wo ist die Votivkirche?",
    "correct_answer": "9., Rooseveltplatz",
    "wrong_answers": ["4., Kreuzherrengasse 1", "1., Stephansplatz 3", "1., Petersplatz 1", "1., Hofburg"]
  },
  {
    "id": 322, "question_ar": "أين يقع متحف سيغموند فرويد؟",
    "question_de": "Wo ist das Sigmund Freud-Museum?",
    "correct_answer": "9., Berggasse 19",
    "wrong_answers": ["3., Löwengasse/Kegelgasse 36", "6., Fritz-Grünbaum-Platz 1", "1., Hoher Markt 10-11", "2., Riesenradplatz"]
  },
  {
    "id": 323, "question_ar": "أين توجد قلعة هوفبورغ؟",
    "question_de": "Wo ist die Hofburg?",
    "correct_answer": "1., Hofburg (Heldenplatz)",
    "wrong_answers": ["13., Schönbrunner Schloßstraße 47", "3., Prinz-Eugen-Straße 27", "2., Riesenradplatz", "3., Löwengasse/Kegelgasse 36"]
  },
  {
    "id": 324, "question_ar": "أين يقع مبنى البورصة؟",
    "question_de": "Wo ist die Börse?",
    "correct_answer": "1., Schottenring",
    "wrong_answers": ["1., Ringturm", "1., Kärntner Ring", "1., Stubenring", "1., Parkring"]
  },
  {
    "id": 325, "question_ar": "أين يقع برج الحلقة؟",
    "question_de": "Wo ist der Ringturm?",
    "correct_answer": "1., Franz-Josefs-Kai",
    "wrong_answers": ["1., Schottenring", "1., Stubenring", "1., Parkring", "1., Kärntner Ring"]
  },
  {
    "id": 326, "question_ar": "أين يقع مبنى Wiener Tourismusverband؟",
    "question_de": "Wo ist der Wiener Tourismusverband?",
    "correct_answer": "2., Obere Augartenstraße",
    "wrong_answers": ["1., Rathausplatz 1", "1., Stephansplatz 3", "3., Prinz-Eugen-Straße 27", "13., Schönbrunner Schloßstraße 47"]
  },
  
  // ========== الجزء الثامن عشر: تغيير أسماء الشوارع بعد عبور Gürtel ==========
  {
    "id": 327, "question_ar": "بعد عبور الجورتل، ماذا يصبح اسم Adolf-Blamauer-Gasse في المنطقة 3؟",
    "question_de": "Wie heißen die nachfolgenden Straßen, nachdem Sie den GÜRTEL überquert haben? Adolf-Blamauer-Gasse 3.",
    "correct_answer": "Ghegastraße 3.",
    "wrong_answers": ["Fasangasse 3.", "Arsenalstraße 3./10.", "Favoritenstraße 4.", "Gertrude-Fröhlich-Sandner-Str. 10."]
  },
  {
    "id": 328, "question_ar": "بعد عبور الجورتل، ماذا يصبح اسم Schweizer Garten Straße في المنطقة 3؟",
    "question_de": "Wie heißen die nachfolgenden Straßen, nachdem Sie den GÜRTEL überquert haben? Schweizer Garten Straße 3.",
    "correct_answer": "Fasangasse 3.",
    "wrong_answers": ["Ghegastraße 3.", "Arsenalstraße 3./10.", "Laxenburger Straße 10.", "Favoritenstraße 4."]
  },
  {
    "id": 329, "question_ar": "بعد عبور الجورتل، ماذا يصبح اسم Prinz Eugen-Straße في المناطق 3/4؟",
    "question_de": "Wie heißen die nachfolgenden Straßen, nachdem Sie den GÜRTEL überquert haben? Prinz Eugen-Straße 3./4.",
    "correct_answer": "Arsenalstraße 3./10.",
    "wrong_answers": ["Fasangasse 3.", "Gertrude-Fröhlich-Sandner-Str. 10.", "Laxenburger Straße 10.", "Favoritenstraße 4."]
  },
  {
    "id": 330, "question_ar": "بعد عبور الجورتل، ماذا يصبح اسم Argentinierstraße في المنطقة 4؟",
    "question_de": "Wie heißen die nachfolgenden Straßen, nachdem Sie den GÜRTEL überquert haben? Argentinierstraße 4.",
    "correct_answer": "Gertrude-Fröhlich-Sandner-Str. 10.",
    "wrong_answers": ["Arsenalstraße 3./10.", "Laxenburger Straße 10.", "Favoritenstraße 4.", "Landgutgasse 10."]
  },
  {
    "id": 331, "question_ar": "بعد عبور الجورتل، ماذا يصبح اسم Favoritenstraße في المنطقة 4؟",
    "question_de": "Wie heißen die nachfolgenden Straßen, nachdem Sie den GÜRTEL überquert haben? Favoritenstraße 4.",
    "correct_answer": "Laxenburger Straße 10.",
    "wrong_answers": ["Gertrude-Fröhlich-Sandner-Str. 10.", "Landgutgasse 10.", "Gudrunstraße 10.", "Triester Straße 10."]
  },
  {
    "id": 332, "question_ar": "بعد عبور الجورتل، ماذا يصبح اسم Kliebergasse في المنطقة 5؟",
    "question_de": "Wie heißen die nachfolgenden Straßen, nachdem Sie den GÜRTEL überquert haben? Kliebergasse 5.",
    "correct_answer": "Landgutgasse 10.",
    "wrong_answers": ["Laxenburger Straße 10.", "Gudrunstraße 10.", "Triester Straße 10.", "Flurschützstraße 12."]
  },
  {
    "id": 333, "question_ar": "بعد عبور الجورتل، ماذا يصبح اسم Gudrunstraße في المنطقة 10؟",
    "question_de": "Wie heißen die nachfolgenden Straßen, nachdem Sie den GÜRTEL überquert haben? Gudrunstraße 10.",
    "correct_answer": "Wiedner Hauptstraße/Reinprechtsdorfer Straße 5.",
    "wrong_answers": ["Landgutgasse 10.", "Triester Straße 10.", "Flurschützstraße 12.", "Steinbauergasse 12."]
  },
  {
    "id": 334, "question_ar": "بعد عبور الجورتل، ماذا يصبح اسم Triester Straße في المنطقة 10؟",
    "question_de": "Wie heißen die nachfolgenden Straßen, nachdem Sie den GÜRTEL überquert haben? Triester Straße 10.",
    "correct_answer": "Wiedner Hauptstraße/Reinprechtsdorfer Straße 5.",
    "wrong_answers": ["Gudrunstraße 10.", "Flurschützstraße 12.", "Steinbauergasse 12.", "Arndtstraße 12."]
  },
  {
    "id": 335, "question_ar": "بعد عبور الجورتل، ماذا يصبح اسم Siebenbrunnengasse في المنطقة 5؟",
    "question_de": "Wie heißen die nachfolgenden Straßen, nachdem Sie den GÜRTEL überquert haben? Siebenbrunnengasse 5.",
    "correct_answer": "Flurschützstraße 12.",
    "wrong_answers": ["Steinbauergasse 12.", "Arndtstraße 12.", "Sechshauser Straße 15.", "Felberstraße 15."]
  },
  {
    "id": 336, "question_ar": "بعد عبور الجورتل، ماذا يصبح اسم Arbeitergasse في المنطقة 5؟",
    "question_de": "Wie heißen die nachfolgenden Straßen, nachdem Sie den GÜRTEL überquert haben? Arbeitergasse 5.",
    "correct_answer": "Steinbauergasse 12.",
    "wrong_answers": ["Flurschützstraße 12.", "Arndtstraße 12.", "Sechshauser Straße 15.", "Felberstraße 15."]
  },
  {
    "id": 337, "question_ar": "بعد عبور الجورتل، ماذا يصبح اسم Margaretenstraße في المنطقة 5؟",
    "question_de": "Wie heißen die nachfolgenden Straßen, nachdem Sie den GÜRTEL überquert haben? Margaretenstraße 5.",
    "correct_answer": "Arndtstraße 12.",
    "wrong_answers": ["Steinbauergasse 12.", "Flurschützstraße 12.", "Sechshauser Straße 15.", "Felberstraße 15."]
  },
  {
    "id": 338, "question_ar": "بعد عبور الجورتل، ماذا يصبح اسم Gumpendorfer Straße في المنطقة 6؟",
    "question_de": "Wie heißen die nachfolgenden Straßen, nachdem Sie den GÜRTEL überquert haben? Gumpendorfer Straße 6.",
    "correct_answer": "Sechshauser Straße 15.",
    "wrong_answers": ["Felberstraße 15.", "Hütteldorfer Straße 15.", "Thaliastraße 16.", "Koppstraße 16."]
  },
  {
    "id": 339, "question_ar": "بعد عبور الجورتل، ماذا يصبح اسم Stollgasse في المنطقة 7؟",
    "question_de": "Wie heißen die nachfolgenden Straßen, nachdem Sie den GÜRTEL überquert haben? Stollgasse 7.",
    "correct_answer": "Felberstraße 15.",
    "wrong_answers": ["Sechshauser Straße 15.", "Hütteldorfer Straße 15.", "Thaliastraße 16.", "Koppstraße 16."]
  },
  {
    "id": 340, "question_ar": "بعد عبور الجورتل، ماذا يصبح اسم Urban-Loritz-Platz (Westbahnstraße) في المنطقة 7؟",
    "question_de": "Wie heißen die nachfolgenden Straßen, nachdem Sie den GÜRTEL überquert haben? Urban-Loritz-Platz (Westbahnstraße) 7.",
    "correct_answer": "Hütteldorfer Straße 15.",
    "wrong_answers": ["Felberstraße 15.", "Sechshauser Straße 15.", "Thaliastraße 16.", "Koppstraße 16."]
  },
  {
    "id": 341, "question_ar": "بعد عبور الجورتل، ماذا يصبح اسم Gablenzgasse في المناطق 15/16؟",
    "question_de": "Wie heißen die nachfolgenden Straßen, nachdem Sie den GÜRTEL überquert haben? Gablenzgasse 15./16.",
    "correct_answer": "Burggasse 7.",
    "wrong_answers": ["Thaliastraße 16.", "Neulerchenfelder Straße 16.", "Ottakringer Straße 17.", "Kinderspitalgasse 9."]
  },
  {
    "id": 342, "question_ar": "بعد عبور الجورتل، ماذا يصبح اسم Neustiftgasse في المنطقة 7؟",
    "question_de": "Wie heißen die nachfolgenden Straßen, nachdem Sie den GÜRTEL überquert haben? Neustiftgasse 7.",
    "correct_answer": "Koppstraße 16.",
    "wrong_answers": ["Burggasse 7.", "Thaliastraße 16.", "Neulerchenfelder Straße 16.", "Ottakringer Straße 17."]
  },
  {
    "id": 343, "question_ar": "بعد عبور الجورتل، ماذا يصبح اسم Lerchenfelder Straße في المناطق 7/8؟",
    "question_de": "Wie heißen die nachfolgenden Straßen, nachdem Sie den GÜRTEL überquert haben? Lerchenfelder Straße 7./8.",
    "correct_answer": "Thaliastraße 16.",
    "wrong_answers": ["Koppstraße 16.", "Neulerchenfelder Straße 16.", "Ottakringer Straße 17.", "Kinderspitalgasse 9."]
  },
  {
    "id": 344, "question_ar": "بعد عبور الجورتل، ماذا يصبح اسم Josefstädter Straße في المنطقة 8؟",
    "question_de": "Wie heißen die nachfolgenden Straßen, nachdem Sie den GÜRTEL überquert haben? Josefstädter Straße 8.",
    "correct_answer": "Neulerchenfelder Straße 16.",
    "wrong_answers": ["Thaliastraße 16.", "Ottakringer Straße 17.", "Kinderspitalgasse 9.", "Jörgerstraße 17."]
  },
  {
    "id": 345, "question_ar": "بعد عبور الجورتل، ماذا يصبح اسم Alser Straße في المناطق 8/9؟",
    "question_de": "Wie heißen die nachfolgenden Straßen, nachdem Sie den GÜRTEL überquert haben? Alser Straße 8./9.",
    "correct_answer": "Ottakringer Straße 17.",
    "wrong_answers": ["Neulerchenfelder Straße 16.", "Kinderspitalgasse 9.", "Jörgerstraße 17.", "Gentzgasse 18."]
  },
  {
    "id": 346, "question_ar": "بعد عبور الجورتل، ماذا يصبح اسم Hernalser Hauptstraße في المنطقة 17؟",
    "question_de": "Wie heißen die nachfolgenden Straßen, nachdem Sie den GÜRTEL überquert haben? Hernalser Hauptstraße 17.",
    "correct_answer": "Kinderspitalgasse 9.",
    "wrong_answers": ["Ottakringer Straße 17.", "Jörgerstraße 17.", "Gentzgasse 18.", "Währinger Straße 9."]
  },
  {
    "id": 347, "question_ar": "بعد عبور الجورتل، ماذا يصبح اسم Lazarettgasse في المنطقة 9؟",
    "question_de": "Wie heißen die nachfolgenden Straßen, nachdem Sie den GÜRTEL überquert haben? Lazarettgasse 9.",
    "correct_answer": "Jörgerstraße 17.",
    "wrong_answers": ["Kinderspitalgasse 9.", "Gentzgasse 18.", "Währinger Straße 9.", "Döblinger Hauptstraße 19."]
  },
  {
    "id": 348, "question_ar": "بعد عبور الجورتل، ماذا يصبح اسم Sechsschimmelgasse في المنطقة 9؟",
    "question_de": "Wie heißen die nachfolgenden Straßen, nachdem Sie den GÜRTEL überquert haben? Sechsschimmelgasse 9.",
    "correct_answer": "Gentzgasse 18.",
    "wrong_answers": ["Jörgerstraße 17.", "Währinger Straße 9.", "Döblinger Hauptstraße 19.", "Maria-Theresien-Straße 1./9."]
  },
  {
    "id": 349, "question_ar": "بعد عبور الجورتل، ماذا يصبح اسم Schulgasse في المنطقة 18؟",
    "question_de": "Wie heißen die nachfolgenden Straßen, nachdem Sie den GÜRTEL überquert haben? Schulgasse 18.",
    "correct_answer": "Währinger Straße 9.",
    "wrong_answers": ["Gentzgasse 18.", "Döblinger Hauptstraße 19.", "Maria-Theresien-Straße 1./9.", "Untere Augartenstraße 2."]
  },
  {
    "id": 350, "question_ar": "بعد عبور الجورتل، ماذا يصبح اسم Nußdorfer Straße في المنطقة 9؟",
    "question_de": "Wie heißen die nachfolgenden Straßen, nachdem Sie den GÜRTEL überquert haben? Nußdorfer Straße 9.",
    "correct_answer": "Döblinger Hauptstraße 19.",
    "wrong_answers": ["Währinger Straße 9.", "Maria-Theresien-Straße 1./9.", "Untere Augartenstraße 2.", "Salztorgasse 1."]
  },
  
  // ========== الجزء التاسع عشر: تغيير أسماء الشوارع بعد عبور قنوات الدانوب ==========
  {
    "id": 351, "question_ar": "بعد عبور قناة الدانوب، ماذا يصبح اسم Alserbachstraße في المنطقة 9؟",
    "question_de": "Wie heißen die nachfolgenden Straßen, nachdem Sie die Brücke über den DONAUKANAL überquert haben? Alserbachstraße 9.",
    "correct_answer": "Wallensteinstraße 20.",
    "wrong_answers": ["Türkenstraße 9.", "Untere Augartenstraße 2.", "Salztorgasse 1.", "Lilienbrunngasse/Gredlerstraße 2."]
  },
  {
    "id": 352, "question_ar": "بعد عبور قناة الدانوب، ماذا يصبح اسم Rembrandtstraße في المنطقة 2؟",
    "question_de": "Wie heißen die nachfolgenden Straßen, nachdem Sie die Brücke über den DONAUKANAL überquert haben? Rembrandtstraße 2.",
    "correct_answer": "Türkenstraße 9.",
    "wrong_answers": ["Wallensteinstraße 20.", "Untere Augartenstraße 2.", "Salztorgasse 1.", "Taborstraße 2."]
  },
  {
    "id": 353, "question_ar": "بعد عبور قناة الدانوب، ماذا يصبح اسم Maria-Theresien-Straße في المناطق 1/9؟",
    "question_de": "Wie heißen die nachfolgenden Straßen, nachdem Sie die Brücke über den DONAUKANAL überquert haben? Maria-Theresien-Straße 1./9.",
    "correct_answer": "Untere Augartenstraße 2.",
    "wrong_answers": ["Türkenstraße 9.", "Salztorgasse 1.", "Lilienbrunngasse/Gredlerstraße 2.", "Taborstraße 2."]
  },
  {
    "id": 354, "question_ar": "بعد عبور قناة الدانوب، ماذا يصبح اسم Hollandstraße في المنطقة 2؟",
    "question_de": "Wie heißen die nachfolgenden Straßen, nachdem Sie die Brücke über den DONAUKANAL überquert haben? Hollandstraße 2.",
    "correct_answer": "Salztorgasse 1.",
    "wrong_answers": ["Untere Augartenstraße 2.", "Lilienbrunngasse/Gredlerstraße 2.", "Taborstraße 2.", "Julius-Raab-Platz (Stubenring) 1."]
  },
  {
    "id": 355, "question_ar": "بعد عبور قناة الدانوب، ماذا يصبح اسم Rotenturmstraße في المنطقة 1؟",
    "question_de": "Wie heißen die nachfolgenden Straßen, nachdem Sie die Brücke über den DONAUKANAL überquert haben? Rotenturmstraße 1.",
    "correct_answer": "Lilienbrunngasse/Gredlerstraße 2.",
    "wrong_answers": ["Salztorgasse 1.", "Taborstraße 2.", "Julius-Raab-Platz (Stubenring) 1.", "Radetzkystraße 3."]
  },
  {
    "id": 356, "question_ar": "بعد عبور قناة الدانوب، ماذا يصبح اسم Laurenzerberg في المنطقة 1؟",
    "question_de": "Wie heißen die nachfolgenden Straßen, nachdem Sie die Brücke über den DONAUKANAL überquert haben? Laurenzerberg 1.",
    "correct_answer": "Taborstraße 2.",
    "wrong_answers": ["Lilienbrunngasse/Gredlerstraße 2.", "Julius-Raab-Platz (Stubenring) 1.", "Radetzkystraße 3.", "Rasumofskygasse 3."]
  },
  {
    "id": 357, "question_ar": "بعد عبور قناة الدانوب، ماذا يصبح اسم Aspernbrückengasse في المنطقة 2؟",
    "question_de": "Wie heißen die nachfolgenden Straßen, nachdem Sie die Brücke über den DONAUKANAL überquert haben? Aspernbrückengasse 2.",
    "correct_answer": "Julius-Raab-Platz (Stubenring) 1.",
    "wrong_answers": ["Taborstraße 2.", "Radetzkystraße 3.", "Rasumofskygasse 3.", "Schlachthausgasse 3."]
  },
  {
    "id": 358, "question_ar": "بعد عبور قناة الدانوب، ماذا يصبح اسم Franzensbrückenstraße في المنطقة 2؟",
    "question_de": "Wie heißen die nachfolgenden Straßen, nachdem Sie die Brücke über den DONAUKANAL überquert haben? Franzensbrückenstraße 2.",
    "correct_answer": "Radetzkystraße 3.",
    "wrong_answers": ["Julius-Raab-Platz (Stubenring) 1.", "Rasumofskygasse 3.", "Schlachthausgasse 3.", "Haidequerstraße 11."]
  },
  {
    "id": 359, "question_ar": "بعد عبور قناة الدانوب، ماذا يصبح اسم Wittelsbachstraße في المنطقة 2؟",
    "question_de": "Wie heißen die nachfolgenden Straßen, nachdem Sie die Brücke über den DONAUKANAL überquert haben? Wittelsbachstraße 2.",
    "correct_answer": "Rasumofskygasse 3.",
    "wrong_answers": ["Radetzkystraße 3.", "Schlachthausgasse 3.", "Haidequerstraße 11.", "Seitenhafenstraße 2."]
  },
  {
    "id": 360, "question_ar": "بعد عبور قناة الدانوب، ماذا يصبح اسم Stadionallee في المنطقة 2؟",
    "question_de": "Wie heißen die nachfolgenden Straßen, nachdem Sie die Brücke über den DONAUKANAL überquert haben? Stadionallee 2.",
    "correct_answer": "Schlachthausgasse 3.",
    "wrong_answers": ["Rasumofskygasse 3.", "Haidequerstraße 11.", "Seitenhafenstraße 2.", "Floridsdorfer Hauptstraße 21."]
  },
  {
    "id": 361, "question_ar": "بعد عبور قناة الدانوب، ماذا يصبح اسم Freudenauer Hafenstraße في المنطقة 2؟",
    "question_de": "Wie heißen die nachfolgenden Straßen, nachdem Sie die Brücke über den DONAUKANAL überquert haben? Freudenauer Hafenstraße 2.",
    "correct_answer": "Haidequerstraße 11.",
    "wrong_answers": ["Schlachthausgasse 3.", "Seitenhafenstraße 2.", "Floridsdorfer Hauptstraße 21.", "Adalbert-Stifter-Straße 20."]
  },
  {
    "id": 362, "question_ar": "بعد عبور قناة الدانوب، ماذا يصبح اسم Zinnergasse في المنطقة 11؟",
    "question_de": "Wie heißen die nachfolgenden Straßen, nachdem Sie die Brücke über den DONAUKANAL überquert haben? Zinnergasse 11.",
    "correct_answer": "Seitenhafenstraße 2.",
    "wrong_answers": ["Haidequerstraße 11.", "Floridsdorfer Hauptstraße 21.", "Adalbert-Stifter-Straße 20.", "Döblinger Gürtel 19."]
  },
  {
    "id": 363, "question_ar": "بعد عبور قناة الدانوب، ماذا يصبح اسم Adalbert-Stifter-Straße في المنطقة 20؟",
    "question_de": "Wie heißen die nachfolgenden Straßen, nachdem Sie die Brücke über den DONAUKANAL überquert haben? Adalbert-Stifter-Straße 20.",
    "correct_answer": "Floridsdorfer Hauptstraße 21.",
    "wrong_answers": ["Seitenhafenstraße 2.", "Adalbert-Stifter-Straße 20.", "Döblinger Gürtel 19.", "Wagramer Straße 22."]
  },
  {
    "id": 364, "question_ar": "بعد عبور قناة الدانوب، ماذا يصبح اسم Döblinger Gürtel في المنطقة 19؟",
    "question_de": "Wie heißen die nachfolgenden Straßen, nachdem Sie die Brücke über den DONAUKANAL überquert haben? Döblinger Gürtel 19.",
    "correct_answer": "Adalbert-Stifter-Straße 20.",
    "wrong_answers": ["Floridsdorfer Hauptstraße 21.", "Wagramer Straße 22.", "2., Lassallestraße 2", "22., Wagramer Straße"]
  },
  {
    "id": 365, "question_ar": "بعد عبور قناة الدانوب، ماذا يصبح اسم Lassallestraße في المنطقة 2؟",
    "question_de": "Wie heißen die nachfolgenden Straßen, nachdem Sie die Brücke über den DONAUKANAL überquert haben? Lassallestraße 2.",
    "correct_answer": "Wagramer Straße 22.",
    "wrong_answers": ["Adalbert-Stifter-Straße 20.", "Floridsdorfer Hauptstraße 21.", "Seitenhafenstraße 2.", "Haidequerstraße 11."]
  },
  
  // ========== الجزء العشرون: معلومات عامة إضافية ==========
  {
    "id": 366, "question_ar": "أين يقع مبنى البلدية الرئيسي في فيينا؟",
    "question_de": "Wo befindet sich das Wiener Rathaus?",
    "correct_answer": "1., Rathausplatz 1",
    "wrong_answers": ["1., Ballhausplatz 2", "1., Wipplingerstraße 8", "1., Herrengasse 7", "1., Dr.-Karl-Renner-Ring 3"]
  },
  {
    "id": 367, "question_ar": "أين يقع حديقة المدينة (شتاتبارك)؟",
    "question_de": "Wo ist der Stadtpark?",
    "correct_answer": "1., Parkring/Stubenring",
    "wrong_answers": ["3., Stadtpark", "1., Burggarten", "1., Volksgarten", "2., Augarten"]
  },
  {
    "id": 368, "question_ar": "أين يقع تمثال يوهان شتراوس في حديقة المدينة؟",
    "question_de": "Wo ist das Johann Strauß-Denkmal im Stadtpark?",
    "correct_answer": "1., Stadtpark (beim Kursalon)",
    "wrong_answers": ["1., Burggarten (Mozart-Denkmal)", "1., Volksgarten", "3., Schwarzenbergplatz", "1., Rathauspark"]
  },
  {
    "id": 369, "question_ar": "أين يقع كورسالون فيينا؟",
    "question_de": "Wo ist der Wiener Kursalon im Stadtpark?",
    "correct_answer": "1., Johannesgasse 33 (im Stadtpark)",
    "wrong_answers": ["1., Musikvereinsplatz 1", "3., Lothringerstraße 20", "1., Kärntner Ring 17", "9., Rooseveltplatz"]
  },
  {
    "id": 370, "question_ar": "أين يقع مكتب التسجيل المركزي للسكان في فيينا؟",
    "question_de": "Wo ist das Zentrale Melderegister Wien?",
    "correct_answer": "11., Engerthstraße 230-232",
    "wrong_answers": ["1., Wipplingerstraße 8", "1., Deutschmeisterplatz 3", "10., Laxenburger Straße 43-45", "5., Siebenbrunnenfeldgasse 3"]
  },
  {
    "id": 371, "question_ar": "أين يقع مركز فيينا للمعارض (ميسي فيينا)؟",
    "question_de": "Wo ist das Messe Wien?",
    "correct_answer": "2., Messestraße 1",
    "wrong_answers": ["22., Bruno-Kreisky-Platz 1", "15., Roland-Rainer-Platz 1", "1., Hofburg (Heldenplatz)", "3., Arsenal Objekt 1"]
  },
  {
    "id": 372, "question_ar": "أين يقع مركز تسوق فيينا ريفيرسايد؟",
    "question_de": "Wo ist das Shopping Center Wien Riverside?",
    "correct_answer": "20., Handelskai 92",
    "wrong_answers": ["2., Lassallestraße", "6., Mariahilfer Straße", "10., Favoritenstraße", "22., Donauzentrum"]
  },
  {
    "id": 373, "question_ar": "أين يقع مركز تسوق دوناوتسنتورم؟",
    "question_de": "Wo ist das Donauzentrum?",
    "correct_answer": "22., Wagramer Straße 81",
    "wrong_answers": ["20., Handelskai 92", "6., Mariahilfer Straße", "15., Hütteldorfer Straße", "10., Favoritenstraße"]
  },
  {
    "id": 374, "question_ar": "أين يقع مركز تسوق ويست بانك؟",
    "question_de": "Wo ist das Westbahnhof Shopping Center?",
    "correct_answer": "15., Europaplatz 2",
    "wrong_answers": ["20., Handelskai 92", "22., Wagramer Straße 81", "6., Mariahilfer Straße", "10., Favoritenstraße"]
  },
  {
    "id": 375, "question_ar": "أين يقع سوق ناشت ماركت؟",
    "question_de": "Wo ist der Naschmarkt?",
    "correct_answer": "6., Linke Wienzeile/Rechte Wienzeile",
    "wrong_answers": ["2., Karmelitermarkt", "16., Brunnengasse", "10., Viktor-Adler-Markt", "15., Meiselmarkt"]
  },
  {
    "id": 376, "question_ar": "أين يقع Wiener Tourismusverband (اتحاد السياحة في فيينا)؟",
    "question_de": "Wo ist der Wiener Tourismusverband?",
    "correct_answer": "2., Obere Augartenstraße",
    "wrong_answers": ["1., Stephansplatz 3", "1., Kärntner Ring", "3., Prinz-Eugen-Straße 27", "13., Schönbrunner Schloßstraße 47"]
  },
  
  // ========== الجزء الواحد والعشرون: معلومات عامة عن المناطق ==========
  {
    "id": 377, "question_ar": "ما هي الأماكن المهمة في المنطقة 2 (Leopoldstadt)؟",
    "question_de": "Welche wichtigen Orte gibt es im 2. Bezirk (Leopoldstadt)?",
    "correct_answer": "Prater, Krieau, Freudenau, Viertel Zwei",
    "wrong_answers": ["Schönbrunn, Speising, Hietzing", "Spittelberg, Museumsquartier", "Grinzing, Heiligenstadt, Neustift", "Ottakring, Hernals, Währing"]
  },
  {
    "id": 378, "question_ar": "ما هي الأماكن المهمة في المنطقة 3 (Landstraße)؟",
    "question_de": "Welche wichtigen Orte gibt es im 3. Bezirk (Landstraße)?",
    "correct_answer": "Erdberg; St. Marx",
    "wrong_answers": ["Prater, Krieau, Freudenau", "Spittelberg, Neubau", "Grinzing, Heiligenstadt", "Hetzendorf, Altmannsdorf"]
  },
  {
    "id": 379, "question_ar": "ما هي الأماكن المهمة في المنطقة 7 (Neubau)؟",
    "question_de": "Welche wichtigen Orte gibt es im 7. Bezirk (Neubau)?",
    "correct_answer": "Spittelberg",
    "wrong_answers": ["Erdberg; St. Marx", "Prater, Krieau", "Grinzing, Heiligenstadt", "Hetzendorf, Altmannsdorf"]
  },
  {
    "id": 380, "question_ar": "ما هي الأماكن المهمة في المنطقة 10 (Favoriten)؟",
    "question_de": "Welche wichtigen Orte gibt es im 10. Bezirk (Favoriten)?",
    "correct_answer": "Wienerfeld (West und Ost), Otto-Probst-Siedlung, Per Albin Hansson-Siedlung (West und Ost), Unterlaa (Kledering), Böhmischer Prater, Neu Laa, Rothneusiedl, Monte Laa",
    "wrong_answers": ["Prater, Krieau, Freudenau", "Spittelberg, Museumsquartier", "Grinzing, Heiligenstadt", "Hetzendorf, Altmannsdorf"]
  },
  {
    "id": 381, "question_ar": "ما هي الأماكن المهمة في المنطقة 11 (Simmering)؟",
    "question_de": "Welche wichtigen Orte gibt es im 11. Bezirk (Simmering)?",
    "correct_answer": "Simmeringer Haide, Thürnlhof-Siedlung, Leberberg-Siedlung, Kaiser Ebersdorf, Albern",
    "wrong_answers": ["Wienerfeld, Otto-Probst-Siedlung", "Spittelberg, Museumsquartier", "Grinzing, Heiligenstadt", "Hetzendorf, Altmannsdorf"]
  },
  {
    "id": 382, "question_ar": "ما هي الأماكن المهمة في المنطقة 12 (Meidling)؟",
    "question_de": "Welche wichtigen Orte gibt es im 12. Bezirk (Meidling)?",
    "correct_answer": "Hetzendorf, Altmannsdorf (Schöpfwerk)",
    "wrong_answers": ["Simmeringer Haide, Kaiser Ebersdorf", "Spittelberg, Museumsquartier", "Grinzing, Heiligenstadt", "Prater, Krieau"]
  },
  {
    "id": 383, "question_ar": "ما هي الأماكن المهمة في المنطقة 13 (Hietzing)؟",
    "question_de": "Welche wichtigen Orte gibt es im 13. Bezirk (Hietzing)?",
    "correct_answer": "Schönbrunn, Speising, Rosenhügel, Lainz, Unter-, Ober St.-Veit, Hacking",
    "wrong_answers": ["Hetzendorf, Altmannsdorf", "Spittelberg, Museumsquartier", "Grinzing, Heiligenstadt", "Prater, Krieau"]
  },
  {
    "id": 384, "question_ar": "ما هي الأماكن المهمة في المنطقة 14 (Penzing)؟",
    "question_de": "Welche wichtigen Orte gibt es im 14. Bezirk (Penzing)?",
    "correct_answer": "Breitensee, Baumgarten, Hütteldorf, Hüttelberg, Wolfersberg, Mariabrunn, Hadersdorf, Weidlingau",
    "wrong_answers": ["Schönbrunn, Speising, Hietzing", "Spittelberg, Museumsquartier", "Grinzing, Heiligenstadt", "Prater, Krieau"]
  },
  {
    "id": 385, "question_ar": "ما هي الأماكن المهمة في المنطقة 15 (Rudolfsheim-Fünfhaus)؟",
    "question_de": "Welche wichtigen Orte gibt es im 15. Bezirk (Rudolfsheim-Fünfhaus)?",
    "correct_answer": "Schmelz",
    "wrong_answers": ["Breitensee, Baumgarten", "Spittelberg, Museumsquartier", "Grinzing, Heiligenstadt", "Prater, Krieau"]
  },
  {
    "id": 386, "question_ar": "ما هي الأماكن المهمة في المنطقة 16 (Ottakring)؟",
    "question_de": "Welche wichtigen Orte gibt es im 16. Bezirk (Ottakring)?",
    "correct_answer": "Neulerchenfeld, Sandleiten, Gallitzinberg (Wilhelminenberg)",
    "wrong_answers": ["Schmelz", "Spittelberg, Museumsquartier", "Grinzing, Heiligenstadt", "Prater, Krieau"]
  },
  {
    "id": 387, "question_ar": "ما هي الأماكن المهمة في المنطقة 17 (Hernals)؟",
    "question_de": "Welche wichtigen Orte gibt es im 17. Bezirk (Hernals)?",
    "correct_answer": "Dornbach, Heuberg, Neuwaldegg",
    "wrong_answers": ["Neulerchenfeld, Sandleiten", "Spittelberg, Museumsquartier", "Grinzing, Heiligenstadt", "Prater, Krieau"]
  },
  {
    "id": 388, "question_ar": "ما هي الأماكن المهمة في المنطقة 18 (Währing)؟",
    "question_de": "Welche wichtigen Orte gibt es im 18. Bezirk (Währing)?",
    "correct_answer": "Gersthof, Schafberg, Pötzleinsdorf",
    "wrong_answers": ["Dornbach, Heuberg", "Spittelberg, Museumsquartier", "Grinzing, Heiligenstadt", "Prater, Krieau"]
  },
  {
    "id": 389, "question_ar": "ما هي الأماكن المهمة في المنطقة 19 (Döbling)؟",
    "question_de": "Welche wichtigen Orte gibt es im 19. Bezirk (Döbling)?",
    "correct_answer": "Hohe Warte, Salmannsdorf, Cobenzl, Kahlenberg, Leopoldsberg",
    "wrong_answers": ["Gersthof, Schafberg", "Spittelberg, Museumsquartier", "Prater, Krieau", "Hetzendorf, Altmannsdorf"]
  },
  {
    "id": 390, "question_ar": "ما هي الأماكن المهمة في المنطقة 21 (Floridsdorf)؟",
    "question_de": "Welche wichtigen Orte gibt es im 21. Bezirk (Floridsdorf)?",
    "correct_answer": "Donaufeld, Mühlschüttel, Bruckhaufen, Jedlesee, Leopoldau (Großfeldsiedlung, Nordrandsiedlung), Schwarzlackenau",
    "wrong_answers": ["Hohe Warte, Salmannsdorf", "Spittelberg, Museumsquartier", "Prater, Krieau", "Hetzendorf, Altmannsdorf"]
  },
  {
    "id": 391, "question_ar": "ما هي الأماكن المهمة في المنطقة 22 (Donaustadt)؟",
    "question_de": "Welche wichtigen Orte gibt es im 22. Bezirk (Donaustadt)?",
    "correct_answer": "Kaisermühlen, Kagran, Rennbahnsiedlung, Süßenbrunn, Breitenlee, Neu-Eßling, Hirschstetten, Stadlau, Lobau (Nationalpark), Aspern, Eßling, Gewerbepark Stadlau, Gewerbepark Kagran; Seestadt",
    "wrong_answers": ["Donaufeld, Mühlschüttel", "Spittelberg, Museumsquartier", "Prater, Krieau", "Hetzendorf, Altmannsdorf"]
  },
  {
    "id": 392, "question_ar": "ما هي الأماكن المهمة في المنطقة 23 (Liesing)؟",
    "question_de": "Welche wichtigen Orte gibt es im 23. Bezirk (Liesing)?",
    "correct_answer": "Atzgersdorf, Alt-Erlaa (Wohnpark), Siebenhirten, Inzersdorf, Kalksburg",
    "wrong_answers": ["Kaisermühlen, Kagran", "Spittelberg, Museumsquartier", "Prater, Krieau", "Hetzendorf, Altmannsdorf"]
  },
  
  // ========== الجزء الثاني والعشرون: أسئلة إضافية عن المعالم ==========
  {
    "id": 393, "question_ar": "أين توجد Hofburgkapelle؟",
    "question_de": "Wo ist die Hofburgkapelle?",
    "correct_answer": "1., Hofburg (Schweizerhof)",
    "wrong_answers": ["1., Neue Burg (Heldenplatz)", "1., Josefsplatz", "1., Michaelerplatz 1", "1., Heldenplatz"]
  },
  {
    "id": 394, "question_ar": "أين توجد Schatzkammer؟",
    "question_de": "Wo ist die Schatzkammer?",
    "correct_answer": "1., Hofburg (Schweizerhof)",
    "wrong_answers": ["1., Hofburgkapelle", "1., Neue Burg (Heldenplatz)", "1., Josefsplatz", "1., Michaelerplatz 1"]
  },
  {
    "id": 395, "question_ar": "أين يقع Kongreßzentrum؟",
    "question_de": "Wo ist das Kongreßzentrum?",
    "correct_answer": "1., Hofburg (Heldenplatz)",
    "wrong_answers": ["1., Hofburg (Schweizerhof)", "1., Josefsplatz", "1., Michaelerplatz 1", "22., Bruno-Kreisky-Platz 1"]
  },
  {
    "id": 396, "question_ar": "أين توجد المكتبة الوطنية؟",
    "question_de": "Wo ist die Nationalbibliothek?",
    "correct_answer": "1., Josefsplatz",
    "wrong_answers": ["1., Hofburg (Schweizerhof)", "1., Hofburg (Heldenplatz)", "1., Michaelerplatz 1", "1., Universitätsring 1"]
  },
  {
    "id": 397, "question_ar": "أين توجد Spanische Hofreitschule؟",
    "question_de": "Wo ist die Spanische Hofreitschule?",
    "correct_answer": "1., Michaelerplatz 1",
    "wrong_answers": ["1., Josefsplatz", "1., Heldenplatz", "1., Tegetthoffstraße 2/Neuer Markt", "1., Hoher Markt 10-11"]
  },
  {
    "id": 398, "question_ar": "أين يقع تمثال Prinz Eugen؟",
    "question_de": "Wo ist das Prinz Eugen-Denkmal?",
    "correct_answer": "1., Heldenplatz",
    "wrong_answers": ["1., Michaelerplatz 1", "1., Tegetthoffstraße 2/Neuer Markt", "1., Hoher Markt 10-11", "1., Stephansplatz 3"]
  },
  {
    "id": 399, "question_ar": "أين يقع تمثال Erzherzog Karl؟",
    "question_de": "Wo ist das Erzherzog Karl-Denkmal?",
    "correct_answer": "1., Heldenplatz",
    "wrong_answers": ["1., Prinz Eugen-Denkmal", "1., Tegetthoffstraße 2/Neuer Markt", "1., Hoher Markt 10-11", "1., Stephansplatz 3"]
  },
  {
    "id": 400, "question_ar": "أين توجد Anker-Uhr؟",
    "question_de": "Wo ist die Anker-Uhr?",
    "correct_answer": "1., Hoher Markt 10-11",
    "wrong_answers": ["1., Heldenplatz", "1., Stephansplatz 3", "2., Riesenradplatz", "3., Löwengasse/Kegelgasse 36"]
  },
  {
    "id": 401, "question_ar": "أين يقع Tiergarten Schönbrunn؟",
    "question_de": "Wo ist der Tiergarten Schönbrunn?",
    "correct_answer": "13., Maxingstraße 13b",
    "wrong_answers": ["13., Schönbrunner Schloßstraße 47", "12., Hohenbergstraße (Parkeingang)", "1., Hofburg (Heldenplatz)", "3., Prinz-Eugen-Straße 27"]
  },
  {
    "id": 402, "question_ar": "أين توجد Gloriette (في شونبرون)؟",
    "question_de": "Wo ist die Gloriette (Schönbrunn)?",
    "correct_answer": "12., Hohenbergstraße (Parkeingang)",
    "wrong_answers": ["13., Maxingstraße 13b", "13., Schönbrunner Schloßstraße 47", "1., Hofburg (Heldenplatz)", "3., Prinz-Eugen-Straße 27"]
  },
  {
    "id": 403, "question_ar": "أين توجد Roßauer Kaserne؟",
    "question_de": "Wo ist die Roßauer Kaserne?",
    "correct_answer": "9., Türkenstraße 22",
    "wrong_answers": ["9., Roßauer Lände 1", "1., Hofburg (Heldenplatz)", "3., Prinz-Eugen-Straße 27", "2., Riesenradplatz"]
  },
  {
    "id": 404, "question_ar": "أين توجد Peterskirche؟",
    "question_de": "Wo ist die Peterskirche?",
    "correct_answer": "1., Petersplatz 1",
    "wrong_answers": ["1., Stephansplatz 3", "9., Rooseveltplatz", "4., Kreuzherrengasse 1", "1., Hofburg"]
  },
  
  // ========== الجزء الثالث والعشرون: أسئلة النقل العام ==========
  {
    "id": 405, "question_ar": "أين يقع محطة U3 Erdberg؟",
    "question_de": "Wo ist die U-Bahn Station U3 Erdberg?",
    "correct_answer": "3., Erdbergstraße",
    "wrong_answers": ["10., Südtirolerplatz", "1., Stephansplatz", "4., Karlsplatz", "6., Westbahnhof"]
  },
  {
    "id": 406, "question_ar": "أين يقع محطة U1 Südtiroler Platz؟",
    "question_de": "Wo ist die U-Bahn Station U1 Südtiroler Platz?",
    "correct_answer": "10., Südtirolerplatz",
    "wrong_answers": ["3., Erdbergstraße", "1., Stephansplatz", "4., Karlsplatz", "6., Westbahnhof"]
  },
  {
    "id": 407, "question_ar": "أين يقع محطة U6 Floridsdorf؟",
    "question_de": "Wo ist die U-Bahn Station U6 Floridsdorf?",
    "correct_answer": "21., Floridsdorf/Schloßhofer Straße",
    "wrong_answers": ["10., Südtirolerplatz", "3., Erdbergstraße", "22., Kagran", "11., Simmeringer Platz"]
  },
  {
    "id": 408, "question_ar": "أين يقع محطة U1 Kagran؟",
    "question_de": "Wo ist die U-Bahn Station U1 Kagran?",
    "correct_answer": "22., Dr. Adolf-Schärf-Platz",
    "wrong_answers": ["21., Floridsdorf", "11., Simmeringer Platz", "3., Erdbergstraße", "10., Südtirolerplatz"]
  },
  {
    "id": 409, "question_ar": "أين يقع محطة U3 Simmering؟",
    "question_de": "Wo ist die U-Bahn Station U3 Simmering?",
    "correct_answer": "11., Simmeringer Platz",
    "wrong_answers": ["22., Kagran", "21., Floridsdorf", "3., Erdbergstraße", "10., Südtirolerplatz"]
  },
  
  // ========== الجزء الرابع والعشرون: معلومات عن السكن للتقاعد ==========
  {
    "id": 410, "question_ar": "أين يقع Kuratorium der Wiener Pensionistenwohnhäuser (المركز الرئيسي)؟",
    "question_de": "Wo ist das Kuratorium der Wiener Pensionistenwohnhäuser (Zentrale)?",
    "correct_answer": "9., Seegasse 11",
    "wrong_answers": ["1., Wipplingerstraße 8", "10., Laxenburger Straße 43-45", "5., Siebenbrunnenfeldgasse 3", "1., Rathausplatz 1"]
  },
  
  // ========== الجزء الخامس والعشرون: معلومات عن حي المتاحف ==========
  {
    "id": 411, "question_ar": "ما هو اسم حي المتاحف في فيينا؟",
    "question_de": "Wie heißt das Museumsviertel in Wien?",
    "correct_answer": "Museumsquartier",
    "wrong_answers": ["Museumstraße", "Kunstareal", "Kulturmeile", "Museumsmeile"]
  },
  
  // ========== الجزء السادس والعشرون: معلومات عن تاريخ فيينا ==========
  {
    "id": 412, "question_ar": "أين يقع Burgtor (بوابة القلعة)؟",
    "question_de": "Wo ist das Burgtor?",
    "correct_answer": "1., Burgring (bei der Hofburg)",
    "wrong_answers": ["1., Stephansplatz", "1., Kärntner Ring", "1., Schottenring", "1., Franz-Josefs-Kai"]
  },
  {
    "id": 413, "question_ar": "أين يقع Mozart-Denkmal؟",
    "question_de": "Wo ist das Mozart-Denkmal?",
    "correct_answer": "1., Burggarten",
    "wrong_answers": ["1., Stadtpark", "1., Volksgarten", "1., Rathauspark", "9., Rooseveltplatz"]
  },
  {
    "id": 414, "question_ar": "أين يقع Schiller-Denkmal؟",
    "question_de": "Wo ist das Schiller-Denkmal?",
    "correct_answer": "1., Opernring",
    "wrong_answers": ["1., Burggarten", "1., Stadtpark", "1., Volksgarten", "1., Rathauspark"]
  },
  {
    "id": 415, "question_ar": "أين يقع Goethe-Denkmal؟",
    "question_de": "Wo ist das Goethe-Denkmal?",
    "correct_answer": "1., Opernring",
    "wrong_answers": ["1., Schiller-Denkmal", "1., Burggarten", "1., Stadtpark", "1., Volksgarten"]
  },
  {
    "id": 416, "question_ar": "أين يقع Maria Theresia Denkmal؟",
    "question_de": "Wo ist das Maria Theresia Denkmal?",
    "correct_answer": "1., Burgring (zwischen den Museen)",
    "wrong_answers": ["1., Opernring", "1., Burggarten", "1., Heldenplatz", "1., Rathausplatz"]
  },
  {
    "id": 417, "question_ar": "أين يقع Republik-Denkmal؟",
    "question_de": "Wo ist das Republik-Denkmal?",
    "correct_answer": "1., Dr.-Karl-Renner-Ring",
    "wrong_answers": ["1., Burgring", "1., Opernring", "1., Heldenplatz", "1., Rathausplatz"]
  },
  {
    "id": 418, "question_ar": "أين يقع Pallas-Athene-Brunnen؟",
    "question_de": "Wo ist der Pallas-Athene-Brunnen?",
    "correct_answer": "1., Dr.-Karl-Renner-Ring (vor dem Parlament)",
    "wrong_answers": ["1., Burgring", "1., Opernring", "1., Rathausplatz", "1., Schwarzenbergplatz"]
  },
  {
    "id": 419, "question_ar": "أين يقع Liebenberg-Denkmal؟",
    "question_de": "Wo ist das Liebenberg-Denkmal?",
    "correct_answer": "1., Universitätsring",
    "wrong_answers": ["1., Dr.-Karl-Renner-Ring", "1., Burgring", "1., Opernring", "1., Rathausplatz"]
  },
  {
    "id": 420, "question_ar": "أين يقع Deutschmeister Denkmal؟",
    "question_de": "Wo ist das Deutschmeister Denkmal?",
    "correct_answer": "1., Schottenring",
    "wrong_answers": ["1., Universitätsring", "1., Dr.-Karl-Renner-Ring", "1., Burgring", "1., Opernring"]
  },
  {
    "id": 421, "question_ar": "أين يقع Radetzky-Denkmal؟",
    "question_de": "Wo ist das Radetzky-Denkmal?",
    "correct_answer": "1., Stubenring",
    "wrong_answers": ["1., Schottenring", "1., Universitätsring", "1., Burgring", "1., Opernring"]
  },
  {
    "id": 422, "question_ar": "أين يقع Georg-Coch-Denkmal؟",
    "question_de": "Wo ist das Georg-Coch-Denkmal?",
    "correct_answer": "1., Stubenring",
    "wrong_answers": ["1., Radetzky-Denkmal", "1., Schottenring", "1., Universitätsring", "1., Burgring"]
  },
  {
    "id": 423, "question_ar": "أين يقع Dr. Karl Lueger-Denkmal؟",
    "question_de": "Wo ist das Dr. Karl Lueger-Denkmal?",
    "correct_answer": "1., Stubenring",
    "wrong_answers": ["1., Georg-Coch-Denkmal", "1., Radetzky-Denkmal", "1., Schottenring", "1., Universitätsring"]
  },
  {
    "id": 424, "question_ar": "أين يقع Fürst Schwarzenberg-Denkmal؟",
    "question_de": "Wo ist das Fürst Schwarzenberg-Denkmal?",
    "correct_answer": "1., Schwarzenbergplatz",
    "wrong_answers": ["1., Stubenring", "1., Schottenring", "1., Universitätsring", "1., Burgring"]
  },
  
  // ========== الجزء السابع والعشرون: معلومات عن دور السينما ==========
  {
    "id": 425, "question_ar": "أين يقع مسرح Schutzhaus der Zukunft؟",
    "question_de": "Wo ist das Schutzhaus der Zukunft?",
    "correct_answer": "15., Auf der Schmelz, verl. Guntherstraße",
    "wrong_answers": ["1., Dorotheergasse 6-8", "3., Karl-Farkas-Gasse 19", "20., Wallensteinplatz 6", "22., Steigenteschgasse 94b"]
  },
  
  // ========== الجزء الثامن والعشرون: معلومات مختلطة ==========
  {
    "id": 426, "question_ar": "أين يمكن العثور على دليل المطاعم في فيينا؟",
    "question_de": "Wo kann man den 'Wiener-Restaurant-Führer' finden?",
    "correct_answer": "Wiener Tourismusverband, 2., Obere Augartenstraße",
    "wrong_answers": ["1., Rathausplatz 1", "1., Stephansplatz 3", "4., Karlsplatz 8", "13., Schönbrunner Schloßstraße 47"]
  },
  // ========== الجزء التاسع والعشرون: كاباريه ومسارح شعبية ==========
{
  "id": 427, "question_ar": "أين يقع مسرح Casa Nova؟",
  "question_de": "Wo befindet sich das Casa Nova?",
  "correct_answer": "1., Dorotheergasse 6-8",
  "wrong_answers": ["1., Liliengasse 2", "3., Karl-Farkas-Gasse 19", "8., Lenaugasse 1A", "20., Wallensteinplatz 6"]
},
{
  "id": 428, "question_ar": "أين يقع Eden Bar؟",
  "question_de": "Wo befindet sich der Eden Bar?",
  "correct_answer": "1., Liliengasse 2",
  "wrong_answers": ["1., Dorotheergasse 6-8", "3., Karl-Farkas-Gasse 19", "8., Lenaugasse 1A", "17., Rosensteingasse 39"]
},
{
  "id": 429, "question_ar": "أين يقع Globe Wien-Marx Halle؟",
  "question_de": "Wo befindet sich der Globe Wien-Marx Halle?",
  "correct_answer": "3., Karl-Farkas-Gasse 19",
  "wrong_answers": ["1., Dorotheergasse 6-8", "1., Liliengasse 2", "8., Lenaugasse 1A", "20., Wallensteinplatz 6"]
},
{
  "id": 430, "question_ar": "أين يقع Kabarett Niedermair؟",
  "question_de": "Wo befindet sich das Kabarett Niedermair?",
  "correct_answer": "8., Lenaugasse 1A",
  "wrong_answers": ["3., Karl-Farkas-Gasse 19", "17., Hernalser Hauptstraße 55", "20., Wallensteinplatz 6", "17., Rosensteingasse 39"]
},
{
  "id": 431, "question_ar": "أين يقع Kabarett Vindobona؟",
  "question_de": "Wo befindet sich das Kabarett Vindobona?",
  "correct_answer": "20., Wallensteinplatz 6",
  "wrong_answers": ["8., Lenaugasse 1A", "17., Hernalser Hauptstraße 55", "17., Rosensteingasse 39", "22., Steigenteschgasse 94b"]
},
{
  "id": 432, "question_ar": "أين يقع مسرح Kulisse؟",
  "question_de": "Wo befindet sich die Kulisse?",
  "correct_answer": "17., Rosensteingasse 39",
  "wrong_answers": ["20., Wallensteinplatz 6", "17., Hernalser Hauptstraße 55", "3., Rabengasse 3", "15., Goldschlagstraße 169"]
},
{
  "id": 433, "question_ar": "أين يقع مسرح Metropol؟",
  "question_de": "Wo befindet sich das Metropol?",
  "correct_answer": "17., Hernalser Hauptstraße 55",
  "wrong_answers": ["17., Rosensteingasse 39", "3., Rabengasse 3", "15., Goldschlagstraße 169", "15., Auf der Schmelz, verl. Guntherstraße"]
},
{
  "id": 434, "question_ar": "أين يقع Orpheum؟",
  "question_de": "Wo befindet sich das Orpheum?",
  "correct_answer": "22., Steigenteschgasse 94b",
  "wrong_answers": ["17., Hernalser Hauptstraße 55", "3., Rabengasse 3", "15., Goldschlagstraße 169", "1., Wollzeile 36"]
},
{
  "id": 435, "question_ar": "أين يقع Rabenhof Theater؟",
  "question_de": "Wo befindet sich das Rabenhof Theater?",
  "correct_answer": "3., Rabengasse 3",
  "wrong_answers": ["22., Steigenteschgasse 94b", "15., Goldschlagstraße 169", "15., Auf der Schmelz, verl. Guntherstraße", "1., Wollzeile 36"]
},
{
  "id": 436, "question_ar": "أين يقع مسرح Sargfabrik؟",
  "question_de": "Wo befindet sich die Sargfabrik?",
  "correct_answer": "15., Goldschlagstraße 169",
  "wrong_answers": ["3., Rabengasse 3", "15., Auf der Schmelz, verl. Guntherstraße", "6., Mariahilfer Straße 81", "4., Theresianumgasse 18"]
},
{
  "id": 437, "question_ar": "أين يقع Schutzhaus der Zukunft؟",
  "question_de": "Wo befindet sich das Schutzhaus der Zukunft?",
  "correct_answer": "15., Auf der Schmelz, verl. Guntherstraße",
  "wrong_answers": ["15., Goldschlagstraße 169", "6., Mariahilfer Straße 81", "4., Theresianumgasse 18", "7., Spittelberggasse 10"]
},
{
  "id": 438, "question_ar": "أين يقع Simpl؟",
  "question_de": "Wo befindet sich der Simpl?",
  "correct_answer": "1., Wollzeile 36",
  "wrong_answers": ["15., Auf der Schmelz, verl. Guntherstraße", "6., Mariahilfer Straße 81", "4., Theresianumgasse 18", "7., Spittelberggasse 10"]
},
{
  "id": 439, "question_ar": "أين يقع Stadtsaal؟",
  "question_de": "Wo befindet sich der Stadtsaal?",
  "correct_answer": "6., Mariahilfer Straße 81",
  "wrong_answers": ["1., Wollzeile 36", "4., Theresianumgasse 18", "7., Spittelberggasse 10", "8., Lenaugasse 1A"]
},
{
  "id": 440, "question_ar": "أين يقع Theater Akzent؟",
  "question_de": "Wo befindet sich das Theater Akzent?",
  "correct_answer": "4., Theresianumgasse 18",
  "wrong_answers": ["6., Mariahilfer Straße 81", "7., Spittelberggasse 10", "8., Lenaugasse 1A", "3., Karl-Farkas-Gasse 19"]
},
{
  "id": 441, "question_ar": "أين يقع Theater am Spittelberg؟",
  "question_de": "Wo befindet sich das Theater am Spittelberg?",
  "correct_answer": "7., Spittelberggasse 10",
  "wrong_answers": ["4., Theresianumgasse 18", "6., Mariahilfer Straße 81", "8., Lenaugasse 1A", "1., Dorotheergasse 6-8"]
},
// أضف في questionBank
{
  "id": 442, "question_ar": "أين يقع مطعم Plachutta؟",
  "question_de": "Wo befindet sich das Restaurant Plachutta?",
  "correct_answer": "1., Wollzeile 38",
  "wrong_answers": ["1., Rotenturmstraße 12", "1., Schubertring 5", "1., Kärntner Straße 25", "1., Herrengasse 10"]
},
{
  "id": 443, "question_ar": "أين يقع مطعم Figlmüller؟",
  "question_de": "Wo befindet sich das Restaurant Figlmüller?",
  "correct_answer": "1., Wollzeile 5",
  "wrong_answers": ["1., Bäckerstraße 6", "1., Rotenturmstraße 8", "1., Schubertring 3", "1., Kärntner Straße 20"]
},
{
  "id": 444, "question_ar": "أين يقع مطعم Griechenbeisl؟",
  "question_de": "Wo befindet sich das Griechenbeisl?",
  "correct_answer": "1., Fleischmarkt 11",
  "wrong_answers": ["1., Wollzeile 38", "1., Bäckerstraße 8", "1., Rotenturmstraße 14", "1., Schubertring 7"]
},
{
  "id": 445, "question_ar": "أين تقع السفارة الأمريكية؟",
  "question_de": "Wo befindet sich die US-Botschaft?",
  "correct_answer": "9., Boltzmanngasse 16",
  "wrong_answers": ["1., Boltzmanngasse 10", "9., Boltzmanngasse 8", "1., Herrengasse 12", "3., Prinz-Eugen-Straße 25"]
},
{
  "id": 446, "question_ar": "أين تقع السفارة الألمانية؟",
  "question_de": "Wo befindet sich die Deutsche Botschaft?",
  "correct_answer": "3., Metternichgasse 3",
  "wrong_answers": ["1., Metternichgasse 5", "3., Prinz-Eugen-Straße 30", "1., Herrengasse 15", "4., Argentinierstraße 25"]
},
{
  "id": 447, "question_ar": "أين يقع المركز الإسلامي في فيينا؟",
  "question_de": "Wo befindet sich das Islamische Zentrum Wien?",
  "correct_answer": "21., Am Bruckhaufen 3",
  "wrong_answers": ["10., Am Hauptbahnhof 5", "2., Praterstraße 20", "1., Stephansplatz 1", "9., Währinger Straße 30"]
},
{
  "id": 448, "question_ar": "أين يقع المعبد اليهودي الرئيسي؟",
  "question_de": "Wo befindet sich der Haupttempel der Israelitischen Kultusgemeinde?",
  "correct_answer": "1., Seitenstettengasse 4",
  "wrong_answers": ["1., Judenplatz 2", "1., Stephansplatz 5", "2., Taborstraße 15", "9., Berggasse 20"]
},
// ========== الجزء الحادي والثلاثون: تغيير أسماء الشوارع بعد عبور قناة الدانوب (DONAUKANAL/DONAU) ==========
{
  "id": 500,
  "question_ar": "بعد عبور جسر قناة الدانوب، ماذا يصبح اسم Alserbachstraße في المنطقة 9؟",
  "question_de": "Wie heißen die nachfolgenden Straßen, nachdem Sie die Brücke über den DONAUKANAL überquert haben? Alserbachstraße 9.",
  "correct_answer": "Wallensteinstraße 20.",
  "wrong_answers": ["Türkenstraße 9.", "Untere Augartenstraße 2.", "Salztorgasse 1.", "Taborstraße 2."]
},
{
  "id": 501,
  "question_ar": "بعد عبور جسر قناة الدانوب، ماذا يصبح اسم Rembrandtstraße في المنطقة 2؟",
  "question_de": "Wie heißen die nachfolgenden Straßen, nachdem Sie die Brücke über den DONAUKANAL überquert haben? Rembrandtstraße 2.",
  "correct_answer": "Türkenstraße 9.",
  "wrong_answers": ["Wallensteinstraße 20.", "Untere Augartenstraße 2.", "Salztorgasse 1.", "Taborstraße 2."]
},
{
  "id": 502,
  "question_ar": "بعد عبور جسر قناة الدانوب، ماذا يصبح اسم Maria-Theresien-Straße في المنطقتين 1 و 9؟",
  "question_de": "Wie heißen die nachfolgenden Straßen, nachdem Sie die Brücke über den DONAUKANAL überquert haben? Maria-Theresien-Straße 1./9.",
  "correct_answer": "Untere Augartenstraße 2.",
  "wrong_answers": ["Wallensteinstraße 20.", "Türkenstraße 9.", "Salztorgasse 1.", "Taborstraße 2."]
},
{
  "id": 503,
  "question_ar": "بعد عبور جسر قناة الدانوب، ماذا يصبح اسم Hollandstraße في المنطقة 2؟",
  "question_de": "Wie heißen die nachfolgenden Straßen, nachdem Sie die Brücke über den DONAUKANAL überquert haben? Hollandstraße 2.",
  "correct_answer": "Salztorgasse 1.",
  "wrong_answers": ["Wallensteinstraße 20.", "Türkenstraße 9.", "Untere Augartenstraße 2.", "Taborstraße 2."]
},
{
  "id": 504,
  "question_ar": "بعد عبور جسر قناة الدانوب، ماذا يصبح اسم Rotenturmstraße في المنطقة 1؟",
  "question_de": "Wie heißen die nachfolgenden Straßen, nachdem Sie die Brücke über den DONAUKANAL überquert haben? Rotenturmstraße 1.",
  "correct_answer": "Lilienbrunngasse/Gredlerstraße 2.",
  "wrong_answers": ["Salztorgasse 1.", "Taborstraße 2.", "Julius-Raab-Platz 1.", "Radetzkystraße 3."]
},
{
  "id": 505,
  "question_ar": "بعد عبور جسر قناة الدانوب، ماذا يصبح اسم Laurenzerberg في المنطقة 1؟",
  "question_de": "Wie heißen die nachfolgenden Straßen, nachdem Sie die Brücke über den DONAUKANAL überquert haben? Laurenzerberg 1.",
  "correct_answer": "Taborstraße 2.",
  "wrong_answers": ["Lilienbrunngasse/Gredlerstraße 2.", "Julius-Raab-Platz 1.", "Radetzkystraße 3.", "Salztorgasse 1."]
},
{
  "id": 506,
  "question_ar": "بعد عبور جسر قناة الدانوب، ماذا يصبح اسم Aspernbrückengasse في المنطقة 2؟",
  "question_de": "Wie heißen die nachfolgenden Straßen, nachdem Sie die Brücke über den DONAUKANAL überquert haben? Aspernbrückengasse 2.",
  "correct_answer": "Julius-Raab-Platz (Stubenring) 1.",
  "wrong_answers": ["Taborstraße 2.", "Radetzkystraße 3.", "Rasumofskygasse 3.", "Schlachthausgasse 3."]
},
{
  "id": 507,
  "question_ar": "بعد عبور جسر قناة الدانوب، ماذا يصبح اسم Franzensbrückenstraße في المنطقة 2؟",
  "question_de": "Wie heißen die nachfolgenden Straßen, nachdem Sie die Brücke über den DONAUKANAL überquert haben? Franzensbrückenstraße 2.",
  "correct_answer": "Radetzkystraße 3.",
  "wrong_answers": ["Julius-Raab-Platz 1.", "Rasumofskygasse 3.", "Schlachthausgasse 3.", "Haidequerstraße 11."]
},
{
  "id": 508,
  "question_ar": "بعد عبور جسر قناة الدانوب، ماذا يصبح اسم Wittelsbachstraße في المنطقة 2؟",
  "question_de": "Wie heißen die nachfolgenden Straßen, nachdem Sie die Brücke über den DONAUKANAL überquert haben? Wittelsbachstraße 2.",
  "correct_answer": "Rasumofskygasse 3.",
  "wrong_answers": ["Radetzkystraße 3.", "Schlachthausgasse 3.", "Haidequerstraße 11.", "Seitenhafenstraße 2."]
},
{
  "id": 509,
  "question_ar": "بعد عبور جسر قناة الدانوب، ماذا يصبح اسم Stadionallee في المنطقة 2؟",
  "question_de": "Wie heißen die nachfolgenden Straßen, nachdem Sie die Brücke über den DONAUKANAL überquert haben? Stadionallee 2.",
  "correct_answer": "Schlachthausgasse 3.",
  "wrong_answers": ["Rasumofskygasse 3.", "Radetzkystraße 3.", "Haidequerstraße 11.", "Seitenhafenstraße 2."]
},
{
  "id": 510,
  "question_ar": "بعد عبور جسر قناة الدانوب، ماذا يصبح اسم Freudenauer Hafenstraße في المنطقة 2؟",
  "question_de": "Wie heißen die nachfolgenden Straßen, nachdem Sie die Brücke über den DONAUKANAL überquert haben? Freudenauer Hafenstraße 2.",
  "correct_answer": "Haidequerstraße 11.",
  "wrong_answers": ["Schlachthausgasse 3.", "Rasumofskygasse 3.", "Seitenhafenstraße 2.", "Radetzkystraße 3."]
},
{
  "id": 511,
  "question_ar": "بعد عبور جسر قناة الدانوب، ماذا يصبح اسم Zinnergasse في المنطقة 11؟",
  "question_de": "Wie heißen die nachfolgenden Straßen, nachdem Sie die Brücke über den DONAUKANAL überquert haben? Zinnergasse 11.",
  "correct_answer": "Seitenhafenstraße 2.",
  "wrong_answers": ["Haidequerstraße 11.", "Schlachthausgasse 3.", "Rasumofskygasse 3.", "Floridsdorfer Hauptstraße 21."]
},
{
  "id": 512,
  "question_ar": "بعد عبور جسر قناة الدانوب، ماذا يصبح اسم Adalbert-Stifter-Straße في المنطقة 20؟",
  "question_de": "Wie heißen die nachfolgenden Straßen, nachdem Sie die Brücke über den DONAUKANAL überquert haben? Adalbert-Stifter-Straße 20.",
  "correct_answer": "Floridsdorfer Hauptstraße 21.",
  "wrong_answers": ["Seitenhafenstraße 2.", "Haidequerstraße 11.", "Schlachthausgasse 3.", "Wagramer Straße 22."]
},
{
  "id": 513,
  "question_ar": "بعد عبور جسر قناة الدانوب، ماذا يصبح اسم Döblinger Gürtel في المنطقة 19؟",
  "question_de": "Wie heißen die nachfolgenden Straßen, nachdem Sie die Brücke über den DONAUKANAL überquert haben? Döblinger Gürtel 19.",
  "correct_answer": "Adalbert-Stifter-Straße 20.",
  "wrong_answers": ["Floridsdorfer Hauptstraße 21.", "Seitenhafenstraße 2.", "Haidequerstraße 11.", "Wagramer Straße 22."]
},
{
  "id": 514,
  "question_ar": "بعد عبور جسر قناة الدانوب، ماذا يصبح اسم Lassallestraße في المنطقة 2؟",
  "question_de": "Wie heißen die nachfolgenden Straßen, nachdem Sie die Brücke über den DONAUKANAL überquert haben? Lassallestraße 2.",
  "correct_answer": "Wagramer Straße 22.",
  "wrong_answers": ["Adalbert-Stifter-Straße 20.", "Floridsdorfer Hauptstraße 21.", "Seitenhafenstraße 2.", "Haidequerstraße 11."]
}
];