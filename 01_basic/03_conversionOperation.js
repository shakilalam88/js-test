// ===========================Conversion==================================//
// let score = "33abc";
// let score = null
// let score = undefined
let score = true


// console.log(score, typeof score);

let valueInNumber = Number(score)

// console.log(valueInNumber, typeof valueInNumber);

// "33" => 33 (number)
// "33abc"  => NaN (number)
// null => 0 (number)
// undefined => NaN (number)
// true => 1 (number)
// false => 0 (number)

// let isLoggedIn = 1
// let isLoggedIn = ""
let isLoggedIn = "shakil"

let boolleanIsLoggedIn = Boolean(isLoggedIn)

// console.log(boolleanIsLoggedIn, typeof boolleanIsLoggedIn);

// 1 => true
// 0 => false
// "" => false
//"shakil" => true

// let someNumber = 33;
// let someNumber = "33";
// let someNumber = true;
let someNumber = false;
let stringNumber = String(someNumber)

// console.log(stringNumber, typeof stringNumber);

// 33 => "33" (string)
// "33" => "33" (string)
// true => "true" (string)
// flase => "false" (string)

// String
// Boolean
// Number
// Array
// Object


// ===========================Operation==================================//

//console.log(true);  // true
//console.log(+true); // 1
//console.log(-true); // -1
//console.log(*true); // error
//console.log(true+); //error
//console.log("");      // empty string
//console.log(+"");     // 0
//console.log(-"");     // -0

//console.log(false);  // false
//console.log(+false); // 0
//console.log(-false); // -0
//console.log(*false); // error

let value = 3;
let negValue = -(value);

//console.log(negValue); // -3

//console.log(2+2);    // 4
//console.log(4-2);    // 2
//console.log(2*4);    // 8
//console.log(2**3);   // 8
//console.log(3/2);    // 1.5
//console.log(5%3);    // 2

const text1 = "hello";
const text2 = " world";
const fullText = text1 + text2;

// console.log(fullText);

//console.log("2" + 2);      // 22
//console.log(2 + "2");      // 22
//console.log("2" + "2");    // 22
//console.log("2" + 2 + 2);  // 222
//console.log(2 + "2" + 2);  // 222
//console.log(2 + 2 + "2");  // 42

//console.log(4 - 2);             // 2
//console.log("4" - 2);           // 2
//console.log(4 - "2");           // 2
//console.log("4" + " 4" - 2 );   // Nan
//console.log("4" + "4" - 2);     // 42
//console.log("4" - 1 + "4");     // 34
//console.log("4" -1 -1);         // 2
//console.log(4 + "2" -1);        // 41
//console.log(4 - "2" + "1");     // 21

//console.log(4 *2);                // 8
//console.log("3" * 2);             // 6
//console.log(3 * "2");             // 6
//console.log("2" + 3 *2);          // 26
//console.log(2 + "3" *2);          // 8
//console.log("4"  + "3" * 2);      // 46    
//console.log("4" -"2" * 3);        // -2


let x = 3;
const y = x++;
// Expected output: "x:4, y:3"

// console.log(`x:${x}, y:${y}`);

let a = 3;
const b = ++a;
// Expected output: "a:4, b:4"

// console.log(`a:${a}, b:${b}`);

let num1 = 3;
const num2 = x++;
// num1 is 4; num2 is 3

let x2 = 3n;
const y2 = x2++;
// x2 is 4n; y2 is 3n

let num3 = 3;
const num4 = ++x;
// num3 is 4; num4 is 4

let m2 = 3n;
const n2 = ++x2;
// m2 is 4n; n2 is 4n

//If used postfix, with operator after operand (for example, x++), 
//the increment operator increments and returns the value before incrementing.

//If used prefix, with operator before operand (for example, ++x), 
//the increment operator increments and returns the value after incrementing.

// link to study
// https://tc39.es/ecma262/multipage/abstract-operations.html#sec-type-conversion
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Increment
