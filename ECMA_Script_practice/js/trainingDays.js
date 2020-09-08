
const name = 'Anhelina';


const getRandEvent = () => {
  const random = Math.floor(Math.random() * 3);
  if (random === 0) {
    return 'Power Cross';
  } else if (random === 1) {
    return 'Body Fit';
  } else if (random === 2) {
    return 'BodyBump';
  }
};

const getTrainingDays = event => {
  "use strict"
  let days;
  if (event === 'Cardio') {
    days = 50;
  } else if (event === 'Dance') {
    days = 100;
  } else if (event === 'Strenth') {
    days = 200;
  }

  return days;
};

const logEvent = (name, event) => {

  console.log(`${name}'s event is: ${event}`);
};

const logTime = (name, days) => {
  console.log(`${name}'s time to train is: ${days} days`);
};

const event = getRandEvent();
const days = getTrainingDays(event);



logEvent(name, event);
logTime(name, days);

const event2 = getRandEvent();
const days2 = getTrainingDays(event2);
const name2 = 'Lida';

logEvent(name2, event2);
logTime(name2, days2);
