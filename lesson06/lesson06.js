// Exercise 1:
// Define a filter function on the String object. The function accepts an array of strings that specifies a list of banned words. The function returns the string after removing all the banned words.
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
// Write a BubbleSort algorithm on the Array object. Bubble sort is a simple sorting algorithm that works by repeatedly stepping through the list to be sorted,
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