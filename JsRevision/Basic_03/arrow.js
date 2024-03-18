const user = {
    username: "ashish",
    price: 999,

    welcomeMessage: function(){
        console.log(`${this.username}, welcome to website `);
        // console.log(this);
    }
}

user.welcomeMessage();
user.username = "anand";
user.welcomeMessage();

 //this refer to current context
 console.log(this);

 //arrow function

 function chai(){
    let username = "ashish";
    console.log(this.username);
 }
 chai();

 const chai2 = function(){
    let username = "anand";
    console.log(this.username);
}
chai2();

const chai3 = () =>{
    let username = "anvi";
    console.log(this.username);
}

chai3();

//2 way of arrow function

//normal way
const addTwo = (num1, num2) => {
    return (num1+num2);
}

//implicite return way part 1
const addThere = (n1, n2, n3) => n1+n2+n3;

//implicate return way part 2 you can also user () instead of {}
const addFour = (n1,n2,n3,n4) => (n1+n2+n3+n4);

const student = () => ({name: "ashish", age: "22", skills: "coding"})


console.log(addTwo(4,5));
console.log(addThere(10,2,5));
console.log(addFour(3,4,5,6));
console.log(student());