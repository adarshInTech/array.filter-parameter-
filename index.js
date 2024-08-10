// const coding = ['php' ,"java" ,"python" ,"javascript"  ,"ruby"]

// const values  =coding.forEach(function(item){
//   console.log(item)
//   return item
// })

// console.log(values)

// filter
// const myNums = [1,2,3,4,5,6,7,8,9,10]

// const newNums =myNums.filter(function(num){
//  return  num>4
// })

// const newNums =[]
// myNums.forEach((num)=>{
//   if (num>4){
//     newNums.push(num)
//   }

// })

// console.log(newNums)

const books =[
  {title : "book one" , genre:"fiction" , publish:1998},
  {title : "book two" , genre:"non fiction" , publish:2329},
  {title : "book three" , genre:"history" , publish:3332},
  {title : "book four" , genre:"history" , publish:3344},
  {title : "book five" , genre:"history" , publish:3233},
  {title : "book six" , genre:"social science" , publish:4423},
]

let  userBooks = books.filter((bk)=>bk.publish >= 2000 && bk.genre ==="history" )
userBooks= books.filter((bk)=> bk.genre==="history")
console.log(userBooks)
