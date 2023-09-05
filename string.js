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


