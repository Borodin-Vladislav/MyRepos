let mas=[10,4,6,5,20,14,7];
let k=0;
let v=1;
for(let i=1;i<mas.length;i++)
{
  if(mas[0]>=mas[i]){k++;v=v*k}
}
console.log('Количество вариантов: '+v)