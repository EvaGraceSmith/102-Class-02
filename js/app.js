
'use strict';



let userName= prompt('What is your name');
console.log('user name: ' , userName);


alert('Hello, ' + userName + '! Let\'s have some fun! Try guessing the answers to these questions about me:');


let question1 = prompt('First: Pineapple on pizza, yes or no?');
let answer1 = question1.toUpperCase().trim();


// console.log (answer1);

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
// **********Lab 3 Assignment************
// As a user, I would like to be guided to an answer 
// through a series of feedback responses so that I can learn more 
// about the site owner.
// // Add a 6th question to the guessing game that takes in a numeric
//  input by prompting the user to guess a number.


let answer6;
while(answer6 !== '4'){
  answer6 = prompt('Guess a number between 1-10');
  if (answer6 >'4'){
    // // Indicates through an alert if the guess is “too high” or “too low”.
    alert('That\'s too high! Try again!');
  } else if (answer6 <'4'){
    alert ('That\'s too low. Try again!');
  } else
  { alert('You are correct, 4 is the number!');
  }

}


// // It should give the user exactly four opportunities to get the 
// correct answer.

// // After all attempts have been exhausted, tell the user the 
// correct answer. Consider using a loop of some sort.


// // As a user, I would like to guess the answer to a question that 
// could have many possibilities so that I can have fun with with a 
// guessing game.
// // Add a 7th question that has multiple possible correct answers 
// that are stored in an array.

// // Give the user 6 attempts to guess the correct answer.

// // The guesses will end once the user guesses a correct answer or 
// they run out of attempts.

// // Display all the possible correct answers to the user.

// // Consider using a loop of some sort for this question.

// // As a user, I would like to know my final score so that I can 
// know how well I did.

// // Keep track of the total number of correct answers. At the end 
// tell them how many they got correct out of the 7 questions asked.

// // In addition to the user stories stated above, continue to use 
// console.logs throughout the code to track the questions that are 
// being asked to the user,

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






