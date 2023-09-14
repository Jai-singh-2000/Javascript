// 1. Given a string, reverse each word in the sentence
// ***** "Hi how are you"
// ---- "iH woh era uoy"


function reverseEachWord(str) {
    let arr = str.split(" ") //[ 'Hi', 'how', 'are', 'you' ] -> Split on the basis on space

    let result = ""
    for (let word of arr) {
        let wordArr = word.split("") // [ 'H', 'i' ] -> Split on basis on nothing it will split every character

        //We can use wordArr.reverse() inbuilt function but we will try by ourselves
        let i = 0, j = wordArr.length - 1;
        while (i < j) {
            let temp = wordArr[i];
            wordArr[i] = wordArr[j];
            wordArr[j] = temp
            i++;
            j--;
        }

        result = result + `${wordArr.join("")} ` // Join on basis of nothing and append-> ['i','H'] => "ih" 
    }

    return result
}

const ans = reverseEachWord("Hi how are you")



// 2. Check if typeof object is Array or not
// ***** {} =>false
// ---- [] =>true

function checkArray(value)
{
    return Array.isArray(value) // Ift will return true/false after checking
}
var result=checkArray(0)





// 3) How to empty an array without reset it to new array, also do not loop throught to pop each value
// ***** [1,2,6,3,4,2,1]
// ---- []

let arr=[1,2,3,4,5,6,7,8,9]
arr.length=0; // Make it's lenght to 0 then it will lose all it's data , you can also make it any value like 2, It will store only [1,2]
console.log(arr) //[]





