function rand(mas) {
    
    let buf
    for (let i = 0; i < mas.length; i++) {
        let ran=Math.floor(Math.random()*mas.length)
       buf= mas[ran];
       mas[ran]=mas[i];
       mas[i]=buf;
    }console.log(mas)
}
let mas=[1,'sym',true,null,undefined]
rand(mas)