 //arr in js is resizable and mix value is allowed
 //
 let arr = [1,2,3,4,5,6];

 console.log(arr);
 console.log(arr[3]);

 const myHeros = new Array("spiderman","batman","superman","aquaman");
 console.log(myHeros);

 myHeros.push("wonderWomen");
 console.log(myHeros);
myHeros.pop();
myHeros.pop();
console.log(myHeros);
myHeros.unshift("IronMan");
console.log(myHeros);
myHeros.shift();
myHeros.shift();
console.log(myHeros);
myHeros.push("ironMan")
myHeros.push("captain America")
console.log(myHeros.includes("ironMan"));
let newstr = myHeros.join();

console.log(newstr);

//slice remove a part of array does not change original arr
//splice remove a part of arr include the last elem and also
//changes the original arr



 /* 
  Shallow Copy => a shallow copy of an object is a copy who share
  same reference as original


  Deep Copy => when the original and copy donot share the same 
  reference.



 
 
 */