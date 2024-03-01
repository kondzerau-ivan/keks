import { getRandomNumber } from './utils.js';

const PHOTOS_COUNT = 25;

const LikesCount = {
  MIN: 15,
  MAX: 200,
};

const CommentsCount = {
  MIN: 1,
  MAX: 6,
};

const names = [
  'Дима',
  'Тимофей',
  'Алексей',
  'Мария',
  'Кристина',
  'Вика',
];

const descriptions = [
  'Это сделало мой день!',
  'Что-то хорошее в вашу ленту!',
  'Без комментариев... :)',
];

const messages = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
];

const getCommets = () => {
  return new Array(getRandomNumber(CommentsCount.MIN, CommentsCount.MAX))
  .fill(null)
  .map(() => ({
    id: getRandomNumber(1, 99),
    avatar: 'img/avatar-' + getRandomNumber(1, 6) + '.svg',
    message: [...messages].sort(() => 0.5 - Math.random()).slice(0, getRandomNumber(1, 2)).join(' '),
    name: names[getRandomNumber(0, names.length - 1)]
  }));
};

const getPhotos = () => new Array(PHOTOS_COUNT)
.fill(null)
.map((e, i) => ({
  id: i + 1,
  url: `photos/${i + 1}.jpg`,
  description: descriptions[getRandomNumber(0, descriptions.length - 1)],
  likes: getRandomNumber(LikesCount.MIN, LikesCount.MAX),
  comments: getCommets(),
}));

export const photos = getPhotos();
