'use strict';

var user = prompt('What\'s your name?');
console.log (user);

var game = prompt (user + ', are you ready to play 5 questions? \'Y\' or \'N\'');
console.log(game);
game = game.toLowerCase();

if (game === 'y' || game === 'yes') {
  alert('Great!');
} else {
  alert('Too bad!');
}

var counter = 0;

var questions = [
  'Do I like true crime? Y or N',
  'Are my sneezes obnoxious? Y or N',
  'Do I hate watching movies and tv? Y or N',
  'Do I prefer Iron Man to Captain America? Y or N',
  'Am I a dog person? Y or N',
  'What number am I thinking of? Clue: Between 1 and 10',
  'I speak two languages, can you guess one of them?'
];

var possibleAnswers = [
  ['yes', 'YES', 'Yes', 'y', 'Y', 'No', 'NO', 'no', 'N', 'n'],
  ['yes', 'YES', 'Yes', 'y', 'Y', 'No', 'NO', 'no', 'N', 'n'],
  ['yes', 'YES', 'Yes', 'y', 'Y', 'No', 'NO', 'no', 'N', 'n'],
  ['yes', 'YES', 'Yes', 'y', 'Y', 'No', 'NO', 'no', 'N', 'n'],
  ['yes', 'YES', 'Yes', 'y', 'Y', 'No', 'NO', 'no', 'N', 'n'],
  ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'],
  ['Spanish', 'spanish', 'SPANISH',
    'English', 'english', 'ENGLISH',
    'French', 'french', 'FRENCH',
    'Italian', 'italian', 'ITALIAN',]
];

var correctAnswers = [
  ['yes', 'YES', 'Yes', 'y', 'Y'],
  ['yes', 'YES', 'Yes', 'y', 'Y'],
  ['No', 'NO', 'no', 'N', 'n'],
  ['yes', 'YES', 'Yes', 'y', 'Y'],
  ['yes', 'YES', 'Yes', 'y', 'Y'],
  ['5'],
  ['Spanish', 'spanish', 'SPANISH',
    'English', 'english', 'ENGLISH']
];

var attempts = [1, 1, 1, 1, 1, 4, 6];

var responses = [];

for (var turnIndex = 0; turnIndex < questions.length; turnIndex++) {
  for (var tryIndex = 0; tryIndex < attempts[turnIndex]; tryIndex++) {
    var response = '';
    while (!possibleAnswers[turnIndex].includes(response)) {
      response = prompt(questions[turnIndex]);
    }
    responses.push(response);
    console.log(response);

    // Check to see if the response is correct
    if (correctAnswers[turnIndex].includes(response)) {
      alert('Correct!');
      counter++;
      break;
    } else if (response === '1') {
      alert('Too low, ' + (attempts[turnIndex] - tryIndex - 1) + ' left.');
    } else if (response === '2') {
      alert('Too low, ' + (attempts[turnIndex] - tryIndex - 1) + ' left.');
    } else if (response === '3') {
      alert('Too low, ' + (attempts[turnIndex] - tryIndex - 1) + ' left.');
    } else if (response === '4') {
      alert('Too low, ' + (attempts[turnIndex] - tryIndex - 1) + ' left.');
    } else if (response === '6') {
      alert('Too high, ' + (attempts[turnIndex] - tryIndex - 1) + ' left.');
    } else if (response === '7') {
      alert('Too high, ' + (attempts[turnIndex] - tryIndex - 1) + ' left.');
    } else if (response === '8') {
      alert('Too high, ' + (attempts[turnIndex] - tryIndex - 1) + ' left.');
    } else if (response === '9') {
      alert('Too high, ' + (attempts[turnIndex] - tryIndex - 1) + ' left.');
    } else if (response === '10') {
      alert('Too high, ' + (attempts[turnIndex] - tryIndex - 1) + ' left.');
      // If they're on their last try:
    } else if (tryIndex === attempts[turnIndex] - 1) {
      alert('Incorrect.');
      // If they have more attempts left:
    } else {
      alert('Incorrect. You have ' + (attempts[turnIndex] - tryIndex - 1) + ' left.');
    }
  }
}

alert(user + ', you got ' + counter + ' out of ' +
    questions.length + ' correct.');

