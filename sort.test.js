const {
  sameFrequency,
  areThereDuplicates,
  isSubsequence,
  maxSubarraySum,
  binarySearch
} = require("./sort.js");

describe("sameFrequency", () => {
  test("Should return a boolean", () => {
    expect(typeof sameFrequency(123, 321)).toBe("boolean");
  });

  test("Should return true if both numbers have the same numbers, occurring with the same frequency", () => {
    expect(sameFrequency(123, 321)).toBe(true);
    expect(sameFrequency(123, 123)).toBe(true);
    expect(sameFrequency(1114445, 4141415)).toBe(true);
  });

  test("Should return false if contains different numbers, or same numbers occur with different same frequency", () => {
    expect(sameFrequency(123, 221)).toBe(false);
    expect(sameFrequency(244, 221)).toBe(false);
    expect(sameFrequency(414, 411)).toBe(false);
  });
});

describe("areThereDuplicates", () => {
  test("Should return a boolean", () => {
    expect(typeof areThereDuplicates(1, 2, 3, 4, 4)).toBe("boolean");
  });
  test("Should return true if duplicates are found", () => {
    expect(areThereDuplicates(1, 1, 2, 4)).toBe(true);
    expect(areThereDuplicates("a", "b", "c", "a", "c")).toBe(true);
  });
  test("Should return false if duplicates are not found", () => {
    expect(areThereDuplicates(1, 2, 3, 4, 5)).toBe(false);
    expect(areThereDuplicates("a", "b", "c", "d", "e")).toBe(false);
  });
});

describe("isSubsequence", () => {
  test("Should return a boolean", () => {
    expect(typeof isSubsequence("abc", "bc")).toBe("boolean");
  });
  test("Should return true if one string is a substring of the other", () => {
    expect(isSubsequence("hello", "hello world")).toBe(true);
  });
  test("Should return false if one string is a substring of the other", () => {
    expect(isSubsequence("hello", "goodbye")).toBe(false);
  });
});

describe("maxSubarraySum", () => {
  test("Should return the largest total of n consecutive numberes in the array", () => {
    expect(maxSubarraySum([1, 2, 3, 4, 5], 2)).toBe(9);
    expect(maxSubarraySum([1, 2, 5, 4, 2, 1, 4, 9, 8], 3)).toBe(21);
  });
});

describe("binarySearch", () => {
  test("Should return the index of the given element, if included in the array", () => {
    expect(binarySearch([1, 2, 3, 4], 3)).toBe(2);
  });
  test("Should return -1 if the element is not in the array", () => {
    expect(binarySearch([1, 2, 3, 4], 5)).toBe(-1);
  });
});

describe("mergeSort", () => {
  test("Should sort an array of numbers", () => {
    expect(mergeSort([1, 3, 5, 2, 6, 8, 7, 4])).toBe([1, 2, 3, 4, 5, 6, 7, 8]);
    test("Should sort an array of characters alphabetically", () => {
      expect(mergeSort(["b", "c", "a", "z", "p"])).toBe([
        "a",
        "b",
        "c",
        "p",
        "z"
      ]);
    });
  });
});
