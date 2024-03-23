
//if you dont want the function to get an undefine parameter
//pass a value while declaration shown below
function loginUserMessage(username="unknown"){
   
    return `${username} just logged in`;
}

console.log(loginUserMessage("anand"));

//rest operator
//rest operator is in parameter while declaring the function
//when you dont know how many arguements you gonna get in function

function calcCartPrice(...num){
    console.log(num);
}

calcCartPrice(30,40,50,60,70);
function calcCartPrice2(price, price2,...num){
    console.log(num);
}

calcCartPrice2(30,40,50,60,70);
