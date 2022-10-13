console.log("loops")
const myArray=[]
let i = 10;
while(i>=1){
    myArray.push(i)
    i--;
}
console.log(myArray);
//Loops Excercise #1 -- This excercise uses deciminator to count down from 10 to 1!
//Loops Excercise #2 -- Write a for loop for ther given output: 1,3,5,7,9
var array =[];
for(var e =1; e < 10; e += 2){
    array.push(e);
}
console.log(array);
//Loops Excercise #3 Creates a loop that outputs multiples of 3 starting at 6 ending at 60


//Loops Excercise #4 Write a for loop for the given output

//Create an Array!
const Shows= ["HMC,INTSLR,FMF"];
let firstshow = Shows[0]
console.log(firstshow)

//Push Example -- Adds an Element to the end of the Array!
Shows.push("Chowder")
console.log(Shows);
//Pop Example -- Will Remove the last element from the Array!
Shows.pop();
console.log(Shows);
//unshift -- Adds an Element at the Beginning of the Array!
Shows.unshift("Hot Ones")
Shows.unshift("VGD")
console.log(Shows)
//shift -- Removes the First Element of the Array! -- VGD was the first in line.
Shows.shift()
console.log(Shows)
//Slice --The slice() method returns a shallow copy of a portion of an array into a new array object selected from start to end
// (end not included) where start and end represent the index of items in that array. The original array will not be modified

//Splice -- The splice() method changes the contents of an array by removing or replacing existing elements and/or adding new elements in place.
// To access part of an array without modifying it, see slice().

// Access Multi-Demensional Arrays with Indexes -- ne way to think of a multi-dimensional array, is as an array of arrays. When you use brackets to access your array, the first set of brackets refers to the entries in the outer-most (the first level) array,
// and each additional pair of brackets refers to the next level of entries inside.

//For Each Example
//const movies = ["Black panther", "EEAAO", "Black Adam"];
//movies.forEach(( movie, index) => console.log("Element: ", movie, " Index: ", index));

// While Loop -- The following is an example of a While loop that iterates a series of numbers as long as it is less than 7. It is also running an if statement to check if the var a if divisible by 2 with no remainder and printing it with a string “ is even” else “is odd”

