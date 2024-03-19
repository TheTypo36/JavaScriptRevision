function one(){
    two();
    console.log('hello one');
}

function two(){
    three();
    console.log('hello two')
}

function three(){
    console.log('hello three');
}

one();


/* 
    call stack will look like this

                                two()               three()
begin exceution =>  one() =>    one()        =>     two()       =>  two()   => one() => empty
                                                    one()           one()
following lifo 
*/