var mergeAlternately = function (word1, word2) {
  let result = [];

  for (let i = 0, j = 0; i < word1.length; i++, j += 2) {
    result[j] = word1[i];
  }

  for (let k = 0, l = 1; k < word2.length; k++, l += 2) {
    result[l] = word2[k];
  }

  return result.join('');
};

console.log(mergeAlternately('abc', 'pqr'));
