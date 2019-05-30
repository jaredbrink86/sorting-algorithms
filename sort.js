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

///////////////////////////////////////////////////////////////////////////////
// Bubble sort will compare each element to the next,                        //
// determine if the next element is greater than the current,                //
// and swap the elements if it is greater. This causes the largest           //
// elements to 'bubble up' to the end of the array, until sorted. O(n^2)     //
// Works very well with nearly sorted data.                                  //
///////////////////////////////////////////////////////////////////////////////

const bubbleSort = function(arr) {
  let temp;
  let noSwaps;
  // loop backwards from array length
  for (let i = arr.length; i > 0; i--) {
    // loop over unsorted section of array. anything greater than i has already been sorted
    for (let j = 0; j < i - 1; j++) {
      // if current element is greater than next element
      if (arr[j] > arr[j + 1]) {
        // swap elements and declare swap has been made
        temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        noSwaps = false;
      }
    }
    // if no swaps were made, no point break out of loop.
    if (noSwaps) break;
  }
  // return sorted array
  return arr;
};

///////////////////////////////////////////////////////////////////////////////
// Selection sort will iterate through the array. On each iteration, it will //
// find the minimum value, and swap it with the current element, unless      //
// the current element is in fact the minimum value. This will cause the     //
// smallest values to sort of sink to their proper position in the array     //
// O(n^2) Not great for nearly sorted.                                                                   //
///////////////////////////////////////////////////////////////////////////////

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

///////////////////////////////////////////////////////////////////////////////
// Insertion sort builds up a sorted portion of the array, by inserting one  //
// item at a time, into its proper place. Compare each element to all        //
// previous elements. Move elements that are greater than current to the     //
// right, until correct place is found. Then insert into correct place.      //
// Works well on nearly sorted data. Also works well when adding new data    //
///////////////////////////////////////////////////////////////////////////////

const insertionSort = function(arr) {
  // declare current val
  let currentVal;
  // loop through arr length starting at 1
  for (let i = 1; i < arr.length; i++) {
    // store current val
    currentVal = arr[i];
    // loop backward through sorted portion of array starting at i - 1
    for (var j = i - 1; j >= 0; j--) {
      // while current val is less than inner loop val, otherwise break loop
      if (currentVal < arr[j]) {
        arr[j + 1] = arr[j];
      } else {
        break;
      }
    }
    // set arr at j + 1 to current value.
    arr[j + 1] = currentVal;
  }
  // return sorted array
  return arr;
};

const merge = function(arr1, arr2) {
  let results = [];
  let i = 0;
  let j = 0;
  while (i < arr1.length && j < arr2.length) {
    if (arr2[j] >= arr1[i]) {
      results.push(arr1[i]);
      i++;
    } else {
      results.push(arr2[j]);
      j++;
    }
  }
  while (i < arr1.length) {
    results.push(arr1[i]);
    i++;
  }
  while (j < arr2.length) {
    results.push(arr2[j]);
    j++;
  }
  return results;
};
// const merge = function(arr1, arr2) {
//   // set firstArrIndex variable to 0
//   let i = 0;
//   // set secondArrIndex variable to 0
//   let j = 0;
//   // set result variable to empty array
//   let result = [];
//   // declare longest variable
//   let longest;
//   // declare shortest variable
//   let shortest;
//   // set longest and shortest according to which array is longer
//   if (arr1.length > arr2.length) {
//     longest = arr1;
//     shortest = arr2;
//   } else {
//     longest = arr2;
//     shortest = arr1;
//   }
//   // while loop until end of longest is reached
//   while (i < longest.length) {
//     // compare elements at i and j and push the lower element. If sortest array is finished, push the rest of longest array
//     if (shortest[j] >= longest[i] || j >= shortest.length) {
//       result.push(longest[i]);
//       i++;
//     } else {
//       result.push(shortest[j]);
//       j++;
//     }
//   }
//   return result;
// };

const mergeSort = function(arr) {
  if (arr.length <= 1) return arr;
  let mid = Math.floor(arr.length / 2);
  let left = mergeSort(arr.slice(0, mid));
  let right = mergeSort(arr.slice(mid));
  return merge(left, right);
};

module.exports = {
  sameFrequency,
  areThereDuplicates,
  isSubsequence,
  maxSubarraySum,
  binarySearch,
  minSubArrayLen,
  bubbleSort,
  selectionSort,
  insertionSort,
  merge,
  mergeSort
};
