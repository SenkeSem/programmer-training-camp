var minMovesToSeat = function (seats, students) {
  let seatsSort = seats.sort((a, b) => a - b);
  let studentsSort = students.sort((a, b) => a - b);

  let resultArray = [];

  for (let i = 0, j = 0; i < seatsSort.length; i++, j++) {
    resultArray.push(Math.abs(seatsSort[i] - studentsSort[j]));
  }

  return resultArray.reduce((item, acc) => acc + item, 0);
};

// console.log(minMovesToSeat([3, 1, 5], [2, 7, 4]));
