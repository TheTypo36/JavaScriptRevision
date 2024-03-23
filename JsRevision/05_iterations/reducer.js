const myNum = [1,2,3]

const sum = myNum.reduce((acc,num)=>acc+num,0)

console.log(sum);


const shoppingCart = [
    {
        itemName: "pen",
        price: 599,
    },
    {
        itemName: "mobile",
        price: 30099,
    },
    {
        itemName: "macbook",
        price: 70000,
    },
    {
        itemName: "shoes",
        price: 1999,
    },
    {
        itemName: "tshirt",
        price: 599,
    }
]

let priceToPay = shoppingCart.reduce((acc,item) => acc+item.price,0)
console.log(priceToPay);