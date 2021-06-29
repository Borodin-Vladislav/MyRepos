let obj={
    Andrey: '200',
    Vasya: '300',
    Pete: '400'
  };
  for(let key in obj)
    {
      // todo: использовать строковый литерал
      console.log(`${key} - зарплата ${obj[key]} $`)
    }
