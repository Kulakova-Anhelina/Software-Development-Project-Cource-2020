const menu = {
  _courses: {
    appetizers: [],
    mains: [],
    desserts: []
  },

  get appetizers() {
    return this._courses.appetizers
  },
  get mains() {
    return this._courses.mains
  },
  get desserts() {
    return this._courses.desserts
  },
  set appetizers( appetizers){
    this._courses.appetizers=appetizers
  },
  set mains( mains){
    this._courses.mains=mains
  },
  set deserts( deserts){
    this._courses.deserts=deserts
  },
  get coursers(){
    return{
      appetizers: this.appetizers,
      main: this.mains,
      desserts: this.desserts
    }
  },
  addDishToCourse(courseName,dishName ,dishPrice){
    const dish ={
      name: dishName,
      price: dishPrice
    }
    return this._courses[courseName].push(dish)
  },
  getRandomDishFromCourse(courseName){
    const dishes = this._courses[courseName]
    const randomIndex= Math.floor(Math.random() * dishes.length)
    return dishes[randomIndex]
  },
  generateRandomMeal(){
    const appetizer = this.getRandomDishFromCourse('appetizers')
    const main = this.getRandomDishFromCourse('mains')
    const dessert = this.getRandomDishFromCourse('desserts')
    const totalPrize=appetizer.price + main.price + this.desserts.price;
    return `Your meal is ${appetizer.name}, ${dessert.name}, and  ${main.name}, and the total prize is ${totalPrize}`;
  }
};
menu.addDishToCourse('appetizers', 'salad', 20)
menu.addDishToCourse('appetizers', 'wings', 25)
menu.addDishToCourse('appetizers', 'fries', 60)

menu.addDishToCourse('mains', 'samon', 20)
menu.addDishToCourse('mains', 'pork', 25)
menu.addDishToCourse('mains', 'beef', 60)

menu.addDishToCourse('desserts', 'ice-cream', 20)
menu.addDishToCourse('desserts', 'cheesecake', 25)
menu.addDishToCourse('desserts', 'napoleop', 60)
const meal = menu.generateRandomMeal()
console.log(meal)