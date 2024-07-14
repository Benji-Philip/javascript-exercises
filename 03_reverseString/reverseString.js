const reverseString = function(myString) {
let reversedString = '';
for (let index = 1; index <= myString.length; index++) {
    reversedString += myString.substr(-index,1);
}
return reversedString;
};

// Do not edit below this line
module.exports = reverseString;
