let str = 'aba accca azzza wwwwa ';
re= str.replace(/a /g,'! ');
re=re.match(/.?.?.?.?!/g)
console.log(re);