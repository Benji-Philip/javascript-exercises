const removeFromArray = function() {
    let myList = arguments[0];
    for (let index = 1; index < arguments.length; index++) {
        while (myList.includes(arguments[index])) {
            myList.splice(myList.indexOf(arguments[index]),1);
        }
    }
    return myList;
};

// Do not edit below this line
module.exports = removeFromArray;
