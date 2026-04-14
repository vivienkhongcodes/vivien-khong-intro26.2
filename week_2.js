//----------------------------------
// LESSON 2 LOOPS AND ARRAYS
//----------------------------------

// This is the coding assignment for the second week of the Intro to Programming course from Code the Dream. The concepts touched on in this assignment include:
//  - Simplify Repetitive Tasks with Loops
//  - Working with ‘for’ Loops
//  - Understanding Arrays

// In this assignment you will write your own code. Your instructions are listed as "comments", meaning the instructions are grayed out and start with '//' at the beginning of the line of code. Put your answers immediately below the instructions for each question. As mentioned in the Welcome to week 2 information to the right, you'll need to use console logs for all the questions to check your code output. Using a function in a console.log is very similar to how you were using them with variables last week. To invoke/call the function use the syntax:

// console.log("Q#: ", functionName(anyInput))


// ---------- QUESTION 1 ----------
// Write a function called 'repeat' that takes 1 integer parameter and, using a for or while loop, prints out the string "Hello World!" to the console the same number of times as the parameter. NOTE: for this question, since your console log should be inside your function, you only need to call/invoke the function after you write it rather than call/invoke it inside of a console.log.

// EXAMPLE "LOG":
//  repeat(3);
// EXAMPLE OUTPUT:
//  Hello World!
//  Hello World!
//  Hello World!

// PUT YOUR CODE HERE
function repeat(integer) {
    for (let i = 0; i < integer; i++)
        console.log("Q1: Hello World!");
}

repeat(3);


// ---------- QUESTION 2 ----------
// Write a function called 'pyramidCounting' that takes 1 integer parameter and returns the sum of all of the numbers between 0 and the parameter.

// EXAMPLE LOG:
//  console.log("Q2: ", pyramidCounting(4));
// EXAMPLE OUTPUT:
//  Q2: 10
// The mathematical explanation of this is 0+1+2+3+4 = 10.

//PUT YOUR CODE HERE
function pyramidCounting(integer) {
    let total = 0;

    // start loop from 0 to 4
    // inside loop add 1 to total

    for (let i = 0; i <= integer; i++) {
        total = total + i;
    }

    // end loop by returning total

    return total;

}
console.log("Q2:", pyramidCounting(4));

// ---------- QUESTION 3 ----------
// Write a function called 'noVowels' that take a string parameter and removes vowels from that string using a loop.

// EXAMPLE LOG:
//  console.log("Q3: ", noVowels(adventurous));
// EXAMPLE OUTPUT:
//  Q3: dvntrs

// PUT YOUR CODE HERE

function noVowels(word) {

    let result = "";

    const vowels = "aeiou";

    for (let i = 0; i < word.length; i++) {

        const letter = word[i];

        if (vowels.includes(letter)) {

            //skip vowels

        } else {
            result = result + letter;
        }

    }

    return result;

} console.log("Q3:", noVowels("chapodiphobia"));

// ---------- QUESTION 4 ----------
// Write a function called 'vowelCount' that takes 1 string parameter and returns the number of vowels in that string.

// EXAMPLE LOG:
//  console.log("Q4: ", vowelCount('I love to code.'));
// EXAMPLE OUTPUT:
//  Q4: 6

// PUT YOUR CODE HERE

function vowelCount(word) {

    let count = 0;
    let vowels = "aeiouAEIOU";

    for (let i = 0; i < word.length; i++) {

        let letter = word[i];

        if (vowels.includes(letter)) {

            //count vowels;

            count = count + 1;

        }
    }

    return count;

}

console.log("Q4:", vowelCount("I love to code."));



// ---------- QUESTION 5 ----------
// Write a function called 'numOfOdds' that takes 1 integer parameter and returns the number of odd numbers between 0 and that number, including the number if it's odd. (Hint: Use the modulo operator)

// EXAMPLE LOG:
//  console.log("Q5: ", numOfOdds(15));
// EXAMPLE OUTPUT:
//  Q5: 8

// PUT YOUR CODE HERE

function numOfOdds(number) {

    let count = 0;

    for (let i = 0; i <= number; i++) {

        if (i % 2 === 1) {

            count++;
        }
    }

    return count
}

console.log("Q5:", numOfOdds(15));

// ---------- QUESTION 6 ----------
// Create two variables named 'empty' and 'full'. Assign an empty array to the 'empty' variable and any array of strings or numbers to the 'full' variable. Write a function called 'arrayChecker' that returns true if the array passed as a parameter is empty and false if not. Check both the 'empty' and 'full' variables to make sure they are returning the expected values.

// EXAMPLE LOGS:
//  console.log("Q6 empty: ", arrayChecker(empty));
//  console.log("Q6 not empty: ", arrayChecker(full));
// EXAMPLE OUTPUTS:
//  Q6 empty: true
//  Q6 not empty: false

// PUT YOUR CODE HERE

let empty = [];

let full = [1, 2, 3];

function arrayChecker(test) {
    if (test.length === 0) {
        return true;
    } else {
        return false
    }

}

console.log("Q6 empty:", arrayChecker(empty));
console.log("Q6 not empty:", arrayChecker(full));

// ---------- QUESTION 7 ----------
// Write a function called 'getElementAt' that takes an array parameter and an integer parameter. The function should return the element in the array at the given number index or 'null' if it doesn't exist. Use your 'full' variable from Question 6 to test.

// EXAMPLE LOGS:
//  console.log("Q7: ", getElementAt(full, 2));
//  console.log("Q7: ", getElementAt(full, 7));

// EXAMPLE OUTPUT: (if the array assigned to variable 'full' is ["dream", 19, "code", 24, 180])
//  Q7: code
//  Q7: null

// Put your code here

// reuse Q6

function getElementAt(array, index) {
    if (index >= 0 && index < array.length) {
        return array[index];
    } else {
        return null;

    }
}

console.log("Q7: ", getElementAt(full, 2));
console.log("Q7: ", getElementAt(full, 7));


// ---------- QUESTION 8 ----------
// Write a function called 'insertInArray' that takes an array parameter, makes a NEW array with the value '0' inserted at the second position in the NEW array. The function should return the NEW array. Use your 'full' variable from Question 6 to test. NOTE: Assigning an array to a new variable does not make a copy, it's another reference to the same array. To make a copy you can use the slice() method as in this example:
// let newArray = originalArray.slice()
// LEARNING MOMENT: Also console log the variable 'full' to compare the new array to the original.

// EXAMPLE LOG:
//  console.log("Q8: ", insertInArray(full));
//  console.log("original array: ", full);

// EXAMPLE OUTPUT: (if the array assigned to variable 'full' is ["dream", 19, "code", 24, 180])
//  Q8: ["dream", 0, 19, "code", 24, 180]
//  original array: ["dream", 19, "code", 24, 180]

// PUT YOUR CODE HERE

//reuse from Q6

function insertInArray(full) {
    let newArray = full.slice();
    newArray.splice(1, 0, 0);
    return newArray;
}

let result = insertInArray(full);

console.log("Q8:", insertInArray(full));
console.log("Q8: original array:", full)

// ---------- QUESTION 9 ----------
// Write a function called 'compareArrays' that takes two Array parameters (containing numbers or strings only) and returns true if they are equal, false if not. The purpose of this function should be to look at each element of the two arrays and compare them, returning false when they either hit two items that don't match, or returning false if the two arrays themselves are different lengths. You can test this with the 'empty' and 'full' variables from Question 6, and/or you can create a variable called 'compare' and assign it an array identical to 'full' to compare those. To further test your function's accuracy, create a new variable called 'part' that is a partial copy of the 'full' variable and test that as well.

// REMEMBER: In JavaScript, 1 === '1' is false, but 1 == '1' is true. You'll need to use the triple equals operator which is more strict because it compares data type.

// EXAMPLE LOG:
//  console.log("Q9 same: ", compareArrays(full, compare));
// EXAMPLE OUTPUT: (if both arrays assigned to variable 'full' and 'compare' are ["dream", 19, "code", 24])
//  Q9 same: true

// EXAMPLE LOG:
//  console.log("Q9 different: ", compareArrays(full, empty));
// EXAMPLE OUTPUT: (if using variables from Question 6)
//  Q9 different: false

// EXAMPLE LOG:
//  console.log("Q9 partial: ", compareArrays(full, part));
// EXAMPLE OUTPUT: (if 'full' variable is ["dream", 19, "code", 24] and if 'part' variable is ["dream", 19, "code"])
//  Q9 different: false

// PUT YOUR CODE HERE

//reuse from Q6

let compare = [1, 2, 3];

let part = [1, 2];

// compare length

function compareArrays(arr1, arr2) {
    if (arr1.length !== arr2.length) {
        return false;
    }


    // compare items 

    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] !== arr2[i]) {
            return false;
        }
    }

    return true
}

console.log("Q9 same: ", compareArrays(full, compare));
console.log("Q9 different: ", compareArrays(full, empty));
console.log("Q9 partial: ", compareArrays(full, part));


// ---------- QUESTION 10 ----------
// Create a variable called 'numbers' and assign it an array with at least 3 numbers as elements (example: [10, 3, 4]). Write a function called 'calculateTotal' that takes one array parameter and loops through the array in order to return the sum of all the array elements.

// EXAMPLE LOG:
//  console.log("Q10: ", calculateTotal(numbers));

// EXAMPLE OUTPUT: (if the array assigned to variable 'numbers' is [3, 4, 2 ,8])
//  Q10: 17

// PUT YOUR CODE HERE
let numbers = [106, 36, 72, 67, 76, 676];

function calculateTotal(numbers) {

    let total = 0;

    for (let i = 0; i < numbers.length; i++) {

        total = total + numbers[i];

    }

    return total;

}

console.log("Q10: ", calculateTotal(numbers));

// ---------- QUESTION 11 ----------
// Write two functions called 'findEvens' and 'findOdds' that each take one array parameter and each returns a NEW Array of all the even or odd numbers as indicated. NOTE: Assigning an array to a new variable does not make a copy, it's another reference to the same array. To make a copy you can use the slice() method as in this example:
// let newArray = originalArray.slice()

// EXAMPLE LOG:
//  console.log("Q11 evens: ", findEvens([10,2,3,19,7,6,93]));
//  console.log("Q11 odds: ", findOdds([10,2,3,19,7,6,93]));

// EXAMPLE OUTPUT:
//  Q11 evens: [10,2,6]
//  Q11 odds: [3,19,7,93]

// PUT YOUR CODE HERE

// Reuse #10

function findEvens(numbers) {

    let evens = [];

    for (let i = 0; i < numbers.length; i++) {

        if (numbers[i] % 2 === 0) {

            evens.push(numbers[i]);

        }
    }

    return evens;
}

function findOdds(numbers) {

    let odds = [];

    for (let i = 0; i < numbers.length; i++) {

        if (numbers[i] % 2 === 1) {

            odds.push(numbers[i]);

        }
    }

    return odds;
}

console.log("Q11 evens: ", findEvens([106, 36, 72, 67, 76, 676]));
console.log("Q11 odds: ", findOdds([106, 36, 72, 67, 76, 676]));

// ---------- QUESTION 12 ----------
// Write a function called 'makeSquares' that takes one array parameter and returns a NEW Array with the squared values of each of the numbers. NOTE: Assigning an array to a new variable does not make a copy, it's another reference to the same array. To make a copy you can use the slice() method as in this example:
// let newArray = originalArray.slice()

// EXAMPLE LOG:
//  console.log("Q12: ", makeSquares([2,5,8]));
// EXAMPLE OUTPUT:
//  Q12: [4,25,64]

// PUT YOUR CODE HERE

// reuse #10

function makeSquares(numbers) {

    let squares = [];

    for (let i = 0; i < numbers.length; i++) {

        let square = numbers[i] * numbers[i];

        squares.push(square);

    }

    return squares;
}

console.log("Q12: ", makeSquares([106, 36, 72, 67, 76, 676]));

// ---------- QUESTION 13 ----------
// Write a function called 'displaySkills' that takes an array of string values that correspond to skills that you have.
// Iterate through the array and display each skill.

// EXAMPLE CALL:
//  const skills = ["JavaScript", "HTML", "CSS", "Adobe Photoshop", "GitHub"];
//  displaySkills(skills);
// EXAMPLE OUTPUT:
//  Javascript
//  HTML
//  CSS
//  Adobe Photoshop
//  GitHub

// PUT YOUR CODE HERE

const skills = ["Juggling", "Tightrope Walking", "Disappearing Act", "Tame Lions", "Clowning", "All-Around Best Ringmaster"];

function displaySkills(skills) {
    for (let i = 0; i < skills.length; i++) {
        console.log("Q13:", skills[i]);
    }
}

displaySkills(skills);

// ---------- QUESTION 14 ----------
// Back in the "old days", the early 2000s, this was a famous technical interview question. Write a function definition that takes NO parameters. The function will loop from 1 to 15 and return an array of numbers. While looping, the function will check if the current value in the loop is divisible by 3, by 5, or by both. If the current value in the loop is divisible by 3, the function will add the string "fizz" to an array. If the current value in the loop is divisible by 5, the function will add the string "buzz" to the array. If the current value in the loop is divisible by both, the function will add the value "fizzbuzz" to the array. If the number isn't divisible by 3, 5, OR both, it will add the number to the array. The function will return the array of values.

// EXAMPLE LOG:
//  console.log("Q13: ", fizzBuzz();
// EXAMPLE OUTPUT:
//  Q14: [1,2,'fizz',4,'buzz','fizz',7,8,'fizz','buzz',11,'fizz',13,14,'fizzbuzz']

// PUT YOUR CODE HERE

function fizzBuzz() {

    let result = [];

    // do multiples of 3 and 5 first

    for (let i = 1; i <= 15; i++) {

        if (i % 15 === 0) {

            result.push("fizzBuzz");

            // multiples of 3

        } else if (i % 3 === 0) {

            result.push("fizz");

            // multiples of 5

        } else if (i % 5 === 0) {

            result.push("buzz");

        } else {

            result.push(i);
        }
    }

    return result;
}
console.log("Q14:", fizzBuzz());

// ---------- QUESTION 15 ----------
// Write a function called testScope that shows the difference between global, function and block scope.
// Create 3 variables - 
//  let globalVar = "globarVar";
//  let functionVar = "functionVar";
//  let blockVar = "blockVar";
// Place the variables correctly in your code and log them.
// Also, place 2 log statements for the functionVar and blockVar that are commented out, but would result in an error if uncommented - because the variable they are referencing is out of scope.

// PUT YOUR CODE HERE

let globalVar = "globalVar";

function testScope() {

    let functionVar = "functionVar";

    if (true) {

        // block scope

        let blockVar = "blockVar";

        console.log("Q15:", globalVar);

        console.log("Q15:", functionVar);

        console.log("Q15:", blockVar);

    }

    console.log("Q15:", globalVar);

    console.log("Q15:", functionVar);

    // console.log ("Q15:", blockVar);

}

console.log("Q15:", globalVar);

// console.log ("Q15:", functionVar);

testScope();








