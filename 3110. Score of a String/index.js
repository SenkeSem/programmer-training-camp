var scoreOfString = function (s) {
  let number = 0;

  for (let i = 0; i < s.length - 1; i++) {
    number += Math.abs(s[i].charCodeAt() - s[i + 1].charCodeAt());
  }

  return number;
};

console.log(scoreOfString('hello'));
