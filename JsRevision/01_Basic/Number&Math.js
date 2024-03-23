const score = 100;
console.log(score);

const balance = new Number(400);

console.log(balance);

console.log(balance.toString().length);
console.log(balance.toFixed(3));

const otherNumber = 123.4435;

console.log(otherNumber.toPrecision(5));

//++++++++++++++++++++++++ Maths ++++++++++++++++
console.log(Math.abs(-10));
console.log(Math.ceil(4.2));
console.log(Math.floor(4.7));

console.log(Math.random());

const min = 1;
const max = 6;

console.log(Math.floor((Math.random()*(max-min+1))+min));
