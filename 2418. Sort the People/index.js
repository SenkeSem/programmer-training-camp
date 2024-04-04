var sortPeople = function (names, heights) {
  let arr = [];

  for (let i = 0; i < heights.length; i++) {
    let max = Math.max(...heights);
    let index = heights.indexOf(max);

    arr.push(names[index]);
    heights[index] = 0;
  }

  return arr;
};

console.log(sortPeople(['Mary', 'John', 'Emma'], [180, 165, 170]));
