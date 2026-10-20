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