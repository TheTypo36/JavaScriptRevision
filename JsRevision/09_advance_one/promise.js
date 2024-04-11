const promiseOne = new Promise(function (resolve, reject) {
  //Do an async Task
  //DB calls,cryptography,network
  setTimeout(function () {
    console.log("Async task is complete");
    resolve();
  }, 1000);
});

promiseOne.then(function () {
  console.log("promise consumed");
});

new Promise(function (resolve, reject) {
  setTimeout(function () {
    console.log("Async task 2");
    resolve();
  }, 1000);
}).then(function () {
  console.log("Async 2 Resolved");
});

const PromiseThree = new Promise(function (resolve, reject) {
  setTimeout(function () {
    resolve({ username: "Anvi", Email: "anvi@katoruki.com" });
  }, 1000);
}).then(function (user) {
  console.log(user);
});

const promiseFour = new Promise(function (resolve, reject) {
  setTimeout(function () {
    let error = true;
    if (error) {
      reject("error: something went wrong!!!");
    } else {
      resolve({ username: "ashish", email: "ashish@example.com" });
    }
  }, 1000);
});

promiseFour
  .then((user) => {
    console.log(user);
    return user.username;
  })
  .then((username) => {
    console.log(username);
  })
  .catch((err) => {
    console.log(err);
  })
  .finally(() => {
    console.log("The Promise is either resolve or reject");
  });

const promiseFive = new Promise((resolve, reject) => {
  setTimeout(() => {
    let err = true;
    if (!err) {
      resolve({ user: "ashish&anvi", email: "ashish@anvi.com" });
    } else {
      reject("few bumps: along the speedy road");
    }
  }, 1000);
});

async function lifeOfAshishAnvi() {
  try {
    const user = await promiseFive;
    console.log(user);
  } catch (error) {
    console.log(error);
  }
}

lifeOfAshishAnvi();

//fetch data using async await
// async function getAllUsers() {
//   try {
//     const user = await fetch("https://api.github.com/users/TheTypo36");
//     const data = await user.json();
//     console.log(data);
//   } catch (error) {
//     console.error(error);
//   }
// }

// getAllUsers();

//fetching data using promises

fetch("https://api.github.com/users/TheTypo36")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.error(err);
  });
