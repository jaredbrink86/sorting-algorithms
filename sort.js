const sameFrequency = function(num1, num2) {
  // convert both to string
  const str1 = num1.toString();
  const str2 = num2.toString();
  if (str1.length !== str2.length) {
    return false;
  }
  // create counter object for each string
  const counter1 = {};
  const counter2 = {};
  // loop over first string
  for (let i = 0; i < str1.length; i++) {
    counter1[str1[i]] ? counter1[str1[i]]++ : (counter1[str1[i]] = 1);
  }
  // repeat for second string
  for (let i = 0; i < str2.length; i++) {
    counter2[str2[i]] ? counter2[str2[i]]++ : (counter2[str2[i]] = 1);
  }
  // loop over one object
  for (let key in counter1) {
    // if object[key] in second object doesn't exist, return false or, if object[key] in second object is not the same return false;
    if (!counter2[key] || counter2[key] !== counter1[key]) {
      return false;
    }
  }
  //return true if all loops executed
  return true;
};

const areThereDuplicates = function() {
  let args = Array.from(arguments).sort();
  for (let i = 0; i < args.length; i++) {
    if (args[i] === args[i + 1]) {
      return true;
    }
  }
  return false;
};

var isSubsequence = function(str1, str2) {
  // set index of str1 to 0
  var j = 0;
  // loop through string 2
  for (var i = 0; i < str2.length; i++) {
    if (i === str2.length - 1 && j < str1.length - 1) {
      // return false
      return false;
    }
    // if string 1 index matches string 2 index
    if (str1[j] === str2[i]) {
      // incrememnt both indexes
      j++;
    }
  }
  // return true if made it through the loop
  return true;
};

const maxSubarraySum = function(array, n) {
  // if n is greater than array.length
  if (n > array.length) {
    return null;
  }
  // set max variable at 0
  let maxSum = 0;
  // set temp variable at 0
  let tempSum = 0;
  // loop up to n
  for (let i = 0; i < n; i++) {
    // add each element value to maxSum
    maxSum += array[i];
  }
  tempSum = maxSum;
  // loop through array starting and index n
  for (let i = n; i < array.length; i++) {
    // subtract from element at i - n and add element at i and store in tempSum variable
    tempSum = tempSum - array[i - n] + array[i];
    // if tempSum is greater than maxSum
    maxSum = Math.max(maxSum, tempSum);
  }
  //return max
  return maxSum;
};

const binarySearch = function(arr, elem) {
  let start = 0;
  let end = arr.length - 1;
  let middle = Math.floor((start + end) / 2);
  while (arr[middle] !== elem && start <= end) {
    if (elem < arr[middle]) end = middle - 1;
    else start = middle + 1;
    middle = Math.floor((start + end) / 2);
  }
  return arr[middle] === elem ? middle : -1;
};

module.exports = {
  sameFrequency,
  areThereDuplicates,
  isSubsequence,
  maxSubarraySum,
  binarySearch
};
