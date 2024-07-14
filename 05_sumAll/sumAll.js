const sumAll = function(numberOne,numberTwo) {
    let listOfNumbers = [];
    let initialValue = 0;
    let firstNum;
    let secondNum;
    if (numberOne < 0 || numberTwo < 0 || typeof(numberOne)!=typeof(initialValue) || typeof(numberTwo)!=typeof(initialValue)) {
        return "ERROR";
    }
    else if (numberTwo>numberOne) {
        firstNum = numberOne;
        secondNum = numberTwo;
    } else {
        firstNum = numberTwo;
        secondNum = numberOne;
    }
    for (let index = firstNum; index <= secondNum; index++) {
        listOfNumbers.push(index);
    }
    return listOfNumbers.reduce(
        (accumulator, currentValue) => accumulator + currentValue,
        initialValue,
      );
};

// Do not edit below this line
module.exports = sumAll;
