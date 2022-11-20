import { renderModalPicture } from "./modal-picture.js";

const cardListElement = document.querySelector('.pictures');
const cardTemplate = document.querySelector('#picture').content.querySelector('.picture');

const renderThumbs = (cards) => {
  const cardListFragment = document.createDocumentFragment();

  cards.forEach(function (thumb) {
    const pictureElement = cardTemplate.cloneNode(true);
    pictureElement.querySelector('.picture__img').src = thumb.url;
    pictureElement.querySelector('.picture__comments').textContent = thumb.comments.length;
    pictureElement.querySelector('.picture__likes').textContent = thumb.likes;

    cardListFragment.appendChild(pictureElement);
    pictureElement.addEventListener('click', () => renderModalPicture(thumb));
  });

  cardListElement.appendChild(cardListFragment);
};

export { renderThumbs };
