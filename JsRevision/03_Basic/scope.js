//var doesn't care about scope
//let work properly with keeping score in the mind.

let a = 30;

if(true){
    let a = 10;
    console.log("INNER: ", a);

}
console.log(a);

//closure say that child function or scope can access variable or parent
//but parent can't access child variables

//touch up on hoisting concepts


console.log(addOne(6));
function addOne(num){
    return (num+1);
}


// console.log(addTwo());
const addTwo = function(num){
    return(num+2);
}
