// this   === current context

const user = {
  userName: 'shakil',
  company: 'Q1 technology',
  userDetails: function () {
    console.log('inner this', this) //{ userName: 'shakil',company: 'Q1 technology', userDetails: [Function: userDetails]
    return `${user.userName} is a ${user.company} employ`
  },
}

// console.log(user.userDetails()) // shakil is a Q1 technology employ
// console.log(this) // {}
// user.userName = 'alam'
// console.log(user.userDetails())     //alam is a Q1 technology employ

//arrow function

//explicit return
// const addTwoNumber = (num1, num2) => {
//   return num1 + num2
// }

// implicitly return
// const addTwoNumber = (num1, num2) => num1 + num2

// const addTwoNumber = (num1, num2) => (num1 + num2)
// const name = (num1, num2) => (name: 'shakil') // error

console.log(addTwoNumber(3, 5)) // 8
console.log(name()) //{ name: 'shakil' }
