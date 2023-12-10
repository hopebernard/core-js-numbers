/* *******************************************************************************************
 *                                                                                           *
 * Please read the following tutorial before implementing tasks:                              *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Numbers_and_dates           *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number   *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math     *
 *                                                                                           *
 ******************************************************************************************* */

function getRectangleArea(length, width) {
  return length * width;
}

getRectangleArea(5, 10);
getRectangleArea(5, 5);

function getCircleCircumference(R) {
  return 2 * Math.PI * R;
}
getCircleCircumference(5);
getCircleCircumference(3.14);

function getAverage(value1, value2) {
  return (value1 + value2) / 2;
}

getAverage(5, 5);
getAverage(10, 0);

function getDistanceBetweenPoints(x1, y1, x2, y2) {
  return Math.sqrt((x2 - x1) * (x2 - x1) + (y2 - y1) * (y2 - y1));
}

getDistanceBetweenPoints(0, 0, 0, 1);
getDistanceBetweenPoints(0, 0, 1, 0);
getDistanceBetweenPoints(-5, 0, 10, -10);

function getLinearEquationRoot(a, b) {
  return -b / a;
}

getLinearEquationRoot(5, -10);
getLinearEquationRoot(1, 8);
getLinearEquationRoot(5, -0);

function getAngleBetweenVectors(x1, y1, x2, y2) {
  return Math.acos(
    (x1 * x2 + y1 * y2) /
      (Math.sqrt(x1 ** 2 + y1 ** 2) * Math.sqrt(x2 ** 2 + y2 ** 2))
  );
}

getAngleBetweenVectors(1, 0, 0, 1);
getAngleBetweenVectors(0, 1, 0, -1);
getAngleBetweenVectors(0, -1, 1, 0);
getAngleBetweenVectors(0, 1, 0, 1);

function getLastDigit(value) {
  return value % 10;
}

getLastDigit(100);
getLastDigit(37);
getLastDigit(5);
getLastDigit(0);

function parseNumberFromString(value) {
  return Number(value);
}

parseNumberFromString('100');
parseNumberFromString('37');
parseNumberFromString('-525.5');

function getParallelepipedDiagonal(a, b, c) {
  return Math.sqrt(a ** 2 + b ** 2 + c ** 2);
}

getParallelepipedDiagonal(1, 1, 1);
getParallelepipedDiagonal(3, 3, 3);
getParallelepipedDiagonal(1, 2, 3);

function roundToPowerOfTen(num, pow) {
  return Math.round(num / num ** pow) * num ** pow;
}

roundToPowerOfTen(1234, 0);
roundToPowerOfTen(1234, 1);
roundToPowerOfTen(1234, 2);
roundToPowerOfTen(1234, 3);
roundToPowerOfTen(1678, 0);
roundToPowerOfTen(1678, 1);
roundToPowerOfTen(1678, 2);
roundToPowerOfTen(1678, 3);

function isPrime(n) {
  return n % 2 !== 0;
}

isPrime(4);
isPrime(5);
isPrime(6);
isPrime(7);
isPrime(11);
isPrime(12);
isPrime(16);
isPrime(17);

function toNumber(value, def) {
  return parseFloat(value, def) || 0;
}

toNumber(null, 0);
toNumber('test', 0);
toNumber('1', 0);
toNumber(42, 0);
toNumber('new Number(42)', 0);

function getCube(num) {
  return num ** 3;
}

getCube(3);
getCube(-2);
getCube(0);

function getFibonacciNumber(index) {
  let a = 0;
  let b = 1;
  let c = index;

  for (let i = 2; i <= index; i += 1) {
    c = a + b;
    a = b;
    b = c;
  }

  return c;
}

getFibonacciNumber(0);
getFibonacciNumber(1);
getFibonacciNumber(2);
getFibonacciNumber(3);
getFibonacciNumber(10);

function getSumToN(n) {
  let total = 0;
  for (let i = 1; i <= n; i += 1) {
    total += i;
  }
  return total;
}

getSumToN(5);
getSumToN(10);
getSumToN(1);

function getSumOfDigits(num) {
  let sum = 0;
  let radix = num;
  while (radix !== 0) {
    sum += radix % 10;
    radix = parseInt(radix / 10);
  }
  return sum;
}

getSumOfDigits(123);
getSumOfDigits(202);
getSumOfDigits(5);

function isPowerOfTwo(num) {
  return num !== 0 && (num && num - 1) === 0;
}

isPowerOfTwo(4);
isPowerOfTwo(16);
isPowerOfTwo(15);

function getSine(num) {
  return Math.sin(num);
}

getSine(0);
getSine(Math.PI / 2);

function numberToStringInBase(number, base) {
  const str = number;
  return str.toString(base);
}

numberToStringInBase(255, 16);
numberToStringInBase(2, 2);

function toExponential(number, fractionDigits) {
  return Number.parseFloat(number).toExponential(fractionDigits);
}

String(toExponential(12345, 2));

function toFixed(number, fractionDigits) {
  return String(number, fractionDigits);
}

toFixed(12345, 2);
toFixed(12.345, 1);

function toPrecision(number, precision) {
  return String(number, precision);
}

toPrecision(12345, 7);
toPrecision(12.345, 4);

function getNumberValue(number) {
  return Number(number);
}

getNumberValue('new Number(5)');
getNumberValue(Number(-5));

function isNumber(number) {
  return Number.isFinite(number);
}

isNumber(Infinity);
isNumber(NaN);
isNumber(0);
isNumber('a' / 1);
isNumber('a');
isNumber(5);
isNumber('5');

function isInteger(number) {
  return Number.isInteger(number);
}

isInteger(5);
isInteger(5.1);
isInteger('5');

function getFloatOnString(str) {
  return Number.parseFloat(str);
}

getFloatOnString('4.567abcdefgh');
getFloatOnString('abcdefgh');

function getIntegerOnString(str, base) {
  return Number.parseInt(str, base);
}

getIntegerOnString('4.567abcdefgh', 10);
getIntegerOnString('abcdefgh', 10);
getIntegerOnString('1.234', 2);
getIntegerOnString('10', 8);

function isSafeInteger(number) {
  return Number.isSafeInteger(number);
}

isSafeInteger(10);
isSafeInteger(3.5);
isSafeInteger(2 ** 53);

function roundToSmallestInteger(number) {
  return Math.floor(number);
}

roundToSmallestInteger(5.9);
roundToSmallestInteger(-5.1);

function roundToLargestInteger(number) {
  return Math.ceil(number);
}

roundToLargestInteger(5.1);
roundToLargestInteger(-5.9);

function roundToNearestInteger(number) {
  return Math.round(number);
}

roundToNearestInteger(5.5);
roundToNearestInteger(5.4);
roundToNearestInteger(-5.5);

function getIntegerPartNumber(number) {
  return Math.trunc(number);
}

getIntegerPartNumber(5.5);
getIntegerPartNumber(5.4);
getIntegerPartNumber(-5.5);

function getSumOfNumbers(x1, x2, x3) {
  return Math.round((x1 + x2 + x3) * 10) / 10;
}

getSumOfNumbers(1, 2, 3);
getSumOfNumbers(0.1, 0.2, 0.3);

function getMaxNumber(firstNumber, secondNumber) {
  return Math.max(firstNumber, secondNumber);
}

getMaxNumber(1, 2);
getMaxNumber(-5, -6);
getMaxNumber(0, 5);

function getRandomInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
getRandomInteger(1, 2);
getRandomInteger(-5, 0);
getRandomInteger(-1, 1);

function getHypotenuse(a, b) {
  return Math.sqrt(a ** 2 + b ** 2);
}

getHypotenuse(3, 4);

function getCountOfOddNumbers(number) {
  const countOddFromZeroToNum = number;
  let i = 0;
  let count = 0;
  while (i <= countOddFromZeroToNum) {
    if (i % 2 === 1) {
      count += 1;
    }
    i += 1;
  }
  return count;
}
getCountOfOddNumbers(4);
getCountOfOddNumbers(5);
getCountOfOddNumbers(10);
getCountOfOddNumbers(15);

module.exports = {
  getRectangleArea,
  getCircleCircumference,
  getAverage,
  getDistanceBetweenPoints,
  getLinearEquationRoot,
  getAngleBetweenVectors,
  getLastDigit,
  parseNumberFromString,
  getParallelepipedDiagonal,
  roundToPowerOfTen,
  isPrime,
  toNumber,
  getCube,
  getFibonacciNumber,
  getSumToN,
  getSumOfDigits,
  isPowerOfTwo,
  getSine,
  numberToStringInBase,
  isSafeInteger,
  roundToLargestInteger,
  roundToSmallestInteger,
  roundToNearestInteger,
  getSumOfNumbers,
  isNumber,
  isInteger,
  toExponential,
  toFixed,
  toPrecision,
  getNumberValue,
  getFloatOnString,
  getIntegerOnString,
  getIntegerPartNumber,
  getMaxNumber,
  getRandomInteger,
  getHypotenuse,
  getCountOfOddNumbers,
};
