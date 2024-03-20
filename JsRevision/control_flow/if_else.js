

// ===, !==this also check the type

let a = 2;
let b = '2';

console.log(a==b);
console.log(a===b);

console.log(a!=b);
console.log(a!==b);

//short-hand notation

const balance = 1000;

(balance > 5000)?console.log("test"):console.log("test2");

//switch to print month in english associate with number

let month =3

switch(month){
    case 1:
        console.log("january");
        break;
    case 2:
        console.log("febuary");
        break;
    case 3:
        console.log("March");
        break;
    default:
        console.log("any other");
    break;
}

/*
*******falsy Value**************
false, 0, -0, BigInt 0n, "", null, undefined, NaN



***********truthy Value*********
"0", 'false', " ", [], {}, function(){}

*/

//how to check if arr is empty

let arr = [];
if(arr.length === 0){
    console.log('arr is empty');
}

let obj = {};
if(Object.keys(obj).length === 0){
    console.log("obj is empty");
}

// Nullish Coalescing Operator (??): null undefined

let val1;
val1 = 5 ?? 10;
console.log(val1);
val1 = null ?? 10;
console.log(val1);
val1 = undefined ?? 15;
console.log(val1);