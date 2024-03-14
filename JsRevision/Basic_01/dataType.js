"use strict"; // treat all JS code as newer version

//alert("hello"); //we're using node.js not browser

let name = "Ashish";
let age = 23;
let isLoggedIn = true;


//*******Primitive dataType:(7 types)*********

//number
//char
//string
//bool
//double
//bigInt 
// null => standalone value
//undefined
//Symbol



console.log(typeof name);

//symbols

const id = Symbol('123');

const anotherId = Symbol('123');

console.log(id===anotherId);

const bigNumber = 11021234123412393434;


console.log(bigNumber);

//*********Non-primitive dataType(Reference type)***********

//object
//Array
//function 


//javaScript is a dynamically typed language,which means that datatypes of variables are 
//determined by the value they hold at runtime.

const heros = ["shaktiman","naagraj","doga"];

const student1 = {
    name: "Ashish",
    age: 22,

}

const myFunction = function(){
    console.log("helloWorld");
}

console.log(typeof bigNumber)
console.log(typeof heros)
console.log(typeof student1)
console.log(typeof myFunction)
console.log(typeof id);