var reversePrefix = function (word, ch) {
  let index = word.indexOf(ch);
  let left = word
    .slice(0, index + 1)
    .split('')
    .reverse()
    .join('');
  let right = word.slice(index + 1);

  return left + right;
};

console.log(reversePrefix('abcdefd', 'd'));
