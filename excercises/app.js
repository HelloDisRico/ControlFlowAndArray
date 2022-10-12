console.log("hello world")
//Solution 1
let num = -10

if (num > 0){
    console.log("positive")
  }  else if (num < 0) {
    console.log("negative")
 } else{
    console.log("not negative or positive");
 }
// Solution 2
const  allowedAge = 19
if(allowedAge>=18){
    console.log("access granted")
}else(allowedAge<18)
{console.log("no")}

//Nested If/Else Excercise
var num2 = 200
if(num2>=100){
    console.log("positive and greater")}
    else if(num2<=100)
{console.log("positive but less")}
else(num2<=0)
{console.log("negative")
}

var Grade=90;
    if(Grade>=90)
    console.log("Grade A");
    if(Grade>=80 && Grade<90)
    console.log("Grade B");
    if(Grade>=70 && Grade<80)
    console.log("Grade C");
    if(Grade>=55 && Grade<70)
    console.log("Grade D");
    if(Grade<55)
    console.log("Grade F");
