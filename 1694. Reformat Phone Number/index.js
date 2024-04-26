var reformatNumber = function (number) {
  let str = number.match(/\d/gi).join('');
  let result = '';

  // ВЕРНУСЬ ПОЗЖЕ !!!

  // while (str.length >= 0) {
  //   if (str.length > 4) {
  //     result += str.slice(0, 3) + '-';
  //     str = str.slice(3);
  //   } else if (str.length === 3) {
  //     result += str.slice(0, 3);
  //     str = str.slice(3);
  //   }
  //   break;
  // }

  console.log('результат: ', result);
  return str;
};

console.log(reformatNumber('1-23-45 6'));
