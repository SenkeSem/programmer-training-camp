var sortSentence = function (s) {
  let arr = s.split(' ');
  let result = new Array(arr.length);

  for (let i = 0; i < arr.length; i++) {
    let numberInString = arr[i].at(-1);

    result[numberInString - 1] = arr[i].slice(0, -1);
  }

  return result.join(' ');
};

console.log(sortSentence('is2 sentence4 This1 a3'));
