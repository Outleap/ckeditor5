(function(d){	const l = d['hr'] = d['hr'] || {};	l.dictionary=Object.assign(		l.dictionary||{},		{"%0 of %1":"%0 od %1","Block quote":"Blok citat",Bold:"Podebljano","Bulleted List":"Obična lista",Cancel:"Poništi","Centered image":"Centrirana slika","Change image text alternative":"Promijeni alternativni tekst slike","Choose heading":"Odaberite naslov",Downloadable:"Moguće preuzeti","Dropdown toolbar":"Traka padajućeg izbornika","Edit link":"Uredi vezu","Editor toolbar":"Traka uređivača","Enter image caption":"Unesite naslov slike","Full size image":"Slika pune veličine",Heading:"Naslov","Heading 1":"Naslov 1","Heading 2":"Naslov 2","Heading 3":"Naslov 3","Heading 4":"Naslov 4","Heading 5":"Naslov 5","Heading 6":"Naslov 6","Image toolbar":"Traka za slike","image widget":"Slika widget","Insert image":"Umetni sliku","Insert paragraph after block":"","Insert paragraph before block":"",Italic:"Ukošeno","Left aligned image":"Lijevo poravnata slika",Link:"Veza","Link URL":"URL veze",Next:"Sljedeći","Numbered List":"Brojčana lista","Open in a new tab":"Otvori u novoj kartici","Open link in new tab":"Otvori vezu u novoj kartici",Paragraph:"Paragraf",Previous:"Prethodni",Redo:"Ponovi","Rich Text Editor, %0":"Rich Text Editor, %0","Right aligned image":"Slika poravnata desno",Save:"Snimi","Select all":"Odaberi sve","Show more items":"Prikaži više stavaka","Side image":"Slika sa strane","Text alternative":"Alternativni tekst","This link has no URL":"Ova veza nema URL",Undo:"Poništi",Unlink:"Ukloni vezu","Upload failed":"Slanje nije uspjelo","Upload in progress":"Slanje u tijeku","Widget toolbar":"Traka sa spravicama"}	);l.getPluralForm=function(n){return n%10==1 && n%100!=11 ? 0 : n%10>=2 && n%10<=4 && (n%100<10 || n%100>=20) ? 1 : 2;;};})(window.CKEDITOR_TRANSLATIONS||(window.CKEDITOR_TRANSLATIONS={}));