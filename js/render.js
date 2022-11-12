/*
Отобразить фотографии других пользователей.

Заведите модуль, который будет отвечать за отрисовку миниатюр.

На основе временных данных для разработки и шаблона #picture создайте DOM-элементы,
соответствующие фотографиям, и заполните их данными:

Адрес изображения url подставьте как атрибут src изображения.
Количество лайков likes выведите в блок .picture__likes.
Количество комментариев comments выведите в блок .picture__comments.
Отрисуйте сгенерированные DOM-элементы в блок .pictures. Для вставки элементов используйте DocumentFragment.

Подключите модуль в проект.
*/

import { renderModalPicture } from "./modal-picture.js";


const cardListElement = document.querySelector('.pictures');
const cardTemplate = document.querySelector('#picture').content.querySelector('.picture');

const renderThumbs = (cards) => {
  const cardListFragment = document.createDocumentFragment(); //Создает фрагмент (временное хранилище)

  cards.forEach(function (thumb) {
    const pictureElement = cardTemplate.cloneNode(true); //клонирует карточку
    pictureElement.querySelector('.picture__img').src = thumb.url;
    pictureElement.querySelector('.picture__comments').textContent = thumb.comments.length;
    pictureElement.querySelector('.picture__likes').textContent = thumb.likes;

    cardListFragment.appendChild(pictureElement);
    pictureElement.addEventListener('click', () => renderModalPicture(thumb)); //открытие модального окна по клику
  });

  cardListElement.appendChild(cardListFragment);
};



export { renderThumbs };
