const repeatString = function(word, numb) {

    if (numb < 0) return "ERROR";
    let string = '';
    for (let i = 0; i < numb; i++) {
        string += word
    }
    return string;

};

// Do not edit below this line
module.exports = repeatString;
