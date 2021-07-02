function obj(str) {
    let ch=1;
    let ch2=0;
    let sym
    for (let i = 0; i < str.length-1; i++) {
        if(str[i]==str[i+1]){ch++;if(ch>ch2){ch2=ch;sym=str[i]}}
        else {ch=1;}
    }let map=new Map()
    map.set(sym,ch2)
    console.log(map)
}
let str="qqssffddd"
obj(str)