// map it is return the value
// map(callbackFn, thisArg)

// A function to execute for each element in the array. Its return value is added as a single element in the new array

const myNumers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNums = myNumers.map( (num) => { return num + 10})

const newNums = myNumers
  .map((num) => num * 10)
  .map((num) => num + 1)
  .filter((num) => num >= 40)

console.log(newNums) // [ 41, 51,  61, 71, 81, 91, 101]
console.log(myNumers) // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
