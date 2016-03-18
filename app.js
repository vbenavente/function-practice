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
