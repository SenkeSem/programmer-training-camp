var addToArrayForm = function (num, k) {
  let number = BigInt(num.join('')) + BigInt(k) + '';

  return Array.from(number, (str) => Number(str));
};

console.log(addToArrayForm([1, 2, 0, 0], 34));
