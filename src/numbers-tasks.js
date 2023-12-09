/* *******************************************************************************************
 *                                                                                           *
 * Please read the following tutorial before implementing tasks:                              *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Numbers_and_dates           *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number   *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math     *
 *                                                                                           *
 ******************************************************************************************* */

/**
 * Returns an area of a rectangle given by width and height.
 *
 * @param {number} width
 * @param {number} height
 * @return {number}
 *
 * @example:
 *   5, 10 => 50
 *   5, 5  => 25
 */
function getRectangleArea(/* width, height */) {

  }
  
  function getRectangleArea(length, width) {
    return length*width;
  }
  
  let area = getRectangleArea(5,10);
  let area1 = getRectangleArea(5,5);
  
  console.log(area);
  console.log(area1);
  
  /**
   * Returns a circumference of circle given by radius.
   *
   * @param {number} radius
   * @return {number}
   *
   * @example:
   *   5    => 31.41592653589793
   *   3.14 => 19.729201864543903
   *   0    => 0
   */
  function getCircleCircumference(/* radius */) {

  }
  
  function getCircleCircumference(R) {
    return 2*(Math.PI)*R
  }
  let circumference = getCircleCircumference(5);
  let circumference1 = getCircleCircumference(3.14);
  
  console.log(circumference);
  console.log(circumference1);
  
  /**
   * Returns an average of two given numbers.
   *
   * @param {number} value1
   * @param {number} value2
   * @return {number}
   *
   * @example:
   *   5, 5  => 5
   *  10, 0  => 5
   *  -3, 3  => 0
   */
  function getAverage(/* value1, value2 */) {

  }
  
  function getAverage(value1, value2) {
    return (value1 + value2) / 2;
  }
  
  let average1 = getAverage(5,5);
  let average2 = getAverage(10,0);
  
  console.log(average1);
  console.log(average2);
  
  /**
   * Returns a distance between two points by cartesian coordinates.
   *
   * @param {number} x1
   * @param {number} y1
   * @param {number} x2
   * @param {number} y2
   *
   * @return {number}
   *
   * @example:
   *   (0,0) (0,1)    => 1
   *   (0,0) (1,0)    => 1
   *   (-5,0) (10,-10) => 18.027756377319946
   */
  function getDistanceBetweenPoints(/* x1, y1, x2, y2 */) {

  }
  
  function getDistanceBetweenPoints(x1, y1, x2, y2) {
    return Math.sqrt((x2-x1)*(x2-x1) + (y2-y1)*(y2-y1));
  }
  
  let dist1 = getDistanceBetweenPoints(0,0,0,1);
  let dist2 = getDistanceBetweenPoints(0,0,1,0);
  let dist3 = getDistanceBetweenPoints(-5,0,10,-10);
  
  console.log(dist1);
  console.log(dist2);
  console.log(dist3);
  
  /**
   * Returns a root of linear equation a*x + b = 0 given by coefficients a and b.
   *
   * @param {number} a
   * @param {number} b
   * @return {number}
   *
   * @example:
   *   5*x - 10 = 0    => 2
   *   x + 8 = 0       => -8
   *   5*x = 0         => 0
   */
  function getLinearEquationRoot(/* a, b */) {

  }
  
  function getLinearEquationRoot(a,b) {
    return (-b/a);
  }
  
  let ex1 = getLinearEquationRoot(5,-10);
  let ex2 = getLinearEquationRoot(1,8);
  let ex3 = getLinearEquationRoot(5,-0);
  
  console.log(ex1);
  console.log(ex2);
  console.log(ex3);
  
  /**
   * Returns an angle (in radians) between two vectors given by xi and yi,
   * coordinates in Cartesian plane.
   * See details https://en.wikipedia.org/wiki/Euclidean_vector#Representations
   *
   * @param {number} x1
   * @param {number} y1
   * @param {number} x2
   * @param {number} y2
   * @return {number}
   *
   * @example:
   *   (1,0) (0,1)     => π/2
   *   (0,1) (0,-1)    => π
   *   (0,-1) (1,0)    => π/2
   *   (0,1) (0,1)     => 0
   */
  function getAngleBetweenVectors(/* x1, y1, x2, y2 */) {

  }
  
  function getAngleBetweenVectors(x1,y1,x2,y2) {
    return Math.acos((x1*x2+y1*y2)/(Math.sqrt(x1**2+y1**2)*Math.sqrt(x2**2+y2**2)));
  }
  
  let angle1 = getAngleBetweenVectors(1,0,0,1);
  let angle2 = getAngleBetweenVectors(0,1,0,-1);
  let angle3 = getAngleBetweenVectors(0,-1,1,0);
  let angle4 = getAngleBetweenVectors(0,1,0,1);
  
  console.log(angle1);
  console.log(angle2);
  console.log(angle3);
  console.log(angle4);
  
  /**
   * Returns a last digit of a integer number.
   * The input parameter will always be greater than or equal to zero and will be in decimal notation.
   *
   * @param {number} value
   * @return {number}
   *
   * @example:
   *   100     => 0
   *    37     => 7
   *     5     => 5
   *     0     => 0
   */
  function getLastDigit(/* value */) {

  }
  
  function getLastDigit(value) {
    return value % 10;
  }
  
  let samN1 = getLastDigit(100);
  let samN2 = getLastDigit(37);
  let samN3 = getLastDigit(5);
  let samN4 = getLastDigit(0);
  
  console.log(samN1);
  console.log(samN2);
  console.log(samN3);
  console.log(samN4);
  
  /**
   * Returns a number by given string representation.
   *
   * @param {string} value
   * @return {number}
   *
   * @example:
   *    '100'     => 100
   *     '37'     => 37
   * '-525.5'     => -525.5
   */
  function parseNumberFromString(/* value */) {

  }
  
  function parseNumberFromString(value) {
    return Number(value)
  }
  
  let parse1 = parseNumberFromString('100');
  let parse2 = parseNumberFromString('37');
  let parse3 = parseNumberFromString('-525.5');
  
  console.log(parse1);
  console.log(parse2);
  console.log(parse3);
  
  /**
   * Returns a diagonal length of the rectangular parallelepiped given by its sides a,b,c.
   *
   * @param {number} a
   * @param {number} b
   * @param {number} c
   * @return {number}
   *
   * @example:
   *   1,1,1   => 1.7320508075688772
   *   3,3,3   => 5.196152422706632
   *   1,2,3   => 3.741657386773941
   */
  function getParallelepipedDiagonal(/* a, b, c */) {

  }
  
  function getParallelepipedDiagonal(a, b, c) {
    return Math.sqrt(a**2+b**2+c**2)
  }
  
  let parD1 = getParallelepipedDiagonal(1,1,1);
  let parD2 = getParallelepipedDiagonal(3,3,3);
  let parD3 = getParallelepipedDiagonal(1,2,3);
  
  console.log(parD1);
  console.log(parD2);
  console.log(parD3);
  
  /**
   * Returns the number rounded to specified power of 10.
   *
   * @param {number} num
   * @param {number} pow
   * @return {number}
   *
   * @example:
   *   1234, 0  => 1234
   *   1234, 1  => 1230
   *   1234, 2  => 1200
   *   1234, 3  => 1000
   *   1678, 0  => 1678
   *   1678, 1  => 1680
   *   1678, 2  => 1700
   *   1678, 3  => 2000
   */
  function roundToPowerOfTen(/* num, pow */) {

  }
  
  function roundToPowerOfTen(num,pow) {
    return Math.round(num / Math.pow(10,pow)) * Math.pow(10,pow);
  }
  
  let round1 = roundToPowerOfTen(1234, 0);
  let round2 = roundToPowerOfTen(1234, 1);
  let round3 = roundToPowerOfTen(1234, 2);
  let round4 = roundToPowerOfTen(1234, 3);
  let round5 = roundToPowerOfTen(1678, 0);
  let round6 = roundToPowerOfTen(1678, 1);
  let round7 = roundToPowerOfTen(1678, 2);
  let round8 = roundToPowerOfTen(1678, 3);
  
  console.log(round1);
  console.log(round2);
  console.log(round3);
  console.log(round4);
  console.log(round5);
  console.log(round6);
  console.log(round7);
  console.log(round8);
  
  /**
   * Returns true is the number is prime; otherwise false.
   * See: https://en.wikipedia.org/wiki/Primality_test
   *
   * @param {number} n
   * @return {bool}
   *
   * @example:
   *   4 => false
   *   5 => true
   *   6 => false
   *   7 => true
   *   11 => true
   *   12 => false
   *   16 => false
   *   17 => true
   */
  function isPrime(/* n */) {

  }
  
  function isPrime(n) {
    if (n%2 !== 0) {
      return true;
    }
    else {
      return false;
    }
  }
  
  let samp1 = isPrime(4);
  let samp2 = isPrime(5);
  let samp3 = isPrime(6);
  let samp4 = isPrime(7);
  let samp5 = isPrime(11);
  let samp6 = isPrime(12);
  let samp7 = isPrime(16);
  let samp8 = isPrime(17);
  
  console.log(samp1);
  console.log(samp2);
  console.log(samp3);
  console.log(samp4);
  console.log(samp5);
  console.log(samp6);
  console.log(samp7);
  console.log(samp8);
  
  /**
   * Tries to convert value to number and returns it if conversion was successful;
   * otherwise returns default value passed as a second argument.
   *
   * @param {any} value
   * @param {any} def
   * @return {number}
   *
   * @example
   *   toNumber(null, 0) => 0
   *   toNumber('test', 0) => 0
   *   toNumber('1', 0) => 1
   *   toNumber(42, 0) => 42
   *   toNumber(new Number(42), 0) => 42
   */
  function toNumber(/* value, def */) {

  }
  
  function toNumber(value, def) {
    return parseFloat(value, def) || 0;
  }
  
  let exN1 = toNumber(null, 0);
  let exN2 = toNumber('test', 0);
  let exN3 = toNumber('1', 0);
  let exN4 = toNumber(42, 0);
  let exN5 = toNumber(new Number(42), 0);
  
  console.log(exN1);
  console.log(exN2);
  console.log(exN3);
  console.log(exN4);
  console.log(exN5);
  
  /**
   * Returns the cube of the given number.
   *
   * @param {number} num
   * @return {number}
   *
   * @example:
   *   3  => 27
   *   -2 => -8
   *   0  => 0
   */
  function getCube(/* num */) {

  }
  
  function getCube(num){
    return num**3;
  }
  
  let cube1 = getCube(3);
  let cube2 = getCube(-2);
  let cube3 = getCube(0);
  
  console.log(cube1);
  console.log(cube2);
  console.log(cube3);
  
  /**
   * Returns the Fibonacci number located at the index position.
   *
   * @param {number} index
   * @return {number}
   *
   * @example:
   *   0  => 0
   *   1  => 1
   *   2  => 1
   *   3  => 2
   *   10 => 55
   */
  function getFibonacciNumber(/* index */) {

  }
  
  function getFibonacciNumber(index) {
    let a = 0, b = 1, c = index;
    
  for(let i = 2; i <= index; i++) {
    c = a + b;
    a = b;
    b = c;
  }
    
  return c;
  }
  
  
  let res1 = getFibonacciNumber(0);
  let res2 = getFibonacciNumber(1);
  let res3 = getFibonacciNumber(2);
  let res4 = getFibonacciNumber(3);
  let res5 = getFibonacciNumber(10);
  
  console.log(res1);
  console.log(res2);
  console.log(res3);
  console.log(res4);
  console.log(res5);
  
  
  /**
   * Returns the sum of all numbers from 1 to n.
   *
   * @param {number} n
   * @return {number}
   *
   * @example:
   *   5  => 15 // (1+2+3+4+5)
   *   10 => 55 // (1+2+3+...+10)
   *   1  => 1
   */
  function getSumToN(/* n */) {

  }
  
  function getSumToN(n) {
     let total = 0;
      for(let i = 1; i <= n; i++){
        total += i;
      }
      return total;
  }
  
  let sum1 = getSumToN(5);
  let sum2 = getSumToN(10);
  let sum3 = getSumToN(1);
  
  console.log(sum1);
  console.log(sum2);
  console.log(sum3);
  
  /**
   * Returns the sum of the digits of a given number.
   *
   * @param {number} num
   * @return {number}
   *
   * @example:
   *   123 => 6  // (1+2+3)
   *   202 => 4  // (2+0+2)
   *   5   => 5  // 5
   */
  function getSumOfDigits(/* num */) {

  }
  
  function getSumOfDigits(num) {
    let sum = 0;
      while (num != 0) {
          sum = sum + num % 10;
          num = parseInt(num / 10);
      }
      return sum;
  }
  
  let sumD1 = getSumOfDigits(123);
  let sumD2 = getSumOfDigits(202);
  let sumD3 = getSumOfDigits(5);
  
  console.log(sumD1);
  console.log(sumD2);
  console.log(sumD3);
  
  /**
   * Returns true if the given number is a power of two, false otherwise.
   *
   * @param {number} num
   * @return {boolean}
   *
   * @example:
   *   4   => true
   *   16  => true
   *   15  => false
   */
  function isPowerOfTwo(/* num */) {

  }
  
  function isPowerOfTwo(num) {
    return num != 0 && ((num & (num - 1)) == 0);
  }
  
  let exP1 = isPowerOfTwo(4);
  let exP2 = isPowerOfTwo(16);
  let exP3 = isPowerOfTwo(15);
  
  console.log(exP1);
  console.log(exP2);
  console.log(exP3);
  
  /**
   * Returns the sine of a number.
   *
   * @param {number} num
   * @return {number}
   *
   * @example:
   *   0 => 0
   *   Math.PI / 2 => 1
   */
  function getSine(/* num */) {

  }
  
  function getSine(num) {
    return Math.sin(num)
  }
  
  let sin1 = getSine(0);
  let sin2 = getSine(Math.PI / 2);
  
  console.log(sin1);
  console.log(sin2);
  
  /**
   * Returns a string representation of a number in a specified base (radix).
   *
   * @param {number} number
   * @param {number} base
   * @return {string}
   *
   * @example:
   * 255, 16 => 'ff'
   * 2, 2    => '10'
   */
  function numberToStringInBase(/* number, base */) {

  }
  
  function numberToStringInBase(number, base) {
    let str = number;
    console.log(str.toString(base));
  }
  
  numberToStringInBase(255, 16);
  numberToStringInBase(2, 2);
  
  /**
   * Returns a string representation of a number in exponential notation.
   *
   * @param {number} number
   * @param {number} fractionDigits
   * @return {string}
   *
   * @example:
   * 12345, 2    => '1.23e+4'
   */
  function toExponential(/* number, fractionDigits */) {

  }
  
  function toExponential(number, fractionDigits) {
    return Number.parseFloat(number).toExponential(fractionDigits);
  }
  
  let expon = toExponential(12345, 2);
  let exponS = String(expon);
  console.log(exponS);
  
  /**
   * Returns a string representation of a number in fixed-point notation.
   *
   * @param {number} number
   * @param {number} fractionDigits
   * @return {string}
   *
   * @example:
   * 12345, 2    => '12345.00'
   * 12.345, 1   => '12.3'
   */
  function toFixed(/* number, fractionDigits */) {

  }
  
  function toFixed(number, fractionDigits) {
    return String(number);
  }
  
  let strF1 = 12345;
  let strF2 = 12.345;
  strF1 = strF1.toFixed(2);
  strF2 = strF2.toFixed(1);
  
  console.log(strF1);
  console.log(strF2);
  
  /**
   * Returns a string representation of a number in normal (fixed-point or exponential)
   * notation rounded to precision significant digits.
   *
   * @param {number} number
   * @param {number} precision
   * @return {string}
   *
   * @example:
   * 12345, 7    => '12345.00'
   * 12.345, 4   => '12.35'
   */
  function toPrecision(/* number, precision */) {

  }
  
  function toPrecision(number, precision) {
    return String(number);
  }
  
  let strP1 = 12345;
  let strP2 = 12.345;
  strP1 = strP1.toPrecision(7);
  strP2 = strP2.toPrecision(4);
  
  console.log(strP1);
  console.log(strP2);
  
  /**
   * Returns the primitive value of a Number object.
   *
   * @param {Number} number
   * @return {number}
   *
   * @example:
   * new Number(5) => 5
   * Number(-5)    => -5
   */
  function getNumberValue(/* number */) {

  }
  
  function getNumberValue(number) {
    return Number(number);
  }
  
  const ob1 = getNumberValue(new Number(5));
  const ob2 = getNumberValue(Number(-5));
  
  console.log(ob1);
  console.log(ob2);
  
  /**
   * Returns a boolean value indicating whether the parameter is a number or not.
   *
   * @param {number} number
   * @return {boolean}
   *
   * @example:
   * Infinity => false
   * NaN      => false
   * 0        => true
   * 'a' / 1  => false
   * 'a'      => false
   * 5        => true
   * '5'      => false
   */
  function isNumber(/* number */) {

  }
  
  function isNumber(number) {
    return Number.isFinite(number);
  }
  
  let resN1 = isNumber(Infinity);
  let resN2 = isNumber(NaN);
  let resN3 = isNumber(0);
  let resN4 = isNumber('a' / 1);
  let resN5 = isNumber('a');
  let resN6 = isNumber(5);
  let resN7 = isNumber('5');
  
  console.log(resN1);
  console.log(resN2);
  console.log(resN3);
  console.log(resN4);
  console.log(resN5);
  console.log(resN6);
  console.log(resN7);
  
  /**
   * Returns a boolean value indicating whether a number is an integer or not.
   *
   * @param {number} number
   * @return {boolean}
   *
   * @example:
   * 5    => true
   * 5.1  => false
   * '5'  => false
   */
  function isInteger(/* number */) {

  }
  
  function isInteger(number) {
    return Number.isInteger(number);
  }
  
  let resI1 = isInteger(5);
  let resI2 = isInteger(5.1);
  let resI3 = isInteger('5');
  
  console.log(resI1);
  console.log(resI2);
  console.log(resI3);
  
  /**
   * Returns a floating point number or, if the number cannot be parsed from the argument, returns NaN.
   *
   * @param {string} str
   * @return {number | NaN}
   *
   * @example:
   * '4.567abcdefgh' => 4.567
   * 'abcdefgh'      => NaN
   */
  function getFloatOnString(/* str */) {

  }
  
  function getFloatOnString(str) {
    return Number.parseFloat(str);
  }
  
  let resF1 = getFloatOnString('4.567abcdefgh');
  let resF2 = getFloatOnString('abcdefgh');
  
  console.log(resF1);
  console.log(resF2);
  
  /**
   * Returns an integer of the specified base or, if the number cannot be parsed
   * from the argument, returns NaN.
   *
   * @param {string} str
   * @param {number} base
   * @return {number | NaN}
   *
   * @example:
   * '4.567abcdefgh', 10  => 4
   * 'abcdefgh', 10       => NaN
   * '1.234', 2           => 1
   * '10', 8              => 8
   */
  function getIntegerOnString(/* str, base */) {

  }
  
  function getIntegerOnString(str, base) {
    return Number.parseInt(str, base);
  }
  
  let resIn1 = getIntegerOnString('4.567abcdefgh', 10);
  let resIn2 = getIntegerOnString('abcdefgh', 10);
  let resIn3 = getIntegerOnString('1.234', 2);
  let resIn4 = getIntegerOnString('10', 8);
  
  console.log(resIn1);
  console.log(resIn2);
  console.log(resIn3);
  console.log(resIn4);
  
  /**
   * Returns whether a number is a safe integer.
   *
   * @param {number} number
   * @return {boolean}
   *
   * @example:
   * 10       => true
   * 3.5      => false
   * 2 ** 53  => false
   */
  function isSafeInteger(/* number */) {

  }
  
  function isSafeInteger(number) {
    return Number.isSafeInteger(number);
  }
  
  let resInS1 = isSafeInteger(10);
  let resInS2 = isSafeInteger(3.5);
  let resInS3 = isSafeInteger(2**53);
  
  console.log(resInS1);
  console.log(resInS2);
  console.log(resInS3);
  
  /**
   * Returns the smallest integer less than or equal to a given number.
   *
   * @param {number} number
   * @return {number}
   *
   * @example:
   * 5.9  => 5
   * -5.1 => -6
   */
  function roundToSmallestInteger(/* number */) {

  }
  
  function roundToSmallestInteger(number) {
    return Math.floor(number);
  }
  
  let sm1 = roundToSmallestInteger(5.9);
  let sm2 = roundToSmallestInteger(-5.1);
  
  console.log(sm1);
  console.log(sm2);
  
  /**
   * Returns the largest integer greater than or equal to a given number.
   *
   * @param {number} number
   * @return {number}
   *
   * @example:
   * 5.1  => 6
   * -5.9 => -5
   */
  function roundToLargestInteger(/* number */) {

  }
  
  function roundToLargestInteger(number) {
    return Math.ceil(number);
  }
  
  let l1 = roundToLargestInteger(5.1);
  let l2 = roundToLargestInteger(-5.9);
  
  console.log(l1);
  console.log(l2);
  
  /**
   * Returns the value of a number rounded to the nearest integer.
   *
   * @param {number} number
   * @return {number}
   *
   * @example:
   * 5.5  => 6
   * 5.4  => 5
   * -5.5 => -5
   */
  function roundToNearestInteger(/* number */) {

  }
  
  function roundToNearestInteger(number) {
    return Math.round(number);
  }
  
  let r1 = roundToNearestInteger(5.5);
  let r2 = roundToNearestInteger(5.4);
  let r3 = roundToNearestInteger(-5.5);
  
  console.log(r1);
  console.log(r2);
  console.log(r3);
  
  /**
   * Returns the integer part of a number by removing any fractional digits.
   *
   * @param {number} number
   * @return {number}
   *
   * @example:
   * 5.5  => 5
   * 5.4  => 5
   * -5.5 => -5
   */
  function getIntegerPartNumber(/* number */) {

  }
  
  function getIntegerPartNumber(number) {
    return Math.trunc(number);
  }
  
  let n1 = getIntegerPartNumber(5.5);
  let n2 = getIntegerPartNumber(5.4);
  let n3 = getIntegerPartNumber(-5.5);
  
  console.log(n1);
  console.log(n2);
  console.log(n3);
  
  /**
   * Returns the sum of numbers.
   *
   * @param {number} x1
   * @param {number} x2
   * @param {number} x3
   * @returns {number}
   *
   * @example:
   * 1, 2, 3       => 6
   * 0.1, 0.2, 0.3 => 0.6
   */
  function getSumOfNumbers(/* x1, x2, x3 */) {

  }
  
  function getSumOfNumbers(x1,x2,x3) {
    return Math.round((x1+x2+x3)*10)/10;
  }
  
  let s1 = getSumOfNumbers(1,2,3);
  let s2 = getSumOfNumbers(0.1,0.2,0.3);
  
  console.log(s1);
  console.log(s2);
  
  /**
   * Returns the largest number.
   *
   * @param {number} firstNumber
   * @param {number} secondNumber
   * @return {number}
   *
   * @example:
   * 1, 2   => 2
   * -5, -6 => -5
   * 0, 5   => 5
   */
  function getMaxNumber(/* firstNumber, secondNumber */) {

  }
  
  function getMaxNumber(firstNumber, secondNumber) {
    return Math.max(firstNumber, secondNumber);
  }
  
  let max1 = getMaxNumber(1,2);
  let max2 = getMaxNumber(-5,-6);
  let max3 = getMaxNumber(0,5);
  
  console.log(max1);
  console.log(max2);
  console.log(max3);
  
  /**
   * Returns a random integer in the range from min to max.
   *
   * @param {number} min
   * @param {number} max
   * @return {number}
   *
   * @example:
   * 1, 2  => 1 | 2
   * -5, 0 => -5 | -4 | -3 | -2 | -1 | 0
   * -1, 1 => -1 | 0 | 1
   */
  function getRandomInteger(/* min, max */) {

  }
  
  function getRandomInteger(min,max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  
  let rand1 = getRandomInteger(1,2);
  let rand2 = getRandomInteger(-5,0);
  let rand3 = getRandomInteger(-1,1);
  
  console.log(rand1);
  console.log(rand2);
  console.log(rand3);
  
  /**
   * Returns the length of the hypotenuse of a right triangle.
   *
   * @param {number} a
   * @param {number} b
   * @return {number}
   *
   * @example:
   * 3, 4 => 5
   */
  function getHypotenuse(/* a, b */) {

  }
  
  function getHypotenuse(a,b) {
    return Math.sqrt(a**2+b**2);
  }
  
  let hypotenuse = getHypotenuse(3,4);
  
  console.log(hypotenuse);
  
  /**
   * Returns count of odd numbers from zero to the resulting number.
   * The resulting number is taken into account.
   *
   * @param {number} number
   * @return {number}
   *
   * @example:
   * 4  => 2
   * 5  => 3
   * 10 => 5
   * 15 => 8
   */
  function getCountOfOddNumbers(/* number */) {

  }
  
  function getCountOfOddNumbers(number){
    const countOddFromZeroToNum = number;
    let i = 0;
    let count = 0;
    if(!number){
        alert("num can't be empty")
    }
    while(i<=countOddFromZeroToNum){
      if(i%2===1){
        count++
      }
      i++
    }
    console.log(count)
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
  