// JavaSrcipt is dynamic type language because the interpreter assigns variables a type at runtime based on the variable's value at the time.





"use strict"; //treat all JS code as newer verstion

// alert("hello") // we are using nodejs, not browser

let name = 'shakil';
let age = 18
let isLoggedIn = false;

// data_type

   //primitive value
    
      //TYPE            //TYPEOF

      //number          //"number"     let value = 323;
      //null            //"object"     let value = null (or return null value)
      //bignit          //"bigint"     let value = 3243243243223432n
      //boolean         //"boolean"    let value = true
      //string          //"string"     let value = "hello"
      //symbol          //"symbol"     let id = Symbol('123')
      //undefined       //"undefined"  let value;

   //Non primitive value (Reference)
   
      // Array
      // Object
      // function



      // Type and typeof return value
         // number - number
         // string -  String
         // boolean - boolean
         // symbol - symbol
         // bigint - bigint
         // undefined - undefined

         // null - object
         // array - object
         // object - object
         // function - function


//********************Memory***********************/

// Stack Memory (primitive) copy value

// Heap Memory (non primitive) revrence value


// ex- 
   let today = "sunday"
   let tomorrow = today
   tomorrow = "monday"

   // console.log(today);
   // console.log(tomorrow);

   let month1 = {
      name : "january",
      day : 31
   }

   let month2 = month1

   month2.name = "february"

   console.log(month1);
   console.log(month2);