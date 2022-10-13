console.log("Functions")
//Function Definition -- A block of code enclosed in braces { } Is used when same lines of code are being used multiple times throughout the program That block is declared as function using the right keyword
//A Function is a resusable block of code that takes an input and makes an output.

// Const vs Let -- Const must be defined -- Let does not need to be defined 
//Const car -- No -- Let car -- Yes

//2 ways of creating a function 
// Function declaration 
console.log( one())

function one() {
    return 'one'
}
one(); //calling a function
//Function expression
const two = () => {
    return 2;
    //}
    //const shortenedTwo = () => 2;
}
console.log(two());

//-----------------------------------------------------------
//A function name should almost always start with a vervv
const kevinRico = {
    name: "Kevin",
    occupation:"beans",
    overTwentyOne: false,
    age:20
}
const increaseAge = (person) => {
        //dot notation its purpose is to access the properties in the object
        person.age += 1
        console.log(`Hooray, it's your ${person.age} birthday!`)
}
//How do we call this function?
increaseAge(kevinRico);