var uncommonFromSentences = function (s1, s2) {
  let words = [...s1.split(' '), ...s2.split(' ')],
    result = [],
    map = new Map();

  for (const word of words) {
    if (map.has(word)) {
      let value = map.get(word);
      map.set(word, (value += 1));
    } else {
      map.set(word, 1);
    }
  }

  for (const word of map) {
    if (word[1] === 1) {
      result.push(word[0]);
    }
  }

  return result;
};

console.log(uncommonFromSentences('this apple is sweet', 'this apple is sour'));
