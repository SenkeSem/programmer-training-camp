var finalString = function (s) {
  let str = '';

  for (const char of s) {
    if (char !== 'i') {
      str += char;
    } else {
      str = str.split('').reverse().join('');
    }
  }

  return str;
};

console.log(finalString('poiinter'));
