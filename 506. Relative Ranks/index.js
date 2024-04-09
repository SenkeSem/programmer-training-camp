var findRelativeRanks = function (score) {
  let sorting = score.slice().sort((a, b) => b - a);

  for (let i = 0; i < score.length; i++) {
    let index = score.indexOf(sorting[i]);

    switch (i) {
      case 0:
        score[index] = 'Gold Medal';
        break;
      case 1:
        score[index] = 'Silver Medal';
        break;
      case 2:
        score[index] = 'Bronze Medal';
        break;
      default:
        score[index] = i + 1 + '';
        break;
    }
  }

  return score;
};

console.log(findRelativeRanks([10, 3, 8, 9, 4]));
