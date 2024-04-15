const numEquivDominoPairs = (dominoes) => {
  const map = new Map();
  let count = 0;

  dominoes.forEach((domino) => {
    domino.sort((a, b) => a - b);
    const str = domino.join('');
    if (map.get(str)) {
      count += map.get(str);
      map.set(str, map.get(str) + 1);
    } else map.set(str, 1);
  });
  return count;
};

console.log(
  numEquivDominoPairs([
    [1, 2],
    [1, 2],
    [1, 1],
    [1, 2],
    [2, 2],
  ]),
);
