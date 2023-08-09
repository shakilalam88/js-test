// let score = "33abc";
// let score = null
// let score = undefined
let score = true


console.log(score, typeof score);

let valueInNumber = Number(score)

console.log(valueInNumber, typeof valueInNumber);

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
console.log(boolleanIsLoggedIn, typeof boolleanIsLoggedIn);

// 1 => true
// 0 => false
// "" => false
//"shakil" => true

// let someNumber = 33;
// let someNumber = "33";
// let someNumber = true;
let someNumber = false;
let stringNumber = String(someNumber)

console.log(stringNumber, typeof stringNumber);

// 33 => "33" (string)
// "33" => "33" (string)
// true => "true" (string)
// flase => "false" (string)

// String
// Boolean
// Number
// Array
// Object