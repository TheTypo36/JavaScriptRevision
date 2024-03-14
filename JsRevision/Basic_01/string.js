let str = "ashish";
let lastName = "Raghuvanshi"
console.log(str);

// not recommended the use of '+' to concatenate
str += lastName;
console.log(str);
// instead use backtick=>(stringInterpolation)
//modernWay i.e. with use of backtick

console.log(`hello my is ${str} and sirname is ${lastName}`);


//another way to  declare string

const BrotherName = new String('anand Raghuvanshi');

console.log(BrotherName.__proto__);

console.log(BrotherName.length);
console.log(BrotherName.toUpperCase());
console.log(BrotherName);
console.log(BrotherName.charAt(2));
console.log(BrotherName.indexOf("n"));

const newString = BrotherName.substring(0,4);
console.log(newString);
const anotherString = BrotherName.slice(0,4);
console.log(`here is slice ${anotherString}`);

const url = "https://ashishRaghuvanshi.com/%20gitHub";

console.log(url.replace('%20',""))
console.log(url.includes("ashish"))