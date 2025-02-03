function setUsername(username) {
  this.username = username;
  console.log("called");
}

function createUser(username, email, password) {
  setUsername.call(this, username);

  this.email = email;
  this.password = password;
}

const user2 = new createUser("Ashish", "ashish@google.com", "1234");
console.log(user2);
