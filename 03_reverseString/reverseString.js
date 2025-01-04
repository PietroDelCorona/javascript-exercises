const reverseString = function(string) {
    /*
    phrase = '';
    for (let i = string.length -1; i >= 0; i-- ) {
        phrase += string[i];
    }

    return phrase;
    */

    return string.split('').reverse().join('');
};

// Do not edit below this line
module.exports = reverseString;
