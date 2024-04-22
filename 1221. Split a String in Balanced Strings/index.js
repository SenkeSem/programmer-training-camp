var balancedStringSplit = function (s) {
  let counter = 0;
  let balance = 0;

  for (let i = 0; i < s.length; i++) {
    s[i] === 'R' ? balance++ : balance--;

    if (balance === 0) counter++;
  }

  return counter;
};

console.log(balancedStringSplit('RLRRLLRLRL'));
