/*
If statements - Evaluates (or checks) a condition. If the condition is true, any statements in the subsequent code block are executed
*/
/*var today = new Date();

if(today === "Friday"){
  return "Let's Party!";
};*/

/*
If/else statements = Evaluates (or checks) a condition. If the condition is true, the first code block is executed. If the condition is false, the second code block is executed instead.
*/

/*if(today === "Friday"){
  return "Let's Party!";
}else{
  return "Get back to coding!";
};*/

console.log("hello there jasen")

console.log("another test of the testing tests")

/*
 * #1
 * Function - canVote
 * Create a function named `canVote` which will take a parameter: `age`.
 *
 *  @param Datatype: Number `age`
 *  @return Datatype: Boolean
 *
 * The function will return true if the number passed into the function is equal to or greater than Hawaii's voting age. Console.log your result.
*/

var legalVote = 18
var myAge = 31
function canVote(age){
  if (age >= legalVote){
    return true
  }else{
    return false
  }
}
var resultsCanVote = canVote(myAge)
console.log("I am " + myAge+ " years old...can I vote? " + resultsCanVote)

/*
 * #2
 * Function - login
 * Create a function named `login` which will take a parameter: `password`.
 *
 *  @param Datatype: String `password`
 *  @return Datatype: String
 *
 * The function will return the message: "Login Success!", if the string passed into the function is "test1234"
 * Console.log your result.
*/


function login(password){
  if(password === "test123"){
    return "Login Success!"
  }else{
    return "Failed Login. Go Home."
  }
}

var loginTry = "test123"
var resultsLogin = login(loginTry)
console.log("You entered: " + loginTry+ " ... " + resultsLogin)

/*
 * #3
 * Function - isGreaterThan
 * Create a function named `isGreaterThan` which will take two parameters: `first` and `second`
 *
 *  @param Datatype: Number `first`
 *  @param Datatype: Number `second`
 *  @return Datatype: Boolean
 *
 * The function will return true if the first number is greater than the second.
 * Console.log your result.
*/

function isGreaterThan(first, second){
  if(first>second){
    return true
  }else{
    return false
  }
}

var num1 = 123
var num2 = 32
var resultsIsGreaterThan = isGreaterThan(num1,num2)
console.log("Is " + num1+ " greater than " + num2+ " ? " + resultsIsGreaterThan)


/*
 * #4
 * Function - mustBeTrue
 * Create a function named `mustBeTrue` which will take a parameter: `boo`.
 *
 *  @param Datatype: Boolean `boo`
 *  @return Datatype: Boolean
 *
 * The function will return true if the value passed into the function is "true".
 * Console.log your result.
*/

function mustBeTrue(boo){
  if(boo ===true){
    return true
  }else{
    return false
  }
}
var myBoo = true
var resultsMustBeTrue = mustBeTrue(myBoo)
console.log("Is it true? " + resultsMustBeTrue )


/*
 * #5
 * Function - bigBird
 * Create a function named `bigBird` which will take a parameter: `word`.
 *
 *  @param Datatype: String `word`
 *  @return Datatype: String
 *
 * The function will return the message "Word to Big Bird!", if the string passed into the function is a three-letter word. 
 * Console.log your result.
*/

function bigBird(word){
  if(word.length ===3){
    return"Word to Big Bird"
  }else{
    return "No that isnt a 3 letter word."
  }
}
var myWord = "cat"
var resultsBigBird = bigBird(myWord)
console.log("You word is " + myWord + "      " + resultsBigBird )

/*
 * #6
 * Function - isEqual
 * Create a function named `isEqual` which takes two parameters: `first` and `second`.
 *
 *  @param Datatype: String `first`
 *  @param Datatype: String `second`
 *  @return Datatype: String
 *
 * If the strings are equal, the function will return the message "You look mahvelous!" Otherwise, return the message: "I don't know who you are anymore." 
 * Console.log your result.
*/

function isEqual(first, second){
  if(first === second){
    return"you look maaaaaaaahvelous"
  }else{
    return "I dont even know u dude"
  }
}

var entry1 = "thing"
var entry2 = "thing2"
var resultsIsEqual = isEqual(entry1, entry2)
console.log(resultsIsEqual)

/*
 * #7
 * Function - notEqual
 * Create a function named `notEqual` which takes two parameters: `first` and `second`.
 *
 *  @param Datatype: String `first`
 *  @param Datatype: String `second`
 *  @return Datatype: String
 *
 * If the strings are not equal, the function will return the message "Opposites do attract." Otherwise, return the message: "Cause it's like you're my mirror." 
 * Console.log your result.
*/
 function notEqual(first, second){
   if(first ===second){
     return"cause its like youre my mirror"
   }else{
     return "Opposites attract"
   }
 }
 
var entry3 = "thing"
var entry4 = "thing2"
var resultsNotEqual = notEqual(entry3, entry4)
console.log(resultsNotEqual)

/*
 * #8
 * Function - spareChange
 * Create a function named `spareChange` which takes a parameter: `money`.
 *
 *  @param Datatype: Number `money`
 *  @return Datatype: Boolean
 *
 * The function will return true if the number passed into the function is greater than 100, otherwise it will return false.
 * Console.log your result.
*/ 

function spareChange(money) {
  if(money>100){
    return true
  }else{
    return false
  }
}
var myMoney = 120
var resultsSpareChange = spareChange(myMoney)
console.log("Do you have more than 100 dollars in your pocket? " + resultsSpareChange)

/*
 * #9
 * Function - dirty30
 * Create a function named `dirty30` which takes three parameters: `one`, `two` and `three`.
 *
 *  @param Datatype: Number `one`
 *  @param Datatype: Number `two`
 *  @param Datatype: Number `three`
 *  @return Datatype: Boolean
 *
 * The function will return true if the sum of all the number values is greater than 30, otherwise it will return false.
 * Console.log your result.
*/ 

function dirty30(one, two, three){
  if(one+two+three >30){
    return true
  }else{
    return false
  }
}
var myOne = 1
var myTwo = 4
var myThree = 23
var resultsDirty30 = dirty30(myOne, myTwo, myThree)
console.log("Is the sum of the three numbers more than 30? " + resultsDirty30)

/*
 * #10
 * Function - evenStevens
 * Create a function named `evenStevens` which takes a parameter: `num`.
 *
 *  @param Datatype: Number `num`
 *  @return Datatype: Boolean
 *
 * The function will return true if the number passed in is an even integer, otherwise it will return false.
 * Console.log your result.
*/ 

function evenStevens(num){
  if(num%2===0){
    return true
  }else{
    return false
  }
}

var myNum = 23
var resultsEvenStevens = evenStevens(myNum)
console.log("Is the number "+myNum+" an even number?" + resultsEvenStevens)

/*
 * #11
 * Function - daClub
 * Create a function named `daClub` which takes two parameters: `cover` and `age`.
 *
 *  @param Datatype: Number `cover`
 *  @param Datatype: Number `age`
 *  @return Datatype: String
 *
 * If BOTH values are 21 or over, the function will return the message: "Welcome to the Legends Lounge." Otherwise, it will return the message: "Chuck E Cheese is across the street."
 * Console.log your result.
*/ 
function daClub(cover, age){
  if(cover>21 && age>>21){
    return "welcome to the legends lounge"
  }else{
    return "go chuck E cheese brah"
  }
}

var myCover = 23
var myAge = 20
var resultsDaClub = daClub(myCover, myAge)
console.log(resultsDaClub)

/*
 * #12
 * Function - graduation
 * Create a function named `graduation` which takes two parameters: `credits` and `thesis`.
 *
 *  @param Datatype: Number `credit`
 *  @param Datatype: Boolean `thesis`
 *  @return Datatype: String
 *
 * If EITHER the number value is greater than or equal to 120 or the boolean value is true, then the function will return the message: "Congratulations on a job well done." Otherwise, return the message: "See you in summer school."
 * Console.log your result.
*/ 

function graduation(credits, thesis){
  if(credits>=120 || thesis ===true){
    return "congrats on a great job"
  }else{
    return "you require summer schoolings"
  }
}

var myCredits = 123
var myThesis = false
var resultsGraduation = graduation(myCredits, myThesis)
console.log(resultsGraduation)

/*
 * #13
 * Function - moneyTrain
 * Create a function named `moneyTrain` which takes a parameter: `speed`.
 *
 *  @param Datatype: Number `speed`
 *  @return Datatype: String
 *
 * The function will return the message: "You are riding Honolulu's Rail.", if the number value is less than 50, otherwise it will return the message: "You are riding an Amtrak.", if the number value is less than 100, and return the message: "Now you ballin' in the Shinkansen!", if the number value is greater than or equal to 100.
 * Console.log your result.
*/ 

function moneyTrain(speed){
  if(speed<50){
    return "you are riding on the Honolulu RAIL"
  }else if(speed<100){
    return "you probly on an AMTRAK"
  }else{
    return "you must be ballin out on a Shinkansen or a rocket ship"
  }
}
var mySpeed = 123
var resultsMoneyTrain = moneyTrain(mySpeed)
console.log("Your are traveling at "+mySpeed+"mph. " + resultsMoneyTrain)

/*
 * #14
 * Function - buyDoughnut
 * Declare a variable named `budget` and assign it with a number value that is greater than 20.
 * Declare a variable named `doughnutPrice` and assign it with a number value that is greater than 0 but less than 6.
 * Declare a variable named `doughnutBought` and assign it with a number value of 0.
 *
 * Create a function named `buyDoughnut` which takes NO parameters.
 * When the function is invoked, the budget will be decreased by the doughnutPrice and doughnutBought will increase by 1.
 * Console.log budget and doughnutBought.
 * Invoke your function again.
 * Console.log budget and doughnutBought again.
*/ 

var budget = 23
  var doughnutPrice = 5
  var doughtnutBought=0

function buyDoughtnut(){
  budget = budget - doughnutPrice
  doughtnutBought++
}
buyDoughtnut()
console.log("your current budget is: " + budget+"   You have this many doughnuts: "+ doughtnutBought)

buyDoughtnut()
console.log("your current budget is: " + budget+"   You have this many doughnuts: "+ doughtnutBought)

/*Final Boss*/
/*Create a function name dailySpecials which takes in a parameter: `special`.
Inside the function, create a switch statement that will check the daily specials 
of your favorite restaurant (or make up your own daily specials for each day of the week.*/

function dailySpecials(special){

var store = null

switch (special){
  case 'poke':
  store = 'Nicos fish market';
  break;
  case 'pizza':
  store = 'bostons pizza';
  break;
  case 'burger':
  store = 'Teddys Bigger Burgers';
  break;
  
}
return store
}

var myLunch = "pizza"
console.log("To eat "+myLunch+" we need to go to " + dailySpecials(myLunch))



/*
For loops - A for loop checks a condition a specific number of times and allows us to execute a code block and evaluate a condition to determine if our loop should run again.

The for loop is made up for 3 parts:

1) Initialization (i.e. var i = 0;)
2) Condition (i.e. i<arr.length;)
3) Update (i.e. i++)
*/

var toyotaModels = ["Corolla", "Prius", "4 Runner", "Camry", "Land Cruiser"];

for (var i = 0; i<toyotaModels.length; i++){
   console.log("Toyota " + toyotaModels[i]);
}


/* 
 * #15
 * Create a for loop that will iterate 5 times and console.log the following:
 * "Player: 1"
 * "Player: 2"
 * "Player: 3"
 * "Player: 4"
 * "Player: 5"
*/

for (var i=1; i<6; i++){
  console.log("Player: "+ i)
}


/* 
 * #16
 * Create a for loop that will iterate and console.log each item in the array below:
*/
  var myFavFoods = ["lemon bar", "carrot cake", "nachos", "bacon cheeseburger", "ramen", "sweet potato fries", "chimichanga"];

  for (var i=0; i<myFavFoods.length; i++){
    console.log("my fave food is : "+ myFavFoods[i])
  }


/*
 * #17
 * Function - sumItUp
 * Declare a variable named `numArray` and assign it with an array of 5 random numbers of your choice.
 * Declare a variable named `total` and assign it with a number value of 0.
 * 
 * Create a function named sumItUp which takes a parameter: `arr`.
 * 
 *   @param Datatype: Array `arr`
 *   @return Datatype: Number
 * 
 * The function will loop through and add up all the values in the array that is passed into the function and return the total.
 * Console.log your result.
*/

var numArray = [11,27,2001,1877667, 43]
var total = 0
function sumItUp(arr){

for (var i=0; i<numArray.length; i++){
  total =  total+ numArray[i]
  console.log("Current value of total is : "+ total)
}
return total}

sumItUp(numArray)

console.log( "The total sum of all number in the array is "+ total)



/*
 * #18
 * Function - allStars
 * Create a function named `allStars` which takes a parameter: `ballers`.
 *
 *  @param Datatype: Array `ballers`
 *  @return Datatype: Array
 *
 * The function will loop through the players array and will put all the even number indexed players in the `east` array and the rest in the `west` array.
 * Console.log both the east and west arrays.
*/ 

var players = ["Yao Ming", "BrookLin", " Jesus Shuttlesworth", "Manute Bol", "Sidney Deane", "World B Free"];

var east =["east"]
var west = ["west"]

function allStars(ballers){
  for (var i=0; i<ballers.length; i++){
    if(i%2===0){
      east[i/2]=ballers[i]
    }else{
      west[(i-1)/2] = ballers[i]
    }}
}

allStars(players)
console.log("the players in the east conf are "+ east)
console.log("the players in the west conf are "+ west)


/*
 * #19
 * Function - subways
 * Create a function named `subways` which takes a parameter: `special`.
 *
 *  @param Datatype: Array `special`
 *  @return Datatype: Array
 *
 * The function will loop through the array value and replace all the odd numbered indexed items with "Classic Tuna".
 * Console.log your results.
*/ 

  var subOftheDay = ["Teriyaki Chicken", "Spicy Italian", "Turkey", "BMT", "Black Forest Ham", "Meatball Marinara", "Veggie"];

  function subways(special){
    for (var i=0; i<special.length; i++){
      if(i%2===0){
        
      }else{
        special[(i-1)/2] = "Classic Tuna"
      }}
  return special}

  subways(subOftheDay)
console.log("the subs are "+ subOftheDay)


/*
Final Boss
 * #20
 * Function - removeLetter
 * Create a function named `removeLetter`, which takes a parameter `str`. 
 *
 *   @param Datatype: String `str`
 *   @return Datatype: Array
 *
 *  The function will loop through the string value and put all the letters into an array, except for the letter "A" and "a". We don't want no stinking "A" or "a" in our array. Test your function with the `phrase` below!
*/

var phrase = "An apple a day keeps Alice feeling awesome!";

function removeLetter(str){
  var theArray = str.split("")
  console.log(theArray)
  var theNewArray = ["mm"]
  var count=0
  for (var i=0; i<theArray.length; i++){
    if(theArray[i]==="A"||"a"){
      //count the a's
      count++
      console.log(count, theArray[i])
    }else{
      theNewArray[i-count] = theArray[i]
      console.log(theNewArray)
    }}
return theNewArray
  }

console.log(removeLetter(phrase))


//exercise 1:
//Function repeatString(str, num) The function will take two parameters and repeat a given string (first argument) num times (second argument). Return an empty string if num is a negative number.

function repeatString(str, num){
  var newString = ""
  if(num > 0){
    for (var i=0; i<num; i++){
    newString = newString + str
  }}
  return newString
}


var str11 = "money"
var num1 = 4
var newnewString = repeatString(str11, num1)

console.log(newnewString)


//exercise 2:
//Function - timeConvert(num) The function will take the num parameter being passed in and return the number of hours and minutes. Separate the number of hours and minutes with a colon.
function timeConvert(num){
  var hours = 0
  var min = 0

  hours = (num-(num%60))/60
  min = num%60

  return "The time is "+hours+":"+min
}
console.log(timeConvert(68))


//exercise 3:
//Function - FirstFactorial(num) The function will take the num parameter being passed and return the factorial of it (ie. if num =3, return(3 * 2 * 1)). For test cases, the range will be between 1 and 18.

function FirstFactorial(num){
var factorial=1
  for(var i=0; i<num; i++){
    factorial=factorial*(i+1)
    console.log(i,factorial)
  }
  return factorial
}

var number=10

console.log("The first factorial for "+ number+" is equal to "+ FirstFactorial(number))

//comment


