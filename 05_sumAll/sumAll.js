const sumAll = function (x, y) {
  // function to check whether x or y are negative numbers
  if (x < 0 || y < 0) {
    return "ERROR";
  }
  if (!Number.isInteger(x) || !Number.isInteger(y)) {
    return "ERROR";
  }
  let startInteger = Math.min(x, y);
  let lastInteger = Math.max(x, y);
  let sum = 0;
  for (let i = startInteger; i <= lastInteger; i++) {
    sum += i;
  }
  return sum;
};
console.log(sumAll(1, "2"));

// Do not edit below this line
module.exports = sumAll;
