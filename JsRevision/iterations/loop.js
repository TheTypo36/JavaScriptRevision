// ## array specify loops

// for of
const arr = ["superman","Batman","flash", "wonderwoman"]
for (const ele of arr) {
    console.log(ele);
}
const greetings = "ashish raghuvanshi";

for (const alph of greetings) {
    // console.log(alph);
}

//maps
const maps = new Map();
maps.set('IN', "India");
maps.set('IN', "India");
maps.set('ENG', "England");
maps.set('PAK', "Pakistan");
maps.set('AFG', "Afganistan");

console.log(maps);
for (const key of maps) {
    console.log(key);
}

const myGames = {
    'game1': 'GTA vice city',
    'game2': 'IGI: covert strikes',
    'game3': 'San andreas',
    'game4': 'pubg'
}


//for in

for (const key in myGames) {
        console.log(`${key} is ${myGames[key]}`);
}

const programming = ['js','c++','java','python','ruby','swift'];

for (const key in programming) {
    console.log(`${key} stores ${programming[key]}`);
}

const coding = ['js','ruby','java','python','cpp']

coding.forEach((ele)=>(
    console.log(ele)
));

const printMe = (item) =>{
    console.log(item);
}
coding.forEach(printMe);

const myCoding = [
    {
        langName: "C++",
        langEditor: "subl"
    },
    {
        langName: "js",
        langEditor: "vs"
    },
    {
        langName: "java",
        langEditor: "Eclipse"
    }

]

myCoding.forEach((item)=>{
    console.log(`The language ${item.langName} uses ${item.langEditor} as an editor`);
})