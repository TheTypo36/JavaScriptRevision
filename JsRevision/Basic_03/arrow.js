const user = {
    username: "ashish",
    price: 999,

    welcomeMessage: function(){
        console.log(`${this.username}, welcome to website `);
        // console.log(this);
    }
}

user.welcomeMessage();
user.username = "anand";
user.welcomeMessage();

 //this refer to current context
 console.log(this);

 //arrow function

 function chai(){
    let username = "ashish";
    console.log(this.username);
 }
 chai();