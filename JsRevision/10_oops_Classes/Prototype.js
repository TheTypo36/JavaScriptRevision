const person = {
  name: "Ashish",
  gym: true,

  work: "IT",
  salary: "23000",
};

let superHero = ["ironMan", "superman", "batman"];

let fullName = "Ashish";

console.log(fullName.heyAshish);
console.log(superHero.heyAshish);
console.log(person.heyAshish);

Object.prototype.heyAshish = "hello";

console.log(fullName.heyAshish);
console.log(superHero.heyAshish);
console.log(person.heyAshish);
