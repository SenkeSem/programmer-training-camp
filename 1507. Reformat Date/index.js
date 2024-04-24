var reformatDate = function (date) {
  let arr = date.split(' ');
  let M = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

  let day = parseInt(arr[0]);
  let month = arr[1];
  let year = arr[2];

  for (let i = 0; i < M.length; i++) {
    if (M[i] === month) {
      if (i < 9) {
        let index = i + 1;
        month = '0' + index;
      } else if (i === 10) {
        month = '11';
      } else {
        month = i + 1;
      }
    }
  }

  if (+day < 10) {
    day = '0' + day;
  }

  return year + '-' + month + '-' + day;
};

console.log(reformatDate('4th Nov 2030'));
