let str = ' aba accca azzza wwwwa';
re= str.replace(/a /g,'! ');
re= re.replace(/ a/g,' !');
re=re.match(/![a-z]?[a-z]?[a-z]?!/g)
console.log(re);
