/***********************************************************************
1. Write a recursive function called `flatten` that takes a single array with
any number of nested arrays and
2. returns and array with all the nested contents on one level.

Do not use the built in Array.flat.

Examples:


***********************************************************************/
// Helper Function
function recursion(i, arr, result) {
  // if there is NO arrays within the array
  if (i >= arr.length) {
    return;
  }
  // If there is "just one array array"
  if (Array.isArray(arr[i])) {
    // True Array.isArray([]) --> True  What about? Array.isArray([[]]) --> True
    recursion(0, arr[i], result);
  } else {
    // If there are "multiple array" push the values into our result array
    result.push(arr[i]);
  }
  debugger;
  recursion(i + 1, arr, result);
}

// Main Function
function flatten(arr) {
  // edge case
  let result = [];
  // helper function & recursice call
  recursion(0, arr, result);
  // output
  return result;
}

// console.log(flatten([])); // []
// console.log(flatten([1, 2])); // [1, 2]
console.log(flatten([1, [2, [3]]])); // [1, 2, 3]

/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
module.exports = flatten;
