const number = [12,3,33,98];
number[1] = 00
// console.log(number);

// default parameter 
function numbers(num1, num2){
    num2 = num2 || 0;

    return num2 + num1;
}

// console.log(numbers(10,2));

// string 

const firstName = "fuad";
const lastName = "Hasan";

const fullName = `${firstName} ${lastName}`;

const message = `It's a beautiful rainyday. 
Weather is calm and quite.
Water log out there in chittagong.`

// console.log(message);

const doubleIt = function myFunc(num){
    return num * 2;
}

// console.log(doubleIt(3));

const firstArrow = num => num * 2;

// console.log(firstArrow(9));

// Spread operator
const arr1 = [22,98,11,23,25];
const arr2 = [11,22,19,29,34];

// const newArr = arr1.concat(arr2)

const newArr = [...arr1,6, ...arr2]

// console.log(newArr);

const num1 = 500;
const num2 = 923;
const num3 = 100;

const totalNum = [num1, num2, num3];

const allNum = Math.max(...totalNum)

console.log(allNum);