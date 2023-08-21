//object constructor - support singleton
//Object.create

//object literals  --- not support singleton
//const obj = {}

const mySym1 = Symbol("key1")
const mySym2 = Symbol("key2")
// console.log(typeof mySym2);  // symbol
const age = 30

const user ={
    "name": "shakil",
    "full name": "shakil alam",
    marks: 60,
    pass: true,
    email: "test@testing.com",
    subject: ["math","physics","english"],
    age: 30,
    mySym1: 'key1',
    [mySym2]: "33"
}

// console.log(user.name);                             // shakil
// console.log(user["name"]);                          // shakil
// console.log(user["full name"]);                     // shakil alam
// console.log(typeof user.age, user.age);             // number 30
// console.log(typeof user.mySym1, mySym1);            //  mySym1: 'key1',
// console.log(typeof user.mySym2, user.mySym2);       // undefined undefined
// console.log(typeof user[mySym2], user);             //[Symbol(key2)]: '33'

const key_1 = "value_1"
const key_2 = "value_2"
const key_3 = "value_3"
const key_4 = "value_4"

const obj_1 = {
    key_1: key_3,
    key_2: "key_4"
}

const obj_2 = {
    [key_1]: key_3,
    [key_2]: key_4
}
// console.log(typeof obj_1, obj_1);    // object {key_1: "value_3", key_2: "value_4" }
// console.log(typeof obj_2, obj_2);    // object {value_1: "value_3", value_2: "value_4"}

user.email = "change@changes.com";
// console.log(user.email);                // change@changes.com

// .freeze
// Object.freeze(user);
user.age= 100
// console.log(user.age);                  // 30

user.greeting = function(){
   return console.log("hello js");
}
// console.log(user.greeting());               // hello js
// console.log(user.greeting);                 // [Function (anonymous)] (gives function refrence)

user.greeting2 = function(){
    // console.log(`hello ${user.name}`);
    console.log(`hello ${this.name}`);
}
// console.log(user.greeting2());              // hello shakil

const tinderUser1 = new Object()            // singleton
const tinderUser2 = {}                      // non singleton

// console.log(tinderUser1);                //{}
// console.log(tinderUser2);                //{}

tinderUser2.id = "12abc"
tinderUser2.name = "shakil"
tinderUser2.isLogged = false

// console.log(tinderUser2);                   // { id: '12abc', name: 'shakil', isLogged: false }

const regularUser = {
    email: "testing@testing.com",
    fullName : {
        userFullName: {
            firstName: "test",
            lastName: "testing"
        }
    }
}

// console.log(regularUser.fullName.userFullName.firstName);   // test

const obj1 = {key1: "vlaue1",key2: "value2"}
const obj2 = {key3: "value3",key4: "value4"}

// const newObj = {obj1,obj2}
// console.log(newObj);         // {obj1: { key1: 'vlaue1', key2: 'value2' }, obj2: { key3: 'value3', key4:'value4' }}

// const newObj = Object.assign(obj1,obj2)
// console.log(newObj);        //{ key1: 'vlaue1', key2: 'value2', key3: 'value3', key4: 'value4' }

// const newObj= Object.assign({}, obj1,obj2)
// console.log(newObj);        // { key1: 'vlaue1', key2: 'value2', key3: 'value3', key4: 'value4' }

// spread  operator (...array1,...array2) or (...obj1, ...obj2)

const newObj = {...obj1,...obj2} 
// console.log(newObj);  // { key1: 'vlaue1', key2: 'value2', key3: 'value3', key4: 'value4' }

// console.log(Object.keys(newObj));  // [ 'key1', 'key2', 'key3', 'key4' ]
// console.log(Object.values(newObj));  // [ 'vlaue1', 'value2', 'value3', 'value4' ]
// console.log(Object.entries(newObj)); // [['key1','vlaue1'],['key2','value2'],['key3','value3'],['key4','value4']]

// console.log(newObj.hasOwnProperty("key1"));   // true
// console.log(newObj.hasOwnProperty("key"));   // false


// object destructuring {keyName}
const {key1,key2:k} = newObj
console.log(key1);          // value1
console.log(k);             // value2


