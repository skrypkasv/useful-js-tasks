//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
// Функция возведет в квадрат каждую
// цыфру из числа(num) и вернет новое
// число
// function squareDigits(num) {
//   let stringResult = '';
//   let result;

//   for (let item of String(num).split('')) {
//     item = Math.pow(Number(item), 2);
//     stringResult += item;
//     result = Number(stringResult);
//   }
//   console.log(result);
// }
// squareDigits(3223);
//
//
//
//
//
//
//
//
//
//
//
//
//
// //Функция изменит регистр каждой буквы в строке/слове
// const changeCase = function (string) {
//   let invertedString = '';
//   for (const symbol of string.split('')) {
//     invertedString +=
//       symbol === symbol.toLowerCase()
//         ? symbol.toUpperCase()
//         : symbol.toLowerCase();
//   }
//   return invertedString;
// };
// console.log(changeCase('We aRe The chaMpiOns'));
//
//
//
//
//
//
//
//
//
//
//
// Функция удалит все пробелы в строке
// const noSpace = function (x) {
//   return x.split(' ').join('');
// };
