const filter = function (array, callback) {
  const filteredArray = [];
  for (const elem of array) {
    console.log(`${elem}- ${callback(elem)}`);
    const passed1 = callback(elem);
    if (passed1) {
      filteredArray.push(elem);
    }
  }
  return filteredArray;
};

const checkValue1 = function (value) {
  return value >= 4;
};
const checkValue2 = function (value) {
  return value < 4;
};

const r1 = [1, 2, 3, 4, 5, 6, 7];

console.log(filter(r1, checkValue1));
console.log(filter(r1, checkValue2));
