const reverseString = function(word) {
    //split a string into an array of each of its characters
    let wordArray = word.split('');
    //print the array in reverse order into a variable
    return wordArray.reverse().join('');
};

// Do not edit below this line
module.exports = reverseString;
