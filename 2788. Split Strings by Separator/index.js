var splitWordsBySeparator = function (words, separator) {
  let result = [];

  let word = words.join(`${separator}`).split(`${separator}`);

  for (const str of word) {
    if (str !== '') {
      result.push(str);
    }
  }

  return result;
};

// console.log(splitWordsBySeparator(['$easy$', '$problem$'], '$'));
