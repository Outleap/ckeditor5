(function(d){	const l = d['ar'] = d['ar'] || {};	l.dictionary=Object.assign(		l.dictionary||{},		{"%0 of %1":"","Block quote":"اقتباس",Bold:"عريض","Bulleted List":"قائمة نقطية",Cancel:"إلغاء","Centered image":"صورة بالوسط","Change image text alternative":"غير النص البديل للصورة","Choose heading":"اختر عنوان",Downloadable:"","Dropdown toolbar":"","Edit link":"تحرير الرابط","Editor toolbar":"","Enter image caption":"ادخل عنوان الصورة","Full size image":"صورة بحجم كامل",Heading:"عنوان","Heading 1":"عنوان 1","Heading 2":"عنوان 2","Heading 3":"عنوان 3","Heading 4":"","Heading 5":"","Heading 6":"","Image toolbar":"","image widget":"عنصر الصورة","Insert image":"ادراج صورة",Italic:"مائل","Left aligned image":"صورة بمحاذاة لليسار",Link:"رابط","Link URL":"رابط عنوان",Next:"","Numbered List":"قائمة رقمية","Open in a new tab":"","Open link in new tab":"فتح الرابط في تبويب جديد",Paragraph:"فقرة",Previous:"",Redo:"إعادة","Rich Text Editor, %0":"معالج نصوص، 0%","Right aligned image":"صورة بمحاذاة لليمين",Save:"حفظ","Show more items":"","Side image":"صورة جانبية","Text alternative":"النص البديل","This link has no URL":"لا يحتوي هذا الرابط على عنوان",Undo:"تراجع",Unlink:"إلغاء الرابط","Upload failed":"فشل الرفع","Upload in progress":"جاري الرفع"}	);l.getPluralForm=function(n){return n==0 ? 0 : n==1 ? 1 : n==2 ? 2 : n%100>=3 && n%100<=10 ? 3 : n%100>=11 && n%100<=99 ? 4 : 5;;};})(window.CKEDITOR_TRANSLATIONS||(window.CKEDITOR_TRANSLATIONS={}));