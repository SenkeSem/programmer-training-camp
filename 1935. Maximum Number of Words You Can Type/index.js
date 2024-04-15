var canBeTypedWords = function (text, brokenLetters) {
  let arr = text.split(' ');
  let count = 0;

  A: for (const word of arr) {
    for (let i = 0; i < brokenLetters.length; i++) {
      if (word.includes(brokenLetters[i])) continue A;
    }
    count++;
  }

  return count;
};

console.log(canBeTypedWords('hello world', 'ad'));
