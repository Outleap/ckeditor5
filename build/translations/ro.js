(function(d){	const l = d['ro'] = d['ro'] || {};	l.dictionary=Object.assign(		l.dictionary||{},		{"%0 of %1":"%0 din %1","Dropdown toolbar":"Bară listă opțiuni","Editor toolbar":"Bară editor",Next:"Înainte",Previous:"Înapoi",Redo:"Revenire","Rich Text Editor, %0":"Editor de text, %0","Show more items":"",Undo:"Anulare"}	);l.getPluralForm=function(n){return (n==1?0:(((n%100>19)||((n%100==0)&&(n!=0)))?2:1));;};})(window.CKEDITOR_TRANSLATIONS||(window.CKEDITOR_TRANSLATIONS={}));