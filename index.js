/*console.log("I like pizza!");
console.log("Its really good");

window.alert("I really love pizzza");

//this is a comment*/
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//9/09/2023

// A variable is a container for storing data
// A variable behaves as if it was the value that it contains

/* two steps
1.declartion (var,let,const)
2.Assignment(=assignment operator)

 let firstName="Nitheesh prabhu"//strings
 let age=21;//number
 let student=true;//boolean

 console.log("Hello",firstName);
 console.log("you are", age,"years old");
 console.log("Enrolled:",student);

 document.getElementById("p1").innerHTML = "Hello "+ firstName;
 document.getElementById("p2").innerHTML ="you are "+ age + " years old";
 document.getElementById("p3").innerHTML ="Enrolled "+ student;
 */

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
 /*
 arithmatic expression is a combination of
 operands (values,variable,etc)
 operators(+ - * / %)
 that can be evalutaed to value
 ex. y=x+5;
 */
/*
let students = 20;

 students += 1;
 students -= 1;
 students /= 1;
 console.log(students);*/
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
 /*
 How to accept user  input

 easy way with window prompt

 let username= window.prompt("what is your name?");
 console.log(username); */

 // difficult way html textbox*/

 /*
 let username;

 document.getElementById("myButton").onclick = function(){

    username = document.getElementById("myText").value;
    console.log(username);
    document.getElementById("myLabel").innerHTML = "Hello " +username;
    
 }*/
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
 //Type conversion = change the data type of value to anthore (strings,number,boooleans)
/*
let age=window.prompt("How old are you?");
console.log(typeof age);
age=Number(age);
age+=1;
console.log("happy Birthday you are", age ,"years old!");
*/
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*
let x;
let y;
let z;

x=Number("2.11");
y=String(222);
z=Boolean("");
console.log(x, typeof x);
console.log(y,typeof y);
console.log(z,typeof z);
*/
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//constant = A variable that cant be changed(security)
/*
const PI=3.14159;
let radius;
let circumference;

radius=window.prompt("what is the radius of the circle?");
radius=Number(radius);


circumference=2*PI*radius;
console.log("The circumference:", circumference);*/

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//math function
/*
let x=-3.1432;
let y=5;
let z=9;
let maximum;
let minimum;*/

/*
x=Math.round(x);
x=Math.floor(x);
x=Math.ceil(x);
x=Math.sqrt(x);
x=Math.abs(x);
maximum=Math.max(x,y,z);
minimum=Math.min(x,y,z);
console.log(x);
*/
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//find the sqrt of two variable using js..
/*
let a;
let b;
let c;

a=window.prompt("enter the side A");
a=Number(a);


b=window.prompt("enter the side B");
b=Number(b);

c= Math.pow(a,2) +Math.pow(b,2);
c=Math.sqrt(c);
console.log("sqrt of Number",c);*/
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*
document.getElementById("SubmitButton").onclick=function(){
   a=document.getElementById("aTextBox").value;
   a=Number(a);
   b=document.getElementById("bTextBox").value;
   b=Number(b);
   c= Math.sqrt(Math.pow(a,2)+ Math.pow(b,2));
   document.getElementById("cLabel").innerHTML="Side C:"+c;
}*/
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//counter program....
/*
let count=0;

document.getElementById("decreaseBtn").onclick=function(){
   count-=1;
   document.getElementById("countLabel").innerHTML=count;

}

document.getElementById("resetBtn").onclick=function(){
   count=0;
   document.getElementById("countLabel").innerHTML=count;
}

document.getElementById("increaseBtn").onclick=function(){
   count+=1;
   document.getElementById("countLabel").innerHTML=count;
}
*/
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Games java script;
/*
let x= Math.floor(Math.random()*6)+1;
let y=Math.floor(Math.random()*6)+1;
let z=Math.floor(Math.random()*6)+1;
console.log(x);
console.log(y);
console.log(z);
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

let x;
let y;
let z;
document.getElementById("rollButton").onclick=function(){
    x= Math.floor(Math.random()*6)+1;
    y=Math.floor(Math.random()*6)+1;
    z=Math.floor(Math.random()*6)+1;
    document.getElementById("xlabel").innerHTML=x;
    document.getElementById("ylabel").innerHTML=y;
    document.getElementById("zlabel").innerHTML=z;
}
*/
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//useful string properties and methods......
/*

let userName= " Nitheesh Prabhu";
console.log(userName.length);
console.log(userName.charAt(3));
console.log(userName.indexOf("u"));
console.log(userName.lastIndexOf("P"));
userName=userName.trim();
userName=userName.toUpperCase();
userName=userName.toLowerCase();

 console.log(userName);*/
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//9/09/2023

 //slice() extracts a section of a string and returns it as a new string,
 // without modifying strings;...
 /*
let fullName="Nitheesh Prabhu";
let firstName;
let lastName;

firstName=fullName.slice(0,8);
lastName=fullName.slice(9);
console.log(firstName);
console.log(lastName);
*/
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Method chaining =calling one method after 
//another in one continuous line of code...
/*
let userName= "nitheesh";

let letter= userName.charAt(0).toUpperCase().trim();
console.log(letter);*/
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//if statement= A Basic from of decision making if  a 
// condition is true,then do something
//if not,then don't do it....
/*
let age=21;
if(age>=18){
   console.log("You are an adult");
}else{
   console.log("You are an child");
}


let online=true;
if(online){
   console.log("You are online!");
}else{
   console.log("You are offline");
}
*/
/*
document.getElementById("myButton").onclick= function(){
   
   const myCheckBox=document.getElementById("myCheckBox");
   const visaBtn = document.getElementById("visaBtn");
   const mastercardBtn = document.getElementById("mastercardBtn");
   const paypalBtn = document.getElementById("paypalBtn");

   if(myCheckBox.checked){
       console.log("you are Subscribed");
   }
   else{
      console.log("you are not Subscribed");
   }

   if(visaBtn.checked){
      console.log("You are paying a Visa");
   }
   else if(mastercardBtn.checked){
     console.log("You are paying a master card");
   }
   else if(paypalBtn.checked){
      console.log("You are paying a paypal card");
   }
   else{
      console.log("you must select a payment type!");
   }
}
*/
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//10/09/2023

//switch = statement that examines a value for a match against many
//case clauses more efficient that many "else if " statements....
/*
let grade="";
switch(grade){
   case "A":
      console.log("You Did Great!");
      break;
   case "B":
      console.log("You Did Good!");
      break;
   case "C":
      console.log("You Did OK OK!");
      break;
   case "D":
         console.log("You passed!");
         break;
   case "F":
         console.log("You Failed!");
         break;
   default: console.log("There is a No grade");
}
*/
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Give an ability to check more than one condition concurrently....
//&& And (Both must be true)
//|| OR (Either one condition can be true)
/*
let temp=45;
if(temp>0 && temp<30){
   console.log("The Temperture Is Good");
}
else{
   console.log("the temperture is bad!");
}
*/
/*

let temp=45;
if(temp>0 || temp<30){
   console.log("The Temperture Is Good");
}
else{
   console.log("the temperture is bad!");
}
*/
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Not Logical operator
//typically used to reverse a condition boolean value
//true-> false  false->true;
/*
let temp=-15;
let sunny=true;
if(!(temp>0)){
   console.log("Its cold outside");
}
else{
   console.log("its warm outside");
}

if(!sunny){
   console.log("its cloudy outside");
}
else{
   console.log("Its warm outside");
}
*/
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//while loop=repeat some code 
//while some condition is true
//potentially infinte...
/*
let userName ="";
while(userName==""|| userName==null){
   userName = window.prompt("Enter your name");
}
console.log("Hello",userName);
*/
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//do while loop-->it will do something and then check the condition
/*let userName;
do{
  userName = window.prompt("Enter your userName");
}while(userName =="")
console.log("hello",userName);*/
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//for loop--> it will repeat the code some certain amount of time..
/*
for(let i=0; i<10; i+=1){
   console.log(i);
}
console.log("Happy Java script learning");
*/
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//break and continue statement...
/*
for(let i=0; i<=20; i+=1){
   if(i==13){
      break;
      continue;
   }
   console.log(i);
}*/
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Nestead Loop
/*
let symbol=window.prompt("enter the symbol");
let rows=window.prompt("enter the number of rows");
let columns=window.prompt("enter the number of columns");

for(let i=1; i<=rows; i+=1){
   for(let j=1; j<=columns; j+=1){
     document.getElementById("myRectangle").innerHTML+= symbol;
   }
   document.getElementById("myRectangle").innerHTML+="<br/>"
}
*/
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//11/09/2023

//function:Define the code once ,and use it many times
//to prefrom some code,call the function name......
//Function  has access to global variable .. A global variable is a variable that declare outside the any function.

/*
startProgram();

 function startProgram(){
     let userName= "Nitheesh";

     happyBirthDay(userName);
}


function happyBirthDay(a){
   console.log("Happy Birthday to you");
   console.log("Happy Birthday to you");
   console.log("Happy Birthday to you",a);
   console.log("Happy Birthday to you");
}*/

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Retrun statement is used  to return a value back to the place were you invoke the function 
/*
let area;
let width;
let height;

width=window.prompt("Enter the width of the rectangle");
height=window.prompt("Enter the heigth of the rectangle");

area = getArea(width,height);

console.log("The Area Of the Rectangle is:" + area);
 
function getArea (width,height){
   let result= width * height;
   return result;
}*/
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//ternary operator =short cut of if else statement 
// takes 3 operands 
// 1. condition  with?
// 2.experssion  if True:
// 3.experssion  if false:
   // codition  ? exprIfTrue:exprIfFalse.
/*
   let  adult = checkAge(21);
   console.log(adult);

   function checkAge(age){
      return age>=18 ? true:false;
   }

    checkWinner(true);

   function checkWinner(win){
      win ? console.log("You win!"):console.log("you loos!")
   }*/
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// variable scope=where a variable is acesable     
//let=variables are limited to block scope{}
//var=variables are limited to function(){}


/*
for(let i=1; i<3; i+=1){
   //console.log(i);
}
console.log(i); //error...
*/

/*
for(var i=1; i<3; i+=1){
   //console.log(i);
}
console.log(i); // no error...
*/
/*
doSomething();
function doSomething(){
  for(var i=1; i<3; i+=1){
   //console.log(i);
   }//console.log(i); //no error
}
console.log(i); //error...*/

//Global variable is declared outside the function
//(if,var will change the broweser windows properties.)
/*
var name="Nitheesh" 
Better to use let so that broweser will not mes up the things....
let name="Nitheesh";
*/
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Templet literals will delimited with(`${}`)
// insted of double and single quotes 
//allows emedded  variables  and experssion..

/*
let userName ="Nitheesh";
let items= 3;
let total= 21;

console.log(`Hello ${userName}`);
console.log(`you have ${items} items`);
console.log(`your total is $ ${total}`);
*/
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//toLocalString()= returns a string with a language senstive reperstion of this 
// number.toLocalString(locale,{options});
//`locale`=specfiy that language (undefined =default set in browser)
//`option`=object with formatting options...

/*
let myNum=123456.789;

myNum=myNum.toLocaleString("hi-IN")//Hindi
console.log(myNum);
*/

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Gusing Number game...
/*
const answer= Math.floor(Math.random()*10+1);
let guesses=0;

document.getElementById("SubmitButton").onclick = function(){
  let guess= document.getElementById("guessField").value
  guesses+=1;

  if(guess ==answer ){
   alert(`${answer} is a #. it took you ${guesses} guesses`);
  }
  else if(guess <answer){
   alert("To small!");
  }
  else{
   alert("Too large!");
  }

}
*/
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Temperture Converation program....
/*

document.getElementById("SubmitButton").onclick = function(){

   if(document.getElementById("cButton").checked){
      temp= document.getElementById("textBox").value
      temp= Number(temp);
      temp= tocelsius(temp);
      document.getElementById("tempLabel").innerHTML = temp + " °C"

   }
   else if(document.getElementById("fButton").checked){
      temp= document.getElementById("textBox").value
      temp=Number(temp);
      temp= toFaherenheit(temp);
      document.getElementById("tempLabel").innerHTML = temp + " °F"
   } 
   else{
      document.getElementById("tempLabel").innerHTML = "select a unit";
   }
}

function tocelsius(){
  return (temp-32)*(5/9);
}

function toFaherenheit(){
   return   temp*9/5+32;
 }
*/
 //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

 //12/09/2023
 //array: Think of it as variable  that can store multiple values..
/*
 let fruits =["apple","orange","bannana"];
 
 // fruits[2]="coconut";

 fruits.push("lemon"); // Add an element
 fruits.pop();   //Remove the element
 fruits.unshift("mango") //Add beging of the element
 fruits.shift(); //Remove the beging element

 let length =fruits .length;
 let index = fruits.indexOf("apple");
 console.log(index);
 */
 //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
 //Loops through the element of the array...
/*
 let prices =[ 10 ,20 ,30,40,50];
/*
 for(let i=0; i<prices.length; i+=1){
   console.log(prices[i]);
 }*/

/*
 for(let i=prices.length; i>=0; i-=1){
   console.log(prices[i]);
 }
 */
/*
for(let price of prices){
   console.log(price);
}
*/
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//sort an array of the srrings..
/*
let fruits =["Banana","orange","appale","mango"];

//fruits=fruits.sort();
//fruits=fruits.sort().reverse();

for(let fruit of fruits)
{
   console.log(fruit);
}
*/

// 2D Array =An arrary of arrays..
/*
let fruits = ["apple", "orange", "mangoa"];
let vegetables =["carrots", "beans","onions"];
let meats =["eggs", "chicken","fish"];

let groceryList =[ fruits ,vegetables,meats];
 
groceryList[2][1]= "sss";

for(let list of groceryList){
   for(let food of list)
   console.log(food);
}
*/

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//spread operators== allows the itreables such as an array or string to be expanded 
// in places  where zero or more arguments are expected (unpack the elements) means using(...)
/*
let numbers=[1,2,3,4,5,6,7,8,9];
let maximum =Math.max(...numbers);
console.log(maximum);*/
/*
let class1 =["Spong","Patrik", "Nithee"];
let class2 =["pong","Prik", "Ne"];
class1.push(...class2);
console.log(...class1);
*/
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Rest parameters...it repersents indefinte number of parameters (packs arguments into an array)
/*
let a=1;
let b=2;
let c=3;
let d=4;
let e=5;

console.log(sum(a,b,c,d,e));

function sum (...numbers){
   let total=0;

   for(let number of numbers){
     total+=number;
   }
   return total
}
*/
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Call back = it is a function that passed an argument to anthore function;
 
//let total= sum(2,3);

  // dispalyDOM(total);

/*function sum(x,y){
   let result=x+y;
   return result;
}*/

//callBack
//It ensures that function is not going to run before task is completed .
//help us to develop a assynchornus code 
//When one function as to wait for anthore function 
// that help us to avoid errors and potetial problems 
//example: wait for file load....
/*
sum(2,3,dispalyDOM);

function sum (x,y,cb){
   let result = x + y;
   cb(result);
}


function dispalyConsole(output){
    console.log(output);
}

function dispalyDOM(output){
   document.getElementById("myLabel").innerHTML= output;
}*/

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//array.forEach()
//It will excute a provided call back function once for each array element
/*
let students=["nitheesh","msd","puneethrajkumar"];

students.forEach(capitalize);    
students.forEach(print);

function capitalize(element,index,array){
   array[index]= element[0].toUpperCase()+element.substring(1)       
}
console.log(students[0]);

function print(element){
   console.log(element);
}
*/
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Map function... It will excute a provided call back function once for each array  AND creates a new array...
/*
let numbers =[1,2,3,4,5];
let squares=numbers.map(square);
let cubes=numbers.map(cube);
squares.forEach(print);

cubes.forEach(print);

function square(element){
       return Math.pow(element,2);
}

function cube(element){
   return Math.pow(element,3);
}
function print(element){
   console.log(element);
}
*/

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//filter array= array.filter== It will create a new array   with all elements that pass the test provided by a function  
/*
let age=[18,16,17,19,20,21];

let adult=age.filter(checkAge);

adult.forEach(print);

function checkAge(element){
   return element >=18;
}
function print(element){
   console.log(element);
}*/

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//array.reduce()===reduces the array to single value...
/*
let prices=[10,15,20,25,30];
let total=prices.reduce(checkOut);
console.log(`The Total is:$${total}`);

 function checkOut(total,element){
   return total+element;
 }

*/

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//sort an array of numbers
/*
let grades=[100,30,60,90,70,40];
grades=grades.sort(decendingOrder);

grades.forEach(print);

function decendingOrder(x,y){
   return y-x;
}

function print(element){
   console.log(element);
}*/
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//function experssion is the experssion ==function with out the name
//(anonymous function) avoid polluting the global scope with names
//write it,then froget about it..
/*
const greeting= function(){
   console.log("hello!");
}
greeting();*/
/*
let count=0;

document.getElementById("decreaseButton").onclick=function(){
   count-=1;
   document.getElementById("myLabel").innerHTML=count
}

document.getElementById("increaseButton").onclick=function(){
   count+=1;
   document.getElementById("myLabel").innerHTML=count
}*/

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//13/09/2023
//Arrow function==compact alternative to the traditional function experssion
// =>
/*
const greeting = (userName) => console.log(`Hello ${userName}`);
greeting("Nitheesh");

const precent= (x,y) => x/y*100;
console.log(`${precent(80,20)}$`);



let grades=[100,30,26,21,80,75,7];

grades.sort((x,y)=>y-x);
grades.forEach((Element)=>console.log(Element));
 */
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
 /*
let cards=["A","2","3","4","5","6","7","8","9","J","Q","K"];
shuffle(cards);
cards.forEach(cards=>console.log(cards));

function shuffle(array){
       currentIndex = array.length;

while(currentIndex!=0){
   let randomIndex= Math.floor(Math.random()*array.length);
   currentIndex-=1;

  let temp=array[currentIndex];
    array[currentIndex]= array[randomIndex];
    array[randomIndex]=temp;
}
return array;
}
*/

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//nestead function=== function inside the anthore function.
//outer function as an access to the inner function
//inner function are hidden to the outside of the  outer function 
//used in clousres(further video topic) //Important topic it is used for data security propose like login pages or account;
/*
let userName="Nitheesh";
let userInBox=0;

login();


function login(){

      dispalyUserName();
      dispalyUserInBox();
     

function dispalyUserName(){
   console.log(`Your Name is ${userName}`);
  }
  
  function dispalyUserInBox(){
     console.log(`Your In Box Messages is ${userInBox}`);
  }

}
*/
//above same code is wriiten using arrow function...

/*
const userName = "Nitheesh";
let userInBox = 0;

const login = () => {
  dispalyUserName();
  dispalyUserInBox();

  const dispalyUserName = () => {
    console.log(`Your Name is ${userName}`);
  };

  const dispalyUserInBox = () => {
    console.log(`Your In Box Messages is ${userInBox}`);
  };
};

login();
*/
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Map is the object that hold key value pair of any data type...
/*
const store = new Map([
      ["t-shirt",20],
      ["chadi",30],
      ["kachha",40],
      ["bairas",50]
]);*/

  //let shoppingCart=0;
  // shoppingCart += store.get("t-shirt");
   //shoppingCart += store.get("kachha");
   //console.log(shoppingCart);
  // store.get("t-shirt"); //it will get the t-shirt
  // store.set("hats",60); //add the hat
  // store.delete("hats"); //delete the hat
   //console.log(store.has("kachha")); //has function will return true or false

/*
store.forEach((value,key)=>console.log(`${key}$${value}`));
*/
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//objects =A group of properties and methods 
//properties =what an object has 
//methods = what an obejct can do 
// use .(dot) to acces  properties /objects.
/*
const car = {
   model:"Mustrang",
   color:"red",
   year:"2021",

   drive: function(){
      console.log("You drive the car");
   },

   brake: function(){
      console.log("You step on the  brakes");
   }
}
console.log(car.model);
car.drive();
*/
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//This== it refereance to the praticular object 
//the object depends on the immediate context
/*
const car1 = {
   model:"Mustrang",
   color:"red",
   year:"2021",

   drive: function(){
      console.log(`You drive the ${this.model}`); //we can repalce the this key word by car1 of object name;
   }
}

const car2 = {
   model:"benz",
   color:"blue",
   year:"2023",

   drive: function(){
      console.log(`You drive the ${this.model}`);
   }
}
car1.drive();
car2.drive();

this.name="Nitheesh prabhu";
console.log(this.name);
*/
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// class is a blue print for creating objects
// define what properties and methods they have 
//use a constrctor  for unique  properties.
/*
class player{
score= 0;

   pause(){
      console.log("You paused the game");
   }
   exit(){
      console.log("You exited the game");
   }
}

const palyer1=new player();
const palyer2=new player();
const palyer3=new player();

palyer1.score+=1;

console.log(palyer1.score);
console.log(palyer2.score);

palyer1.pause();
palyer1.exit();
*/
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//constructor= It is a special method of the class ,
// accepts arguments  and assigns properties.
/*
 class student{
   constructor(name,age,gpa){
      this.name=name;
      this.age=age;
      this.gpa=gpa;
   }
   study(){
      console.log(`${this.name} is studying`);
   }
 }
 const student1=new student("Nitheesh", 22,2.6);
 console.log(student1.name);
 console.log(student1.age);
 console.log(student1.gpa);

 student1.study();
 */ 
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//static    = belongs to the class, not the object
//properties :useful for chaes,fixed -configuration 
//methods : useful for utility functions
/*
class Car{

  static numberOFCars=0;
   constructor(model){
      this.model=model;
      Car.numberOFCars+=1;
   }
   static startRace(){
      console.log("3..2...1...Go!");
   }
}

const car1=new Car("Mustang");
const car2=new Car("corvetta");
const car3=new Car("BMW");
const car4=new Car("Benz");
 console.log(Car.numberOFCars);
 Car.startRace();
*/
 
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//inhertiance= A child class inherit all the methods and properties from the anthore class(parent class)
/*
class Animal{
   alive=true;
   eat(){
      console.log(`This ${this.name} is eating`);
   }
   sleep(){
      console.log(`This ${this.name} is Sleeping`);
   }
}

class Rabbit extends Animal{
   name="rabbit";
   run(){
      console.log(`This ${this.name} running`);
   }
}

class Fish extends Animal{
   name="fish";
   swim(){
      console.log(`This ${this.name} swiming`);
   }
}

class Hawk extends Animal{
      name="hawk";
   fly(){
      console.log(`This ${this.name} flying`);
   }
}

const rabbit= new Rabbit();
const fish=new Fish();
const hawk=new Hawk();
console.log(fish.alive);
fish.eat();
fish.sleep();
fish.swim();
*/

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//super keyword=Refers to the parnet class.
//commonly used to invoke constructor of a parnet class.
/*
class Animal{
   constructor(name,age){
      this.name=name;
      this.age=age;
   }
}

class Rabbit extends Animal{
   constructor(name,age,runSpeed){
      super(name,age)
      this.runSpeed=runSpeed;
   }
   
}

class Fish extends Animal{
   constructor(name,age,swimSpeed){
      super(name,age)
      this.swimSpeed=swimSpeed;
     
   }
}

class Hawk extends Animal{
   constructor(name,age,flySpeed){
     super(name,age)
     this.flySpeed=flySpeed;
   }    
}

const rabbit= new Rabbit("rabbit",21,40);
const fish= new Fish("fish",21,40);
const hawk= new Hawk("hawk",21,40);

console.log(fish.name);
console.log(fish.age);
console.log(fish.swimSpeed);
*/
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//get=binds an object to the property to a function 
//       when that prpoerty is asccessed 
//set=binds an object to the property to a function 
//       when that prpoerty is assigned a value 
/*
class Car{

   constructor (power){
      this._gas=10;
      this._power=power;
   }
   get power(){
      return `${this._power}hp`;
   }
   get gas(){
      return `${this._gas}L ( ${this._gas/50*100}%)`;
   }
    set gas(value){
        if(value>50){
         value=50;
        }
        else(value<0)
        {
           value=0;
        }
        this._gas= value;
    }
}


let car= new Car(400);
car.gas=-100;
console.log(car.power);
console.log(car.gas);
*/

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Obejects as arguments...
/*
class Car{

   
    constructor(model,color,year){
       this.model=model;
       this.color=color;
       this.year=year;
    }
   }


 const car1=new Car("Mustang","red",2023);
 const car2=new Car("corvetta","pink",2021);
 const car3=new Car("BMW","blue",2021);

 changeYear(car3,2022);
displayInfo(car3);


 function displayInfo(car){
   console.log(car.model);
   console.log(car.color);
   console.log(car.year);
 }

 function changeYear(car,year){
      car.year=year;
 }*/
 
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
 //array of an object
 /*
 class Car{
   constructor(model,year,color){
      this.model=model;
      this.year=year;
      this.color=color;
   }
   drive(){
      console.log(`You are driving ${this.model}`);
   }
  }


const car1=new Car("Mustang","red",2023);
const car2=new Car("corvetta","pink",2021);
const car3=new Car("BMW","blue",2021);

const cars=[car1,car2,car3];

console.log(cars[0].model);
console.log(cars[1].model);
console.log(cars[2].model);

cars[0].drive();
cars[1].drive();
cars[2].drive();


startRace(cars);


function startRace(cars){
    for(const car of cars){
       car.drive();
   }
}
*/
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//anomonus object=object without name 
//not directly refernced 
//less syntax no need of unique names...
/*

class Cards{
   constructor(value,suit){
      this.value=value;
      this.suit=suit;
   }
}

new Cards("A","Hearts");
new Cards("K","king");
new Cards("Q","queen");
new Cards("3","spade");
new Cards("2","spade");

const cards=[new Cards("A","Hearts"),new Cards("K","king"),
             new Cards("Q","queen"),new Cards("3","spade"),new Cards("2","spade")];
 
             cards.forEach(cards =>console.log(`${cards.value} ${cards.suit}`));
*/

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//14/09/2023
//error handling...
//Errorss are objects with a description that something went wrong
//throw =executes a user -defined error...
//cant open file 
//Lose connection 
//user types incorrect input 
//Type error
/*
 try{
   let x=window.prompt("Enter the number");
   x=Number(x);
   if(isNaN(x))throw "That wasn't a number";
   if(x=="")throw "That wasn a empty";
   console.log(`${x} is number`);
 }

 catch(error){
       console.log(error);
 }
finally{
   console.log("always excute!")
}
*/
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//setTimeout()= invokes a function after the number of milli seconds 
//asynchronus function (doesn't  pause the exccution)
/*
let  item="shirt";
let price="30";
 let  timer1 =  setTimeout(firtMessage,3000,item,price);
  let timer2 =  setTimeout(secondMessage,5000);
  let timer3 =  setTimeout(thirdMessage,9000);


function firtMessage(item,price){
        alert(`Buy This ${item} for $${price}`);
}
function secondMessage(){
    alert(`This is not a scam`)
}
function thirdMessage(){
   alert(`Do It`);
}

document.getElementById("myButton").onclick=function(){
   clearTimeout(timer1);
   clearTimeout(timer2);
   clearTimeout(timer3);
   alert(`Thanks for Buy<3`);
}*/

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//set interval= invokes the function repeatdely after  milliseconds
//asynchronus function (doesn't  pause the exccution)
/*
let count=0;
let max= window.prompt(`enetr the number!`);
max=Number(max);
const myTimer=setInterval(countUp,1000);
function countUp(){
   count+=1;
   console.log(count);
   if(count>=max){
      clearInterval(myTimer);
   }
}
*/

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Date=The object is used to work with dates &times.
/*
let date=new Date();
date=date.toLocaleString();
document.getElementById("myLable").innerHTML= formatTime(date);

function formatTime(date){
   let hours= date.getHours();
   let minutes=date.getMinutes();
   let seconds=date.getSeconds();
   let amOrpm= hours>=12 ?"pm": "am";
 hours=(hours%12)||12;
   return`${hours}:${minutes}:${seconds}:${amOrpm}`;
}
*/
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Clock program..
/*
 const myLable= document.getElementById("myLable");
 update();
 setInterval(update,1000);

 function update(){
   date= new Date();
   myLable.innerHTML=formatTime(date);
 }
 function formatTime(date){
 let hours= date.getHours();
 let minutes=date.getMinutes();
 let seconds=date.getSeconds();

 let amOrpm= hours>=12 ?"pm": "am";

 hours=(hours%12)||12;

 hours= formatZeros(hours);
 minutes=formatZeros(minutes);
 seconds=formatZeros(seconds);

 return`${hours}:${minutes}:${seconds}:${amOrpm}`;

 }

 function formatZeros(time){
  time=time.toString();
   return time.length <2 ?"0"+ time : time;
 }
 */
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//synchronous code= In  an ordered sequance .
// step-by-step linear instructions
//(start now,finish now )
/*
console.log("start");
console.log("This is synchronous code");
console.log("End");
*/
//asynchronous code= out of  sequance.
//ex Access a database 
//fetch file 
//Task that take times 
//(start now,finish sometimes later)
/*
console.log("start");
setTimeout(()=>console.log("This is asynchronous code"), 5000);
console.log("End");
*/
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//i will comeback soon to complete this js learning thank you
//18/09/2023