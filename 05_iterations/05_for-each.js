// for each loop -- did't return

const coding = ['js', 'ruby', 'java', 'python', 'cpp']

const value = coding.forEach((val) => {
  console.log(val)
})
const value1 = coding.forEach((val) => {
  return val
})
console.log(value1) // undefine

// coding.forEach( function (val){
//     console.log(val);
// } )

// coding.forEach( (item) => {
//     console.log(item);
// } )

// function printMe(item){
//     console.log(item);
// }

// coding.forEach(printMe)

// coding.forEach( (item, index, arr)=> {
//     console.log(item, index, arr);
// } )

const myCoding = [
  {
    languageName: 'javascript',
    languageFileName: 'js',
  },
  {
    languageName: 'java',
    languageFileName: 'java',
  },
  {
    languageName: 'python',
    languageFileName: 'py',
  },
]

// myCoding.forEach((item) => {
//   console.log(item.languageName)
// })
