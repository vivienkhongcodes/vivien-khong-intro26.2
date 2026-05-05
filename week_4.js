//----------------------------------
// LESSON 4 ALGORITHMS
//----------------------------------

// ---------- QUESTION 1 ----------
// Create a function called 'convertTemp' that takes 1 temperatue parameter in celsius and return the temperature in Fahrenheit. Log both the input and output values

// EXAMPLE LOG:
//  console.log("Q1 convertTemp: ", celsiusTemp, convertTemp(celsiusTemp));
// EXAMPLE OUTPUT:
//  Q1 convertTemp: 0 32

// Call convertTemp with several different celsium temperatures

// PUT YOUR CODE HERE

// {} for objects
// () for calculations
// "" for strings, not variables

function convertTemp(celsiusTemp) {
    return (celsiusTemp * 9 / 5) + 32;
}

let celsiusTemp = 32;
console.log("Q1A convertTemp: ", celsiusTemp, convertTemp(celsiusTemp));

// Call convertTemp with several different celsium temperatures - reusing the same variable but changing its value;

celsiusTemp = 24;
console.log("Q1B convertTemp: ", celsiusTemp, convertTemp(celsiusTemp));

celsiusTemp = 18;
console.log("Q1C convertTemp: ", celsiusTemp, convertTemp(celsiusTemp));

// ---------- QUESTION 2 ----------
// Create a function called 'reverseString' that takes 1 string parameter and returns the reverseString. Use a for loop. Log both the input and output values.

// EXAMPLE LOG:
//  console.log("Q2 reverseString: ", inputString, reverseString(inputString));
// EXAMPLE OUTPUT:
//  Q2 reverseString: HelloWorld dlroWolleH

// Call reverseString with several different strings. Make sure it works for an empty string.

// PUT YOUR CODE HERE

function reverseString(inputString) {
    let result = ""; // empty string to build result;

    for (let i = inputString.length - 1; i >= 0; i--) {

        result += inputString[i]; // inputString[i] gets one letter at a time & += adds letters to results;

    }

    return result;

}

console.log("Q2A reverseString: ", "Blurryface", reverseString("Blurryface"));

// Call reverseString with several different strings. Make sure it works for an empty string.

// can skip re wriitng variables;

console.log("Q2B reverseString: ", "HeavyDirtySoul", reverseString("BlHeavyDirtySoul"));

console.log("Q2C reverseString: ", "CarRadio", reverseString("CarRadio"));

// ---------- QUESTION 3 ----------
// Let's make a useful math problem - create a tip calculator! Create a function named tipCalculator that takes two parameters - billTotal and tipPercentage.  Return the total bill amount

// EXAMPLE LOG:
//  console.log("Q3 tipCalculator: ", tipCalculator (20, .20));
// EXAMPLE OUTPUT:
//  Q3 tipCalculator: 50 0.2 60

// PUT YOUR CODE HERE

// Don't forget your console.logs!

function tipCalculator(billTotal, tipPercentage) {

    // multiply bill by tip percentage to get the tip; 

    let tip = billTotal * tipPercentage;

    // Add tip to bill total;

    let total = billTotal + tip;

    // Return the final amount

    return total;

}

console.log("Q3 tipCalculator: ", tipCalculator(20, .20));

// ---------- QUESTION 4 ----------
// Create two variables named 'num1' and 'num2' and assign them integer values. Create a function called 'multiplyThese' that takes 2 parameters and returns the product of the two parameters (as a reminder, a product is the resulting number when two numbers are multiplied together).

// EXAMPLE LOG:
//  console.log("Q4: ", num1, num2, multiplyThese(num1, num2));
// EXAMPLE OUTPUT: 
//  Q4 multiplyThese: 10 10 100

// PUT YOUR CODE HERE

let num1 = -24;

Number.isInteger(-24); // true

Number.isInteger(0); // true

let num2 = 0;

function multiplyThese(num1, num2) {

    let result = num1 * num2;

    return result;

}

console.log("Q4: ", num1, num2, multiplyThese(num1, num2));

// ---------- QUESTION 5 ----------
// Create a function called 'getAverage' that takes 2 parameters and returns their average. NOTE: In some programming languages, the types of numbers you use in equations can affect what type of number (integer/floating point) you get as a result. We suggest using 2.0 instead of 2 as you're calculating the average.

// EXAMPLE LOG:
//  console.log("Q5 getAverage: ", 3, 6, getAverage(3.0, 6.0));
// EXAMPLE OUTPUT: 
//  Q5 getAverage: 3 6 4.5

// PUT YOUR CODE HERE

let numA = 6.0;

let numB = 7.0;

function getAverage(numA, numB) {

    let result = (numA + numB) / 2.0;

    return result;

}

console.log("Q5: getAverage: ", 6, 7, getAverage(6.0, 7.0));

// ---------- QUESTION 6 ----------
// Create a function named 'isPrime' that returns true or false based on whether the number is prime or not.
// Hint: To determine if a number is prime, you can check if it's divisible by any number from 2 up to the square root of the number. 0 and 1 are not prime numbers.
// Make sure you test several prime and non prime numbers along with 0 and 1.

// EXAMPLE LOG:
//  console.log("Q6 isPrime: ", number, isPrime(number));
// EXAMPLE OUTPUT: 
//  Q6 isPrime: 12 false

// PUT YOUR CODE HERE

// if the number is less than or equal to 1, it is not prime, eliminate immediately;

function isPrime(num) {
    if (num <= 1) {

        return false;

    }

    // 1 is not helpful, so start at 2. i = 2 means start counting at 2; i is a counter start with 2, then 3...i is the current number I am testing. Math.sqrt(num) means square root of a number; i++ means add 1 to i; loop is used to test possible divisors; 

    for (let i = 2; i <= Math.sqrt(num); i++) {

        if (num % i === 0) {

            // if number is divisible with no remainder, stop

            return false;

        }

    }

    return true;

}

// only try 2,3 and 5 first and higher only if needed; so the rest of this is just for me; 

console.log("Q6 isPrime: ", 0, isPrime(0));
console.log("Q6 isPrime: ", 1, isPrime(1));
console.log("Q6 isPrime: ", 2, isPrime(2));
console.log("Q6 isPrime: ", 4, isPrime(4));
console.log("Q6 isPrime: ", 7, isPrime(7));
console.log("Q6 isPrime: ", 9, isPrime(9));
console.log("Q6 isPrime: ", 11, isPrime(11));
console.log("Q6 isPrime: ", 12, isPrime(12));


// ---------- QUESTION 7 ----------
// Using the 'isPrime' function created in the previous question, create another function named 'getPrimesUpTo' that takes an integer as an input and returns an array of all primes up to and including the input number. 
// Be sure to include several test cases

// EXAMPLE LOG:
//  console.log("Q7 getPrimesUpTo: ", number, isPrime(number));
// EXAMPLE OUTPUT:
//  Q7 getPrimesUpTo: 13 [2,3,5,7,11,13]

// PUT YOUR CODE HERE

// define parameter name, not value; 

// use curly brackets at the end here

function getPrimesUpTo(number) {

    // start with empty array; 

    let primes = [];

    // loop from 2 to 39. Check if each number is prime; 

    for (let i = 2; i <= 39; i++) {

        if (isPrime(i)) {

            primes.push(i);

        }

        // of yes, add to array; 

    }

    // return full list at the end;

    return primes;

}

console.log("Q7 getPrimesUpTo: ", 39, getPrimesUpTo(39));

// ---------- QUESTION 8 ----------
// Now, we're going to write several functions that calculate a student's grade.  
// First, write a function named 'calculateAverage' that takes an input array of scores and calculates a student's average based on those scores.
// Check all of the grades in the array and ignore any values that are not in the range 0 - 100.
// Also, make sure that an empty array or no valid values in the array do not result in an error (hint: make sure you aren't dividing by 0)

// EXAMPLE LOG:
//  console.log("Q8 calculateAverage: ", calculateAverage(scores));
// EXAMPLE OUTPUT:
//  Q8 calculateAverage: 85 // input array let scores = [90, 80, 85];

// PUT YOUR CODE HERE

// Now, we're going to write several functions that calculate a student's grade.  
// First, write a function named 'calculateAverage' that takes an input array of scores and calculates a student's average based on those scores.

// loop through array, keep only valid scores and then average only those valid scores;

let scores = [90, 80, 85];

function calculateAverage(scores) {

    // how many valid scores; 

    let count = 0;

    // total of valid scores;

    let total = 0;

    // loop through scores array one by one; 

    for (let i = 0; i < scores.length; i++) {

        // scores [i] means scores [0], scores [1], etc.;

        let score = scores[i];

        // check if score is between 0 and 100;

        if (score >= 0 && score <= 100) {

            // add valid score to total same as total + score;

            total += score;

            // increase count of valid scores by adding 1;

            count++;
        }

    }

    // safety check - avoid dividing by 0, check for zero valid scores;

    if (count === 0) {

        // if there are no valid scores, return 0 so we do not divide by zero;

        return 0;

    }

    // return average of valid scores; 

    return total / count;

}

console.log("Q8 calculateAverage: ", calculateAverage(scores));

// ---------- QUESTION 9 ----------
// Now, create a function - getLetterGrade(average) - that takes a grade average and returns a letter grade based on the following scale. Make sure you test with several averages.
// A: 90–100
// B: 80–89
// C: 70–79
// D: 60–69
// F: below 60

// EXAMPLE LOG:
//  console.log("Q9 getLetterGrade: ", getLetterGrade(95));
// EXAMPLE OUTPUT:
//  Q9 getLetterGrade(95): A

// PUT YOUR CODE HERE

function getLetterGrade(average) {
    if (average >= 90) return "A";
    if (average >= 80) return "B";
    if (average >= 70) return "C";
    if (average >= 60) return "D";
    return "F";
}

console.log("Q9a getLetterGrade: ", getLetterGrade(95));

console.log("Q9b getLetterGrade: ", getLetterGrade(85));

console.log("Q9c getLetterGrade: ", getLetterGrade(77));

console.log("Q9d getLetterGrade: ", getLetterGrade(62));

console.log("Q9e getLetterGrade: ", getLetterGrade(59));

console.log("Q9f getLetterGrade: ", getLetterGrade(42));

// ---------- QUESTION 10 ----------
// Create a 3rd function named - passed(letterGrade) - that returns true if a student's grade is A, B or C, false otherwise.Make sure you handle a value other than A,B,C,D or F passed in.

// EXAMPLE LOG:
//  console.log("Q10 passed('A'): ", passed('A'));
// EXAMPLE OUTPUT:
//  Q10 passed('A''): true

// PUT YOUR CODE HERE

function passed(letterGrade) {

    if (letterGrade === 'A' || letterGrade === 'B' || letterGrade === 'C')

        return "Passed!!!"

    if (letterGrade === 'D' || letterGrade === 'F') return "Did not pass!!!"

    return "not valid input"

}

console.log("Q10a passed('A'): ", passed('A'));
console.log("Q10b passed('B'): ", passed('B'));
console.log("Q10c passed('C'): ", passed('C'));
console.log("Q10d passed('D'): ", passed('D'));
console.log("Q10e passed('F'): ", passed('F'));

// ---------- QUESTION 11 ----------
// Create a function named printClassResult (className, student, scores) that utilizes all three functions to output information on a student.
// Print yes is they have passed and no if they did not.

// EXAMPLE LOG:
//  console.log("Q11: ", printClassResult ("History 101", "Jane Doe", [60, 70, 85, 87]));  
// EXAMPLE OUTPUT:
//  Q11: History 101 - Student: Jane Doe, Average: 75.5, Grade: C, Passed: yes

// PUT YOUR CODE HERE

// easier to eliminate all passing grades - grade !== "F";

function passed(grade) {

    // return true or false

    if (grade === "F") {

        return false;

    } else {

        return true;

    }
}

// or function passed (grade) {
//  return grade !== "F";    }

function printClassResult(className, student, scores) {


    // average scores leads to grade, pass?

    let average = calculateAverage(scores);

    let grade = getLetterGrade(average);

    let didIPass = passed(grade);

    // ternary - condition ? valueIfTrue : valueIfFalse; short way to write an if...else;

    return className + " - Student: " + student + ", Average: " + average + ", Grade: " + grade + ",     Passed: " + (didIPass ? "yes" : "no");
}

console.log("Q11a: ", printClassResult("History 101", "Jane Doe", [60, 70, 85, 87]));

console.log("Q11b: ", printClassResult("History 101", "Sad Jill", [20, 10, 6, 7]));

// ---------- QUESTION 12 ----------
// Now, let's see how to use a callback. First, create a function that simulates pushing a button. Name the function buttonPushed and log the message "The button was pushed!" in the function.

// EXAMPLE CALL: (the log is within the function, so you do not need to log the call)
//  buttonPushed();

// EXAMPLE OUTPUT: (we're using this function in the next question as well)
//  Q12, Q13: The button was pushed!

// PUT YOUR CODE HERE

function buttonPushed() {

    console.log("Q12: The button was pushed!");

}

buttonPushed();

// ---------- QUESTION 13 ----------
// Now, create a function called simulateButtonPush and pass the function created in question 12 to that function.

// EXAMPLE CALL: (the log is within the function, so you do not need to log the call)
//  simulateButtonPush(buttonPushed);

// EXAMPLE OUTPUT: 
//  The button was pushed!

// PUT YOUR CODE HERE

// Define a callback function to handle the result

function simulateButtonPush(callback) {

    callback(); // run the function;

}

// pass the function;

simulateButtonPush(buttonPushed);

