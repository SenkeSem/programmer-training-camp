var percentageLetter = function (s, letter) {
  let count = 0;

  for (const char of s) {
    if (char === letter) count++;
  }

  return Math.floor((count * 100) / s.length);
};

console.log(percentageLetter('foobar', 'o'));
