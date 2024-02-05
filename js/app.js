'use strict';

// Problem 1

function sum(a, b) { 
  let total = a + b;
  return [total, `The sum of ${a} and ${b} is ${total}.`];
}

testSum(4, 7);


//  Problem 2

function multiply(a, b) { 
  let total1 = a * b;
  return [total1, `The product of ${a} and ${b} is ${total1}.`];
}

testMultiply(5,9);


//  Problem 3


function sumAndMultiply(a, b, c) {
  let sumTotal = sum(sum(a, b)[0], c)[0];
  let productTotal = multiply(multiply(a, b)[0], c)[0];
  let sumString = `${a} and ${b} and ${c} sum to ${sumTotal}.`;
  let productString = `The product of ${a} and ${b} and ${c} is ${productTotal}.`;

  return [sumTotal, productTotal, sumString, productString];
}

testSumAndMultiply(4, 7, 5);


//  Problem 4


function sumArray(sumArr) {
  let sumResult = sumArr.reduce((accumulator, currentValue) => sum(accumulator, currentValue)[0], 0);
  let arrayString = `${sumArr.join(',')} was passed in as an array of numbers, and ${sumResult} is their sum.`;
  return [sumResult, arrayString];
}

let testArray = [2, 3, 4];

testSumArray(testArray);

function multiplyArray(multArr) {
  let productResult = multArr.reduce((accumulator, currentValue) => multiply(accumulator, currentValue)[0], 1);
  let arrayString = `The numbers ${multArr.join(',')} have a product of ${productResult}.`;
  return [productResult, arrayString];
}

testMultiplyArray(testArray);





