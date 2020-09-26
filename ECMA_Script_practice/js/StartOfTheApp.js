// ES5,6,7,(8,9) task before the exam
// Create a JS program, where you just use as many of the first exam features as you
// can = learn them for the exam

// The business value of the app can be 0
// Create a UI if wish, or just play behind the scenes and print to
// console and use debugger to see what happens in the memory

// First adhoc object, later maybe ES6 etc. class syntax

// e.g. class Bill could extend class Cost (with e.g. dueDate and isPaid)

// daily, weekly, monthly, yearly
const costSpan =
  [{ span: "Daily", days: 1 },
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
console.log(shortWords.every(word => word.length < 6))
// cheking the findIndex method

const dinner = ['salmon', 'beef', 'spagetti', 'pork'];
const foundAnimal = animals.findIndex(fish => {
  return dinner === 'fish'
})

const startsWithS = dinner.findIndex(animal => {
  return animal.charAt(0) === 's'
})

// checking the reduce method
const newNumbers = [1, 3, 5, 7];
const newSum = newNumbers.reduce((accumulator, currentValue) => {
  console.log('The value of accumulator: ', accumulator);
  console.log('The value of currentValue: ', currentValue);
  return accumulator + currentValue

}, 10)
console.log(newSum);

// object destructoring
const order = {
  drink: 'Juice',
  numberOfGuests: 2,
  mainCourse: [
    "pasta carbora", "salmon"
  ],
  antipasta: "cheese",
  cost: 100

}

function bill({ numberOfGuests, cost }) {
  return `Number of guest: ${numberOfGuests},  price : ${cost}`
}

console.log(bill(order))

// classes
class Order {
  constructor(mainCourse, dessert, appetizer, drinks) {
    this.mainCourse = mainCourse;
    this.dessert = dessert;
    this.appetizer = appetizer;
    this.drinks = drinks;
  }
  myOrder() {
    console.log(`${this.mainCourse}, ${dessert}, ${this.appetizer}, ${this.drinks}`)
  }
}

let firstOrder = new Order("salmon with patato", "tiramisu", "cheese plate", "vine")
console.log(firstOrder)
console.log(firstOrder.myOrder)
class Bill extends Order {

  constructor() {
    super("beef", "brouni", "meat plate", "vine")
  }

}

let myBill = Bill()


// getters and setters
let dinner = {
  _listDinner: [],
  _listCost: [],
  set addMeal(name) {
    this._listDinner.push(name)
  },
  get listDinner() {
    return this._listDinner.join(", ")
  },
  set addPrice(cost) {
    this._listCost.push(cost)
  }
,
  get listCost(){
    return this._listCost.join(", ")
  }
}

dinner.addMeal = "eggs + cabbage";
dinner.addPrice = 30;
console.log(dinner._listCost)
console.log(dinner._listDinner)

let customer = {
  name: "Alan",
  orders: ["salmon", "salad", "tea"],
  printPrefference: function () {
    let _this = this;
    this.hobbies.forEach(function (hobby) {
      let string =`${_this.first} likes to order ${orders}`;
      console.log(string)
    })
  }
}

customer.printPrefference()