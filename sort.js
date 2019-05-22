var sameFrequency = function(num1, num2) {
  // convert both to string
  var str1 = num1.toString();
  var str2 = num2.toString();
  // if numbers are different length return false
  if (str1.length !== str2.length) {
    return false;
  }
  // create counter object for each string
  var counter1 = {};
  var counter2 = {};
  // loop over first string
  for (var i = 0; i < str1.length; i++) {
    counter1[str1[i]] ? counter1[str1[i]]++ : (counter1[str1[i]] = 1);
  }
  // repeat for second string
  for (var i = 0; i < str2.length; i++) {
    counter2[str2[i]] ? counter2[str2[i]]++ : (counter2[str2[i]] = 1);
  }
  // loop over one object
  for (var key in counter1) {
    // if object[key] in second object doesn't exist, return false or, if object[key] in second object is not the same return false;
    if (!counter2[key] || counter2[key] !== counter2[key]) {
      return false;
    }
  }
  //return true if all loops executed
  return true;
};
