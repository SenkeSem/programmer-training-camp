var countPrefixes = function (words, s) {
  let counter = 0;

  for (const word of words) {
    if (s.startsWith(word)) {
      counter++;
    }
  }

  return counter;
};

console.log(countPrefixes(['a', 'b', 'c', 'ab', 'bc', 'abc'], 'abc'));
