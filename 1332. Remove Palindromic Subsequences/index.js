var removePalindromeSub = function (s) {
  if (s.split('').reverse().join('') === s) {
    return 1;
  } else {
    return 2;
  }
};

console.log(removePalindromeSub('ababa'));
