function glas(str) {

    let ch=0;
   let mas=['a', 'e', 'i', 'o', 'u'] 

   for (let i = 0; i < str.length; i++) {

        for (let j = 0; j < mas.length; j++) {
        if(str[i]==mas[j])ch++;
       }

  }
   console.log(ch)
}
let str="qwerty"
glas(str)