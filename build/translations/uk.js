(function(d){	const l = d['uk'] = d['uk'] || {};	l.dictionary=Object.assign(		l.dictionary||{},		{"%0 of %1":"%0 із %1","Block quote":"Цитата",Bold:"Жирний","Bulleted List":"Маркерний список",Cancel:"Відміна","Centered image":"Зображення по центру","Change image text alternative":"Змінити текстову альтернативу зображення","Choose heading":"Оберіть заголовок",Downloadable:"Завантажувальне","Dropdown toolbar":"Випадаюча панель інструментів","Edit link":"Редагувати посилання","Editor toolbar":"Панель інструментів редактора","Enter image caption":"Введіть підпис зображення","Full size image":"Повний розмір зображення",Heading:"Заголовок","Heading 1":"Заголовок 1","Heading 2":"Заголовок 2","Heading 3":"Заголовок 3","Heading 4":"Заголовок 4","Heading 5":"Заголовок 5","Heading 6":"Заголовок 6","Image toolbar":"Панелі інструментів зображення","image widget":"Віджет зображення","Insert image":"Вставити зображення","Insert paragraph after block":"","Insert paragraph before block":"",Italic:"Курсив","Left aligned image":"Зображення ліворуч",Link:"Посилання","Link URL":"URL посилання",Next:"Наступний","Numbered List":"Нумерований список","Open in a new tab":"Вікрити у новій вкладці","Open link in new tab":"Відкрити посилання у новій вкладці",Paragraph:"Параграф",Previous:"Попередній",Redo:"Повтор","Rich Text Editor, %0":"Розширений текстовий редактор, %0","Right aligned image":"Зображення праворуч",Save:"Зберегти","Select all":"Вибрати все","Show more items":"Показати більше","Side image":"Бокове зображення","Text alternative":"Текстова альтернатива","This link has no URL":"Це посилання не має URL",Undo:"Відміна",Unlink:"Видалити посилання","Upload failed":"Завантаження не вдалось","Widget toolbar":"Панель інструментів віджетів"}	);l.getPluralForm=function(n){return (n % 1 == 0 && n % 10 == 1 && n % 100 != 11 ? 0 : n % 1 == 0 && n % 10 >= 2 && n % 10 <= 4 && (n % 100 < 12 || n % 100 > 14) ? 1 : n % 1 == 0 && (n % 10 ==0 || (n % 10 >=5 && n % 10 <=9) || (n % 100 >=11 && n % 100 <=14 )) ? 2: 3);;};})(window.CKEDITOR_TRANSLATIONS||(window.CKEDITOR_TRANSLATIONS={}));