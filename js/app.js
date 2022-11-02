
'use strict';


// prompt our user for some input.


// As a user, I would like a personalized welcome message
// so that I feel like I am interacting with the site owner.

// Ask the user their name through a prompt()

// Display that name back to the user through a
// custom greeting welcoming them to your site.


let userName= prompt('What is your name');
console.log('user name: ' , userName);

alert('Hello! ' + userName + 'let\'s have some fun! Try guessing the answers to these questions:');

let questionOne = prompt('Do I like pineapple on my pizza?');
let answerOne = questionOne.toUpperCase().trim();

console.log (answerOne);

if(answerOne === 'YES' || answerOne === 'Y'){
  alert ('The only thing better than Hawaiian pizza is eating Hawaiian pizza in Hawaii!');
} else if (answerOne === 'NO' || answerOne ==='N'){
  alert ('I Heart Hawaiian!');
} else {
  alert ('Please remember enter: yes or no!');
}

let questionTwo = prompt('Do I like camping?');
let answerTwo = questionTwo.toUpperCase().trim();

console.log (answerTwo);

if(answerTwo === 'YES' || answerTwo === 'Y'){
  alert ('Do I ever! Campfires, hotdogs, and smores. Yes, please!');
} else if (answerTwo === 'NO' || answerTwo ==='N'){
  alert ('Lord grant me the serenity to accept the things I cannot change, and the wisdom to know when to go camping!');
} else {
  alert ('Please remember enter: yes or no!');
}

let questionThree = prompt('Do I like pottery?');
let answerThree = questionThree.toUpperCase().trim();

console.log (answerThree);

if(answerThree === 'YES' || answerThree === 'Y'){
  alert ('One day I hope to have my entire dishware set be handmade');
} else if (answerThree === 'NO' || answerThree ==='N'){
  alert ('Throwing clay is great stress relief!');
} else {
  alert ('Please remember enter: yes or no!');
}

let questionFour = prompt('Do I like sunsets?');
let answerFour = questionFour.toUpperCase().trim();

console.log (answerFour);

if(answerFour === 'YES' || answerFour === 'Y'){
  alert ('I am a total sunset girl!');
} else if (answerFour === 'NO' || answerFour ==='N'){
  alert ('Iowa has amazing sunsets!');
} else {
  alert ('Please remember enter: yes or no!');
}

let questionFive = prompt('Have I ever lived overseas?');
let answerFive = questionFive.toUpperCase().trim();

console.log (answerFive);

if(answerFive === 'YES' || answerFive === 'Y'){
  alert ('I have lived in both Australia and New Zealand, two amazingly beautiful countries');
} else if (answerFive === 'NO' || answerFive ==='N'){
  alert ('This girl loves to travel!');
} else {
  alert ('Please remember enter: yes or no!');
}


alert('Thank you for visiting my site, ' + userName + ' !');
// //convert to lowerCase

// userName.toLowerCase(); or the userName.toUpperCase();
// let lowerCaseName = userName.toLowerCase

// console.log('Name Lower case:', lowerCaseName );

// if (lowerCaseName === 'bob' || lowerCaseName === 'larry'){
//     alert(Welcome back to the site)
// } else {
//     alert ('Welcome new user to my page!')
// }




// let myBooleenValueTrue = true;
// let myBooleenValueFalse = false;
// let thirdBooleenValueTrue = true;

// if (myBooleenValueTrue && thirdBooleenValueTrue){
//     alert();
//     console.log ();
// }  else if(myBooleenValueTrue || myBooleenValueFalse){
//     alert ();
// }








// validate the input using some conditional logic




// Prompt the user a total of exactly five yes or no questions.

// The user input for the answer must accept either y/n or yes/no
// responses while taking into consideration case sensitivity by
// normalizing the user input so that it can be validated
// (hint: look into the .toUpperCase() or .toLowerCase() functions).

// Be sure to let the user know if they answered the question
// correctly by alerting them with a response.

// Add console.log() messages within your app to notify the user
// if they are correct. Before submitting,
// comment out (don’t delete) your console.log()
// messages and replace them with the alerts() to complete the project.


// let isExecuted = confirm("Would you like to learn more about me?");

// console.log(isExecuted); // YES = true, NO = false



// Did I live in New Zealand?
// Do I have any children?
// Do I like pineapple on my pizza?
// The only thing better than eating Hawaiian pizza is eating it in Hawaii.
// Are you ready for more questions?




// let yes = "Yes";
// let lowercase_yes = yes.toLowerCase();

// console.log(lowercase_yes);

// var no = "No";
// var lowercase_yes = no.toLowerCase();

// console.log(lowercase_no);



// Display the user’s name back to them in your final
// message to the user.


