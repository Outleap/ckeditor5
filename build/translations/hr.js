(function(d){	const l = d['hr'] = d['hr'] || {};	l.dictionary=Object.assign(		l.dictionary||{},		{"%0 of %1":"%0 od %1","Dropdown toolbar":"Traka padajućeg izbornika","Editor toolbar":"Traka uređivača",Next:"Sljedeći",Previous:"Prethodni",Redo:"Ponovi","Rich Text Editor, %0":"Rich Text Editor, %0","Select all":"Odaberi sve","Show more items":"Prikaži više stavaka",Undo:"Poništi"}	);l.getPluralForm=function(n){return n%10==1 && n%100!=11 ? 0 : n%10>=2 && n%10<=4 && (n%100<10 || n%100>=20) ? 1 : 2;;};})(window.CKEDITOR_TRANSLATIONS||(window.CKEDITOR_TRANSLATIONS={}));