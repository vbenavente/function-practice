console.log('javascript is working');

function sum(numOne, numTwo){
  var total = numOne + numTwo;
  return total;
  //console.log('The sum of ' + numOne + ' and ' + numTwo + ' is ' + total + '.');
}

function multiply(mulOne, mulTwo) {
  var product = mulOne * mulTwo;
  return product;
  //console.log('The product of ' + mulOne + ' and ' + mulTwo + ' is ' + product + '.');
}

function sumAndMultiply(numOne, numTwo, numThree) {
  var sumOne = sum(numOne, numTwo);
  var add = sum(sumOne, numThree);
  var prodOne = multiply(numOne, numTwo);
  var times = multiply(prodOne, numThree);
  var sumMulArray = [];
  sumMulArray.push(add);
  sumMulArray.push(times);
  console.log(numOne + ' and ' + numTwo + ' and ' + numThree + ' sum to ' + sumMulArray[0] + '.');
  console.log('The numbers ' + numOne + ' and ' + numTwo + ' and ' + numThree + ' have a product of ' + sumMulArray[1] + '.');
  return sumMulArray;
}

function sumArray(arrayOne) {
  var arrayTotal = 0;
  for(var i = 0; i < arrayOne.length; i++) {
    arrayTotal = arrayTotal + arrayOne[i];
  }
  console.table(arrayOne);
  console.log('2,3,4 was passed in as an array of numbers, and ' + arrayTotal + ' is their sum.');
}
