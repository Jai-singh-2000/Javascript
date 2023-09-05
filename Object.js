//To make new object
let obj1=new Object();
obj1.name='jai'
console.log(obj1) // { name: 'jai' }


//To clone object with assign method
let obj2=Object.assign(obj1);
obj2.age=23;
obj2.hobby='singing'
console.log(obj2) // { name: 'jai', age: 23, hobby: 'singing' }


//To clone object with spread operator
let obj3={...obj2};
obj3.language='hindi'
console.log(obj3) // { name: 'jai', age: 23, hobby: 'singing', language: 'hindi' }


//To get keys array from object
let keysArray= Object.keys(obj3);
console.log(keysArray) // [ 'name', 'age', 'hobby', 'language' ]


//To get values array from object
let valuesArray=Object.values(obj3);
console.log(valuesArray) // [ 'jai', 23, 'singing', 'hindi' ]


//To get values array from object
let keyValuesArray=Object.entries(obj3);
console.log(keyValuesArray) // [ ['name', 'jai' ], ['age', 23 ], ['hobby', 'singing' ], ['language', 'hindi' ]]