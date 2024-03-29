let result = document.querySelector("#result");
const form = document.querySelector("form");
const restart = document.querySelector("#restart");
restart.addEventListener("click", function () {
  location.reload();
});
console.log(form);
let count = 1;
const handleSubmit = (e) => {
  e.preventDefault();
  const number = document.getElementsByName("num")[0].value;
  if (number < 1 || number > 100 || isNaN(number) || number === "") {
    result.innerHTML = "INVALID INPUT";
    result.className = "red";
  }
  const ourNumber = Math.floor(Math.random() * 100);
  if (number == ourNumber) {
    result.innerHTML = "!!Congralution, You Won!";
    result.className = "green";
    restart.style.display = "block";
  } else {
    if (count < 10 && count >= 1) {
      let remaining = document.querySelector("#Remaining");
      remaining.innerText = 10 - count;

      let prev = document.querySelector("#previousGuess");
      let newEntry = document.createElement("span");
      newEntry.className = "entery";
      newEntry.innerText = number;
      console.log(newEntry);
      prev.append(newEntry);

      result.innerHTML = "Try Again";

      count++;
    } else {
      let remaining = document.querySelector("#Remaining");
      remaining.innerText = 0;
      result.innerHTML = "You lost";
      result.className = "red";
      restart.style.display = "block";
    }
  }
  console.log(ourNumber);
};
form.addEventListener("submit", handleSubmit);
