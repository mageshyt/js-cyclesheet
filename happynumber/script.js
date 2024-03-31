`According to Wikipedia a happy number is defined by the following process:
 “Starting with any positive integer, replace the number by the sum of the squares
  of its digits and repeat the process until the number equals 1(where it will stay)
   or it loops endlessly in a cycle which does not include 1. Those numbers for which this process ends in 1 are happy numbers, while those that do not end in 1 are unhappy numbers.” 
    Write a javascript program to find and print the first 5 happy numbers.`;

const isHappyNumber = (num) => {
  // Keep track of visited numbers to detect cycles
  let visited = new Set();

  // Keep iterating until we reach 1 (happy number) or detect a cycle
  while (num !== 1 && !visited.has(num)) {
    visited.add(num);
    num = sumOfSquaredDigits(num);
  }

  // If num is 1, it's a happy number
  return num === 1;
};

const sumOfSquaredDigits = (num) => {
  let sum = 0;
  while (num > 0) {
    const digit = num % 10;
    sum += digit * digit;
    num = Math.floor(num / 10);
  }
  return sum;
};

const getHappyNumbers = (count) => {
  let happyNumbers = [];
  let num = 1;

  // Keep searching until we find 5 happy numbers
  while (happyNumbers.length < 5) {
    if (isHappyNumber(num)) {
      happyNumbers.push(num);
    }
    num++;
  }

  return happyNumbers;
};

console.log("--------------------------------------------------");
console.log(getHappyNumbers(5)); // [1, 7, 10, 13, 19]
console.log("--------------------------------------------------");
