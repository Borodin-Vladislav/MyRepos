function koordinat(masx,masy,num) {
    let mas=[0,0,0]
    for(let i=0;i<3;i++){
    mas[i]=((masx[i]**2)+(masy[i]**2))**(1/2);
   mas[i]= Math.round(mas[i] * 100) / 100 ;
    }

    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) { 
            if(i==j)continue
        if(mas[i]<mas[j]&&num!=0){mas[i]=0;num--;break}
        }
    }
    for (let i = 0; i < 3; i++) {
        if(mas[i]==0){masy[i]=0;masx[i]=0;}
    }
    console.log(masx,masy)
}
let masy=[1,2,3];
let masx=[4,5,1];
koordinat(masx,masy,2)