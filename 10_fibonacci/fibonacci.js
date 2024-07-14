const fibonacci = function () {
  let position = arguments[0];
  if (position < 0) return "OOPS";
  if (position == 0) return 0;
  let fibonacciNumbers = [0, 1];
  for (let index = 2; index <= position; index++) {
    fibonacciNumbers.push(
      fibonacciNumbers[index - 1] + fibonacciNumbers[index - 2]
    );
  }
  return fibonacciNumbers.slice(-1)[0];
};

// Do not edit below this line
module.exports = fibonacci;
