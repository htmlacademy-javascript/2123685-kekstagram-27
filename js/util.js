// ________________Случайное число в диапазоне

function getRandomIntInclusive(min, max) {

  if (min < 0 || max < 0 || typeof min !== 'number' || typeof max !== 'number') {
    return NaN;
  }
  if (min > max) {
    [min, max] = [max, min];
  }
  min = Math.ceil(min);
  max = Math.floor(max);

  return Math.floor(Math.random() * (max - min + 1)) + min;

}


// ____________________Длина строки

let anyString;
let maxLength = 6;

function stringLength(anyString, maxLength) {
  if (anyString.length <= maxLength) {
    return true;
  }
  return false;

}

stringLength('1234567', maxLength);


// ________________Длина строки короткая

function checkStringLength(string, length) {
  return string.length <= length;
}

console.log(checkStringLength("123", 2));


// ____________________Собирает массив от 1 до 25

// function getNumbersArray() {
//   const numbersArray = [];
//   let sum = 0;
//   for (let i = 0; i <= PHOTOS_AMOUNT - 1; i++) {
//     sum++;
//     numbersArray.push(sum);
//   }
//   return numbersArray;
// }

// console.log(getNumbersArray());


export {getRandomIntInclusive};
