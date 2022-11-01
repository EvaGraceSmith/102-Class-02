

// As a user, I would like a personalized welcome message 
// so that I feel like I am interacting with the site owner.

// Ask the user their name through a prompt()

// Display that name back to the user through a 
// custom greeting welcoming them to your site.


let userName= prompt("What is your name");
console.log("user name: " , userName);
alert('Hello! ' + userName);



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


let isExecuted = confirm("Are you excited to learn about me?");

console.log(isExecuted); // YES = true, NO = false


var yes = "Yes";
var lowercase_yes = yes.toLowerCase();

console.log(lowercase_yes);

var no = "No";
var lowercase_yes = no.toLowerCase();

console.log(lowercase_no);

// Display the user’s name back to them in your final 
// message to the user.

alert('Thank you for visiting my site, ' + userName + ' !');