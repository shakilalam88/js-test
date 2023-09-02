// Immediately invoked function expressions

// function iife() {
//   console.log('hello')   // hello
// }
// iife()

;(function iife() {
  console.log('hello') // hello
})()

// arrow iife function
;((name) => {
  console.log(`hello ${name}`) //hello shakil
})('shakil')
