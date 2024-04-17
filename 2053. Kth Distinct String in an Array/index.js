var kthDistinct = function (arr, k) {
  let result = [];

  for (const char of arr) {
    if (arr.indexOf(char) === arr.lastIndexOf(char)) {
      result.push(char);
    }
  }

  return result.length < k ? '' : result[k - 1];
};

console.log(kthDistinct(['a', 'b', 'a'], 3));
