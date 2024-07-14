const leapYears = function (theYear) {
  //divisible by 4
  //not divisible by 100 unless its 400 meaning if it is divisible by 100 it should be only by 400
  //check if divisible by 4 and 400
  //check if divisible by 100
  if (theYear % 100 === 0) {
    if (theYear % 400 === 0) {
      return true;
    } else {
      return false;
    }
  } else if (theYear % 4 === 0) {
    return true;
  } else {
    return false;
  }
};

// Do not edit below this line
module.exports = leapYears;
