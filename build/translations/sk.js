(function(d){	const l = d['sk'] = d['sk'] || {};	l.dictionary=Object.assign(		l.dictionary||{},		{"%0 of %1":"%0 z %1","Dropdown toolbar":"Panel nástrojov roletového menu","Editor toolbar":"Panel nástrojov editora",Next:"Ďalšie",Previous:"Predchádzajúce",Redo:"Znova","Rich Text Editor, %0":"Editor s formátovaním, %0","Show more items":"",Undo:"Späť"}	);l.getPluralForm=function(n){return (n % 1 == 0 && n == 1 ? 0 : n % 1 == 0 && n >= 2 && n <= 4 ? 1 : n % 1 != 0 ? 2: 3);;};})(window.CKEDITOR_TRANSLATIONS||(window.CKEDITOR_TRANSLATIONS={}));