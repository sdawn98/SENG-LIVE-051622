//Debugging --------------------
//Note: comments are ignored when the code is executed 
// Double // allow for single line comments
// hi 
// hi
// hi
// /* */ allows for multiline comments
/* 
hi 
*/

//Note: console.log will print things in the console
console.log('rose cute')
//Note: debugger adds break points to your code that stops it mid execution
//debugger
console.log('JS is cool')

//Variables -----------------------------------
//Note: variables are defined with let and const
//variables can be defined with var it's typically no longer used. 
//variables defined with let can be reassigned
let cat 
cat = 'rose'

//debugger
cat = 'tom'
let age = null 
age = 11
//debugger
//Note: Variables defined with const can not be reassigned
const person = 'ix'
//person = 'Max'
let weather = 'sunny'
//weather = 'rain'


//Conditionals ------------------
//Note: if statement are conditionals.
// everything between the () is the condition that will cause the code between the {} to execute
if(weather === 'sunny'){
    let catMood = 'bad' 
    console.log(catMood)
    console.log(`Take ${cat} for a walk`)    
} else if(weather === 'rain') {
    console.log(`Put ${cat} in a rain coat`)
} else {
    console.log(`Play with ball`)
}
console.log(catMood)

//Note: the below are alternative ways to perform conditionals. 
// if(weather === 'sunny') console.log(`Take ${cat} for a walk`)
//if(weather === 'sunny')

//weather === 'sunny'&& console.log(`Take ${cat} for a walk`)

//like if else
//weather === 'sunny'? console.log(`Take ${cat} for a walk`) : console.log(`Play with a ball`)




