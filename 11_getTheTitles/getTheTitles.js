const getTheTitles = function() {
    let bookTitles = [];
    for (let index = 0; index < arguments[0].length; index++) {
        
        bookTitles.push(arguments[0][index].title);
    }
    return bookTitles;
};

// Do not edit below this line
module.exports = getTheTitles;
