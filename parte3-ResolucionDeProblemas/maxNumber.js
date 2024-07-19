const findMaxNumber = (nums) => {
  if (!Array.isArray(nums) || !nums.every((num) => typeof num === "number")) {
    throw new TypeError("The argument must be an array of numbers");
  }

  const numsList = [...nums];
  let maxNumber;

  for (num of numsList) {
    if (maxNumber === undefined || num > maxNumber) {
      maxNumber = num;
    }
  }

  return maxNumber;
};

const testArray = [1, 2, 3, 4, 5, 25, 35, 2, 8];
console.log("Test array", testArray);
console.log("Result", findMaxNumber(testArray)); // 5
