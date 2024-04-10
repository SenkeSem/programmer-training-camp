var thirdMax = function (nums) {
  let set = new Set(nums.sort((a, b) => b - a));

  let arr = [...set];
  if (arr.length < 3) return Math.max(...nums);

  return arr[2];
};

console.log(thirdMax([3, 2, 1]));
