var singleNumber = function (nums) {
  for (const num of nums) {
    if (nums.indexOf(num) === nums.lastIndexOf(num)) {
      return num;
    }
  }
};

// console.log(singleNumber([2, 8, 2, 1, 1]));
