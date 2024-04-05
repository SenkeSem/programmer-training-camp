var maximumValue = function (strs) {
  let arr = [];

  for (const str of strs) {
    if (isNaN(Number(str))) {
      arr.push(str.length);
    } else {
      arr.push(Number(str));
    }
  }

  return Math.max(...arr);
};

// console.log(maximumValue(['alic3', 'bob', '3', '4', '00000']));
