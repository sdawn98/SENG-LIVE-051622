// 1. Store the books and customer names in arrays. 
const books = [
    'JavaScript: The Definitive Guide by David Flanagan', 
    'JavaScript: The Good Parts by Douglas Crockford',  
    'JavaScript & JQuery: Interactive Front-End Web Development by Jon Duckett', 
    'Eloquent JavaScript: A Modern Introduction to Programming by Marjin Haverbeke', 
    'Learn Enough JavaScript to Be Dangerous by Michael Hartl',
    'Cracking the Coding Interview by Gayle Laakmann McDowell' 
];

//Hobbit names 
const customers =  ['Ceredic Boulderhill', 'Wandrille Farfoot', 'Godobald Goodwort', 'Wibert Bunce', 'Burchard Riverhopper', 'Thietmar Goodwort', 'Adalbert Sandyman','Thierry Oakbottom'];

customers[3]
//customer[8]
customers[customers.length-1]
const customers2 = [...customers]
// customers2.push('Columbus Underfoot')
// customers2.unshift('Wulfhard Undertree')
//customers[12] = 'Tim Proudbody'
// customers.pop()
// customers.shift()

// customers.splice(2)
customers3 = customers.slice(2)
// console.log(customers2)
// console.log(customers)
// console.log(customers3)

//CB is a placeholder for an argument
function loop(arr,cb){
    //for(let i = 0; i < arr.length; i++)
    for(let item of arr){
        cb(item)
    }
}

//loop([1,2,3], num => console.log(num+10))

function firstName(customer){
    console.log(customer.split(' ')[0])
    return customer.split(' ')[0]
}
//loop(customers, firstName)

function title(b){
    console.log('title: ', b.split(' by ')[0])
}
//books.forEach(title)
const forEachCustomers = customers.forEach(firstName)


//loop(books, title)

// loop(customers)
// loop(books)
// loop([1,2,3], add10)
function add10(item){
    console.log(item+10)
}
//[1,2,3].forEach(add10)
// 'rose'.forEach(firstName)





// 2. Write a functions that can transform customers elements. 

//     - Change customer to uppercase 
function toUp(item){
    return item.toUpperCase()
}
const customerNameUpperCase = customers.map(toUp)
//     - Remove the first name
const firstNames = customers.map(firstName)
//     - remove the last name
const lastNames2 = customers.map(function(customer){
    return customer.split(' ')[1]
})
const lastNames = customers.map(customer => customer.split(' ')[1])

// 3. Write a function that will filter books out by a search term.

// 4. Write a function that returns a specific book by search term. 


//for(...)
//for(in)
//for(of)
// let counter = 0
// while(counter !== 5){

//     counter++
// }