(function(d){	const l = d['ro'] = d['ro'] || {};	l.dictionary=Object.assign(		l.dictionary||{},		{"%0 of %1":"%0 din %1","Block quote":"Bloc citat",Bold:"Îngroșat","Bulleted List":"Listă cu puncte",Cancel:"Anulare","Centered image":"Imagine aliniată pe centru","Change image text alternative":"Schimbă textul alternativ al imaginii","Choose heading":"Alege titlu",Downloadable:"Descărcabil","Dropdown toolbar":"Bară listă opțiuni","Edit link":"Modifică link","Editor toolbar":"Bară editor","Enter image caption":"Introdu titlul descriptiv al imaginii","Full size image":"Imagine mărime completă",Heading:"Titlu","Heading 1":"Titlu 1","Heading 2":"Titlu 2","Heading 3":"Titlu 3","Heading 4":"Titlu 4","Heading 5":"Titlu 5","Heading 6":"Titlu 6","Image toolbar":"Bară imagine","image widget":"widget imagine","Insert image":"Inserează imagine","Insert paragraph after block":"","Insert paragraph before block":"",Italic:"Cursiv","Left aligned image":"Imagine aliniată la stânga",Link:"Link","Link URL":"Link URL",Next:"Înainte","Numbered List":"Listă numerotată","Open in a new tab":"Deschide în tab nou","Open link in new tab":"Deschide link în tab nou",Paragraph:"Paragraf",Previous:"Înapoi",Redo:"Revenire","Rich Text Editor, %0":"Editor de text, %0","Right aligned image":"Imagine aliniată la dreapta",Save:"Salvare","Show more items":"","Side image":"Imagine laterală","Text alternative":"Text alternativ","This link has no URL":"Acest link nu are niciun URL",Undo:"Anulare",Unlink:"Șterge link","Upload failed":"Încărcare eșuată","Widget toolbar":"Bară widget"}	);l.getPluralForm=function(n){return (n==1?0:(((n%100>19)||((n%100==0)&&(n!=0)))?2:1));;};})(window.CKEDITOR_TRANSLATIONS||(window.CKEDITOR_TRANSLATIONS={}));