// Task one
// (Write a script to greet your website visitor using JS alert box)

// Answer

alert("Error! Please Enter a valid password.");

// Task two 
// Write a script to display following message on your web page

// Answer

alert("Welcome to JS land...")

// Task three
// Use line break in alert message

// Answer 

alert("Welcome to JS land...\nHappy Coding!")

// task four 
// Two alerts in sequence 

// Answer 

alert("Welcome to JS land...")
alert("Welcome to JS land...\nHappy Coding!")

// Task 5
// Generate the message through browser’s developer 

// Answer 

// First we open the browser dev tool by pressing f12 then wo click on the
// console tab and write alert("Hello... i can run JS through my web browser's console")


// Task 6
// using alert in our project html coda also known as inline JS 

// Answer 

// <button onclick="alert('Welcome')" style="background-color: bisque; border: 1px solid rgb(7, 7, 7); padding: 15px; border-radius: 40px;">Inline JavaScript</button>
// btw i also wrote this code in my html file

// Task 7 
// behaviour of execution in javascript

// Answer shown in html file. line no #7 to #20






// CHAPTER 2 

// Q1: Declare a variable called username

var username;

// Q2: Declare myName and assign your full name

var MyName = "Abu Huraira";

// Q3: Declare message, assign "Hello World", show in alert

var message = "hello world!";

alert(message);

// Q4: Student bio data in variables, shown in alert boxes

var name = "Abu Huraira";
var age = 18;
var course = "Modern Web Dev";

alert(name);
alert(age);
alert(course);

// Q5: PIZZA pattern using ONE variable (\n = new line)

var pizza = "pizza\npizz\npiz\npi\np";
alert(pizza);

// Q6: Email with string concatenation

var email = "user@gmail.com";
alert("my email is, " + email)

// Q7: Book variable with concatenation

var book = "'A smarter way to learn JavaScript'";
alert("I am trying to learn from the Book " + book);

// Q8: Display text in browser through JS

document.write("Yah! I can write HTML content through JavaScript")

// Q9: Store special string, show in alert and browser

var design = "▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬"
alert(design);
document.write("<br>" + design)

// Chapter 3

// Q1: age variable, show in alert

var age = 18;
alert("i am" + age + "years old");

// Q2: Track visits, show on page

var visits = 14;
alert("you have visited this site " + visits + " times");
document.write("you have visited this site " + visits + " times<br><br>");

// Q3: birthYear + its data type in browser

var birthYear = 2008;
document.write("my birth year is " + birthYear + "<br>");
document.write("data type of my declared variable is " + typeof birthYear + "<br><br>");

// Q4: Clothing store order

var visitorName = "John Doe";
var productTitle = "T-shirt";
var quantity = 5; 

document.write("<b>" + visitorName + " </b>" + "ordered" + "<b> " + quantity + "  " + "</b>" + "<b>" + productTitle + "</b>(s) " + "on XYZ Clothing Store");




// CHAPTER 4 (Variable Names: Legal & Illegal)

// Q1: Declare 3 variables in one statement

var firstName = "Abu", lastName = "Huraira", city = "Lahore";

// Q2: Declare 5 legal & 5 illegal variable names

// Legal names
var studentName;
var _totalMarks;
var $price;
var user1;
var my_age;

// Illegal names (commented out because they give a syntax error and stop the whole file)
// var 1stName;      // cannot start with a number
// var first-name;   // hyphen (-) is not allowed
// var my name;      // spaces are not allowed
// var @email;       // @ symbol is not allowed
// var var;          // "var" is a JS keyword

// Q3: Display naming rules in browser

document.write("<br><br>Chapter 4<br><br>");
document.write("Rules for naming JS variables<br>");
document.write("Variable names can only contain letters, numbers, $ and _. For example: <b>$my_1stVariable</b><br>");
document.write("Variables must begin with a letter, $ or _. For example: <b>$name, _name or name</b><br>");
document.write("Variable names are case sensitive<br>");
document.write("Variable names should not be JS keywords<br>");




// CHAPTER 5 (Math Expressions)

document.write("<br>Chapter 5<br><br>");

// Q1: Add two numbers in a new variable

var num1 = 3;
var num2 = 5;
var sum = num1 + num2;
document.write("Sum of " + num1 + " and " + num2 + " is " + sum + "<br><br>");

// Q2: Subtraction, multiplication, division & modulus

var subtraction = num1 - num2;
var multiplication = num1 * num2;
var division = num1 / num2;
var modulus = num1 % num2;
document.write("Subtraction of " + num1 + " and " + num2 + " is " + subtraction + "<br>");
document.write("Multiplication of " + num1 + " and " + num2 + " is " + multiplication + "<br>");
document.write("Division of " + num1 + " and " + num2 + " is " + division + "<br>");
document.write("Modulus of " + num1 + " and " + num2 + " is " + modulus + "<br><br>");

// Q3: Declare, initialize, increment, add, decrement, remainder

var value;
document.write("Value after variable declaration is: " + value + "<br>");
value = 5;
document.write("Initial value: " + value + "<br>");
value++;
document.write("Value after increment is: " + value + "<br>");
value = value + 7;
document.write("Value after addition is: " + value + "<br>");
value--;
document.write("Value after decrement is: " + value + "<br>");
var remainder = value % 3;
document.write("The remainder is: " + remainder + "<br><br>");

// Q4: Movie tickets

var ticketPrice = 600;
var totalTickets = 5;
var ticketCost = ticketPrice * totalTickets;
document.write("Total cost to buy " + totalTickets + " tickets to a movie is " + ticketCost + "PKR<br><br>");

// Q5: Multiplication table

var tableNum = 4;
document.write("Table of " + tableNum + "<br>");
document.write(tableNum + "x1=" + tableNum * 1 + "<br>");
document.write(tableNum + "x2=" + tableNum * 2 + "<br>");
document.write(tableNum + "x3=" + tableNum * 3 + "<br>");
document.write(tableNum + "x4=" + tableNum * 4 + "<br>");
document.write(tableNum + "x5=" + tableNum * 5 + "<br>");
document.write(tableNum + "x6=" + tableNum * 6 + "<br>");
document.write(tableNum + "x7=" + tableNum * 7 + "<br>");
document.write(tableNum + "x8=" + tableNum * 8 + "<br>");
document.write(tableNum + "x9=" + tableNum * 9 + "<br>");
document.write(tableNum + "x10=" + tableNum * 10 + "<br><br>");

// Q6: Temperature converter

var celsius = 25;
var toFahrenheit = (celsius * 9 / 5) + 32;
document.write(celsius + "C is " + toFahrenheit + "F<br>");

var fahrenheit = 70;
var toCelsius = (fahrenheit - 32) * 5 / 9;
document.write(fahrenheit + "F is " + toCelsius + "C<br><br>");

// Q7: Shopping cart checkout

var item1Price = 650;
var item2Price = 100;
var item1Qty = 3;
var item2Qty = 7;
var shippingCharges = 100;
var cartTotal = (item1Price * item1Qty) + (item2Price * item2Qty) + shippingCharges;

document.write("Shopping Cart<br>");
document.write("Price of item 1 is " + item1Price + "<br>");
document.write("Quantity of item 1 is " + item1Qty + "<br>");
document.write("Price of item 2 is " + item2Price + "<br>");
document.write("Quantity of item 2 is " + item2Qty + "<br>");
document.write("Shipping Charges " + shippingCharges + "<br><br>");
document.write("Total cost of your order is " + cartTotal + "<br><br>");

// Q8: Percentage

var totalMarks = 980;
var obtainedMarks = 804;
var percentage = (obtainedMarks / totalMarks) * 100;

document.write("Marks Sheet<br>");
document.write("Total marks: " + totalMarks + "<br>");
document.write("Marks obtained: " + obtainedMarks + "<br>");
document.write("Percentage: " + percentage + "%<br><br>");

// Q9: Currency to PKR in a single expression

var totalPKR = (10 * 104.80) + (25 * 28);
document.write("Currency in PKR<br>");
document.write("Total Currency in PKR: " + totalPKR + "<br><br>");

// Q10: Add 5, multiply by 10, divide by 2 in a single expression

var startNum = 10;
var finalResult = (startNum + 5) * 10 / 2;
document.write("Result of ((" + startNum + " + 5) x 10) / 2 is " + finalResult + "<br><br>");

// Q11: Age calculator

var currentYear = 2026;
var personBirthYear = 2008;
var possibleAge1 = currentYear - personBirthYear;
var possibleAge2 = possibleAge1 - 1;

document.write("Age Calculator<br>");
document.write("Current Year: " + currentYear + "<br>");
document.write("Birth Year: " + personBirthYear + "<br>");
document.write("They are either " + possibleAge2 + " or " + possibleAge1 + " years old<br><br>");

// Q12: The Geometrizer

var radius = 20;
var pi = 3.142;
var circumference = 2 * pi * radius;
var area = pi * radius * radius;

document.write("The Geometrizer<br>");
document.write("Radius of a circle: " + radius + "<br>");
document.write("The circumference is: " + circumference + "<br>");
document.write("The area is: " + area + "<br><br>");

// Q13: Lifetime supply calculator

var favouriteSnack = "chocolate chip";
var currentAge = 18;
var maxAge = 65;
var perDay = 3;
var lifetimeSupply = (maxAge - currentAge) * 365 * perDay;   // years x days in a year x snacks per day

document.write("The Lifetime Supply Calculator<br>");
document.write("Favourite Snack: " + favouriteSnack + "<br>");
document.write("Current age: " + currentAge + "<br>");
document.write("Estimated Maximum Age: " + maxAge + "<br>");
document.write("Amount of snacks per day: " + perDay + "<br>");
document.write("You will need " + lifetimeSupply + " " + favouriteSnack + " to last you until the ripe old age of " + maxAge + "<br><br>");




// CHAPTER 9 - 11 (User Input & Conditional Statements)

document.write("Chapter 9 - 11<br><br>");

// Q1: City input

var userCity = prompt("Enter your city name");
if (userCity === "Karachi") {
    alert("Welcome to city of lights");
}

// Q2: Gender input

var gender = prompt("Enter your gender (male / female)");
if (gender === "male") {
    alert("Good Morning Sir");
}
if (gender === "female") {
    alert("Good Morning Ma'am");
}

// Q3: Traffic signal

var signal = prompt("Enter traffic signal color (red / yellow / green)");
if (signal === "red") {
    alert("Must Stop");
} else if (signal === "yellow") {
    alert("Ready to move");
} else if (signal === "green") {
    alert("Move now");
} else {
    alert("Invalid signal color");
}

// Q4: Fuel check

var fuel = prompt("Enter remaining fuel in your car (in litres)");
if (fuel < 0.25) {
    alert("Please refill the fuel in your car");
}

// Q5: Run these scripts & record outputs

// a) ++a makes a = 5 first, then compares 5 === 5 -> TRUE, alert shows
var a = 4;
if (++a === 5) {
    alert("given condition for variable a is true");
}

// b) b++ compares old value 82 === 83 -> FALSE, no alert (b becomes 83 after)
var b = 82;
if (b++ === 83) {
    alert("given condition for variable b is true");
}

// c) Output: "condition 2 is true" and "condition 4 is true"
//    condition 1: c++ compares 12 === 13 -> false (c becomes 13)
//    condition 2: 13 === 13 -> true
//    condition 3: ++c makes c = 14, 14 < 14 -> false
//    condition 4: 14 === 14 -> true
var c = 12;
if (c++ === 13) {
    alert("condition 1 is true");
}
if (c === 13) {
    alert("condition 2 is true");
}
if (++c < 14) {
    alert("condition 3 is true");
}
if (c === 14) {
    alert("condition 4 is true");
}

// d) 22000 === 22000 -> TRUE, "The cost equals" shows
var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost) {
    alert("The cost equals");
}

// e) only "True" shows, if(false) never runs
if (true) {
    alert("True");
}
if (false) {
    alert("False");
}

// f) strings compare letter by letter: "car" vs "cat", 'r' comes before 't' -> TRUE, alert shows
if ("car" < "cat") {
    alert("car is smaller than cat");
}

// Q6: Marks sheet with grade

var subject1 = parseInt(prompt("Enter marks of subject 1"));
var subject2 = parseInt(prompt("Enter marks of subject 2"));
var subject3 = parseInt(prompt("Enter marks of subject 3"));
var maxMarks = parseInt(prompt("Enter total marks (e.g. 300)"));

var marksObtained = subject1 + subject2 + subject3;
var resultPercentage = (marksObtained / maxMarks) * 100;
var grade;
var remarks;

if (resultPercentage >= 80) {
    grade = "A-one";
    remarks = "Excellent";
} else if (resultPercentage >= 70) {
    grade = "A";
    remarks = "Good";
} else if (resultPercentage >= 60) {
    grade = "B";
    remarks = "You need to improve";
} else {
    grade = "Fail";
    remarks = "Sorry";
}

document.write("Marks Sheet<br>");
document.write("Total marks : " + maxMarks + "<br>");
document.write("Marks obtained : " + marksObtained + "<br>");
document.write("Percentage : " + resultPercentage + "%<br>");
document.write("Grade : " + grade + "<br>");
document.write("Remarks : " + remarks + "<br><br>");

// Q7: Guess game

var secretNumber = 7;
var guess = parseInt(prompt("Guess the secret number (1 to 10)"));
if (guess === secretNumber) {
    alert("Bingo! Correct answer");
} else if (guess + 1 === secretNumber) {
    alert("Close enough to the correct answer");
} else {
    alert("Wrong guess! Try again");
}

// Q8: Divisible by 3

var checkNum = prompt("Enter a number to check if it is divisible by 3");
if (checkNum % 3 === 0) {
    alert(checkNum + " is divisible by 3");
} else {
    alert(checkNum + " is not divisible by 3");
}

// Q9: Even or odd

var evenOddNum = prompt("Enter a number to check even or odd");
if (evenOddNum % 2 === 0) {
    alert(evenOddNum + " is an even number");
} else {
    alert(evenOddNum + " is an odd number");
}

// Q10: Temperature message

var temperature = prompt("Enter today's temperature");
if (temperature > 40) {
    alert("It is too hot outside.");
} else if (temperature > 30) {
    alert("The Weather today is Normal.");
} else if (temperature > 20) {
    alert("Today's Weather is cool.");
} else if (temperature > 10) {
    alert("OMG! Today's weather is so Cool.");
}

// Q11: Calculator using if statements

var firstNum = parseInt(prompt("Enter first number"));
var secondNum = parseInt(prompt("Enter second number"));
var operation = prompt("Enter operation (+, -, *, /, %)");

if (operation === "+") {
    alert("Result: " + (firstNum + secondNum));
} else if (operation === "-") {
    alert("Result: " + (firstNum - secondNum));
} else if (operation === "*") {
    alert("Result: " + (firstNum * secondNum));
} else if (operation === "/") {
    alert("Result: " + (firstNum / secondNum));
} else if (operation === "%") {
    alert("Result: " + (firstNum % secondNum));
} else {
    alert("Invalid operation");
}