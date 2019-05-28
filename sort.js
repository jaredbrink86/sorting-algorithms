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

const isSubsequence = function(str1, str2) {
  // set index of str1 to 0
  let j = 0;
  // loop through string 2
  for (let i = 0; i < str2.length; i++) {
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
  // declare start and end of search segment starting with beginning and end array
  let start = 0;
  let end = arr.length - 1;
  // declare middle of array
  let middle = Math.floor((start + end) / 2);
  // while middle element is not equal to input element
  while (arr[middle] !== elem && start <= end) {
    // if input element is less than middle element, change end to be one before the middle element so search is cut in half
    // do opposite if element is greater than middle element
    elem < arr[middle] ? (end = middle - 1) : (start = middle + 1);
    // reset middle with new start and end variables
    middle = Math.floor((start + end) / 2);
  }
  // once loop has finished, return true if element was found, false if not found
  return arr[middle] === elem ? middle : -1;
};

const minSubArrayLen = function(nums, sum) {
  let total = 0;
  let start = 0;
  let end = 0;
  let minLen = Infinity;

  while (start < nums.length) {
    // if total is less than sum and end is less than length of nums array
    if (total < sum && end < nums.length) {
      // add element at end index to total
      total += nums[end];
      // increment end
      end++;
      // if total is greater than or equal to sum
    } else if (total >= sum) {
      // if end - start is less than minLen, set minLen to end - start
      minLen = Math.min(end - start, minLen);
      // subtract nums array at start index
      total -= nums[start];
      // increment start
      start++;
    } else {
      // if total is less than num, but end of array is reached, break
      break;
    }
  }
  return minLen === Infinity ? 0 : minLen;
};

const bubbleSort = function(arr) {
  let temp;
  let noSwaps;
  // loop backwards from array length
  for (let i = arr.length - 1; i > 0; i--) {
    noSwaps = true;
    // loop over unsorted section of array. anything greater than i has already been sorted
    for (let j = 0; j < i - 1; j++) {
      // if current element is greater than next element
      if (arr[j] > arr[j + 1]) {
        // swap elements
        temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        noSwaps = false;
      }
      if (noSwaps) break;
    }
  }
  // return sorted array
  return arr;
};

const selectionSort = function(arr) {
  let temp;
  let min;
  // loop through array length
  for (let i = 0; i < arr.length; i++) {
    min = i;
    // loop through array starting at current index plus 1
    for (let j = i + 1; j < arr.length; j++) {
      // if element at j is less than element at minimum, set minimum to j
      if (arr[j] < arr[min]) min = j;
    }
    // if min is no longer element at i
    if (min !== i) {
      // swap element at i with minimum
      temp = arr[i];
      arr[i] = arr[min];
      arr[min] = temp;
    }
  }
  // return sorted array
  return arr;
};

module.exports = {
  sameFrequency,
  areThereDuplicates,
  isSubsequence,
  maxSubarraySum,
  binarySearch,
  minSubArrayLen,
  bubbleSort,
  selectionSort
};
