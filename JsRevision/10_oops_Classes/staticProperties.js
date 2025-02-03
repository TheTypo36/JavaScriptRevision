class User {
  constructor(username) {
    this.username = username;
  }
  logMe() {
    console.log(`the username is ${this.username}`);
  }

  static getId() {
    console.log(`${this.username}${Math.floor(Math.random() * 1000000)}`);
  }
}
class Student extends User {
  constructor(username, email) {
    super(username);
    this.email = email;
  }
}
const s1 = new Student("Ashish");

// u1.logMe();
console.log(s1.getId());
