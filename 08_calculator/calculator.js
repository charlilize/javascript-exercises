const add = function(a, b) {
  return a + b;
};

const subtract = function(a, b) {
  return a - b;
};

const sum = function(arr) {
  return arr.reduce((sum, num) => sum + num, 0);
};

const multiply = function(arr) {
  return arr.reduce((product, num) => product * num, 1);
};

const power = function(a, b) {
	return a ** b;
};

const factorial = function(a) { 
  let product = 1;
	for (let i = a; i > 0; i--) {
    product *= i;
  }
  return product;
};

// have a running product
// a * (a - 1) * (a - 2)
// subtract a after every iteration

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
