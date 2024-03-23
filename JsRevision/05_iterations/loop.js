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

// forEach donot return the value;
const values = myCoding.forEach((item)=>{
    return item;
})

console.log(values);

//return the value ,(explicit return)
const value2 = myCoding.filter((item)=>item);

console.log(value2);

const mynum = [1,2,3,4,5,6,7,8,9,10]

const value3 = mynum.filter((num)=>(num>4))

console.log(value3);
 
const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

  const userBooks = books.filter((book) =>(
        book.genre ===  "History" && book.publish < 1995
  ))
  console.log(userBooks);