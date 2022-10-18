
/*
class Vehicle {
    //constructor
    constructor(vin, make,model) { // new object will be returned by default
        this.vin = vin;
        this.make = make;
        this.model = model;
    }
}

const plane = new Vehicle("guest102","Bowing")
const car = new Vehicle('banna','car','banana')


const adventurer ={
    name: "Kevin",
    hitpoints: 10,
    belongings:["sword","potion","windbreaker spell"],
    companion: {
        name: "Doug",
        type: "penguin",
      companion: {
            name: "Jill",
            type: "penguin",
            belongings:["banana","GEICO","Health Insurance"]
        }

    }
}

// console.log(adventurer)
 // for(let i = 0; i < adventurer.belongings.length; i++){
    // console.log(adventurer.belongings[i]);
// }
//console.log(adventurer.companion);
//console.log(adventurer.companion.companion.name);
//console.log(adventurer.companion.companion.type);

const movies = [
{title: "Interstellar"},
{title: "Fantastic Mr.Fox"},
{title: "Nothingness"}
];

console.log(movies) //my array of objects
console.log(movies[0]) // First object in the array
console.log(movies[0].title)

for(let i = 0; i < movies.length; i++){
    console.log(movies[i].title);
}


const foo ={
    someArray:[1,2,3],
    someObject: {
        someProp: 'hey Johnny,whats up',
    },
    someMethod: () =>{
        console.log("inside of method")
    }
}
console.log(foo.someArray[0]);
console.log(foo.someObject.someProp);
console.log(foo.someMethod());


const foo = [
[1,2,3,4],//0
[5,6,7,8],//1
[9,10,11,12]//2
]

console.log(foo[1][2])

const foo = [
    1,
    "hi",
    ()=>{
        console.log('fun');
    }
];

foo[2]();

const player = {
	  name: 'Josh the great',
	  health: 1000,
	  power: 1000,
	  stamina: 1000
	}

	const bigBadBoss = {
	  name: 'Magnardo the Merciless',
	  health: 1000000000000000000,
	  power: 10000000000000000,
	  stamina: Infinity
	}
    const createEnemy = (nameIs, healthIs, powerIs, staminaIs) => {
  const newEnemy = {
    name: nameIs,
    health: healthIs,
    power: powerIs,
    stamina: staminaIs
  }
  return newEnemy
}
const createPlayer = (nameIs, healthIs, powerIs, staminaIs) => {
  const newPlayer = {
    name: nameIs,
    health: healthIs,
    power: powerIs,
    stamina: staminaIs
  }
  return newPlayer
}
*/

class Character {
    //constructor
    constructor(name, age, eyes,hair, lovesPenguin = true,) {
        this.legs = 2;
        this.arms = 2;
        this.eyes = 'hazel' ;
        this.hair = 'gray'
        this.name = name;
        this.age = age;
        this.eyes = eyes;
        this.hair = hair;
        this.lovesPenguin = lovesPenguin;
    }
    greet(otherCharacter) {
        console.log('hi' + otherCharacter + "!");
    }
    smite() {
        console.log('I smite thee you vile biaaaaaaaat**')
    }
}
const p1 = new Character("Lucio", 24,"brown","brown",true);
const enemy = new Character();

console.log(p1.greet("bob"));
console.log(p1.smite());

console.log(enemy.greet('dave'));
console.log(p1); 
const me = new Character();
console.log(me);