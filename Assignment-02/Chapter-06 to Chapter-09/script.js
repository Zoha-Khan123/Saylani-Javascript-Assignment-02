//==================== Chapter 06 to Chapter 11 ============================

//=========================== Question No 1 ====================================

// let a = 5;

// //Print value of a
// document.write(`Result: <br> The value of a is ${a}. <br> --------------------- <br><br>`);

// //Perfome pre increment
// document.write(`The value of ++a is ${++a} <br> Now the value of a is ${a} <br><br>`);

// //Perfome post increment
// document.write(`The value of a++ is ${a++} <br> Now the value of a is ${a} <br><br>`);

// //Perfome pre decrement
// document.write(`The value of --a is ${--a} <br> Now the value of a is ${a} <br><br>`);

// //Perfome post decrement
// document.write(`The value of a-- is ${a--} <br> Now the value of a is ${a} <br><br>`);









//=========================== Question No 2 ====================================

// var a = 2, b = 1;
// var result = --a - --b + ++b + b--;
// console.log(result);

// // For browser
// document.write(`a is ${a} <br>`)
// document.write(`b is ${b} <br>`)
// document.write(`Result is ${result} <br>`)

// //Explanation
// // result = --a - --b + ++b + b--;
// // result = 1 - 0 + 1 + 1
// //result = 3






//=========================== Question No 3 ====================================

// let userName = prompt("Enter your name");
// alert(`Hi, ${userName} \n How are you ?`);




//=========================== Question No 4 and 5 ================================

// let userInput = prompt("Enter a number");

// if (isNaN(userInput)) {
//   alert("Please enter a number");
// } else if (userInput === "") {
//   userInput = 5;
//   for (let i = 1; i <= 10; i++) {
//     document.write(`${userInput} x ${i} = ${userInput * i} <br>`);
//   }
// } else {
//   userInput = userInput;
//   for (let i = 1; i <= 10; i++) {
//     document.write(`${userInput} x ${i} = ${userInput * i} <br>`);
//   }
// }




//=========================== Question No 6 ====================================
// let marks = 100;

// //First Subject
// let subject1 = prompt("Enter the name of first subject");
// let marks1 = +prompt("Enter first subject marks");
// let firstSubject = document.getElementsByClassName("first-subject");
// let firstSubjectMarks = document.getElementsByClassName("first-subject-marks");
// let firstSubjectPercent = document.getElementsByClassName("first-subject-percent");
// firstSubject[0].innerText=subject1;
// firstSubjectMarks[0].innerText=marks1;
// let percentage1 = (marks1/marks) * 100;
// firstSubjectPercent[0].innerText=(`${percentage1}%`);

// //Second Subject
// let subject2 = prompt("Enter the name of second subject");
// let marks2 = +prompt("Enter second subject marks");
// let secondSubject = document.getElementsByClassName("second-subject");
// let secondSubjectMarks = document.getElementsByClassName("second-subject-marks");
// let secondSubjectPercent = document.getElementsByClassName("second-subject-percent");
// secondSubject[0].innerText=subject2;
// secondSubjectMarks[0].innerText=marks2;
// let percentage2 = (marks2/marks) * 100;
// secondSubjectPercent[0].innerText=(`${percentage2}%`);



// //Third Subject
// let subject3 = prompt("Enter the name of third subject");
// let marks3 = +prompt("Enter third subject marks");
// let thirdSubject = document.getElementsByClassName("third-subject");
// let thirdSubjectMarks = document.getElementsByClassName("third-subject-marks");
// let thirdSubjectPercent = document.getElementsByClassName("third-subject-percent");
// thirdSubject[0].innerText=subject3;
// thirdSubjectMarks[0].innerText=marks3;
// let percentage3 = (marks3/marks) * 100;
// thirdSubjectPercent[0].innerText=(`${percentage3}%`)



// //Total
// let totalMarks = 300;
// let finalObtained = marks1 + marks2 + marks3
// let totalObtained = document.getElementsByClassName("total-obtained");
// totalObtained[0].innerText=finalObtained;

// let totalPercent = document.getElementsByClassName("total-percent");
// let finalPercentage = (finalObtained / totalMarks) * 100 
// totalPercent[0].innerText = (`${finalPercentage}%`);




