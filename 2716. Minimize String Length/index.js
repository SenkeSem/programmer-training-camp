var minimizedStringLength = function (s) {
  let set = new Set(s);

  return set.size;
};

console.log(minimizedStringLength('wwwwwaaabc'));
