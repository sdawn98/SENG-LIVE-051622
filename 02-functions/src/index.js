 //1. Create a constant variable called bookstore with the value 'Easley\'s Technical Books'
const bookstore = 'Easley\'s Technical Books'

//2. Crate a variable that can be reassigned called open with the value false
let open = false

//3. toggles open. If Open is true log "Welcome to {bookstore}, we're open" else "Sorry, {bookstore} is closed"
if(open === true){
    console.log(`Welcome to ${bookstore}, we're open`)
} else {
    console.log(`Sorry, ${bookstore} is closed`)
}

//4. Creat a function that toggles open.
//openStore()
//Building the function, Declaring the function
function openStore(){
    console.log('hi')
    open = !open
}
//Invoke or call function
//openStore()


let book1 = 'You don\t know js, yet:Get Started by Kyle Simpson'
let b1Price = 10

let book2 = 'Eloquent JavaScript, 3rd Edition by Marijn Haverbeke'
let b2Price = 15

//Function Declaration
function printBook(book){ 
    //console.log(book)
    return book.toUpperCase()
}
//console.log(book)
//printBook('Rose likes to code and you can too')
// printBook(book2)
//Function Expression
// const addToPrice = function(bookPrice) {
//     return bookPrice+2
// }
//Arrow function
// const addToPrice = (bookPrice) => {
//     return bookPrice+2
// }
// const addToPrice = (bookPrice, price) => {
//     return bookPrice+price
// }

//const addToPrice = bookPrice => bookPrice+2


////////////
//console.log(addToPrice(b2Price))

const discountFoo = (bookPrice, day) => {
    if(day === 'Sunday'){
        let discount = 2
        return Math.floor(bookPrice/discount)
    } else if (day === 'Friday'){
        let discount = 3
        return Math.floor(bookPrice/discount)
    }

}
//console.log(discount)
console.log(discountFoo(b1Price, 'Monday'))


// const addToPrice = bookPrice => {
//     debugger
//     return bookPrice+2
// }

// const subFromPrice = bookPrice => {
//     debugger
//     return bookPrice-2
// }

const toUp = (str) => str.toUpperCase()
const toDown = (str) => str.toLowerCase()
//A callback is a function passed to another function
//and called by that function
const transformItem = (cb) => {
    return cb('Rose')
}
//transformItem('rose')
console.log(transformItem(toUp))
//console.log(transformItem(toDown))