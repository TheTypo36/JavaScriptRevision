
//if you dont want the function to get an undefine parameter
//pass a value while declaration shown below
function loginUserMessage(username="unknown"){
   
    return `${username} just logged in`;
}

console.log(loginUserMessage("anand"));