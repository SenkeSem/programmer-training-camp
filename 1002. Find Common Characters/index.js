var commonChars = function (words) {
  let result = [];
  let firstWord = [...words[0]];

  for (const char of firstWord) {
    if (words.every((word) => word.includes(char))) {
      result.push(char);
      words = words.map((word) => word.replace(char, ''));
    }
  }

  return result;
};

console.log(commonChars(['cool', 'lock', 'cook']));
