var sumOfSquares = function (nums) {
  let result = 0;

  for (let i = 0; i < nums.length; i++) {
    console.log(nums[i]);
    console.log(result, 'результат');

    if (nums[i] % i == 0) {
      result += nums[i] * nums[i];
    }
  }

  // return result;
};

console.log(sumOfSquares([2, 7, 1, 19, 18, 3]));
