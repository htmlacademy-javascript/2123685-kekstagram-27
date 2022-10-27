/*
В файле main.js на основе написанных по заданию ранее вспомогательных функций напишите необходимые функции для создания массива
из 25 сгенерированных объектов. Каждый объект массива — описание фотографии, опубликованной пользователем.

Структура каждого объекта должна быть следующей:

id, число — идентификатор опубликованной фотографии. Это число от 1 до 25. Идентификаторы не должны повторяться.

url, строка — адрес картинки вида photos/{{i}}.jpg, где {{i}} — это число от 1 до 25. Адреса картинок не должны повторяться.

description, строка — описание фотографии. Описание придумайте самостоятельно.

likes, число — количество лайков, поставленных фотографии. Случайное число от 15 до 200.

comments, массив объектов — список комментариев, оставленных другими пользователями к этой фотографии.
Количество комментариев к каждой фотографии вы определяете на своё усмотрение. Все комментарии генерируются случайным образом.
Пример описания объекта с комментарием:

{
  id: 135,
  avatar: 'img/avatar-6.svg',
  message: 'В целом всё неплохо. Но не всё.',
  name: 'Артём',
}
У каждого комментария есть идентификатор — id — случайное число. Идентификаторы не должны повторяться.

Поле avatar — это строка, значение которой формируется по правилу img/avatar-{{случайное число от 1 до 6}}.svg. Аватарки
подготовлены в директории img.

Для формирования текста комментария — message — вам необходимо взять одно или два случайных предложения из представленных ниже:

Всё отлично!
В целом всё неплохо. Но не всё.
Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.
Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.
Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.
Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!
Имена авторов также должны быть случайными. Набор имён для комментаторов составьте сами. Подставляйте случайное имя в поле name.
*/

/*____________________Описание фотографий
{
  id:
  url:
  description:
  likes:
  comments:
}
*/

const PHOTOS_AMOUNT = 25;
// const PHOTOS_NUMBER_FROM = 1;
const PHOTOS_DESCRIPTIONS = [
  'Кот ест сметану',
  'Кот играет',
  'Кот охотится',
  'Кот умывается',
  'Кот кусает хвост',
];

const COMMENTS_TEMPLATES = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
];

const COMMENTS_AUTHORS = [
  'Иван Петров',
  'Иван Сидоров',
  'Иван Иванов',
];

const COMMENTS_AMOUNT = PHOTOS_AMOUNT * 2;

const LIKES_AMOUNT_MIN = 15;
const LIKES_AMOUNT_MAX = 200;

const AVATARS_AMOUNT_MIN = 1;
const AVATARS_AMOUNT_MAX = 6;

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


// ________________Как работает?

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


// const getDescription = (descriptionArray, randomNumber) => descriptionArray[randomNumber];

function getDescription(descriptionArray, randomNumber) {
  return descriptionArray[randomNumber];
}

const getPhotoObject = (idNumber) => {
  return {
    id: idNumber,
    url: `photos/${getRandomIntInclusive(1, PHOTOS_AMOUNT)}.jpg`,
    description: getDescription(PHOTOS_DESCRIPTIONS, getRandomIntInclusive(0, PHOTOS_DESCRIPTIONS.length - 1)),
    likes: getRandomIntInclusive(LIKES_AMOUNT_MIN, LIKES_AMOUNT_MAX),
    comments: getSetCommentsObjects(getRandomIntInclusive(1, COMMENTS_AMOUNT)),
  }
}

const getCommentsObject = () => {
  return {
    id: getRandomIntInclusive(1, 1000),
    avatar: `img/avatar-${getRandomIntInclusive(AVATARS_AMOUNT_MIN, AVATARS_AMOUNT_MAX)}.svg`,
    message: COMMENTS_TEMPLATES[getRandomIntInclusive(0, COMMENTS_TEMPLATES.length - 1)] + ' ' + COMMENTS_TEMPLATES[getRandomIntInclusive(0, COMMENTS_TEMPLATES.length - 1)],
    name: COMMENTS_AUTHORS[getRandomIntInclusive(0, COMMENTS_AUTHORS.length - 1)],
  }
}

const getSetCommentsObjects = (commentsAmount) => {
  const commentsArray = [];
  for (let i = 0; i <= commentsAmount - 1; i++) {
    commentsArray.push(getCommentsObject());
  }
  return commentsArray;
}

const getSetPhotoObjects = (photosAmount) => {
  const photosArray = [];
  for (let i = 0; i <= photosAmount - 1; i++) {
    photosArray.push(getPhotoObject(i+1));
  }
  return photosArray;
}

getSetPhotoObjects(PHOTOS_AMOUNT);
console.log(getSetPhotoObjects(PHOTOS_AMOUNT));
