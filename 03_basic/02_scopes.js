// function one() {
//   const userName = 'shakil'
//   function two() {
//     const website = 'youtube'
//     console.log(userName)
//   }
//   console.log(website)
//   two()
// }
// one()

// ReferenceError: website is not defined

// function one() {
//   const userName = 'shakil'
//   function two() {
//     const website = 'youtube'
//     console.log(userName)
//   }
//   //   console.log(website)
//   two()
// }
// one()

// shakil

if (true) {
  const userName = 'shakil'
  if (userName === 'shakil') {
    const website = ' youtube'
    console.log(userName + website)
  }
  //   console.log(website)
}

// console.log(userName)

// ReferenceError: website is not defined

// after comment console.log(website)
// Uncaught ReferenceError: userName is not defined

// after comment console.log(userName)
// shakil youtube
