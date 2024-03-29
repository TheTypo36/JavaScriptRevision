const form = document.querySelector("form");

const handleCalc = (e) => {
  e.preventDefault();
  //   console.log("hello world");
  let height = document.getElementsByName("height")[0].value / 100;
  let weight = document.getElementsByName("weight")[0].value;
  //   console.log(height, " ", weight);
  let show = document.querySelector("#show");
  console.log(show);
  if (height === "" || height < 0 || isNaN(height)) {
    show.innerText = "INVALID HEIGHT";
  } else if (weight === "" || weight < 0 || isNaN(weight)) {
    show.innerText = "INVALID WEIGHT";
  } else {
    show.innerText = (weight / (height * height)).toFixed(2);
  }
};
form.addEventListener("submit", handleCalc);
