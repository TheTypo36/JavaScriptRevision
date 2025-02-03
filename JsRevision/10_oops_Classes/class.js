// class Car {
//   constructor(model, color) {
//     this.model = model;
//     this.color = color;
//   }
// }

// let ford = new Car(100, "red");

// console.log(ford.color);

// class User {
//   constructor(username, email, password) {
//     (this.username = username),
//       (this.email = email),
//       (this.password = password);
//   }

//   encryptPassword() {
//     //no need of function keyword inside class
//     return `${this.username}abc`;
//   }

//   changeUsername() {
//     return `${this.username.toUpperCase()}`;
//   }
// }

// const u1 = new User("ashish", "ashish@gmail.com", "1234");

// console.log(u1.encryptPassword());
// console.log(u1.changeUsername());

function User(username, email, password) {
  this.username = username;
  this.email = email;
  this.password = password;
}

User.prototype.encryptPassword = function () {
  return `${this.password}abc`;
};

User.prototype.changeUsername = function () {
  return `${this.username.toUpperCase()}`;
};

const u1 = new User("anand", "anand@gmail.com", "12345");

console.log(u1.encryptPassword());
console.log(u1.changeUsername());
