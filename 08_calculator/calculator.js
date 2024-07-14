const add = function() {
	return arguments[0]+arguments[1];
};

const subtract = function() {
	return arguments[0]-arguments[1];
};

const sum = function() {
	return arguments[0].reduce((accumulator, currentValue) => accumulator + currentValue,0)
};

const multiply = function() {
  let result = 1;
  for (let index = 0; index < arguments[0].length; index++) {
    result *= arguments[0][index];
    
  }
	return result;
};

const power = function() {
	return arguments[0]**arguments[1];
};

const factorial = function() {
  let result = 1;
	for (let index = 1; index <= arguments[0]; index++) {
    result *= index;   
  }
  return result;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
