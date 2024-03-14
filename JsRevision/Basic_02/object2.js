//object declaration via constuctor(it is a singelton object)

const tinderUser = new Object();

tinderUser.id ="123abc"
tinderUser.name = "Sammy",
tinderUser.isLoggedIn = false;

console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullName:{

        userfullname: {
            firstname: "ashish",
            lastname: "anvi"
            
        }
    }
}
console.log(regularUser.fullName.userfullname.firstname);
const obj1 = {1: 'a', 2:'b'}

const obj2 = {3: "a", 4: 'd'}

//how to combine obj1 and obj2 via assign
const obj3 = Object.assign(obj1,obj2);
console.log(obj3);

//combining objects via spread operator
console.log({...obj1,...obj2});

//making array of keys or values of object
console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));

const laptop ={
    laptopName: ["MacbookAir","AsusVivobook","DellInsipron","LevenoThinkPad"],
    laptopPrice: [70,80,90,100],
    laptopProccessor: ["M1","I5","Ryzen7","Ryzen9"]
}


//destructuring 
const {laptopName,laptopPrice} = laptop;
console.log(laptopName,laptopPrice);