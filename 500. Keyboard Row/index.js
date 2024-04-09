var findWords = function (words) {
  const firstRow = 'qwertyuiop';
  const secondRow = 'asdfghjkl';
  const thirdRow = 'zxcvbnm';

  return words.filter((word) => {
    const arr = word.toLowerCase().split('');

    return (
      arr.every((char) => firstRow.includes(char)) ||
      arr.every((char) => secondRow.includes(char)) ||
      arr.every((char) => thirdRow.includes(char))
    );
  });
};

// const findWords = (words) =>
//   words.filter((w) => {
//     const wArr = w.toLowerCase().split(``);

//     return (
//       wArr.every((c) => `qwertyuiop`.includes(c)) ||
//       wArr.every((c) => `asdfghjkl`.includes(c)) ||
//       wArr.every((c) => `zxcvbnm`.includes(c))
//     );
//   });

console.log(findWords(['Hello', 'Alaska', 'Dad', 'Peace']));
