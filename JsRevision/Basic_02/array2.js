 let marvel_heros = ["Ironman","spiderman","thor","captainAmerica"];
 let dc_heros = ["superman","batman","Flash"];


//concat is used for combining error ,but it is not the modern way
let combines_heros = marvel_heros.concat(dc_heros);
console.log(marvel_heros);
console.log(combines_heros);

//using spread operator to combine is better way 
let combines_heros2 = [...dc_heros,...marvel_heros];
console.log(combines_heros2);

let another_arr =  [1,2,3,[4,5,6],8,9,[10,11,12,[13,14,15]]];
console.log(another_arr);

console.log(another_arr.flat(Infinity));

console.log(Array.from("Ashish"));
const family ={
    1: "ashish",
    2: "anand",
    3: "Anvi",
    4: "Sanjay",
    5: "pinki"
}

console.log(Object.values(family));