//var doesn't care about scope
//let work properly with keeping score in the mind.

let a = 30;

if(true){
    let a = 10;
    console.log("INNER: ", a);

}
console.log(a);