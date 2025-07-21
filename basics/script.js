//  console.log(`hello`);
// console.log(`I like pizza`);

// window.alert(`This is an alert`);
// window.alert(`I like pizza`);
// document.getElementById(`h1`).textContent =`hellow`;
// document.getElementById(`para`).textContent =`Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sunt vero eius laborum quam cumque assumenda iure, accusamus voluptates saepe eos unde vel, et natus deserunt. Eos modi quos rerum quaerat necessitat ibus minus praesentium maiores!`;
// let a=3.14;
// let email= `shubom@gmail.com`;
// let Name= `shubom`;
// console.log(`The value of pi is ${a} which is an approximate value`);
// console.log(`your email is ${email} & your name is ${Name} `);
// Arithmetic operators in JavaScript

// How to take user inputs in JavaScript
// Easy way window prompt:
// let username;

// username= window.prompt(`Whats your username?`);
// console.log(`your username is ${username}`);

// Professional way HTML textbox:
// document.getElementById(`mySubmit`).onclick = function(){
//     username= document.getElementById(`myText`).value;
//     console.log(`username =${username}`);
//     document.getElementById(`myH1`).textContent=`Hello ${username}!!`
// }
// let age=window.prompt(`What is your age?`);
// age=Number(age);
// age+=1;
// document.getElementById(`myH1`).textContent=`your age is ${age}`;
// let x=`pizza`;
// let y=`pizza`;
// let z=`pizza`;
// x=Number(x);
// y=String(y);
// z=Boolean(z);
// console.log(x,typeof(x));
// console.log(y,typeof(y));
// console.log(z,typeof(z));

// constants in javaScript

// const pi=3.14;
// let radius;
// let circumference;

// // radius=window.prompt(`Enter the radius of the circle`);
// // radius= Number(radius);
// // circumference=2*pi*radius;

// // document.getElementById(`myH1`).textContent=`The circumference of the circle with radius ${radius} is ${circumference}`;

// document.getElementById(`mySubmit`).onclick =function(){
//     radius= document.getElementById(`rad`).value;
//     radius=Number(radius);
//     document.getElementById(`myH1`).textContent=`the radius is ${radius}cm`
// }
// document.getElementById(`calc`).onclick =function(){
//     circumference=2*radius*pi;
//     document.getElementById(`myH1`).textContent =`The Circumference of the circle with radius ${radius} is ${circumference}cm`;
// }

// Math in JavaScript
// console.log(Math.PI);
// console.log(Math.E);
// console.log(Math.LN10);
// console.log(Math.LOG10E)
// let x=2
// let y=4
// let z=64

// x=Math.round(x);
// y=Math.round(y);
// z=Math.round(z);

// console.log(x,y,z);

// floor always rounds down
// x=Math.floor(x);
// y=Math.floor(y);
// z=Math.floor(z);
// console.log(x,y,z);

// Math.ceil always rounds up
// x=Math.ceil(x);
// y=Math.ceil(y);
// z=Math.ceil(z);
// console.log(x,y,z);

// Math.trunc eleminates the decimal part 
// x=Math.trunc(x);
// console.log(x);

// Math.pow is use to calculate the power of 
// x=Math.pow(x,y);
// console.log(x);
// z=Math.sqrt(z);
// console.log(z);
// z=Math.log(z);
// console.log(z);
// z=Math.sin(z);
// console.log(z);
// z=Math.cos(z);
// console.log(z);
// z=Math.tan(z);
// console.log(z);

// Math.abs for the absolute value 
// let x=1;
// let y=2;
// let z=3;
// let max = Math.max(x,y,z);
// let min = Math.min(x,y,z);
// console.log(`The maximum value is ${max} & the minimum value is ${min}`);
// console.log(Math.abs(x));
// Math.sign gives the sign of the parameter
// console.log(`the sign of ${x} is ${Math.sign(x)} & the sign of ${y} is ${Math.sign(y)}`);

// Random Number Generator

// const min=50;
// const max=100;
// let randomNum= Math.floor(Math.random()*(max-min))+min;
// console.log(randomNum);

// if statement
// let age=12;

// if(age>=18){
//     console.log(`you are elligible to vote`);
// }
// else{
//     console.log(`you aint legal to vote`)
// }

// let time=9;

// if(time<=12){
//     console.log(`Good Morning`);
// }
// else{
//     console.log(`Good Evening`);
// }

// let IsStudent=false;
// if (IsStudent) {
//     console.log(`You are a Student`);

// } else {
//     console.log(`You are not a Student`);
// }

// let age=21;
// let HasLiscence=true;

// if(age>=18){
//     console.log(`You are old enough to Drive`);

//     if(HasLiscence){
//         console.log(`You have you liscence & You can drive`);
//     }
//     else{
//         console.log(`but you dont have a liscence`);
//     }
// }
// else{
//     console.log(`You must be atleast 18 years old to Drive`);
// }

// let age=109;

// if(age>=100){
//     console.log(`You are to old to Drive`)
// }
// else if(age<=0){
//     console.log(`Your age cant be 0 or less than 0`)
// }
// else if(age==17){
//     console.log(`Wait one more year`);
// }
// else if(age>=18){
//     console.log(`you are old enough to Drive`);
// }
// else{
//     console.log(`You must be 18 to Drive`);
// }


// Trenary Operator
// let age=18;
// age>=18 ? console.log(`You are an adult`):console.log(`You are a minor`);

// let time=14;

// time>=12 ?console.log(`Good Afternoon`): console.log(`Good Morning`);

// let purchaseAmount=200;

// let discount= purchaseAmount>=100?10:0;

// console.log(`your total is ${purchaseAmount-(purchaseAmount*(discount/100))}`);

// Switch statement

// let day=5;
// switch(day){
//     case 1:
//         console.log(`Today is Monday`);
//         break;
//     case 2:
//         console.log(`Today is Tuesday`);
//         break;
//     case 3:
//         console.log(`Today is Wednesday`);
//         break;
//     case 4: 
//      console.log(`Today is Thursday`);
//      break;
//     case 5:
//         console.log(`Today is Friday`);
//         break;
//     case 6:
//         console.log(`Today is Saturday`);
//         break;
//     case 7:
//         console.log(`Today is Sunday`);
//         break;
//     default:
//         console.log(`Enter a valid day.`);

// }

// let testScore=38;
// let letterGrade;

// switch(true){

//     case testScore>=90:
//        letterGrade =`A`;
//         break;
//     case testScore>=80:
//         letterGrade =`B`;
//         break;
//     case testScore>=70:
//         letterGrade=`C`;
//         break;
//     case testScore>=60:
//         letterGrade=`D`;
//         break;
//     case testScore>=50:
//         letterGrade=`E`;
//         break;
//     case testScore>=40:
//         letterGrade=`F`;
//         break;
//     default:
//         letterGrade=`Failed`;

// }

// console.log(letterGrade);



// STRING METHODS

// let userName=`Shubom Deb`;

// userName.charAt(0);
// console.log(userName.charAt(0)); It returns the character at Index
// console.log(userName.indexOf(`b`)); Returns the index of the character 
// console.log(userName.length); Returns the lenght of the string 
// console.log(userName.trim()); Removes the whitespaces
// console.log(userName.toUpperCase());
// console.log(userName.toLocaleLowerCase());
// let userName=`Shubom Deb`;
// let result=userName.startsWith(`S`);Returns a Boolean value
// console.log(result);
// console.log(userName.repeat(4));
// console.log(userName.endsWith(`m`));


// let result= userName.includes(` `);
// if(result){
//     console.log(`Your username cant include white space.`);

// }
// else{
//     console.log(`Your username does not include a white space.`);
// }

// let phoneNumber=`123-456-7890`;
// let phoneNumber=`1234567890`;
// phoneNumber=phoneNumber.replaceAll(`-`,``);
// console.log(phoneNumber);
// phoneNumber=phoneNumber.padStart(15,0);
// console.log(phoneNumber);

// phoneNumber=phoneNumber.padEnd(15,`0`);
// console.log(phoneNumber);


// STRING SLICING

// // // const fullName=`Shubom Deb`;

// // // let firstName=fullName.slice(0,6);
// // // let lastName=fullName.slice(7,10);

// // // console.log(firstName);
// // // console.log(lastName);
// // // let firstChar=fullName.slice(0,1);
// // // let lastChar=fullName.slice(-1);

// // // console.log(`The first char is ${firstChar} & the last character is ${lastChar}`);

// // // let firstName= fullName.slice(0,fullName.indexOf(` `));
// // // let LastName= fullName.slice(fullName.indexOf(` `)+1);

// // // console.log(firstName);
// // // console.log(LastName);
// // // const email=`shubom2604@gmail.com`;

// // // let userName=email.slice(0,email.indexOf(`@`));
// // // let extention=email.slice(email.indexOf(`@`)+1);

// // // console.log(userName);
// // // console.log(extention);



// // // METHOD CHAINING

// // // without method chaining:

// // // let username=window.prompt(`Enter your Username`);
// // // // let username=`ShuBoMDeb`;

// // // username=username.trim();
// // // let letter= username.charAt(0);
// // // letter=letter.toLocaleUpperCase();

// // // let extraChar=username.slice(1);
// // // extraChar=extraChar.toLocaleLowerCase();

// // // username=letter+extraChar;

// // // alert(`Your Username is ${username}`);
// // // // console.log(`Your Username is ${username}`);

// // // With method chaining:

// // // let username=window.prompt(`Enter your Username`);

// // // username=username.trim().charAt(0).toLocaleUpperCase() + username.trim().slice(1).toLocaleLowerCase();
// // // alert(`Your username is ${username}`);

// // // LOGICAL OPERATORS
// // // AND - &&
// // // OR- ||
// // // NOT- !


// // // const temp=-45;
// // // if(temp > 0 && temp<=30){
// // //     console.log(`Weather is Good`);
// // // }
// // // else{
// // //     console.log(`The weather is Bad`)
// // // }

// // // if(temp <=0  || temp>30){
// // //     console.log(`Weather is Good`);
// // // }
// // // else{
// // //     console.log(`The weather is Bad`)
// // // }

// // // const isSunny=true;

// // // if (isSunny) {
// // //     console.log(`It is Sunny.`); 
// // // }
// // // else{
// // //     console.log(`It is cloudy.`)
// // // }

// // // if (!isSunny) {
// // //     console.log(`It is Cloudy.`); 
// // // }
// // // else{
// // //     console.log(`It is Sunny.`);
// // // }


// // // =   ASSIGNMENT OPERATOR
// // // ==  COMPARISON OPERATOR IT CHECKS IF VALUES ARE EQUAL
// // // === STRICT EQUALITY OPERATOR (COMPARES IF VALUES AND DATA TYPE ARE EQUAL)
// // // !=  NOT EQUAL TO 
// // // !== STRICT NOT EQUALITY OPERATOR 

// // // const PI=3.14;

// // // if(PI==`3.14`){
// // //     console.log(`That is PI`);
// // // }
// // // else{
// // //     console.log(`That is not PI`);
// // // }

// // // if(PI===`3.14`){
// // //     console.log(`That is PI`);
// // // }
// // // else{
// // //     console.log(`That is not PI`);
// // // }
// // // if(PI!=`3.14`){
// // //     console.log(`That is not PI`);
// // // }
// // // else{
// // //     console.log(`That is PI`);
// // // }
// // // if(PI!==`3.14`){
// // //     console.log(`That is not PI`);
// // // }
// // // else{
// // //     console.log(`That is PI`);
// // // }

// // // WHILE LOOP IN jAVASCRIPT
// // // let userName=``;
// // // while (userName===``) {
// // //     statement
// // //     increment/decrement or any way to exit the loop;
// // // }
// // // // DO-WHILE LOOP

// // // do{
// // //     statement
// // // }while(conditon);


// // // let loggedIn=false;
// // // let userName;
// // // let password;
// // // while (!loggedIn) {
// // //     userName=window.prompt(`Enter your username`);
// // //     password=window.prompt(`Enter your Password`);

// // //     if(userName === `myUsename`&&`1234`){
// // //         loggedIn=true;
// // //         window.alert(`You are logged in.`);
// // //     }
// // //     else{
// // //         window.alert(`Invalid credentials.`);
// // //     }
// // // }

// // //  do{
// // //     userName=window.prompt(`Enter your username`);
// // //     password=window.prompt(`Enter your Password`);

// // //     if(userName === `myUsename`&&`1234`){
// // //         loggedIn=true;
// // //         window.alert(`You are logged in.`);
// // //     }
// // //     else{
// // //         window.alert(`Invalid credentials.`);
// // //     }
// // // }
// // // while (!loggedIn);

// // // FOR LOOPS
// // // for(initilization declaration;condition;increment/decrement){
// // //     statement;
// // // }
// // // for (let i = 0; i <=10; i++) {
// // //     console.log(`Hello world${i}.`);

// // // }


// // // FUNCTIONS
// // // function happyBirthday(userName, age) {
// // //         console.log(`Happy birthday to you ${userName} 
// // // You are ${age} years old.`)
// // // }
// // // happyBirthday(`Shubom`, 21);
// // // happyBirthday(`Shion`, 26);

// // // function add(x,y){
// // //         result =x+y;
// // //         return result;
// // // }
// // // console.log(add(`Shubom`,`Deb`));
// // // console.log(add(5,6));

// // // function isValidEmail(email){
// // //         if(email.includes(`@`)){
// // //                 return true;
// // //         }
// // //         else{
// // //                 return false;
// // //         }
// // // }
// // // console.log(isValidEmail(`Shubom@gmail.com`));
// // // console.log(isValidEmail(`Shubomgmail.com`));

// // // VARIABLE SCOPE 
// // // function fun1(){
// // //         let x=1;
// // //         console.log(x);
// // // }
// // // function fun2(){
// // //         let x=2;
// // //         console.log(x);
// // // }

// // // ARRAYS
// // // let fruits=[`Apple`,`Orange`,`Banana`];
// // // fruits[0]=`Coconut`
// // // console.log(fruits);
// // // console.log(fruits[0]);

// // // fruits.push(`Pineapple`) //adds elements to the end of the array
// // // console.log(fruits);
// // // fruits.pop() //deletes elements to the end of the array
// // // console.log(fruits);

// // // fruits.unshift(`Pineapple`) //adds elements to the begining of the array
// // // console.log(fruits);

// // // fruits.shift()//deletes elements to the begining of the array
// // // console.log(fruits);
// // // let numOfFruits=fruits.length;
// // // console.log(numOfFruits);

// // // // let index=fruits.indexOf(`Apple`);
// // // // console.log(index)
// // // let index=fruits.indexOf(`Papaya`);
// // // console.log(index)

// // // for(let i=0;i<fruits.length;i++){
// // //         console.log(fruits[i]);
// // // }

// // // fruits.forEach(element => {
// // //         console.log(element);

// // // });

// // // for(let fruit of fruits){
// // //         console.log(fruit);
// // // }

// // // console.log(fruits.sort());
// // // console.log(fruits.sort().reverse());


// // // SPREAD OPERATORS
// // // spread operator=... allows an iterable such as an array or string to be expanded into seperate elements(unpacks the elements)

// // // let numbers=[1,2,5,98];
// // // let maximum= Math.max(...numbers)
// // // let minimum= Math.min(...numbers)
// // // console.log(maximum);
// // // console.log(minimum);

// // // let userName=`Shubom Deb`;
// // // let letters=[...userName].join(`-`);
// // // console.log(letters)

// // // let fruits=[`apple`,`coconut`,`banana`,`orange`]
// // // console.log(fruits);
// // // let vegetables=[`carrot`,`bringal`,`tomato`,`potato`,`garlic`]
// // // // let newFruits=[...fruits];
// // // let food=[...fruits,...vegetables]

// // // // console.log(newFruits);
// // // console.log(food);

// // // REST PARAMETERS
// // // // rest parameters= (...rest) allow a function to work with a variable number of arguements by bundling them into an Array. 
// // //         spread = expands an array or any itterable into seperate elements 
// // //         rest = bundles seperates elements into an array 

// // // function openFridge(...foods){
// // //         console.log(foods);
// // //         console.log(...foods);
// // // }
// // // function toGetFood(...foods){
// // //         return foods;
// // // }

// // // const food1=`pizza`;
// // // const food2=`hamburger`;
// // // const food3=`sushi`;
// // // const food4=`hotdog`;
// // // const food5=`ramen`;

// // // openFridge(food1,food2,food3,food4,food5);

// // // const foods= toGetFood(food1,food2,food3,food4,food5);

// // // console.log(foods);

// // // function sum(...numbers){
// // //         let result=0;
// // //         for(let number of numbers){
// // //                 result+=number;
// // //         }
// // //         return result;
// // // }
// // // const total=sum(1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,27,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50);

// // // console.log(`Your total is ${total}`);

// // // function getAverage(...numbers){
// // //         let result=0;
// // //         for(let number of numbers){
// // //                 result+=number;
// // //         }
// // //         return result/numbers.length;
// // // }
// // // console.log(`Your average is ${getAverage(1,3,5,7,9,11,13,15,17,19)}`);

// // // function combineStrings(...strings){
// // //         return strings.join(` `);
// // // }

// // // const fullName=combineStrings(`Mr.`,`Jittu`,`Jallad`,`XIV`);
// // // console.log(fullName);

// // // CALLBACKS

// // // Callback= a function that is passed as an arguement to another function.
// //                 // Used to handle asynchronous operations:
// //                 // 1. Reading a File. 
// //                 // 2. Network Requests.
// //                 // 3. Interacting with databases.
// //                 // "Hey when you are done clll this next."


// // // hello(leave);


// // // function hello(callback){
// // //     console.log(`Hello`);
// // //     callback();
// // // }
// // // function leave(){
// // //     console.log(`leave`);
// // // }
// // // function wait(){
// // //     console.log(`Wait`);
// // // }
// // // function goodbye(){
// // //     console.log(`Goodbye`);
// // // }


// // function sum(callback,x,y){
// //     let result =x+y;
// //     callback(result);

// // }
// // function displayConsole(result){
// //     console.log(`The sum is : ${result}`);
// // }
// // sum(displayConsole,25,50);

// // function displayPage(result){
// //    const myH1=document.getElementById(`myH1`);
// //    myH1.textContent= result;
// // }
// // sum(displayPage,33,36)


// // FOREACH METHOD 
// // forEach() = method used to iterate over the elements of an array and apply a specified function(callback) to each elements

// // array.forEach(callback)
// // element, index, array are provided

// // let numbers=[1,2,3,4,5];

// // numbers.forEach(display);
// // numbers.forEach(doubled);

// // // function display(element){
// // //     console.log(element);
// // // } 

// // function doubled(element, index, array){
// //     array[index] = element*2;
// // }
// // console.log(numbers)

// // let fruits= [`apple`,`orange`,`pineapple`,`guava`];

// // fruits.forEach(upperCase);
// // fruits.forEach(display);



// // function display(element){
// //     console.log(element)
// // }

// // function upperCase(element,index,array){
// //     array[index]=element.toUpperCase();

// // }

// // .map() = accepts a callback and applies that function to each element of an Array, then returns a new Array. 

// // const numbers=[1,2,3,4,5];

// // const squares= numbers.map(square);
// // const cubes = numbers.map(cube);

// // console.log(squares);
// // console.log(cubes);

// // function square(element){
// //     return Math.pow(element,2)
// // }
// // function cube(element){
// //     return Math.pow(element,3)
// // }

// // const students = [`Shubom`,`Shion`,`Jitesh`,`Shuba`];

// // const StudentUpper = students.map(upperCase);
// // const StudentLower = students.map(lowerCase);
// // console.log(StudentUpper);
// // console.log(StudentLower);

// // function upperCase(element){
// //     return element.toUpperCase();
// // }
// // function lowerCase(element){
// //     return element.toLowerCase();
// // }

// // const dates=[`2025-07-10`,`2024-04-26`,`2004-04-26`];
// // let formatedDates=dates.map(formatDate);
// // console.log(formatedDates);

// // function formatDate(element){
// //     const parts=element.split(`-`);
// //     return `${parts[2]}/${parts[1]}/${parts[0]}`;
// // }

// // FILTER METHOD
// // .filter() = creates a new array by filterring out elements 

// // let numbers =[1,2,3,4,5,6,7,8,9,10];
// // let evenNums= numbers.filter(isEven);
// // let oddNums= numbers.filter(isOdd);

// // console.log(evenNums);
// // console.log(oddNums);

// // function isEven(element){
// //     return element%2===0;
// // }

// // function isOdd(element){
// //     return element%2!==0;
// // }

// // const ages =[16,17,18,18,19,23]

// // const adults= ages.filter(isAdult);
// // const minors= ages.filter(isNotAdult);


// // console.log(adults);
// // console.log(minors);

// // function isAdult(element){
// //     return element>=18;
// // }

// // function isNotAdult(element){
// //     return element<18;
// // }

// // const words= [`apple`,`banana`,`orrange`,`coconut`,`kiwi`,`jackfruit`];

// // const shortWords = words.filter(getShortWords);
// // const longWords = words.filter(getLongWords);
// // console.log(shortWords);
// // console.log(longWords);

// // function getShortWords(element){
// //     return element.length<=6;
// // }
// // function getLongWords(element){
// //     return element.length>6;
// // }

// // REDUCE METHOD
// // .reduce() =reduce the elements of an array to a single value

// // const prices = [5,30,10,15,25,20];

// // const total = prices.reduce(sum);

// // console.log(total.toFixed(2));

// // function sum(accumulator, element){
// //     return accumulator+element;
// // }

// // const grades = [75,65,80,90,89,64];

// // const maximum = grades.reduce(getMax);
// // const minimum = grades.reduce(getMin);
// // console.log(maximum);
// // console.log(minimum)
// // function getMax(accumulator, element){
// //     return Math.max(accumulator,element);
// // }
// // function getMin(accumulator, element){
// //     return Math.min(accumulator,element);
// // }

// // FUNCTION EXPRESSION 

// // function declaration = defines a reuseable block of code that performs a specific task. 

// // function hello(){
// //     console.log(`hello!!`);
// // }
// // setTimeout(hello,1000);
// // function expressions = a way to define functions as values or variable. 

// // const hello= function(){
// //     console.log(`Hello!!`);
// // }

// // hello();

// // setTimeout(function(){
// //     console.log(`Hello!!`)
// // },3000);

// // const numbers =[1,2,3,4,5,6,7,8,9,10];
// // // // const squares = numbers.map(function (element){
// // // //     return Math.pow(element,2);
// // // // }
// // // // );
// // // // // const squares = numbers.map(square);
// // // // console.log(`Squares : ${squares}`)


// // // // function square(element){
// // // //     return Math.pow(element,2);
// // // // }

// // // const cube = numbers.map(function(element){
// // //     return Math.pow(element,3);
// // // });

// // // console.log(`cubes : ${cube}`);

// // // // const evenNums = numbers.filter(function(element){
// // // //     return element%2===0;
// // // // })
// // // const evenNums = cube.filter(function(element){
// // //     return element%2===0;
// // // })

// // // console.log(`Even Numbers : ${evenNums}`);

// // const Total = numbers.reduce(function(accumulator,element){
// //     return accumulator+element;
// // });

// // console.log(Total);

// // ARROW FUNCTIONS

// // arrow functions = a consise way to write function expressions good for simple functions that you only use once.
// // (parameters)=> some code.
// // function hello(){
// //     console.log(`Hello!`);
// // }
// // same 
// // const hello= function(){
// //     console.log(`Hello!`);
// // }
// const hello = ()=>{
//     console.log(`Hello user`);
// }

// hello();
// const greet=(name)=>console.log(`Good morning ${name}`);
// greet(`Shubom`);

// setTimeout(hello,2000);
// function hello(){
//     console.log(`Hello using function declaration`);
// }

// setTimeout(function(){
//     console.log(`Hello using functioon expression`)
// },1000);

// setTimeout(()=>console.log(`Hello using arrow function`),1000);`
// const numbers=[1,2,3,4,5,6];

// const squares = numbers.map((element)=> Math.pow(element,2));
// const cubes= numbers.map((element)=> Math.pow(element,3));
// const isEven = numbers.filter((element)=>{
//     return element%2===0}
// )
// const isEvenSquare = squares.filter((element)=>{
//     return element%2===0}
// )
// const isEvenCubes = cubes.filter((element)=>{
//     return element%2===0}
// )

// const totalNumbers= numbers.reduce((accumulator,element)=>{
//     return accumulator+element;
// })

// const totalSquares= squares.reduce((accumulator,element)=>{
//     return accumulator+element;
// })

// const totalCubes= cubes.reduce((accumulator,element)=>{
//     return accumulator+element;
// })

// console.log(squares);
// console.log(cubes);
// console.log(isEven);
// console.log(isEvenSquare);
// console.log(isEvenCubes);
// console.log(totalNumbers);
// console.log(totalSquares);
// console.log(totalCubes);



//                 ***********JAVASCRIPT OOPS***********


// object = a collection of related properties /or methods that can represents real world objects (people, products, places)
//             Object ={key:CSSMathValue,
//                 function()
//             }

// const person1 ={
//     firstName:`Shubom`,
//     lastName:`Deb`,
//     age:21,
//     isEmployed:true,
//     sayHello: function(){console.log(`Hi I am Shubom Deb`)},
//     sayBye: ()=>console.log(`GoodBye`)
// }

// const person2 ={
//     firstName:`Shion`,
//     lastName:`Deb`,
//     age:20,
//     isEmployed:false,
//     sayHello: function(){console.log(`Hi I am Shion Deb`)},
//     sayBye: ()=>console.log(`GoodBye`)
// }

// console.log(person1.firstName);
// console.log(person1.lastName);
// console.log(person1.age);
// console.log(person1.isEmployed);
// person1.sayHello();
// person1.sayBye();

// console.log(person2.firstName);
// console.log(person2.lastName);
// console.log(person2.age);
// console.log(person2.isEmployed);
// person2.sayHello();
// person2.sayBye();

// THIS KEYWORD
// this = reference to the object where this is useDebugValue(The object depends on the imediate context)
// person.name = this.name

// const person1 ={
//     name:`Spongebob`,
//     favFood:`hamburgers`,
//     sayHello:function(){console.log(`Hi I am ${this.name}`)},
//     eat: function(){console.log(`${this.name} is eating ${this.favFood}`)}
// }
// const person2 ={
//     name:`Patrick`,
//     favFood:`Pizza`,
//     sayHello:function(){console.log(`Hi I am ${this.name}`)},
//     eat: function(){console.log(`${this.name} is eating ${this.favFood}`)}
// }

// person1.sayHello();
// person1.eat();
// person2.eat();
// console.log(this);

// CONSTRUCTOR
// constructor = special method for defining the properties and methods of objects. 

// function Car(make, model, year, color){
//     this.make=make,
//     this.model=model,
//     this.year=year,
//     this.color=color,
//     this.drive =function(){console.log(`You drive the ${this.model}`)}
// }

// const car1 = new Car(`Ford`,`Mustang`,2025,`Red`);
// const car2 = new Car(`BMW`,`Series 3`,2021,`Black`);

// console.log(car1.make);
// console.log(car1.model);
// console.log(car1.year);
// console.log(car1.color);

// console.log(car2.make);
// console.log(car2.model);
// console.log(car2.year);
// console.log(car2.color);

// car1.drive();
// car2.drive();

// CLSASSES IN JAVASCRIPT

// class = (ES6 feature) that provides a more structured and cleaner way to work with objects compared to traditioonal constructor functions export, static keyword, encaplsulation, inheritence

// class Products{
//     constructor(name,price){
//         this.name=name,
//         this.price=price
//     }
//     displayProduct(){
//         console.log(`Product : ${this.name}`);
//         console.log(`Price : $ ${this.price.toFixed(2)}`);
//     }
//     calculateTotal(salesTax){
//         return this.price +(this.price*salesTax)
//     }
// }

// const salesTax=0.05;
// const product1 = new Products(`Shirt`,199);
// const product2 = new Products(`Pants`,168);

// product1.displayProduct();
// product2.displayProduct();

// let total=product1.calculateTotal(salesTax);
// console.log(`Total price of ${product1.name} with tax: $${total}`);

// total= product2.calculateTotal(salesTax);
// console.log(`Total price of ${product2.name} with tax: $${total}`);


// STATIC KEYWORD
// satic is a keyword that defines properties and methods that belongs to the class rather than the objects. 

// class MathsUtil{
//     static PI =3.14159;

//     static getDiameter(radius){
//         return radius*2;
//     }

//     static getCircumference(radius){
//         return 2*this.PI*radius;
//     }

//     static getArea(radius){
//         return this.PI * (radius**2);
//     }
// }

// console.log(MathsUtil.PI);

// console.log(MathsUtil.getCircumference(10));
// console.log(MathsUtil.getArea(10));

// class User{
//     static UserCount=0;

//     constructor(userName){
//         this.userName=userName,
//         User.UserCount++;
//     }

//     sayHello(){
//         console.log(`Hello ${this.userName}`)
//     }

//     static getUserCount(){
//         console.log(`There are ${this.UserCount} users online.`)
//     }
// }

// const user1= new User(`Ram`);
// const user2= new User(`Shyam`);
// const user3= new User(`Jodhu`);
// const user4= new User(`Modhu`);
// const user5= new User(`Chodu`);

// console.log(user1.userName);
// console.log(User.UserCount);
// user1.sayHello();
// user2.sayHello();
// user3.sayHello();
// user4.sayHello();
// user5.sayHello();
// User.getUserCount();


// INHERITENCE

// class Animal{
//     alive= true;

//     eat(){
//         console.log(`This ${this.name} is eating`);
//     }

//      sleeping(){
//         console.log(`This ${this.name} is sleeping`);
//     }
// }

// class Rabbit extends Animal{
//     name=`Rabbit`;
//     run(){
//         console.log(`Running....`);
//     }
// }
// class Fish extends Animal{
//     name=`Fish`;
//     swim(){
//         console.log(`Swimming....`);
//     }
// }
// class Hawck extends Animal{
//     name=`Hawck`;
//     fly(){
//         console.log(`Flying....`);
//     }
// }

// const rabbit = new Rabbit();
// const fish = new Fish();
// const hawck = new Hawck();

// rabbit.eat();
// rabbit.sleeping();
// rabbit.run();

// fish.eat();
// fish.sleeping();
// fish.swim();

// hawck.eat();
// hawck.sleeping();
// hawck.fly();

// SUPPER KEYWORD

// supper = a keyword used in inherited clases to call the constructor or access the methods of the parent (supperclass) 
// this= this (object) 
// super= the parent


// class Animal{
//     constructor(){

//     }
// }

// class Rabbit extends Animal{
//     constructor(name,age,runSpeed){
//         super();
//         this.name=name;
//         this.age=age;
//         this.runSpeed=runSpeed;
//     }
// }

// class Fish extends Animal{
//      constructor(name,age,swimSpeed){
//         super();
//         this.name=name;
//         this.age=age;
//         this.swimSpeed=swimSpeed;
//     }
// }

// class Bird extends Animal{
//      constructor(name,age,flySpeed){
//         super();
//         this.name=name;
//         this.age=age;
//         this.flySpeed=flySpeed;
//     }
// }

// const rabbit =new Rabbit(`Rabbit`,1,28);
// const fish = new Fish(`Fish`,2,12);
// const hawck= new Bird(`Hawck`,3,145);

// console.log(hawck.flySpeed)

// GETTERS AND SETTERS IN JAVASCRIPT

// getter = special method that makes a property readable 
//  setter = special method that makes a property writeable 
// validates reading/writing of a property 

// class Rectangle {
//     constructor(width, height) {
//         this.width = width;
//         this.height = height;
//     }

//     set width(newWidth) {
//         if (newWidth > 0) {
//             this._width = newWidth;
//         } else {
//             console.error(`Width must be a positive number.`);
//         }
//     }
//     get width() {
//         return this._width;
//     }

//     set height(newHeight) {
//         if (newHeight > 0) {
//             this._height = newHeight;
//         } else {
//             console.error(`Height must be a positive number.`);
//         }
//     }
//     get height() {
//         return this._height;
//     }
//     get area(){
//         return this._height * this._width;
//     }
// }

// const rectangle = new Rectangle(3,4);

// // This is not recommended, but shows how you can still overwrite internal fields:
// rectangle._height = 5;
// rectangle._width = 6;

// console.log(rectangle.width, rectangle.height); // 6 5
// console.log(rectangle.area);


// class Person{
//     constructor(firstName,lastName,age){
//         this.firstName=firstName;
//         this.lastName=lastName;
//         this.age=age;

//     }

//     set lastName(newLastName){
//         if(typeof newLastName===`string`&& newLastName.length > 0){
//             this._lastName= newLastName;
//         }
//         else {
//             console.error(`Last name must be an non empty string`)
//         }
//     }

//      set firstName(newFirstName){
//         if(typeof newFirstName===`string`&& newFirstName.length > 0){
//             this._firstName= newFirstName;
//         }
//         else {
//             console.error(`Last name must be an non empty string`)
//         }
//     }

//     set age(newAge){
//         if(typeof newAge === `number`&& newAge>0){
//             this._age=newAge;
//         }
//         else{
//             console.error(`Age cannot be less than 0`);
//         }
//     }
//     get firstName(){
//         return this._firstName;
//     }

//     get lastName(){
//         return this._lastName;
//     }

//     get age(){
//         return this._age;
//     }
//     get fullName(){
//         return this._firstName+` `+this._lastName;
//     }

// }

// const person = new Person(`Shubom`,`Deb`,21);

// console.log(person.lastName,person.firstName,person.age);
// console.log(person.fullName);


// DESTRUCTURING IN JAVASCRIPT
// destructuring = extracting values from arrays and objects then assign them to variables in a convinent way 
// []= to perform array destructuring
// {}= to perform objects destructuring

// -----------------------------EXAMPLE 1-----------------------------
// SWAP THE VALUE OF TWO VARIABLES
//  let a=1;
//  let b=2;
//  [a,b]=[b,a];

//  console.log(a,b);

// -----------------------------EXAMPLE 2-----------------------------
// SWAP 2 ELEMENTS IN AN ARRAY 
// const colors= [`red`,`green`,`blue`,`orange`,`black`,`white`];

// [colors[0],colors[5]]=[colors[5],colors[0]];

// console.log(colors);

// -----------------------------EXAMPLE 3-----------------------------
// ASSIGN ELEMENTS TO VARIABLES

// const colors= [`red`,`green`,`blue`,`orange`,`black`,`white`];

// // let [firstColor,secondColor,thirdColor,...extraColor]=colors;

// // console.log(firstColor);
// // console.log(secondColor);
// // console.log(thirdColor);
// // console.log(extraColor);

// // -----------------------------EXAMPLE 4-----------------------------
// // EXTRACTING VALUES FROM OBJECTS
// const person1={
//     firstName:`Shubom`,
//     secondName:`Deb`,
//     age:21,
//     job:`Devloper`
// }

// const person2={
//     firstName:`Niroj`,
//     secondName:`Singh`,
//     age:20,
//     job:`Devloper`
// }

// const {firstName,secondName,age,job}=person1;

// console.log(firstName+` `+secondName+` `+age+` `+job);

// -----------------------------EXAMPLE 4-----------------------------
// DESTRUCTURE IN FUNCTION PARAMETER

// function displayPerson({firstName,lastName,age,job=`unemployed`}){
//     console.log(`Name : ${firstName} ${lastName}`);
// // // //     console.log(`Age : ${age}`);
// // // //     console.log(`Job : ${job}`);
// // // // }

// // // // const person1={
// // // //     firstName:`Shubom`,
// // // //     lastName:`Deb`,
// // // //     age:21,
// // // //     job:`Devloper`
// // // // }

// // // // const person2={
// // // //     firstName:`Niroj`,
// // // //     lastName:`Singh`,
// // // //     age:20,
// // // //     // job:`Devloper`
// // // // }

// // // // displayPerson(person1);
// // // // displayPerson(person2);

// // // // NESTED OBJECTS IN JAVASCRIPT
// // // // NESTED OBJECTS = OBJECTS INSIDE OF OTHER OBJECTS. ALLOWS YOU TO REPRESENT MORE COMPLEX DATA STRUCTURES CHILD OBJECT IS ENCLOSED BY A PARENT OBJECT. 

// // //                 // Person{Address{},ContactInfo{}}
// // //                 // ShoppingCart{Keyboard{},Mouse{},Monitor{}}

// // // const Person={
// // //     fullName: `Shubom Deb`,
// // //     age:21,
// // //     isStudent: true,
// // //     hobbies:[`singing`,`coding`,`cricket`,`chess`],
// // //     address: {
// // //         HouseNo:264,
// // //         Street:`Labac Road`,
// // //         Village:`Pailapool`,
// // //         PO:`Pailapool`,
// // //         PinCode:788098,
// // //         Country:`India`
// // //     }
// // // }
// // // // console.log(Person.fullName);
// // // // console.log(Person.age);
// // // // console.log(Person.isStudent);
// // // // console.log(Person.hobbies);
// // // // console.log(Person.address);
// // // // console.log(Person.address.Street);
// // // // console.log(Person.address.Village);
// // // // console.log(Person.address.HouseNo);
// // // // console.log(Person.address.PO);
// // // // console.log(Person.address.PinCode);
// // // // console.log(Person.address.Country);

// // // for(const property in Person.address){
// // //     console.log(Person.address[property]);
// // // }

// // class Address{
// //     constructor(Street,City,Country){
// //         this.Street=Street;
// //         this.City=City;
// //         this.Country=Country;
// //     }
// // }
// // class Person{
// //     constructor(Name,Age,...address){
// //         this.Name=Name;
// //         this.Age=Age;
// //         this.address=new Address(...address);
// //     }
// // }

// // let person1= new Person(`Shubom Deb`,21,`DurgaShankar Lane`,`Silchar`,`India`);
// // let person2= new Person(`Neelot`,20,`Vivekananda Road`,`Silchar`,`India`);
// // let person3= new Person(`Raj`,21,`Samshan Road`,`Silchar`,`India`);


// // console.log(person1.Name);
// // console.log(person1.address.Street);
// // console.log(person1.address);

// // console.log(person2.Name);
// // console.log(person2.address.Street);
// // console.log(person2.address);

// // console.log(person3.Name);
// // console.log(person3.address.Street);
// // console.log(person3.address);

// // ARRAY OF OBJECTS

// const fruits=[
//     {
//         name:`Apple`,
//         color:`red`,
//         calories:95
//     },

//     {
//         name: "Banana",
//         color: "Yellow",
//         calories: 105      
//     },

//     {
//         name: "Orange",
//         color: "Orange",
//         calories: 62       
//     },


//     {
//         name: "Mango",
//         color: "Orange",
//         calories: 99       
//     }
// ]

// console.log(fruits[0].name);
// console.log(fruits[0].calories);

// fruits.push({name: "Grapes", color: "Purple", calories: 62});

// console.log(fruits);

// fruits.pop();
// console.log(fruits);

// fruits.forEach(fruit =>{
//     console.log(fruit.color);
// })

// const fruitNames= fruits.map(fruit =>{
//     console.log(fruit.name);
// })

// const fruitColor= fruits.filter(fruit=>fruit.color===`Yellow`);

// console.log(fruitColor);

// const lowCalFruits= fruits.filter(fruit=>fruit.calories<100);
// console.log(lowCalFruits);

// const highCalFruits= fruits.filter(fruit=>fruit.calories>100);
// console.log(highCalFruits);

// const maxFruit=fruits.reduce((max, fruit)=>fruit.calories>max.calories ? fruit: max);

// console.log(maxFruit);

// const leastFruit=fruits.reduce((min, fruit)=>fruit.calories<min.calories ? fruit:min);
// console.log(leastFruit);

// SORT METHOD IN JAVASCRIPT

// sort() = method used to sort elements of array in place. Sorts elements as strings in lexographic ondragover, no9ot alphabetical 

// lexographic = (alphabets+numbers+symbols) as strings 
// example of lexographical order =

// let fruits=[`apple`,`orange`,`bannana`,`pineapple`,`coconut`];

// fruits.sort();
// console.log(fruits);
// Returs lexographic sorted array 
// let num=[1,10,5,3,6,8,9,4,2,7,0];
// num.sort();
// console.log(num);

// Returns ascendeing sorted array 
// let num=[1,10,5,3,6,8,9,4,2,7,0];
// num.sort((a,b)=>a-b);
// console.log(num);

//  Returns descending sorted array 
// let num=[1,10,5,3,6,8,9,4,2,7,0];
// num.sort((a,b)=>b-a);
// console.log(num);

// const people=[{name:`Shubom`,age:21,cgpa:7.03},
//     {name:`Sanchita`,age:19,cgpa:8.43},
//     {name:`Kabir`,age:22,cgpa:7.53},
//     {name:`Diwp`,age:23,cgpa:7.43}
// ]

// people.sort((a,b)=>a.age-b.age);
// console.log(people);
// people.sort((a,b)=>a.name.localeCompare(b.name));
// console.log(people);

// for reverse 
// people.sort((a,b)=>b.name.localeCompare(a.name));
// console.log(people);


// ARAY SHUFFELING

// const cards=[`A`,2,3,4,5,6,7,8,9,10,`J`,`Q`,`K`];

// cards.sort(()=>Math.random()-0.5);
// console.log(cards);

// Fisher-Yates Algorithm
// shuffle(cards)

// console.log(cards)

// function shuffle(array){
//     for(let i=array.length - 1;i>0;i--){
//         const random= Math.floor(Math.random()*(i));

//         [array[i],array[random]]=[array[random],array[i]];
//     }
// }

// DATE OBJECT IN JAVASCRIPT

// Date objects = Opbjects that contains values that represents dates and times these objects can be changed and formated. 

// Date(year,month,day, hour, minute, second, ms)

// const date= new Date(2025,7,12,11,13,34);
// const date= new Date("2025-07-11T16:23:31.366Z");
// const date= new Date(70000000);
// const date= new Date();

// console.log(date.toString());
// const year=date.getFullYear();

// console.log(year);

// const month=date.getMonth();
// console.log(month+1);

// const day=date.getDate();
// console.log(day);

// const hour=date.getHours();
// console.log(hour);

// const minutes=date.getMinutes();
// console.log(minutes);

// const seconds=date.getSeconds();
// console.log(seconds);

// const miliseconds=date.getMilliseconds();
// console.log(miliseconds);

// const dayOfweek=date.getDay();
// console.log(dayOfweek);

// date.setFullYear(2026);
// date.setMonth(3);
// date.setDate(26);
// date.setHours(0);
// date.setMinutes(36);
// date.setSeconds(59);
// date.setMilliseconds(346);

// console.log(date.toString());

// const date1= new Date(`2024=12-31`);
// const date2= new Date(`2024=01-01`);

// if(date2>date1){
//     console.log(`Happy New year!!`);
// }
// else{
//     console.log(`Its not new year`);
// }

// CLOSURE IN JAVASCRIPT
// A Function defined inside of anmother function, the innner function has access to the variables and scope of the other function. 
// Allow for private variables and state maintainance Used frequently in JS frameworks: React, vue, Angular. 

// function outter(){
//     let message=`hello user`;
//     function inner(){
//         console.log(message);
//     }
//     inner();
// }

// outter();
// function createCounter()
// {
//     let count=0;
//     function increment()
//     {
//         count++;
//         console.log(`count increased to ${count}`);
//     }

//     function getCount(){
//         return count;
//     }

//     return {increment,getCount};
// }
// const counter= createCounter();
// counter.increment();
// counter.increment();
// counter.increment();
// counter.increment();
// counter.increment();

// console.log(`The current count is ${counter.getCount()}`)
// function createGame() {
//     let score = 0;

//     function increaseScore(points) {
//         score += points;
//         console.log(`+${points}pts`);
//     }
//     function decreaseScore(points) {
//         score -= points;
//         console.log(`-${points}pts`);
//     }

//     function getScore() {
//         return score;
//     }



//     return {increaseScore,decreaseScore,getScore}
// }

// const game1=createGame();

// console.log(game1.getScore());
// game1.increaseScore(5);
// console.log(game1.getScore());
// game1.decreaseScore(3);
// console.log(game1.getScore());

// setTimeout FUNCTION IN JAVASCRIPT

// setTimeout() = function in JavaScript allows you to schedule the execution of a function after a time(milliseconds) 
// Times are approximate (varies basedon the workload of the JavaScript runtime env.)
// setTimeout(useCallback, delay)

// function sayHello(){
//     console.log(`Hello`);
// }

// setTimeout(sayHello,6000)

// setTimeout(function(){console.log(`Hello`)},2000);
// clearTimeout(timeoutId)=can cancel a timeout before it trigers.

// const timeoutId=setTimeout(()=>console.log(`hello`),3000);

// clearTimeout(timeoutId);

// ES6 MODULE 
// An external file that contains reuseable codes that can be exported into other javaScript files. 
// Write reuseable codes for many different apps.
// // Can contain variables, classes, function.... and more Introduced as a part of ECMASCRIPT 2015 update.



// ASYNCHRONUS CODE IN JAVASCRIPT

// synchronous = Executes line by line in sequential manner code that waits for an operation to complete. 

// asynchronous = Allows multiple operations to be performed concurrently without waiting doesn't  block the execution flow and allows the program to continue (I/O operation, network requests, feching data) handled with callbacks , promises ,Async/Await.

// function func1(callback) {
//     setTimeout(()=>{console.log(`Task1`);callback();},3000)
// }
// function func2() {
//     console.log(`Task2`);
//     console.log(`Task3`);
//     console.log(`Task4`);
// }

// func1(func2); 

// ERROR HANDELING IN JAVASCRIPT

// Error =An object that is createed to reporesent a problem that occurs 
            // occurs often with user input or establishing a connection.
            // try{}
            // catch{}
            // finally{}

// try{
//     console.log(x);
// }
// catch(error){
//     console.log(error);
// }
// finally{
//     console.log(`You have reached the end of the program.`)
// }


// try{
//     const divident = window.prompt(`Enter a divident`);
// const divisor = window.prompt(`Enter a divisor`);

// const result= divident/divisor;
// window.alert(result);
// console.log(result);

// if(divisor==0){
//     throw new Error(`You cant divide by zero.`)
// }
// if(divident==NaN ||  isNaN(divident)){
//     throw new Error(`Values must be a number`)
// }
// }
// catch(error){
//     console.error(error)
//     window.alert(error)
// }


// DOM = DOCUMENT OBJECT MODEL 
//     Object{} that represents the page that you see in the web browser and provides you with an API to interact with it. 
//     Web browser constructs the DOM when it loads an HTML document, and structure all the elements in treelike representation. JaxaScript can access the DOM to dynamically change the content, structure of the webpage.

// ELEMENTS SELECTORS IN JAVASCRIPT
// document.getElementById();
// document.getElementsByClassName();
// document.getElementsByTagName();
// document.querySelector();
// document.querySelectorAll();

// DOM NAVIGATION IN  JAVASCRIPT = The process of navigaing through the structure of an html document using Javascript

// document.firstElementChild
// document.lastElementChild
// document.nexElementtSibling
// document.previousElementSibling
// document.parentElement
// document.children

// eventListner = Listen for specific events to create interactive web pages events : click , mouseover, mouseout, .addEventListner(event,callback);

// nodelist = Static collection of HTML elements by (ID< class , element)
// Can be created by using querySelectorAll()
// Similar to an array, but no (Map, FileSystemEntry, reduce)
// NodeList wont update automatically reflect changes. 


// CALLBACK HELL 
// Callback hell = Situation in JavaScript where callBacks are nested with other call backs to the degree where the code is difficult to read. Old patern to handle asynchronous functions. 
// Use Promises + async/await to avoid Callback Hell 
// function task1(callback){
//     setTimeout(() => {
//         console.log(`Task 1 complete`);
//         callback();
//     }, 2000);
// }
// function task2(callback){
//     setTimeout(() => {
//         console.log(`Task 2 complete`);
//         callback();
//     }, 1000);
// }
// function task3(callback){
//     setTimeout(() => {
//         console.log(`Task 3 complete`);
//         callback();
//     }, 3000);
// }
// function task4(callback){
//     setTimeout(() => {
//         console.log(`Task 4 complete`);
//         callback();
//     }, 4000);
// }
// function task5(callback){
//     setTimeout(() => {
//         console.log(`Task 5 complete`);
//         callback();
//     }, 2000);
// }

// // Execute tasks in order
// task1(() => {
//     task2(() => {
//         task3(() => {
//             task4(() => {
//                 task5(() => {
//                     console.log(`All Task Completed`);
//                 });
//             });
//         });
//     });
// });

// Promises in javascript

// Promise = An object that manages asynchronous operations,
// Wrap a Promise Object around {asynchronous  code}
// "I Promise to return a value"
// PENDING --> RESOLVED or RESERVED
// new Promise((resolve, reject) => {asychronous code})

// DO THESE CHORES IN ORDER 
//  1. WALK THE DOG.
//  2. CLEAN THE KITCEN.
//  3. TAKE OUT THE TRASH. 

// function walkdog(callback){
//     setTimeout(()=>{
//         console.log(`You walk the dog.`);
//         callback();
//     },1500);
// }
// function cleanKitchen(callback){
//     setTimeout(()=>{
//         console.log(`Kitchen cleaned.`);
//         callback();
//     },2500);
    
// }
// function trashOut(callback){
//     setTimeout(()=>{
//         console.log(`You took out the trash`);
//         callback();
//     },500);
    
// }

// walkdog(()=>{
//     cleanKitchen(()=>{
//         trashOut(()=>{
//             console.log(`All task completed`);
//         })
//     })
// })