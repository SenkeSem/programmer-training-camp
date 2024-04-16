var countKeyChanges = function (s) {
  let count = 0;
  let str = s.toLowerCase();

  for (let i = 0; i < str.length - 1; i++) {
    if (str[i] !== str[i + 1]) {
      count++;
    }
  }

  return count;
};

console.log(countKeyChanges('aAbBcC'));
