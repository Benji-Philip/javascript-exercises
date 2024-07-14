const repeatString = function(myString,myRepeats) {
    let myConcatString = myString
    for (let index = 0; index < myRepeats-1; index++) {
        myString = myString.concat(myConcatString);      
    }
    if (myRepeats < 0) {
        return "ERROR";
    } else {
        return myRepeats === 0 ? '' : myString;   
    }
};

// Do not edit below this line
module.exports = repeatString;
