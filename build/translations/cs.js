(function(d){	const l = d['cs'] = d['cs'] || {};	l.dictionary=Object.assign(		l.dictionary||{},		{"%0 of %1":"%0 z %1","Block quote":"Citace",Bold:"Tučné","Bulleted List":"Odrážky",Cancel:"Zrušit","Choose heading":"Zvolte nadpis",Downloadable:"Ke stažení","Dropdown toolbar":"Rozbalovací panel nástrojů","Edit link":"Upravit odkaz","Editor toolbar":"Panel nástrojů editoru",Heading:"Nadpis","Heading 1":"Nadpis 1","Heading 2":"Nadpis 2","Heading 3":"Nadpis 3","Heading 4":"Nadpis 4","Heading 5":"Nadpis 5","Heading 6":"Nadpis 6",Italic:"Kurzíva",Link:"Odkaz","Link URL":"URL odkazu",Next:"Další","Numbered List":"Číslování","Open in a new tab":"Otevřít v nové kartě","Open link in new tab":"Otevřít odkaz v nové kartě",Paragraph:"Odstavec",Previous:"Předchozí",Redo:"Znovu","Rich Text Editor, %0":"Textový editor, %0",Save:"Uložit","Select all":"Vybrat vše","Show more items":"Zobrazit další položky","This link has no URL":"Tento odkaz nemá žádnou URL",Undo:"Zpět",Unlink:"Odstranit odkaz","Upload in progress":"Probíhá nahrávání"}	);l.getPluralForm=function(n){return (n == 1 && n % 1 == 0) ? 0 : (n >= 2 && n <= 4 && n % 1 == 0) ? 1: (n % 1 != 0 ) ? 2 : 3;;};})(window.CKEDITOR_TRANSLATIONS||(window.CKEDITOR_TRANSLATIONS={}));