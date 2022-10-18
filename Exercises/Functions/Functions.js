/*console.log("Functions")
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
//A function name should almost always start with a verv
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

/* A function is a reusable block of code designed to perfrom a single purpose.
It optionally takes in data as input and returns a single piece of data(including complex data
such as objects functions etc.)     

What is a function?
-You can save functtions into variables.
-Functions can accept parameters - unspecified data type 
-Functions can have multiple parameters
-Functions can call other functions
-Functions should be small and modular 
-Functions build on each others

Defining Function 
There are three primary ways to define functions in js: 
1. Function Declaraaition(AKA Function Definitions)
2. Function Expression
3. Arrow Function

Arrow Function
- A more concise syntax 
- Implicit return of a single expression
- A single rule for binding the this keyword

Example:
/The following function declaration:

// Function Declaration
function add(a, b) {    
return a + b; }

//and the following arrow function are equivalent:
// Arrow Function
const add = (a, b) => a + b;

Calling Functions
Regardless of which of the three approaches are used to define functions, we call them the same way:
add(25, 100); // returns 125
Developer Vocab: Developers might say call, execute, invoke or "run a function" - they all mean the thing.
add(25, 100); // returns 125

The areBothEven function is defined to accept two arguments.
The return keyword returns the result of the expression that follows it
 - which looks kind of crazy, but isn't as intimidating as it appears when you break it down.
The areBothEven function is defined to accept two arguments.
These arguments should be numbers, otherwise the function as written won't work as expected.
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#comparison_operators

function areBothEven(n1, n2){
        return !(n1 % 2) && !(n2 % 2);

}
console.log(areBothEven(3,7))

function getDevObject(name) {
    let skills = [];
    for (let i = 1; i < arguments.length; i++) {
      skills.push(arguments[i]);
    }
    return { devName: name, jobSkills: skills };
  }
  console.log(getDevObject(maria))
  */

const sayName = (name) => {
    console.log('Banana' + (name)); //Concatination
    console.log(`Banana ${name}`);
}
sayName("Bus");

//const calculateAreaOfSquare = (length, height) => {
 //   let sqft = length * height;
  //  console.log(`My square or rectangle is ${sqft} square feet`)

//calculateAreaOfSquare(20,20);

//const calculateAreaOfTheBermudaTriangle = (width, height) => {
  //  let sqft = .5 * width * height;
   // console.log(`The area of a triangle with a width of ${width} and a height of ${height} is ${sqft} square units `)

//    calculateAreaOfTheBermudaTriangle(20,20)
//Natalie's Code
//const caclulateAreaOfCircle = (radius) => {
 //   let sqft = radius * radius * 3.14;
   // console.log(`The area of a circle with a radius of ${radius} is ${sqft} square units.`)
// }
//caclulateAreaOfCircle(12);
public class Car {

    public void lock() {}
    public void unlock() {}
  
    public void startCar() {
  
      checkFuel();
      checkBattery();
      whatHappensWhenTheCarStarts();
    }
  
    private void checkFuel() {
      // Check fuel level
    }
  
    private void checkBattery() {
      // Check car battery
    }
  
    private void whatHappensWhenTheCarStarts() {
      // Magic happens here
    }
  }