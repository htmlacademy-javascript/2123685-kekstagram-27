import { debounce, getRandomIntInclusive } from './util.js';
import {renderThumbs} from './render.js';

const filtersGroup = document.querySelector('.img-filters');
const filterForm = document.querySelector('.img-filters__form');
const RANDOM_PHOTOS_NUMBER = 10;

const renderActiveButton = (clickedButton) => {
  document
    .querySelector('.img-filters__button--active')
    .classList.remove('img-filters__button--active');
  document
    .querySelector(`#${clickedButton}`)
    .classList.add('img-filters__button--active');
};

const renderFilterButtons = () => {
  filtersGroup.classList.remove('img-filters--inactive');
};

const getRandomPhotos = (data) => {
  const randomPhotos = [];
  let number;
  for (let i = 0; i < RANDOM_PHOTOS_NUMBER; i++) {
    number = getRandomIntInclusive(0, data.length - 1);
    randomPhotos.push(data[number]);
  }
  return randomPhotos;
};

const getDiscussedPhotos = (data) => {
  const getComparison = (firstPhoto, secondPhoto) =>
    secondPhoto.comments.length - firstPhoto.comments.length;
  const popularPhotos = data.slice().sort(getComparison);
  return popularPhotos;
};

const clearThumbs = () => {
  const pictures = document.querySelectorAll('.picture');
  pictures.forEach((post) => post.remove());
};

const setFilters = (data) => {
  filterForm.addEventListener(
    'click',
    debounce((evt) => {
      switch (evt.target.id) {
        case 'filter-random':
          clearThumbs();
          renderThumbs(getRandomPhotos(data));
          renderActiveButton(evt.target.id);
          break;
        case 'filter-discussed':
          clearThumbs();
          renderThumbs(getDiscussedPhotos(data));
          renderActiveButton(evt.target.id);
          break;
        case 'filter-default':
          clearThumbs();
          renderThumbs(data);
          renderActiveButton(evt.target.id);
          break;
      }
    })
  );
};

const filters = (data) => {
  renderFilterButtons();
  renderThumbs(data);
  setFilters(data);
};

export { filters };
