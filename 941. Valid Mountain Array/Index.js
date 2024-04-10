var validMountainArray = function (arr) {
  if (arr.length < 3) return false;

  let result = false;

  for (let i = 1; i < arr.length - 1; i++) {
    let prev = arr[i - 1];
    let curr = arr[i];
    let next = arr[i + 1];

    if (prev < curr && curr < next) {
      result = true;
    } else if (prev >= curr && next >= curr) {
      return false;
    }
  }

  return result;
};

console.log(validMountainArray([0, 3, 2, 1]));
