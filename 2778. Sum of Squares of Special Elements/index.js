var sumOfSquares = function (nums) {
  let result = 0;

  for (let i = 1; i <= nums.length; i++) {
    if (nums.length % i == 0) {
      result += nums[i - 1] * nums[i - 1];
    }
  }

  return result;
};

// console.log(sumOfSquares([2, 7, 1, 19, 18, 3]));
