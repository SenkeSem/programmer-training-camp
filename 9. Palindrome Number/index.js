var isPalindrome = function (x) {
  let num = x.toString().split('');

  if (num.join('') === num.reverse().join('')) {
    return true;
  } else {
    return false;
  }
};

// console.log(isPalindrome(12442));
