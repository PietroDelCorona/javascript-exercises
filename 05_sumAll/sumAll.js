const sumAll = function(numb1, numb2) {
    if (!Number.isInteger(numb1) || !Number.isInteger(numb2)) return "ERROR";
    if (numb1 < 0 || numb2 < 0) return "ERROR";
    
    finalSum = 0;

    for (let i = numb1; i <= numb2; i++) {
        finalSum += i;       

    }
    return finalSum;
};

// Do not edit below this line
module.exports = sumAll;
