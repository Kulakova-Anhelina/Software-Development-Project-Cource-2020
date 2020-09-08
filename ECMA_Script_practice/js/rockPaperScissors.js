const getUserChoice =userInput=>{
  userInput.userInput.toLowerCase().trim();
  if(userInput === 'rock' || userInput === 'scissors' || userInput === 'paper'){
    return userInput
  }else {
    console.log('error, please type: rock, paper, scissors');
  }
}

const getRobotChoise = ()=>{
  const randomNumber=Math.floor(Math.random() *3);
  switch (randomNumber){
    case 0:
    return 'rock';
    case 1:
      return'paper';
      case 2:
        'scissors'
  }
}

const winner =(userChoice, robotChoise )=>{
  if(userChoice === robotChoise){
    return 'This game is a tie'
  }

  if(userChoice ==='rock'){
    if(robotChoise === 'paper'){
      return "Sorry robot won"
    }else{
      return "Congrats "
    }
  }


  if(userChoice ==='paper'){
    if(robotChoise === 'scissors'){
      return "Sorry robot won"
    }else{
      return "Congrats "
    }
  }

  if(userChoice ==='sscissors'){
    if(robotChoise === 'rock'){
      return "Sorry robot won"
    }else{
      return "Congrats "
    }
  }
}

console.log(winner('rock', 'scissors'))
console.log(winner('paper', 'scissors'))
console.log(winner('   rock    ', 'rock'))
console.log(winner('rock', 'scissors'))