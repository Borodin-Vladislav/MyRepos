function otr(mas) {
    let ch=0;
    for (let i = 0; i< mas.length; i++) {
        for (let j = 0; j< mas[i].length; j++) {
        if(mas[i][j]<0)ch++;
        }
    }
    console.log(ch)
}
let mas=[ [-9, -6, -5, -4], [-2, 0, 1, 3], [5, 6, 7, 8 ]] 
otr(mas)