let myDate = new Date()
console.log(typeof myDate, myDate);         // object 2023-08-16T17:08:27.588Z
console.log(myDate.toString());             // Wed Aug 16 2023 17:09:06 GMT+0000 (Coordinated Universal Time)
console.log(myDate.toDateString());         // Wed Aug 16 2023
console.log(myDate.toISOString());          // 2023-08-16T17:10:02.316Z
console.log(myDate.toLocaleDateString());   // 8/16/2023
console.log(myDate.toLocaleString());       // 8/16/2023, 5:11:03 PM
console.log(myDate.toLocaleTimeString());   // 5:11:56 PM

let myCreateDate = new Date(2023,0,1,1,1)
let myCreateDate1 = new Date("01-08-2021")

console.log(myCreateDate.toLocaleString()); // 1/1/2023, 1:01:00 AM
console.log(myCreateDate1.toLocaleDateString());    //1/8/2021

let myTimeStamp = Date.now()
console.log(myTimeStamp);           // 1692206309641


console.log(myDate.getDay());       // wed(3), start with monday(1)
console.log(myDate.getMonth());     // aug(7), start with jan(0)
console.log(myDate.getMonth()+1);     // aug(8)

