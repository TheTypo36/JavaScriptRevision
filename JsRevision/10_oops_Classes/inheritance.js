class User {
  constructor(username) {
    this.username = username;
  }

  logMe() {
    console.log(`a user is logged in name ${this.username}`);
  }
}

class Teacher extends User {
  constructor(username, email, password) {
    super(username);
    this.email = email;
    this.password = password;
  }

  addCourse() {
    console.log(`new course was added by ${this.username}`);
  }
}

const T1 = new Teacher("Ashish", "ashish@gmail.com", "12345");

T1.addCourse(); // Teacher have username , getting it via super keyword
T1.logMe(); // because it extends from user class, it also have access of logMe method(function)

const u1 = new User("Anand");

u1.logMe();
// u1.addCourse(); add course is present in Teacher and user is its parent so the function
// cannot be accessed by the user.

console.log(u1 === T1); // false there no equal
console.log(T1 === Teacher); // false there no equal because Teacher is blue of t1

console.log(T1 instanceof Teacher); // true because t1 is reference of teacher
console.log(T1 instanceof User); // true because t1 is reference of Teacher and
//teacher is refernce of User , hence t1 is refernce of u1
