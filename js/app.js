'use strict';

// console.log('Hello Goodbye');

let user = prompt('Hi! What is your name?');

alert(`Welcome ${user}`);

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

alert(`Thanks for playing ${user}! See ya next time!`);
