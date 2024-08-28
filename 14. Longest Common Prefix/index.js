var longestCommonPrefix = function (strs) {
  let prefix = '';
  let firstWord = strs[0];

  for (let i = 1; i < firstWord.length + 1; i++) {
    if (strs.every((word) => word.startsWith(firstWord.slice(0, i)))) {
      prefix += firstWord[i - 1];
    }
  }

  return prefix;
};

console.log(longestCommonPrefix(['flower', 'flow', 'flight']));
