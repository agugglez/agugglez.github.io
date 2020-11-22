// 1 Define a function max() that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in Javascript.
// max returns the maximum of 2 arguments
function max(a, b) {
    if (a > b) {
        return a;
    }
    return b;
}
console.log("max(0,1) is 1?");
console.log(max(0, 1) === 1);

// 2 Define a function maxOfThree() that takes three numbers as arguments and returns the largest of them.
// max3 takes 3 numbers as arguments and returns the largest
function maxOfThree(a, b, c) {
    return max(max(a, b), c);
}

console.log("maxOfThree(0,1, 2) is 2?");
console.log(maxOfThree(0, 1, 2) === 2);

console.log("maxOfThree(-4, 0, 1) is 1?");
console.log(maxOfThree(-4, 0, 1) === 1);

// 3 Write a function isVowel() that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.

function isVowel(c) {
    return ['a', 'e', 'i', 'o', 'u'].includes(c);
}
console.log("isVowel(e)?");
console.log(isVowel('e'));
console.log("isVowel(t)?");
console.log(isVowel('t'));

// 4 Define a function sum() and a function multiply() that sums and multiplies (respectively) all the numbers in an array of numbers. For example,
//     sum([1,2,3,4]) should return 10, and multiply([1,2,3,4]) should return 24.
function sum(nums) {
    return nums.reduce((accum, curr) => accum + curr);
}
console.log("sum([1,2,3,4]) === 10?");
console.log(sum([1, 2, 3, 4]) === 10);

function multiply(nums) {
    return nums.reduce((accum, curr) => accum * curr);
}
console.log("sum([1,2,3,4]) === 24?");
console.log(sum([1, 2, 3, 4]) === 24);

// 5 Define a function reverse() that computes the reversal of a string. For example, reverse("jag testar") should return the string "ratset gaj".
function reverse(str) {
    return str.split('').reverse().join('');
}
console.log("reverse('Greetings from Earth') === 'htraE morf sgniteerG'?");
console.log(reverse('Greetings from Earth') === 'htraE morf sgniteerG');

// 6 Write a function findLongestWord() that takes an array of words and returns the length of the longest one.
function findLongestWord(wordArray) {
    return wordArray.reduce((accum, curr) => max(accum, curr.length), 0);
}
console.log("findLongestWord(['one', 'two', 'three', 'sixsix']) === 6");
console.log(findLongestWord(['one', 'two', 'three', 'sixsix']) === 6);


// 7 Write a function filterLongWords() that takes an array of words and an integer i and returns the array of words that are longer than i.
function filterLongWords(wordArray, i) {
    return wordArray.filter(word => word.length > i);
}

function arraysEqual(a, b) {
    if (a === b) return true;
    if (a == null || b == null) return false;
    if (a.length !== b.length) return false;

    for (var i = 0; i < a.length; ++i) {
        if (a[i] !== b[i]) return false;
    }
    return true;
}

console.log("filterLongWords(['one', 'apple', 'orange', 'two', 'the'], 4) is ['apple', 'orange'] ?");
console.log(arraysEqual(filterLongWords(['one', 'apple', 'orange', 'two', 'the'], 4), ['apple', 'orange']));

// 8 Modify the jsfiddle on the map/filter/reduce slide as follows:
// a) multiply each element by 10; 
// b) return array with all elements equal to 3; 
// c) return the product of all elements;
const a = [1,3,5,3,3]; 
const b = a.map(function(elem, i, array) {
  return elem * 10;
})
console.log(b);
const c = a.filter(function(elem, i, array){
  return elem === 3;});
console.log(c);
const d = a.reduce(function(prevValue, elem, i, array){
  return prevValue * elem;
});
console.log(d);