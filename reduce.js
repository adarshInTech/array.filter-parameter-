
// const array1 = [1, 2, 3, 4];

// // 0 + 1 + 2 + 3 + 4
// const initialValue = 0;
// const sumWithInitial = array1.reduce(
  //   (accumulator, currentValue) => accumulator + currentValue,
  //   initialValue,
  // );
  
  // console.log(sumWithInitial);
  // // Expected output: 10
  
  
  const myNums =[1,2,3]
  const myTotal =myNums.reduce((accumulator ,currentVal)=> accumulator+ currentVal , 2 )
  console.log(myTotal)

  const shoppingCart = [
    {
      itemName :  "js course",
       price: 399
    }, 
    {
      itemName : "python",
      price : 499
    },
    {
      itemName : "artificial intelligence",
      price : 2000
    }
  ]


  const priceToPay =shoppingCart.reduce((accumulator ,item)=> accumulator + item.price,0)

  console.log(priceToPay)