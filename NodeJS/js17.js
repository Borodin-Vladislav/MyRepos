console.log([1, 4, 3, 0, 4, 5, 4].filter(element => !(element % 2)).reduceRight((accumulator, element) => accumulator + Math.sqrt(element), 0)); 
// 6