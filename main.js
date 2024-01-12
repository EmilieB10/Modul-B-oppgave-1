/******************************************************************************
WELCOME TO YOUR FIRST JAVASCRIPT BASIC ASSIGNMENT!

All the assignment instructions are commented out so that you can write your 
code in between them. Remember to read the instructions CAREFULLY, write short 
comments for your code, and feel free to ask for help if you're stuck.

GOOD LUCK!
******************************************************************************/

/******************************************************************************
ASSIGNMENT 1

Your first task will be to link this javascript file to the index.html file
using one of the methods I showed in the first lecture.

<-- Locate the index.html file in the file browser and link it to this file, 
javascript.js
******************************************************************************/

/****************************************************************************** 
ASSIGNMENT 2

Last lecture I showed you how to make variables that can hold values of the 
various data types. Make some variables of the following datatypes: 
String, number, boolean, array
You can choose what the actual content is.
Try to use both the let and const keywords
******************************************************************************/

//your code here

// String
const firstName = "Emilie";
const lastName = "Something";

const fullName = firstName + " " + lastName;

console.log(fullName);

// Number
let age = 27;
let birthday = 1;

let newAge = age + birthday;

console.log(newAge);

// Boolean
let happyBirthday = newAge > age;

if (happyBirthday) {
  console.log("Happy Birthday");
} else {
  console.log("Not your birthday");
}

// Array

const colors = ["red", "green", "pink", "yellow"];

/****************************************************************************** 
ASSIGNMENT 3

Try out a few of the operators we looked at (+, -, /, *)
as well as a few of the shorthand operators (++, --, +=, -=)
******************************************************************************/

//your code here

// Math
console.log(4 + 4);
console.log(5 - 6);
console.log(2 * 4);
console.log(5 / 2);

// More math

let a = 5;
const b = ++a;
console.log(a);

let c = 5;
const d = --c;
console.log(c);

let e = 5;
let f = "Hello";
console.log((e += f));

let g = 5;
console.log((g -= 3));

/****************************************************************************** 
ASSIGNMENT 4

Write an IF/ELSE conditional statement that checks that userName isn't 
empty(""), that the user age is 18+, and that userIsBlocked is false. 

(HINT: Use the && (logical AND) to check all 3 in one IF statement)

If all of these conditions are true, change the userIsLoggedIn variable to true 
and the goToPage variable to "/home" then console.log a welcome message. 

If any of the conditions for logging in are not met, console.log an error 
message.

Try changing the values of the variables to make sure your IF/ELSE conditional
can handle all cases correctly 
******************************************************************************/

let userName = "";
let userAge = 18;
let userIsLoggedIn = false;
let userIsBlocked = false;
let goToPage = "";

//your code here

if (userName != "" && userAge >= 18 && userIsBlocked === false) {
  console.log("Welcome");
  let userIsLoggedIn = true;
  let goToPage = "/home";
} else {
  console.log("Error");
}

/******************************************************************************
ASSIGNMENT 5

Make a variable called userTitle and set the content equal to "Mr." if userMale 
is true, or to "Mrs." if userMale is false. Use the TERNARY conditional to do 
this:

const variable = statement ? "this if true" : "this if not true"

Try changing userMale to both true and false and console.log your new variable,
to see that your conditional is working.
******************************************************************************/

const userMale = false;

//your code here

const userTitle = "";

if (userMale === true) {
  let userTitle = "Mr.";
  console.log(userTitle);
} else {
  let userTitle = "Mrs";
  console.log(userTitle);
}
