
'use strict';


// prompt our user for some input.


// As a user, I would like a personalized welcome message
// so that I feel like I am interacting with the site owner.

// Ask the user their name through a prompt()
let userName= prompt('What is your name');
console.log('user name: ' , userName);


// Display that name back to the user through a
// custom greeting welcoming them to your site.

alert('Hello, ' + userName + '! Let\'s have some fun! Try guessing the answers to these questions about me:');


// Prompt the user a total of exactly five yes or no questions.

// The user input for the answer must accept either y/n or yes/no
// responses while taking into consideration case sensitivity by
// normalizing the user input so that it can be validated
// (hint: look into the .toUpperCase() or .toLowerCase() functions).

let question1 = prompt('First: Pineapple on pizza, yes or no?');
let answer1 = question1.toUpperCase().trim();

// Add console.log() messages within your app to notify the user
// if they are correct.

// console.log (answer1);
// Be sure to let the user know if they answered the question
// correctly by alerting them with a response.
// Before submitting, comment out (don’t delete) your console.log()
// messages and replace them with the alerts() to complete the project.

if(answer1 === 'YES' || answer1 === 'Y'){
  alert ('YES! The only thing better than Hawaiian pizza is eating Hawaiian pizza in Hawaii!');
} else if (answer1 === 'NO' || answer1 ==='N'){
  alert ('I Heart pineapple!');
} else {
  alert ('Please remember enter: yes or no!');
}

let question2 = prompt('Does Eva go camping?');
let answer2 = question2.toUpperCase().trim();

// console.log (answer2);

if(answer2 === 'YES' || answer2 === 'Y'){
  alert ('Do I ever! Campfires, hotdogs, and smores. Yes, please!');
} else if (answer2 === 'NO' || answer2 ==='N'){
  alert ('Lord grant me the serenity to accept the things I cannot change, the courage to change the things I can, and the wisdom to know when to just go camping!');
} else {
  alert ('Please remember enter: yes or no!');
}

let question3 = prompt('Is Eva Canadian?');
let answer3 = question3.toUpperCase().trim();

// console.log (answer3);

if(answer3 === 'N0' || answer3 === 'N'){
  alert ('I am Iowan');
} else if (answer3 === 'YES' || answer3 ==='Y'){
  alert ('I do really like Maple Syrup, but I am not Canadian.');
} else {
  alert ('Please remember enter: yes or no!');
}

let question4 = prompt('Do I like sunsets?');
let answer4 = question4.toUpperCase().trim();

// console.log (answer4);

if(answer4 === 'YES' || answer4 === 'Y'){
  alert ('I am a total sunset girl!');
} else if (answer4 === 'NO' || answer4 ==='N'){
  alert ('Iowa has amazing sunsets!');
} else {
  alert ('Please remember enter: yes or no!');
}

let question5 = prompt('Has Eva ever lived overseas?');
let answer5 = question5.toUpperCase().trim();

// console.log (answer5);

if(answer5 === 'YES' || answer5 === 'Y'){
  alert ('I have lived in both Australia and New Zealand, two amazingly beautiful countries');
} else if (answer5 === 'NO' || answer5 ==='N'){
  alert ('This girl loves to travel!');
} else {
  alert ('Please remember enter: yes or no!');
}

// Display the user’s name back to them in your final
// message to the user.
alert('Thank you for visiting my site, ' + userName + ' !');


// **************END OF CODE**************


// NOTES FROM CLASS:

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



// let isExecuted = confirm("Would you like to learn more about me?");

// console.log(isExecuted); // YES = true, NO = false


// let yes = "Yes";
// let lowercase_yes = yes.toLowerCase();

// console.log(lowercase_yes);

// var no = "No";
// var lowercase_yes = no.toLowerCase();

// console.log(lowercase_no);






