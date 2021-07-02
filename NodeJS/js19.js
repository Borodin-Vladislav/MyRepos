function range(start,end,shag) {
    if(shag===undefined){shag=1}

    let mas=[start,]
    if(start<end)
   while(start<end)
   {
       start=start+Math.abs(shag);
      if(start<=end) mas.push(start);
       
   }
   else 
   while(start>end)
   {
       start=start-Math.abs(shag);
      if(start>=end) mas.push(start);
       
   }
   console.log(mas)
   sum(mas)
}
function sum(mas) {
    let ch=0;
    for (let i = 0; i < mas.length; i++) {
      ch=ch+mas[i]
    }
    console.log(ch)
}
let start=10
let end=15
let shag=-2;
range(start,end,shag)