//LET  - BLOCK-SCOPES VARIABLE.CAN BE UPDATED
// CONST - BLOCK-SCOPE BUT CANNOT BE REASSIGNED
let x =10;
const y = 20;
console.log("Let/Const: ",x+y);

// 2. ARROW FUNCTION
// SHORTER FUNCTION SYNTAX
const add = (a,b) => a+b;
console.log("arrow add : ",add(5,3))

//3.method 2 of arrow function
const add1 = (a, b) => {
  return a + b;
};



console.log("arrow add : ",add1(10,12))

// 4. TEMPLATE LITERALS
//ALLOWS BACKTICK STRINGS WITH VARIABLES.

const name = "pragathes";
console.log(`Hello ${name}, welcome to ES6!`);

// 4. DESTRUCTURING
// ARRAY
// EXTRACT VALUES FROM ARRAYS/OBJECT
const nums = [100,200,300];
const [n1, n2, n3] = nums;
console.log("Array Destructure:",n1,n2,n3);

// OBJECT 
const user = {id: 1,uname:"yuva"};
const { id, uname} = user;
console.log("Object Destructure : ",id,uname);

//5. PROMISE
// REPRESENT FUTURE VALUE
const promise = new Promise(resolve => {
    setTimeout(() => resolve("Promise Resolved!"),1000);
})
promise.then(msg => console.log("Promise: ",msg));

//6. ASYNC / AWAIT
//CLEANER SYNTAX FOR PROMISE.
const fetchData = async() => {
    const data = await promise;
    console.log("Async/Await:",data);
};
fetchData();

// 7. EVENT LOOP
// JAVASCRIPT IS single - 
console.log("Event loop start");
setTimeout(() => console.log("TimeOut Executed"),20000);
console.log("Event loop End");

//8. CLOSURE
//A CLOUSER KEEPS ACCESS TO A VARIABLE EVEN AFTER THE FUNCTION

function outer() {
    let count = 0;
    return function inner() {
        count++;
        return count;
    };
}
const counter = outer();
console.log("Clouser:",counter())
console.log("Clouser:",counter())

//10. Hosting
// JAVASCRIPT MOVES DECLARATIONS TO TOP BEFORE EXECURION.
console.log("Hosing Example:")
console.log(a); //undefined
var a = 50;


