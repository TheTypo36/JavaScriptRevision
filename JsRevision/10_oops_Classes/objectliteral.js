function user(username, loginCount, loggedIn) {
  this.username = username;
  this.loginCount = loginCount;
  this.loggedIn = loggedIn;

  return this;
}

const userOne = new user("Ashish", 5, false);
const userTwo = new user("Anand", 11, true);

console.log(userOne);
console.log(userTwo);
