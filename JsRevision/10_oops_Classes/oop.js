//object literals
const user = {
  name: "Ashish",
  life: "good",
  occupation: "coder",

  getthename: function () {
    console.log(this.name);
  },
};

user.getthename();
console.log(this);

// new keyboard is a constructor function , allows use to make multiple
//instance from one object literal.

//wrong -> the userTwo will overwrite the first user data
// function User(username, age, loggedIn) {
//   this.uername = username;
//   this.age = age;
//   this.loggedIn = loggedIn;
//   return this;
// }

// const userOne = User("Ashish", 23, true);
// console.log(userOne);
// const userTwo = User("Anvi", 19, false);
// console.log(userOne);

//correct way -> via using new keyword,

// step1 ->create a empty object,
// step2 -> new construction fuction is created
// step3 -> argument are injected
// step4 -> then this is returned;
function User(username, age, loggedIn) {
  this.uername = username;
  this.age = age;
  this.loggedIn = loggedIn;

  return this;
}

const userOne = new User("Ashish", 23, true);
console.log(userOne);
const userTwo = new User("Anvi", 19, false);
console.log(userOne);
console.log(userTwo);
