// Access index value of string like array
let myName ='harshit';
var value=myName[3];
console.log(value) // s


// Get length of string
var person="rajesh"
var len=person.length;
console.log(len) // 6


// Get last value of any string 
let temp="abc"  // length is 3, index = 0,1,2
var value=temp[ temp.length-1 ]  // str[3-1] --> str[2]
console.log(value) // c


// Trim extra spaces from string
let hobby="   football    ";
var value= hobby.trim();
console.log(value) // football


// To make string uppercase by method
let city="Delhi";
var value=city.toUpperCase()
console.log(value) // DELHI


// To make string lowercase by method
let state="Assam";
var value=state.toLowerCase()
console.log(value) // assam


// Slice - extract section of string and returns it as a new string
let country="Bhutan";
var value=country.slice(2) // 1st arguement is starting index, if only 1 arguement is passed it slice to the end of string
console.log(value) // utan


// Slice - extract section of string and returns it as a new string
let place="France";
var value=country.slice(1,4) // 1st is starting, 2nd is ending but it is not included, only slice 1,2,3 
console.log(value) // ran


// Convert anything to string
let num=4;
num= num+" "
console.log(typeof num) // string

let bool=true;
bool=String(bool)
console.log(typeof bool)//string


//String concatenation
let one="java"
let two="script"
let combine=one+two;
console.log(combine) //javascript


//Template string
let person="healthy"
let about=`I am ${person} human`
console.log(about) // I am healthy human