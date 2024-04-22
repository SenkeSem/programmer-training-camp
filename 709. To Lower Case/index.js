var toLowerCase = function (s) {
  let lower = '';

  for (const char of s) {
    if (char.charCodeAt() >= 65 && char.charCodeAt() <= 90) {
      let code = char.charCodeAt() + 32;
      lower += String.fromCharCode(code);
    } else {
      lower += char;
    }
  }

  return lower;
};

console.log(toLowerCase('Hello'));
