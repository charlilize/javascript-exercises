const reverseString = function (reverse) {
    let backwards = "";
    const letters = [];

    for (let i = 0; i < reverse.length; i++) {
        letters.push(reverse[i]);
    }

    for (let j = reverse.length - 1; j >= 0; j--) {
        backwards += letters[j];
    }

    return backwards;
};

// Do not edit below this line
module.exports = reverseString;
