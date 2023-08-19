let array  = [32,43,23,67,87]

let array1 = new Array(32,23,11,55,43)

// console.log(typeof array);  // object
// console.log(array[0]);      // 32
// console.log(array[5]);      // undefined
// console.log(array[-1]);     // undefined
// console.log(array1[1]);     // 23

// .push
// console.log(array.push("shakil"))          // [ 32, 43, 23, 67, 87, 'shakil' ]

// .pop
// console.log(array.pop())                    // [ 32, 43, 23, 67, 87 ]

// .shift
// console.log(array.shift());                     // [ 43, 23, 67, 87 ]
// console.log(array.shift(2))                    // [ 43, 23, 67, 87 ]
// console.log(array.shift(9))                    // [ 43, 23, 67, 87 ]

// .unshift
// console.log(array.unshift(3))                  // [ 3, 32, 43, 23, 67, 87 ]
      

// .includes
// console.log(array.includes(32));        // true
// console.log(array.includes(34));        // false

// .slice  (slice(start, end)) did't change orginal array
// console.log(array);                     // [ 32, 43, 23, 67, 87 ]
// console.log(array.slice());             // [ 32, 43, 23, 67, 87 ]
// console.log(array.slice(1));            // [ 43, 23, 67, 87 ]
// console.log(array.slice(1,4));          // [ 43, 23, 67 ]
// console.log(array);                     // [ 32, 43, 23, 67, 87 ]

// .splice  (splice(start, deleteCount, item0)) its modify original array
 //console.log(array);                        // [ 32, 43, 23, 67, 87 ]            
 //console.log(array.splice(1));            //[ 43, 23, 67, 87 ]
 //console.log(array);                      // [ 32 ]

//console.log(array.splice(1,2,55));        // [ 43, 23 ]

 //console.log(array);                      // [ 32, 55, 67, 87 ]

 // .toSpliced  (splice(start, deleteCount, item0)) its did't modify original array
// console.log(array);                        // [ 32, 43, 23, 67, 87 ]
// console.log(array.toSpliced());             // [ 32, 43, 23, 67, 87 ]
// console.log(array.toSpliced(1));            // [ 32 ]
// console.log(array.toSpliced(1,2));          // [ 32, 67, 87 ]
// console.log(array.toSpliced(1,2,66));       // [ 32,66, 67, 87 ]
// console.log(array);                         // [ 32, 43, 23, 67, 87 ]

//const newArray = array.concat(array1)
//console.log(newArray);                      //[32, 43, 23, 67, 87,32, 23, 11, 55, 43]

// spred operator
const newArray = [...array,...array1]
//console.log(newArray);                        //[32, 43, 23, 67, 87,32, 23, 11, 55, 43]

const complex_array = [1,2, [3,4],5,6,[7,8,[9,10]]]
//console.log(complex_array.flat(Infinity));        //  [1, 2, 3, 4,  5, 6, 7, 8, 9, 10 ]

console.log(Array.isArray("shakil"));       // false
console.log(Array.from('shakil'));          // [ 's', 'h', 'a', 'k', 'i', 'l' ]
console.log(Array.from("shakil alam"));     // 's', 'h', 'a', 'k','i', 'l', ' ', 'a','l', 'a', 'm']
console.log(Array.from({name: "shakil"}));  // []
console.log(Array.from({name: "shakil"}));  // []

const value1 = 100
const value2 = 200
const value3 = 300
console.log(Array.of(value1,value2,value3));        // [ 100, 200, 300 ]
