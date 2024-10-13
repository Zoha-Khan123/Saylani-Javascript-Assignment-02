//====================== Chapter 10 to Chapter 11 ================================
//Question No 01
// let cityName = prompt("Enter your city name");

// if(cityName === "Karachi"){
//     console.log("Welcome to city of lights”");
// }

//Question NO 2
// let gender = prompt("Enter your gender");

// if(gender === "male"){
//     console.log("Good Morning Sir");
// }else{
//     console.log("Good Morning Ma’am.");
// }

//Question No 3
// let trafficColors = prompt("Enter color of traffic signals");

// if(trafficColors==="red"){
//     console.log("Must stop");
// }else if(trafficColors==="yellow"){
//     console.log("Ready to move");
// }else if(trafficColors==="green"){
//     console.log("Move now");
// }else{
//     console.log("Wrong Color");
// }

//Question No 04
// let fuel = +prompt("Enter your remaining fuel in the car in litres");
// if(fuel < 0.25){
//     console.log("Please refill the fuel in your car");
// }else{
//     console.log("You have enough fuel");
// }

//Question No 05
//a-Alert message displayed
// var a = 4;
// if (++a === 5){
// alert("given condition for variable a is true");
// }

//b.Alert message not displayed
// var b = 82;
// if (b++ === 83){
// alert("given condition for variable b is true");
// }

//c.
// var c = 12;

// //Alert message not displayed
// if (c++ === 13){
// alert("condition 1 is true");
// }

// //Alert message displayed
// if (c === 13){
// alert("condition 2 is true");
// }

// //Alert message not displayed
// if (++c < 14){
// alert("condition 3 is true");
// }

// //Alert message displayed
// if(c === 14){
// alert("condition 4 is true");
// }

// d.
// var materialCost = 20000;
// var laborCost = 2000;
// var totalCost = materialCost + laborCost;

// // Alert message displayed
// if (totalCost === laborCost + materialCost){
// alert("The cost equals");
// }

//e.
// // Alert message displayed
// if (true){
// alert("True");
// }
// // Alert message not displayed
// if (false){
// alert("False");
// }

//f.
//Alert message displayed
//  if("car" < "cat"){
//     alert("car is smaller than cat");
// }

//Question No 06
// function calculateGrade() {
//     // Get input values
//     var subject1 = parseFloat(document.getElementById("subject1").value);
//     var subject2 = parseFloat(document.getElementById("subject2").value);
//     var subject3 = parseFloat(document.getElementById("subject3").value);
//     var totalMarks = parseFloat(document.getElementById("totalMarks").value);

//     // Calculate total obtained marks and percentage
//     var obtainedMarks = subject1 + subject2 + subject3;
//     var percentage = (obtainedMarks / totalMarks) * 100;

//     // Determine grade and remarks based on percentage
//     var grade, remarks;
//     if (percentage >= 80) {
//         grade = "A-one";
//         remarks = "Excellent work!";
//     } else if (percentage >= 70) {
//         grade = "A";
//         remarks = "Good!";
//     } else if (percentage >= 60) {
//         grade = "B";
//         remarks = "You need to improve";
//     } else{
//         grade = "F (Fail)";
//         remarks = "Unfortunately, you have failed. Try harder next time!";
//     }

//     // Display result with percentage, grade, and remarks
//     var result = "You scored " + percentage.toFixed(2) + "%, your grade is: " + grade + ". " + remarks;
//     document.getElementById("result").innerText = result;
// }

//Question No 07
// let secretNumber = Math.floor(Math.random() * 10) + 1;
// let userGuessed = +prompt("Guess the secret number");

// if(secretNumber === userGuessed){
//     alert("Bingo! Correct answer");
// }else if(secretNumber + 1 === userGuessed){
//     alert("Close enough to the correct answer")
// }else{
//     alert("Try again! The secret number was " + secretNumber)
// }

//Question No 08
// let number = +prompt("Enter a number");
// if(number%3===0){
//     alert("The number is totally divisible by 3")
// }else{
//     alert("The number is not divisible by 3")
// }

//Question No 09
// let checkNumber = +prompt("Enter a number");
// if(checkNumber % 2 === 0){
//     alert("This is an even number");
// }else if (checkNumber % 3 === 0){
//     alert("This is an odd number");
// }else{
//     alert("The number is not an even or odd");
// }

//Question No 10
// let temperature  = +prompt("Enter current tempearture");

// if(temperature>40){
//     alert("It is too hot outside.")
// }else if(temperature>30){
//    alert("The Weather today is Normal.")
// }else if(temperature>20){
//     alert("Today’s Weather is cool.")
// }else if(temperature>10){
//     alert("OMG! Today’s weather is so Cool.")
// }else{
//   alert("Weather is normal")
// }

//Question No 11
// let firstNumber = +prompt("Enter first number");
// let secondNumber = +prompt("Enter second number");
// let operation = prompt("What operation do you perfome");

// if(operation === "+"){
//     alert(`The sum of ${firstNumber} and ${secondNumber} is ${firstNumber + secondNumber}`)
// }else if(operation === "-"){
//     alert(`The subtraction of ${firstNumber} and ${secondNumber} is ${firstNumber - secondNumber}`)
// }else if(operation === "*"){
//     alert(`The multiplication of ${firstNumber} and ${secondNumber} is ${firstNumber * secondNumber}`)
// }else if(operation === "/"){
//     alert(`The division of ${firstNumber} and ${secondNumber} is ${firstNumber / secondNumber}`)
// }
