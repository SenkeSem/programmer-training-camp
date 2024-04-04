var flipAndInvertImage = function (image) {
  let arr = image.map((item) => item.reverse());

  let result = arr.map((surArr) => {
    return surArr.map((num) => {
      if (num === 1) {
        return (num = 0);
      } else {
        return (num = 1);
      }
    });
  });

  return result;
};

// console.log(
//   flipAndInvertImage([
//     [1, 1, 0],
//     [1, 0, 1],
//     [0, 0, 0],
//   ]),
// );
