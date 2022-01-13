'use strict';

// console.log('Hello Goodbye');

let user = prompt('Hi! What is your name?');
let counter = 0;

alert(`Welcome ${user}, please answer the following questions with a yes/y or no/n answer`);

let oneAnswer = prompt('Is this a Code Fellow?').toLowerCase();

if(oneAnswer === 'yes' || oneAnswer === 'y') {
  alert('yes');
} else if(oneAnswer === 'no' || oneAnswer === 'n') {
  alert('no');
} else {
  alert('Please respond with a yes or no');
}

let twoAnswer = prompt('Do you like sweets?').toLowerCase();

if(twoAnswer === 'yes' || twoAnswer === 'y') {
  alert('yes');
} else if(twoAnswer === 'no' || twoAnswer === 'n') {
  alert('no');
} else {
  alert('Me neither');
}


let thirdAnswer = prompt('Is it snowing?').toLowerCase();

if(thirdAnswer === 'yes' || thirdAnswer === 'y') {
  alert('yes');
} else if(thirdAnswer === 'no' || thirdAnswer === 'n') {
  alert('no');
} else {
  alert('Open the window and stick your head out');
}


let fourAnswer = prompt('Do you feel like your in Groundhogs Day?').toLowerCase();

if(fourAnswer === 'yes' || fourAnswer === 'y') {
  alert('yes');
} else if(fourAnswer === 'no' || fourAnswer === 'n') {
  alert('no');
} else {
  alert('Check out the movie, it is worth a once over.');
}

let fiveAnswer = prompt('Are you staring at a monitor?').toLowerCase();

if(fiveAnswer === 'yes' || fiveAnswer === 'y') {
  alert('yes');
} else if(fiveAnswer === 'no' || fiveAnswer === 'n') {
  alert('no');
} else {
  alert('Probably time to get some glasses.');
}

alert(`Thanks for playing ${user}! I am a Code Fellow that does not like sweets. I live in a part in California that is not Snowing. This quarantine sometimes makes me feel like I'm in groundhogs day! But that's ok, because I get to learn cool things by interacting through my monitor!`);

let clueGuesses = 4;
let myNumber = 10;
//let foundNumber = false;
//let userNumber = prompt('What number am I thinking of?');

while(clueGuesses !== 0){
  let userNumber = prompt('What number am I thinking of?');
  if(userNumber == myNumber){
    alert('Congrats! You guessed the number!');
    break;
  } else if (userNumber < myNumber){
    alert('Your number is to low. Please try again.');
    clueGuesses--;
  } else if(userNumber > myNumber){
    alert('Your number is to high. Please try again.');
    clueGuesses--;
  } if(clueGuesses === 0){
    alert('The number I was thinking is 10.');
    break;
  }
}


let lastMovie = ['Moana', 'Cabin in the Woods', 'Encanto', 'Dont look up'];
let movieGuesses = 6;
let rightAnswer = false;

for(let j = 0; j < movieGuesses; j++){
  let userMovie = prompt('What\'s the last movie I watched?').toLowerCase();
  for(let i = 0; i < lastMovie.length; i++){
    if(userMovie == lastMovie[i]){
      rightAnswer = true;
      break;
    }
  }
  if (rightAnswer){
    console.log(`You guessed right! ${userMovie} was one of the last movies I have watched in 3 months!`);
    alert(`You guessed right! ${userMovie} was one of the last movies I have watched in 3 months!`);
    counter++
    break;
  } else {
    alert('Nope, haven\'t seen it.');
  }
}
if(rightAnswer == false){
  alert(`Correct answers were: ${lastMovie[0]}, ${lastMovie[1]}, ${lastMovie[2]}, ${lastMovie[3]}.`);
}

alert(`Thanks ${user}! You have answered ${counter} correctly.`);
