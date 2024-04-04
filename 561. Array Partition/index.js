var arrayPairSum = function (nums) {
  let result = [];
  let sortArr = nums.sort((a, b) => a - b);

  for (let i = 0, j = i + 1; i < sortArr.length; i += 2, j += 2) {
    result.push(Math.min(sortArr[i], sortArr[j]));
  }

  return result.reduce((num, acc) => acc + num, 0);
};

// console.log(arrayPairSum([6, 2, 6, 5, 1, 2]));
