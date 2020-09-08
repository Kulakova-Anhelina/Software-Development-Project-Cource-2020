// ES5,6,7,(8,9) task before the exam
// Create a JS program, where you just use as many of the first exam features as you
// can = learn them for the exam

// The business value of the app can be 0
// Create a UI if wish, or just play behind the scenes and print to
// console and use debugger to see what happens in the memory

// First adhoc object, later maybe ES6 etc. class syntax

// e.g. class Bill could extend class Cost (with e.g. dueDate and isPaid)

// daily, weekly, monthly, yearly
const costSpan = [{ span: "Daily", days: 1 },
{ span: "Weekly", days: 7 },
{ span: "Monthly", days: 30.45 },
];

const costs = [{ name: "Rent", amount: 270.25, span: costSpan[2] },
{ name: "Food", amount: 7.50, span: costSpan[0] },
];


// Then do whatever reports / analysis or so, with all the costs
//costs.forEach(console.log(costs))
const secretMessage = costSpan.map(span => {
  return span.span[0]
})
console.log(secretMessage.join(''));

const secretNumber = costSpan.map(span => {
  return span.days / 10
})
console.log(secretNumber);

const shortWords = costSpan.filter(word => {
  let w = word.span
  console.log(w.length)
  return w.length > 5;
});

// checking with some() whether the array contains words less than 6
console.log(shortWords.some((word) => {
  return word.length < 6;
}));

console.log(shortWords);
console.log(shortWords.every(word => word.length < 6) )
// cheking the findIndex method

const animals = ['hippo', 'tiger', 'lion', 'seal', 'cheetah', 'monkey', 'salamander', 'elephant'];
const foundAnimal = animals.findIndex(animal => {
  return animal === 'elephant'
})

const startsWithS = animals.findIndex(animal => {
  return animal.charAt(0) === 's'
})

// checking the reduce method
const newNumbers = [1, 3, 5, 7];
const newSum =  newNumbers.reduce((accumulator, currentValue) =>{
  console.log('The value of accumulator: ', accumulator);
console.log('The value of currentValue: ', currentValue);
return accumulator + currentValue

},  10)
console.log(newSum);




