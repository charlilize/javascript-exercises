const sumAll = function(firstInt, secInt) {
    let largerNum = 0;
    let smallNum = 0;

    if (firstInt < 0 || secInt < 0 
        || !(typeof firstInt === 'number') 
        || !(typeof secInt === 'number')) {
        return "ERROR"
    } else if (firstInt > secInt) {
        largerNum = firstInt;
        smallNum = secInt;
    } else if (firstInt < secInt) {
        largerNum = secInt;
        smallNum = firstInt;        
    } 


    let sum = 0;
    for (let i = smallNum; i <= largerNum; i++) {
        sum += i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
