const removeFromArray = function(array, ...remove) {
    // removeFromArray([1, 2, 2, 3], 2)

    // for every element to remove
    for (let element of remove) { // 2
        // search through the entire array
        for (let j = 0; j < array.length; j++) {
            if (element === array[j]) {
                array.splice(j, 1); 
                j--; // to account for removing an element
            }
        }
    }

    console.log(array);

    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
