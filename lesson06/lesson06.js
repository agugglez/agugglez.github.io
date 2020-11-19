// Exercise 1:
// Define a filter function on the String object. The function accepts an array of strings that specifies a list of banned words. The
//  function returns the string after removing all the banned words.
// Example:
// console.log("This house is not nice!".filter('not'));
// Output: "This house is nice!"
String.prototype.filter = function (banneddWord) {
  return this.replace(banneddWord, "").replace(" ", " ");
  // let filteredWords = words.filter(w => bannedWords.indexOf(w) == -1);
  // return filteredWords.join(" ")
};

console.log("Exercise 1");
console.log("This house is not very nice!".filter('not'));

// Exercise 2:
// Write a BubbleSort algorithm on the Array object. Bubble sort is a simple sorting algorithm that works by repeatedly stepping through
// the list to be sorted,
// Example:[6,4,0, 3,-2,1].bubbleSort();
// Output : [-2, 0, 1, 3, 4, 6]
Array.prototype.bubbleSort = function bubbleSort() {
  arr = this;
  for (let j = 0; j < arr.length; j++) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] > arr[i + 1]) {
        var temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
      }
    }
  }
  return arr;
}

console.log("Exercise 2");
console.log([4, 5, 3, 1, 2].bubbleSort());

// Exercise 3:
// Create an object called Teacher derived from a Person function constructor, and implement a method called teach that receives a string
// called subject, and prints out: [teacher's name] is now teaching [subject]. Create a Teacher object and call its teach method.
// Also do the same thing using Object.create. When using Object.create you will need a factory function instead of a function 
// constructor in order to pass parameters such as ‘name’ to be set in the prototype.

console.log("Exercise 3 with function constructor");
let Person = function (name) {
  this.name = name;
}
//create subclass
let Teacher = function (name) {
  Person.call(this, name);
}
Teacher.prototype = Object.create(Person.prototype);
Teacher.prototype.teach = function (subject) {
  console.log(this.name + ' is now teaching ' + subject);
}
//create an object
const fct = new Teacher('Function Constructor Teacher');
fct.teach('WAP');

console.log("Exercise 3 with Object.create()");
Person = {
  name: "unknown",
}
//create subclass
Teacher = Object.create(Person);
Teacher.teach = function (subject) {
  console.log(this.name + ' is now teaching ' + subject);
}
// factory method
const teacherFactory = function (name) {
  let result = Object.create(Teacher);
  result.name = name;
  return result;
}
//create an object
const oct = teacherFactory('Object Create Teacher');
oct.teach('WAP');