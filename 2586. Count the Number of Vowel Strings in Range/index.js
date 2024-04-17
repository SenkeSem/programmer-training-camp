var vowelStrings = function (words, left, right) {
  let vowel = 'aeiou';
  let counter = 0;

  for (let i = left; i <= right; i++) {
    if (vowel.includes(words[i][0]) && vowel.includes(words[i].at(-1))) {
      counter++;
    }
  }

  return counter;
};

console.log(vowelStrings(['hey', 'aeo', 'mu', 'ooo', 'artro'], 1, 4));
