// 1. Write a program to take a number in a variable, do the
// required arithmetic to display the following result in your
// browser:


// document.write("<h1> Result: </h1>" + "<br>");
// let a = 10;
// document.write("The value of a is: " + a + "<br>");
// document.write("..........................................."  + "<br>");

// ++a;
// document.write("The value of ++a is: " + a + "<br>");
// document.write("Now tha val;ue of a is: " + a + "<br>");
// a++;
// document.write("The value of a++ is: 11 " +   "<br>");
// document.write("The value of a++ is: " + a + "<br>");
// --a;
// document.write("The value of --a is: " + a + "<br>");
// document.write("Now The value of a is: " + a + "<br>");
// a--;
// document.write("The value of a-- is: 11"  + "<br>");
// document.write("Now The value of a is: " + a + "<br>");


// 2. What will be the output in variables a, b & result after
// execution of the following script:
// var a = 2, b = 1;
// var result = --a - --b + ++b + b--;
// Explain the output at each stage:
// --a;
// --a - --b;
// --a - --b + ++b;
// --a - --b + ++b + b--;



// let a = 2;
// let b = 1;

// var result = --a - --b + ++b +b--;
// document.write("a is " + a + "<br>");
// document.write("b is " + b + "<br>");

// document.write("result is " + result);

// 3. Write a program that takes input a name from user & 
// greet the user.

// let greet = prompt("Enter your Name");
// console.log("Welcome" + greet);

// 5. Write a program to take input a number from user & 
// display it’s multiplication table on your browser. If user 
// does not enter a new number, multiplication table of 5 
// should be displayed by default.

// let userInput = +prompt("Enter Your table otherwise i print 5 table");

// let number;
// if(userInput === "" || isNaN(userInput)){
//     number = 5;

// } else{
//     number = userInput;
// }

// document.write("<h2> Multiplication of " + number + " </h2> <br>");
// for(let i = 1; i<=10; i++){
//     let result = number *i;
//     document.write(`${number} x ${i} = ${result} <br>`  );
// }


// 6. Take
// a) Take three subjects name from user and store them in 3 
// different variables.
// b) Total marks for each subject is 100, store it in another 
// variable.
// c) Take obtained marks for first subject from user and 
// stored it in different variable.
// ALERTS | JAVASCRIPT
// Page 3 of 3
// d) Take obtained marks for remaining 2 subjects from user 
// and store them in variables.
// e) Now calculate total marks and percentage and show the 
// result in browser like this.(Hint: user table)

// const subject1 = prompt("Enter the name of the first subject:");
//         const subject2 = prompt("Enter the name of the second subject:");
//         const subject3 = prompt("Enter the name of the third subject:");

        
//         const totalMarksPerSubject = 100;
//         const totalMarks = totalMarksPerSubject * 3; 

        
//         const obtainedMarks1 = Number(prompt("Enter obtained marks for " + subject1 + ":"));

       
//         const obtainedMarks2 = Number(prompt("Enter obtained marks for " + subject2 + ":"));
//         const obtainedMarks3 = Number(prompt("Enter obtained marks for " + subject3 + ":"));

//         const totalObtainedMarks = obtainedMarks1 + obtainedMarks2 + obtainedMarks3;

//         const percentage = (totalObtainedMarks / totalMarks) * 100;

        
//         document.write("<h3>Results:</h3>");
//         document.write("<table>");
//         document.write("<tr><th>Subject</th><th>Obtained Marks</th><th>Total Marks</th></tr>");
//         document.write("<tr><td>" + subject1 + "</td><td>" + obtainedMarks1 + "</td><td>" + totalMarksPerSubject + "</td></tr>");
//         document.write("<tr><td>" + subject2 + "</td><td>" + obtainedMarks2 + "</td><td>" + totalMarksPerSubject + "</td></tr>");
//         document.write("<tr><td>" + subject3 + "</td><td>" + obtainedMarks3 + "</td><td>" + totalMarksPerSubject + "</td></tr>");
//         document.write("<tr><th>Total</th><th>" + totalObtainedMarks + "</th><th>" + totalMarks + "</th></tr>");
//         document.write("</table>");
//         document.write("<h4>Percentage: " + percentage.toFixed(2) + "%</h4>");

        