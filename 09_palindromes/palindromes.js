const palindromes = function (string) {
    let arr = string.split("");
    arr = arr.filter((element) => element != "," &&  element != "!" &&  element != "." && element != " ")
    let copy = arr.slice().join(""); // keep copy of string without punctuation
    arr.reverse();
    arr = arr.join("");
    // console.log(copy.toLowerCase(), "\n", arr.toLowerCase());
    return copy.toLowerCase() == arr.toLowerCase();
};

// convert string to array
// reverse 
// compare

// Do not edit below this line
module.exports = palindromes;
