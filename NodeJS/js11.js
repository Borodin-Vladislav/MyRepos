function firstRecurringChar(str) 
{
    for(let i=0;i<str.length;i++)
    {
       if(str[i]===' ')continue;
       if(str.indexOf(str[i])!==i && str.indexOf(str[i],i+1)==-1)return str[i];
    }
}
console.log(firstRecurringChar("фыаачммм"));