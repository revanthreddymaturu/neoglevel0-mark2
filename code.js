var readlineSync=require("readline-sync");
var chalk=require('chalk');
var username=readlineSync.question(chalk.inverse.bold.bgBlue("Enter your name:"));

console.log("\nWelcome to the quiz "+chalk.bold.yellow(username)+"! Lets dive into questions");
console.log( '\n'+chalk.bgYellow('Points')+ `to remember about the game:

 1)There are no penalties for wrong answers
 2)For every right answer you will get `+chalk.bold.green('+1')+ ` mark
 3)Just enter the option itself as answer `);
var set=[{
  //Level 1
  question:`\nWho is our current finance minister? 
  a)Nirmala Sitharaman
  b)Amit Shah
  c)Venkayya Naidu
  d)Ram Nath Kovind
  `,
  answer:`a`
},
{
  question:`\nWho is the founder of CRED? 
  a)Kunal Bahl
  b)Kunal Shah
  c)Vijay Sekhar Sharma
  d)Bhavish Aggarwal
  `,
  answer:`b`
},
{
  question:`\nWho is the founder of PayTM? 
  a)Kunal Bahl
  b)Kunal Shah
  c)Vijay Sekhar Sharma
  d)Bhavish Aggarwal
  `,
  answer:`c`
},

// Level 2
{
  question:`\nWho is the founder of OLA? 
  a)Kunal Bahl
  b)Kunal Shah
  c)Vijay Sekhar Sharma
  d)Bhavish Aggarwal
  `,
  answer:`d`
},
{
  question:`\nIs flipkart profitable company? 
  a)Yes
  b)No
  `,
  answer:`b`
},
{
  question:`\nWhen did India got Independence? 
  a)1947
  b)1957
  c)1967
  d)1987
  `,
  answer:`a`
},
//Level 3
{
  question:`\nCan a country become rich by printing money? 
  a)Yes
  b)No
  `,
  answer:`b`
},
{
  question:`\nWho is the current governor of RBI? 
  a)Urjit Patel
  b)Raghuram Rajan
  c)Shaktikanta Das
  d)Subba Rao
  `,
  answer:`c`
},
{
  question:`\nWhat is a startup with unicorn status? 
  a)Valuation>=$10 Billion
  b)Valuation>=$1 Billion
  c)Valuation>=$10 Million
  d)Valuation>=$100 Billion
  `,
  answer:`b`
},
{
  question:`\nWho is the founder of Snapdeal? 
  a)Kunal Bahl
  b)Kunal Shah
  c)Vijay Sekhar Sharma
  d)Bhavish Aggarwal
  `,
  answer:`a`
},
];
var score=0;
//var highscore=0;
//var highscorername="";
function play(ques,ans)
{
  console.log(ques);
  var userans=readlineSync.question("Enter your response:");
  if(userans===ans)
  {
    score++;
    console.log(chalk.green("Hurray! Right Answer")+ `\n Current Score: `+score);
     console.log(chalk.green('-----------------------------------------'));
  }
  else{
    console.log(chalk.red("Oops! Wrong Answer")+ `\n Current Score: `+score);
  console.log(chalk.red('-----------------------------------------'));
  }
}
var level1=3;
var level2=3+level1;
var level3=4+level2;
for(var i=0;i<set.length;i++)
{
  
  play(set[i].question,set[i].answer);
  if(i==level1-1 && score!=level1)
  {
    break;
  }
  else if(i==level1-1 && score==level1)
  {
    console.log(chalk.green("\nCongrats! you have been qualified for level2 "));
  }
  else if(i==level2-1 && score!=level2)
  {
    break;
  }
    else if(i==level2-1 && score==level2)
  {
        console.log(chalk.green("\nCongrats! you have been qualified for level3 "));
  }

    else if(i==level3-1 && score==level3)
  {
            console.log(chalk.green("\nCongrats! you have reached the end of game "));

  }
  else continue;

}
var highscores=[
  {
    highscorername:"Revanth",
    highscore:10
  }
]
console.log("Your total score is: "+score+"\n Thanks for playing the quiz");

/*if(score>=highscore)
{
  highscore=score;
  highscorername=highscorername+" "+username;
  console.log("\nHurray! you are one of the highest scorers with total score: "+score+"\n Thanks for playing the quiz");


}
else{
  console.log("Your total score is: "+score+"\n Thanks for playing the quiz");
}*/


for(var i=0;i<highscores.length;i++)
console.log("\nHighest score:"+highscores[i].highscore+"\n High scorers names:"+highscores[i].highscorername);