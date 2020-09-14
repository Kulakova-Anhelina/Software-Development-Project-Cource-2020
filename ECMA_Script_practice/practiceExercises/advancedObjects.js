const robot = {
  model: '1E78V2',
  energyLevel: 100,
  provideInfo() {
    return `I am ${this.model} and my current energy level is ${this.energyLevel}.  `
  }
};
console.log(robot.provideInfo())

const robot1 = {
  energyLevel: 100,
  checkEnergy() {
    console.log(`Energy is currently at ${this.energyLevel}%.`)
  }

}

robot1.checkEnergy();

const robot2 = {
  _energyLevel: 'high',
   recharge(){
     this._energyLevel += 30;
     console.log(`Recharged! Energy is currently at ${this._energyLevel}%.`)
   }
 };
 robot2.recharge()
 //Getters are methods that get and return the internal properties of an object
 const robot3 = {
  _model: '1E78V2',
  _energyLevel: 100,
  get energyLevel(){
    if(typeof this._energyLevel === 'number') {
      return 'My current energy level is ' + this._energyLevel
    } else {
      return "System malfunction: cannot retrieve energy level"
    }
  }
};

console.log(robot.energyLevel);

//setter methods which reassign values of existing properties within an object
const robot = {
  _model: '1E78V2',
  _energyLevel: 100,
  _numOfSensors: 15,
 set numOfSensors(num){
    if(typeof num === 'number' && num >= 0){
      return this._numOfSensors=num;
    } else {
      return 'Pass in a number that is greater than or equal to 0'
    }
  },

};
robot.numOfSensors=100
console.log(robot.numOfSensors)
//Factory Functions
//A factory function is a function that returns an object
//and can be reused to make multiple object instances.
const robotFactory = (model, mobile) => {
  return {
    model: model,
    mobile: mobile,
    beep() {
      console.log('Beep Boop');
    }
  }
};
const tinCan = robotFactory('P-500', true)
tinCan.beep()
//destructuring
function robotFactory(model, mobile){
  return {
    model,
    mobile,
    beep() {
      console.log('Beep Boop');
    }
  }
}

// To check that the property value shorthand technique worked:
const newRobot = robotFactory('P-501', false)
console.log(newRobot.model)
console.log(newRobot.mobile)
//Destructured Assignment
//In destructured assignment we create a variable with the
// name of an object’s key that is wrapped in curly braces { }
const robot = {
  model: '1E78V2',
  energyLevel: 100,
  functionality: {
    beep() {
      console.log('Beep Boop');
    },
    fireLaser() {
      console.log('Pew Pew');
    },
  }
};
const {functionality}=robot
functionality.beep()
//methods
const robot = {
	model: 'SAL-1000',
  mobile: true,
  sentient: false,
  armor: 'Steel-plated',
  energyLevel: 75
};
const robotKeys = Object.keys(robot);


console.log(robotKeys);
const robotEntries = Object.entries(robot)

console.log(robotEntries);

const target = {laserBlaster: true, voiceRecognition: true}
const source = { laserBlaster: true, voiceRecognition: true}
const newRobot = Object.assign(target, source);

console.log(newRobot);
