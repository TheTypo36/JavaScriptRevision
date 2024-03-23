
//singleton -> if declare object via object literals
//singleton is not creating but if we create object via
//constructor, singleton is created. FYI -> there're only 2 ways 
//to create object i.e. via object literals & constructor


//object literals.

const mySym = Symbol("key1");

const user = {
    name: "Ashish",
    "fullname": "Ashish Raghuvanshi",
    [mySym]: "it is Symbol",
    age: "23",
    location: "Delhi",
    email: "ashish@googl.com",
    isLoggedIn: false,
    lastLoginDay: ["Monday","wednesday","Friday"]
} 

//if the key in the object is string you can't access that 
//perticular property via dot operation
console.log(user.fullname);

console.log(user.name);
console.log(user["name"]);
//calling symbol as key cannot be call from dot operator
console.log(user[mySym]);

//using freeze to restrict the object from get edited

user.name = "Anvi";
console.log(user.name);
//Object.freeze(user);
user.name = "Anand";
console.log(user.name);

user.greatingOne = function(){
    console.log(`hello user`);
}

//function with parentheses gives as whole function whereas with
//parentheses executes the function
console.log(user.greatingOne);


//constructor
//Object.create