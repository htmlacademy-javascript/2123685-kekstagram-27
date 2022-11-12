import {getRandomIntInclusive} from './util.js';


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

const COMMENTS_AMOUNT = 50;

const LIKES_AMOUNT_MIN = 15;
const LIKES_AMOUNT_MAX = 200;

const AVATARS_AMOUNT_MIN = 1;
const AVATARS_AMOUNT_MAX = 6;


// const getDescription = (descriptionArray, randomNumber) => descriptionArray[randomNumber];

function getDescription(descriptionArray, randomNumber) {
  return descriptionArray[randomNumber];
}

const getPhotoObject = (idNumber, photosAmount) => {
  return {
    id: idNumber,
    url: `photos/${getRandomIntInclusive(1, photosAmount)}.jpg`,
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
    photosArray.push(getPhotoObject(i+1, photosAmount));
  }
  return photosArray;
}


// console.log(getSetPhotoObjects(PHOTOS_AMOUNT));


export {getSetPhotoObjects};
