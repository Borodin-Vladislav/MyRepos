function stupeni(num) 
{
    let min=0;
    let max=0;
    for (let i = 0; i < num; i=i+2) 
    {
       max++; 
    } 
    for (let i = 0; i < num; i=i+3) 
    {
        min++;
    } 
   console.log(max-min+1) 
}
  stupeni(12)
