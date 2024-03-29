let clock = document.querySelector("#clock");

setInterval(function () {
  let date = new Date().toLocaleTimeString();
  console.log(date);
  clock.innerText = date;
}, 1000);
