var numOfStrings = function (patterns, word) {
  let counter = 0;

  for (const str of patterns) {
    if (word.includes(str)) counter++;
  }

  return counter;
};

console.log(numOfStrings(['a', 'abc', 'bc', 'd'], 'abc'));
