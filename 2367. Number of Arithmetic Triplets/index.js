const arr = [0, 1, 4, 6, 7, 10];
const diff = 3;

var arithmeticTriplets = function (nums, diff) {
  let count = 0;

  A: for (let i = nums.length - 1; i >= 0; i--) {
    for (let j = i - 1; j >= 0; j--) {
      if (nums[i] - nums[j] === diff) {
        for (let k = j; k >= 0; k--) {
          if (nums[j] - nums[k] === diff) {
            count++;
            continue A;
          }
        }
      }
    }
  }

  return count;
};

console.log(arithmeticTriplets(arr, diff));
