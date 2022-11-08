
'use strict';
console.log ('hello from the js file');



let userName= prompt('What is your name');
console.log('user name: ' , userName);
alert('Hello, ' + userName + '! Let\'s have some fun! Try guessing the answers to these questions about me. Each correct answer earns you a point!');


let userPoints = 0;

function question1(){
  let question1 = prompt('First: Pineapple on pizza, yes or no?');
  let answer1 = question1.toUpperCase().trim();
  // console.log (answer1);
  if(answer1 === 'YES' || answer1 === 'Y'){
    alert ('YES! The only thing better than Hawaiian pizza is eating Hawaiian pizza in Hawaii!');
    userPoints++;
  } else if (answer1 === 'NO' || answer1 ==='N'){
    alert ('I Heart pineapple!');
  } else {
    alert ('Please remember enter: yes or no!');
  }
  console.log('did we get a point? ', userPoints);
}
question1();



function question2(){
  let question2 = prompt('Does Eva go camping?');
  let answer2 = question2.toUpperCase().trim();

  // console.log (answer2);

  if(answer2 === 'YES' || answer2 === 'Y'){
    alert ('Do I ever! Campfires, hotdogs, and smores. Yes, please!');
    userPoints++;
  } else if (answer2 === 'NO' || answer2 ==='N'){
    alert ('Lord grant me the serenity to accept the things I cannot change, the courage to change the things I can, and the wisdom to know when to just go camping!');
  } else {
    alert ('Please remember enter: yes or no!');
  }
  console.log('did we get a point?', userPoints);
}




function question3(){

  let question3 = prompt('Is Eva Canadian?');
  let answer3 = question3.toUpperCase().trim();

  // console.log (answer3);

  if(answer3 === 'NO' || answer3 === 'N'){
    alert ('I am Iowan');
    userPoints++;
  } else if (answer3 === 'YES' || answer3 ==='Y'){
    alert ('I do really like Maple Syrup, but I am not Canadian.');
  } else {
    alert ('Please remember enter: yes or no!');
  }

  console.log('did we get a point?', userPoints);
}


function question4(){
  let question4 = prompt('Do I like sunsets?');
  let answer4 = question4.toUpperCase().trim();

  // console.log (answer4);

  if(answer4 === 'YES' || answer4 === 'Y'){
    alert ('I am a total sunset girl!');
    userPoints++;
  } else if (answer4 === 'NO' || answer4 ==='N'){
    alert ('Iowa has amazing sunsets!');
  } else {
    alert ('Please remember enter: yes or no!');
  }
  console.log('did we get a point?', userPoints);
}




function question5(){

  let question5 = prompt('Has Eva ever lived overseas?');
  let answer5 = question5.toUpperCase().trim();

  // console.log (answer5);

  if(answer5 === 'YES' || answer5 === 'Y'){
    alert ('I have lived in both Australia and New Zealand, two amazingly beautiful countries');
    userPoints++;
  } else if (answer5 === 'NO' || answer5 ==='N'){
    alert ('This girl loves to travel!');
  } else {
    alert ('Please remember enter: yes or no!');
  }
  console.log('did we get a point?', userPoints);
}




function question6(){
  let answer6;
  let loopcounter=0;
  while(answer6 !== '4' && loopcounter<4){
    loopcounter ++;
    answer6 = prompt('Guess a number between 1-10');
    if (answer6 >'4'){
      alert('That\'s too high! Try again!');
    } else if (answer6 <'4'){
      alert ('That\'s too low. Try again!');
    } else
    { alert('You are correct, the number is 4!');
      userPoints++;
    }
    if (loopcounter===4)
    {alert('I\'m sorry, the correct answer was 4!');
    } }
  console.log(answer6);
  console.log('did we get a point?', userPoints);
}



function question7(){
  let fruit = ['grapes', 'bananas', 'strawberries', 'blueberries', 'apples'];
  console.log(fruit.length);
  let attempts = 0;
  let correctAnswer = false;

  while (attempts !==6 && correctAnswer === false){
    let userAnswer7 = prompt('Can you guess some of my favorite fruits to pack for lunch?');
    let userAnswerTrimmedToLower = userAnswer7.toLowerCase().trim();
    if (fruit.indexOf(userAnswerTrimmedToLower) >= 0) {
      userPoints++;
      console.log('userAnswer', userAnswer7);
      // I don't know what correct Answer++ is doing
      correctAnswer=true;
      alert('Yes! ' + userAnswer7 + ' is one of my favorite fruits! I love grapes, bananas, strawberries, blueberries and apples.');
    } else {
      alert('That is a great fruit, but not one of my favorites!');
    }
    // I don't know what attempts++ is doing Answer: adding 1 til gets to 6
    attempts++;
  }

  console.log('did we get a point?', userPoints);
}

question2();
question3();
question4();
question5();
question6();
question7();



alert('Thank you for visiting my site, ' + userName + '! ' + 'You earned ' + userPoints + ' points out of 7! Congratulations!');





