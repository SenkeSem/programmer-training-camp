var searchInsert = function (nums, target) {
  if (nums.includes(target)) {
    return nums.indexOf(target);
  } else {
    nums.push(target);
    nums.sort((a, b) => a - b);
    return nums.indexOf(target);
  }
};

// console.log(searchInsert([1, 9, 3, 5, 3, 6], 7));
