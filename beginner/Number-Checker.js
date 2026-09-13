"use strict";

// Number Checker
// Given a numberm return a small report
// Describing what kind of number it is.
// Use simple boolean helper functions
// then combine their results in describeNumber

function isPositive(number) {
  return number > 0 ? true : false
}

function isNegative(number) {
  return number < 0 ? true : false
}

function isZero(number) {
  return number === 0 ? true : false
}

function isEven(number) {
  return number % 2 === 0 ? true : false
}

function describeNumber(number) {
  let obj = {
    positive: isPositive(number),
    negative: isNegative(number),
    zero: isZero(number),
    even: isEven(number),
    odd: !isEven(number),
  };

  return obj
}

console.log(describeNumber(8));
console.log(describeNumber(-3));
console.log(describeNumber(0));
console.log(describeNumber(7));

// expected
// { positive: true, negative: false, zero: false, even: true, odd: false }
// { positive: false, negative: true, zero: false, even: false, odd: true }
// { positive: false, negative: false, zero: true, even: true, odd: false }
// { positive: true, negative: false, zero: false, even: false, odd: true }