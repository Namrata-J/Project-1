 const chalk=require('chalk');

var readlinesync=require('readline-sync');
 var userName=readlinesync.question(chalk.cyan("Hello there!May i know your name!?"));
 
   console.log(chalk.yellowBright("Hy",userName.toUpperCase()),"!",chalk.cyan("We warmly welcome you to this quiz app!\n"));
   console.log(chalk.cyan("let's see what's this quiz is about.\n","So this app is about how well do you know Namrata Jain.\n\n","Are you interested in givin' it a try!?"));

  
   var userChoice=readlinesync.question("Enter y/n.");

   if(userChoice.toLowerCase()==='y')
   {
     console.log(chalk.cyan("\n\nLet's jump straight into it!:-)"));
     console.log(chalk.yellowBright("-------------------------------------------------------------------------\n"));

console.log(chalk.cyan("Before catching onto this game,let's have a look on few rules:\n"));

console.log("1)There will be five questions.\n","2)To each question there will be four options.\n","3)enter:\n-'A' for option1\n-'B' for option2\n-'C' for option3\n-'D' for option4.\n","4)Press 's' at any point to skip the question.\n","5)Besides,there will be a bonus question at the end of the game.\n",chalk.cyan("\nlet's move ahead into the game!\n"),chalk.yellowBright("\n      Wishing you luck!\n\n"));

console.log(chalk.yellowBright("-------------------------------------------------------------------------\n"));

var array=[
    question1={
    question:"How much % did Namrata score in class 12th?",
    option1:"81%",
    option2:"90%",
    option3:"86%",
    option4:"85%",
    answer:"C"
  },
   question2={
    question:"Which bachelor degree is she currently pursuing?",
    option1:"BTech",
    option2:"BCA",
    option3:"BA",
    option4:"BFA",
    answer:"B"
  },
   question3={
    question:"What's her birth year?",
    option1:"1999",
    option2:"2000",
    option3:"2001",
    option4:"2002",
    answer:"C"
  },
   question4={
    question:"What's her birth month?",
    option1:"january",
    option2:"june",
    option3:"july",
    option4:"november",
    answer:"C"
  },
   question5={
    question:"How many siblings she have?",
    option1:"two",
    option2:"one",
    option3:"three",
    option4:"four",
    answer:"A"
  },
  question6={
    question:"What's her hobby?(Type the answer manually.)",
    answer:"painting"
  }
];
 function valid(userAnswer){
   if(userAnswer.toLowerCase()==='s'){
    var permission=readlinesync.question(chalk.cyan("you entered's'.R u sure u wanna skip it?Enter y/n."));
    if(permission.toLowerCase()==='y'){
    console.log(chalk.cyan("Current score:"),chalk.yellowBright(score),"\n");
    }else{
      var userAnswer=readlinesync.question("Enter your answer again:");
       valid(userAnswer);
    }
   }else{
   if(userAnswer.toUpperCase()==='A'||userAnswer.toUpperCase()==='B'||userAnswer.toUpperCase()==='C'||userAnswer.toUpperCase()==='D'){
     if(userAnswer.toUpperCase()===array[i].answer)
  {
    console.log(chalk.green("Hurray!You guessed it right!:-)"));
    score=score+1;
    console.log(chalk.cyan("keep going,your current score is:"),chalk.yellowBright(score),"\n");
  }else{
    console.log(chalk.red("Oops!You guessed it wrong!:-("));
    console.log(chalk.yellowBright("Correct answer is:"),array[i].answer);
    score=score-1;
    console.log(chalk.cyan("Level up your game,your current score is:"),chalk.yellowBright(score),"\n");
  }
 }else{
console.log(chalk.red.italic("You entered invalid option.\n"));
var userAnswer=readlinesync.question("Enter your answer again:");
valid(userAnswer);
 }
   }
      }
var score=0;
for(var i=0;i<array.length-1;i++)
{
  console.log("QUESTION",i+1);
  console.log(array[i].question);
  console.log("A)",array[i].option1);
  console.log("B)",array[i].option2);
  console.log("C)",array[i].option3);
  console.log("D)",array[i].option4);

  var userAnswer=readlinesync.question("Enter your answer:");
  valid(userAnswer);
}
console.log(chalk.yellowBright("BONUS question:-\n"));
console.log(array[array.length-1].question);
var userAnswer=readlinesync.question("enter answer:");
if(userAnswer.toLowerCase()===array[array.length-1].answer)
{
  score=score+2;
  console.log(chalk.green("Yipee!Right guess.\nYou get +2 points for it.\n"));
}else{
  console.log(chalk.red("Oops!wrong guess."));
  console.log(chalk.yellowBright("Right answer:"),array[array.length-1].answer,"\n");
}

console.log("\nYour final score is:",chalk.yellowBright(score));
if(score<=2)
{
  console.log(chalk.cyan("Thanks for joining! better luck next time!\n\n"));
  }
  else{
console.log(chalk.cyan("Thanks for being a part of this game.You did a great job!\n\n"));
  }
   
 var winners=[
   win1={
     name:"Shubham",
     scored:"scored:5"
   },
   win2={
   name:"Vishva",
   scored:"scored:4"
    },
   win3={
     name:"aarti",
     scored:"scored:4"
   }  
 ];
 console.log("The list of peoples with top scores:");
 for(var i=0;i<winners.length;i++)
 {
   console.log(chalk.cyan("\n",i,")",winners[i].name));
   console.log(winners[i].scored);
 }
 console.log("\n\nIf your final score is higher than the ones listed above than do send screenshot of it!");
}
else
   {
     console.log(chalk.yellowBright("Thanks for joining!:-("));
   }