const palindromes = function (myString) {
    const alphanumerical = 'abcdefghijklmnopqrstuvwxyz0123456789';
    let desiredString = myString.toLowerCase()
    .split('')
    .filter((character) => alphanumerical.includes(character))
    .join('');
    let reversedString = desiredString.split("").reverse().join("");
    return desiredString === reversedString;
};

// Do not edit below this line
module.exports = palindromes;
