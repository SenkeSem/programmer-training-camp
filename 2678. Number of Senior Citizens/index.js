var countSeniors = function (details) {
  let count = 0;

  for (const senior of details) {
    let old = 0;
    old += +senior[11] * 10;
    old += +senior[12];

    if (old > 60) count++;
  }

  return count;
};

console.log(countSeniors(['7868190130M7522', '5303914400F9211', '9273338290F4010']));
