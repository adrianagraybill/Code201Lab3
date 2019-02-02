'use strict';

var name = prompt('What\'s your name?');
console.log(name);

var counter = 0;

var game = prompt(name + ', are you ready to play 5 questions? \'Y\' or \'N\'');
console.log(game);
game = game.toLowerCase();

if (game === 'y' || game === 'yes') {
  console.log('Correct answers: ' + counter);
} else {
  alert('Too bad!');
}

var q1 = prompt('Do I like true crime? \'Y\' or \'N\'') .toUpperCase();
console.log(q1);

if (q1 === 'Y' || q1 === 'YES') {
  alert('Correct!');
  counter++;
  console.log('Correct answers: ' + counter);
} else {
  alert('You\'re wrong!');
}

var q2 = prompt('Are my sneezes obnoxious? \'Y\' or \'N\'') .toUpperCase();
console.log(q2);

if (q2 === 'Y' || q2 === 'YES') {
  alert('I\'m very sorry, I wish I could make them quiet..');
  counter++;
  console.log('Correct answers: ' + counter);
} else {
  alert('You angel, stop lying..');
}

var q3 = prompt('Do I hate watching movies and tv? \'Y\' or \'N\'') .toUpperCase();
console.log(q3);

if (q3 === 'Y' || q3 === 'YES') {
  alert('HA! Nope!');
} else {
  alert('I could watch movies and tv everyday for the rest of my life.');
  counter++;
  console.log('Correct answers: ' + counter);
}

var q4 = prompt('Do I prefer Iron Man to Captain America? \'Y\' or \'N\'') .toUpperCase();
console.log(q4);

if (q4 === 'Y' || q4 === 'YES') {
  alert('Absolutely.');
  counter++;
  console.log('Correct answers: ' + counter);
} else {
  alert('I\'m offended. Team Stark all day.');
}

var q5 = prompt('Am I a dog person? \'Y\' or \'N\'') .toUpperCase();
console.log(q5);

if (q5 === 'Y' || q5 === 'YES') {
  alert('I LOVE ALL THE DOGGOS!');
  counter++;
  console.log('Correct answers: ' + counter);
} else {
  alert('You don\'t know me at all..');
}

alert('Score ' + counter + ' out of 5!');
