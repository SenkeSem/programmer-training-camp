var repeatedCharacter = function (s) {
  let map = new Map();

  for (const char of s) {
    if (map.has(char)) {
      let count = map.get(char);
      map.set(char, (count += 1));

      if (map.get(char) === 2) {
        return char;
      }
    } else {
      map.set(char, 1);
    }
  }

  return map;
};

console.log(repeatedCharacter('abccbaacz'));
