var reverseString = function (s) {
  let left = 0;
  let right = s.length - 1;

  while (left < right) {
    let rightChar = s[right];
    s[right] = s[left];
    s[left] = rightChar;

    left++;
    right--;
  }

  return s;
};

console.log(reverseString(['h', 'e', 'l', 'l', 'o']));
