(function(d){	const l = d['sr'] = d['sr'] || {};	l.dictionary=Object.assign(		l.dictionary||{},		{"%0 of %1":"%0 of %1","Block quote":"Цитат",Bold:"Подебљано","Bulleted List":"Листа са тачкама",Cancel:"Одустани","Cannot upload file:":"Постављање фајла је неуспешно:","Centered image":"Слика у средини","Change image text alternative":"Измена алтернативног текста","Choose heading":"Одреди стил",Downloadable:"Могуће преузимање","Dropdown toolbar":"Падајућа трака са алаткама","Edit link":"Исправи линк","Editor toolbar":"Уређивач трака са алаткама","Enter image caption":"Одреди текст испод слике","Full size image":"Слика у пуној величини",Heading:"Стилови","Heading 1":"Наслов 1","Heading 2":"Наслов 2","Heading 3":"Наслов 3","Heading 4":"Наслов 4","Heading 5":"Наслов 5","Heading 6":"Наслов 6","Image toolbar":"Слика трака са алтакама","image widget":"модул са сликом","Insert image":"Додај слику","Insert paragraph after block":"","Insert paragraph before block":"",Italic:"Курзив","Left aligned image":"Лева слика",Link:"Линк","Link URL":"УРЛ линк",Next:"Следећи","Numbered List":"Листа са бројевима","Open in a new tab":"Отвори у новој картици","Open link in new tab":"Отвори линк у новом прозору",Paragraph:"Пасус",Previous:"Претходни",Redo:"Поново","Rich Text Editor, %0":"Проширени уређивач текста, %0","Right aligned image":"Десна слика",Save:"Сачувај","Select all":"Означи све.","Show more items":"Прикажи још ставки","Side image":"Бочна слика","Text alternative":"Алтернативни текст","This link has no URL":"Линк не садржи УРЛ",Undo:"Повлачење",Unlink:"Отклони линк","Upload failed":"Постављање неуспешно","Upload in progress":"Постављање у току","Widget toolbar":"Widget traka sa alatkama"}	);l.getPluralForm=function(n){return (n%10==1 && n%100!=11 ? 0 : n%10>=2 && n%10<=4 && (n%100<10 || n%100>=20) ? 1 : 2);;};})(window.CKEDITOR_TRANSLATIONS||(window.CKEDITOR_TRANSLATIONS={}));