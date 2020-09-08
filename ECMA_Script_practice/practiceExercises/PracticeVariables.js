var  favoriteFood = 'pizza'
var numOfSlices = 8
console.log(favoriteFood)
console.log(numOfSlices)

let meal = 'salmon';
console.log(meal); // Output: salmon
meal = 'Burrito';
console.log(meal); // Output: Burrito

/*declare a variable without assigning the variable a value.
In such a case, the variable will be automatically initialized with a value of undefined*/
let price;
console.log(price); // Output: undefined
price = 350;
console.log(price); // Output: 350

const entree = 'grilled flank steak ';
console.log(entree);
//entree = 'Tacos' ! error , const cant be changed



let x = 20;
x -= 5; // Can be written as x = x - 5
console.log(x); // Output: 15
let levelUp = 10;
let powerLevel = 9001;
let multiplyMe = 32;
let quarterMe = 1152;

// Use the mathematical assignments in the space below:
levelUp +=5
powerLevel -=100
multiplyMe *=11
quarterMe /=4

// These console.log() statements below will help you check the values of the variables.
// You do not need to edit these statements.
console.log('The value of levelUp:', levelUp);
console.log('The value of powerLevel:', powerLevel);
console.log('The value of multiplyMe:', multiplyMe);
console.log('The value of quarterMe:', quarterMe);

// increment / decrement operator
let a = 10;
a++;
console.log(a); // Output: 11

let b = 20;
b--;
console.log(b); // Output: 19

//String Interpolation
const myPet = 'Musik';
console.log(`I own a pet ${myPet}.`);

const unknown1 = 'tatata';
console.log(typeof unknown1); // Output: string

const unknown2 = 67;
console.log(typeof unknown2); // Output: number

const unknown3 = false;
console.log(typeof unknown3); // Output: boolean