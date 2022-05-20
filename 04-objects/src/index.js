//Creating an object
const customer = {
        name:'rose',
        userId: 1,
        customerNote: () => console.log('This customer loves horror but HATES Stephen King'),
        favBook: {
            id:1,
            title: 'Eloquent JavaScript: A Modern Introduction to Programming',
            author: 'Marjin Haverbeke',
            price: 10.00,
            reviews: [{userID: 1, content:'Good book, but not great for new coders'}],
            inventory: 10,
            imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/51IKycqTPUL._SX218_BO1,204,203,200_QL40_FMwebp_.jpg',
            
        },
}
//console.log(customer.favBook.title)

//Accessing object keys
//console.log(customer.name)
let userInput = 'userId'
console.log(customer[userInput])
//customer.customerNote()

//Edit 
customer.name = 'Tom'

//Creating a new key
customer.lastName = 'Smith'
let customerKey = 'phone'
customer[customerKey] = 8541234556
//console.log(customer)

//Deleting keys
delete customer.customerNote
// console.log(customer)
customer.customerNote2 = () => console.log('new note')

// console.log(bookStore)
// console.log(bookStore.address)
// console.log(bookStore.number)
// console.log(bookStore.name)
// console.log(bookStore.hours)
//Nested Data:
//Look at the Data
// . dots are for objects 
// [] are for arrays
//Inventory is an array of objects
//Each object has a reviews array full of objects 
// console.log(bookStore.inventory)
// console.log(bookStore.inventory[0])
// console.log(bookStore.inventory[0].reviews)
// console.log(bookStore.inventory[0].reviews[0])
// console.log(bookStore.inventory[0].reviews[0].content)


// const tom = {...customer}

function loopThroughObj(obj){
    for(let key in obj){
        
        //bookStore.location
        // console.log(key)
        // console.log(obj[key])
        // console.log('--------')
    }
}

//loopThroughObj(bookStore)
// loopThroughObj(customer)
let myObj = {name:'rose', age:9}
//loopThroughObj(myObj)

//Turns our object keys into array
// console.log(Object.keys(bookStore))
// console.log(Object.keys(myObj))
//Turns our object values into an array
// console.log(Object.values(bookStore))
// console.log(Object.values(myObj))
//Turns our object keys and values into a nested array of arrays
// console.log(Object.entries(bookStore))
// console.log(Object.entries(myObj))
// console.log(Object.entries(myObj)[0])
// console.log(Object.entries(myObj)[0][1])


// bookStore.inventory.forEach((book) => {
//     console.log(book)
// })

//Return an array of book titles from bookStore
// Change the phone numbers to a string in the format of '(000)000-0000'

//give an array 
//build my own array
//use a function that returns an array
//How do I get every book title?
// - look at every book in inventory
// - use something that loops so I have access to every book
// for(...)
// forEach
// map
    // loop
    // returns an array
    // we can use it to return every title from every book
const titles = bookStore.inventory.map(obj =>{
    return obj.title
})

let roundData = [
    {
        fighter1:'ix',
        fighter2:'rose',
        background: 'flowers',
        timer: 3
    }

]
