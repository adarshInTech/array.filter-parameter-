const myNumbers = [1,2,3,4,5,6,7,8,9,0]

// const newNums = myNumbers.map((num)=> num +100)
// console.log(newNums)

// if you create  a scope in arrow functions or in a normal function
// you will have to give return keyword inside the scope otherwise the value printed will be undefined

//chaining

const newNums= myNumbers
.map((num)=>  num*10)
.map((num)=>num+22)
.filter((num)=>num>=40)

console.log(newNums)