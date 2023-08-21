// function definition
function myName(){
    console.log("shakil alam");
}


// myName    // function refrence
// myName()  // function excution

// console.log(typeof myName, myName);        //function [Function: myName]
// console.log(typeof myName,myName());       //function shakil alam

function sum(num1,num2){    // parameter
    console.log(num1+num2);
}

// sum()       // Nan
// sum(3,4)    // 7  (argument)
// sum(3,"a")  // 3a
// sum(4 + "3")  // 43undefined

// const result = sum(4,5)     //9
// console.log(result);        //undefine (because it is not reterning and const=undefined inition exution)

function sum1(num1,num2){
    // return num1+num2
    let result = num1+num2
    //console.log("hello");  // it print  hello because it before return
    return result
    console.log('world');   // not print after the return
}

const result = sum1(3,5)
// console.log(result);            // hello   8


function isLogin(name){
    return `${name} is login now`
}
isLogin("shakil")   // nothing  print because there is no console log

// console.log(isLogin("shakil"));        // shakil is login now
// console.log(isLogin());                // undefined is login now
// console.log(isLogin(""));              //  is login now

function isLogOut(name){
    // if(name === undefined){
    if(!undefined)
        console.log("plz logout");
        return
    }
    return `${name} is logout now`
}
// console.log(isLogOut('shakil'));        // shakil is logout now
// console.log(isLogOut());                // plz logout    undefined is logout now

//after adding return after console.log 
//console.log(isLogOut());                   //  plz logout
