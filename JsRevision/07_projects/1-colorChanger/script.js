const parentDiv = document.querySelector(".container").children;
console.log(parentDiv);
const children = Array.from(parentDiv);

const handleClick = (e) => {
  //   let color = window
  //     .getComputedStyle(e.target)
  //     .getPropertyValue("background-color");
  //   document.body.style.backgroundColor = color;
  let color = e.target.className.split(" ")[1];
  document.body.className = color;
};
children.map((child) => {
  child.addEventListener("click", handleClick);
});
