const bigPictureModal = document.querySelector('.big-picture');
const bigPictureImage = document.querySelector('.big-picture__img img');
const bigPictureComments = document.querySelector('.social__comments');
const bigPictureComment = document.querySelector('.social__comment');
const bigPictureModalClose = document.querySelector('.big-picture__cancel');

const showModal = () => {
  bigPictureModal.classList.remove('hidden');
  document.body.classList.add('modal-open');
};

const hideModal = () => {
  bigPictureModal.classList.add('hidden');
  document.body.classList.remove('modal-open');
};

const renderBigImage = (url) => {
  bigPictureImage.src = url;
}

/* <li class="social__comment">
              <img class="social__picture" src="img/avatar-4.svg" alt="Аватар комментатора фотографии" width="35" height="35">
              <p class="social__text">Мега фото! Просто обалдеть. Как вам так удалось?</p>
            </li>
            */


const clearComments = () => {
  bigPictureComments.innerHTML = '';
}

const renderComments = (comments) => {
  const commentListFragment = document.createDocumentFragment();

  comments.forEach(function (comment) {
    const commentElement = bigPictureComment.cloneNode(true); //клонирует карточку

    commentElement.querySelector('.social__picture').src = comment.avatar;
    commentElement.querySelector('.social__picture').alt = comment.name;
    commentElement.querySelector('.social__text').textContent = comment.message;

    commentListFragment.appendChild(commentElement);
  })

  bigPictureComments.append(commentListFragment);

}

const renderLikes = (likes) => {
  bigPictureModal.querySelector('.likes-count').textContent = likes;
}

const renderAmountComments = (amountComments) => {
  bigPictureModal.querySelector('.comments-count').textContent = amountComments;
}

const renderDescription = (description) => {
  bigPictureModal.querySelector('.social__caption').textContent = description;
}

const onCloseModalHandler = () => {
  hideModal();
  document.removeEventListener('keydown', onEscapeKeydownHandler);
}

const onEscapeKeydownHandler = (evt) => {
  if (evt.key === 'Escape') {
    evt.preventDefault();
    hideModal();
  }
}

bigPictureModalClose.addEventListener('click', onCloseModalHandler);

const renderModalPicture = (photoItem) => {
  showModal(); //Показывает окно
  document.addEventListener('keydown', onEscapeKeydownHandler);
  renderBigImage(photoItem.url); //вставляет нужный адрес фотографии
  renderLikes(photoItem.likes);
  renderAmountComments(photoItem.comments.length);
  renderDescription(photoItem.description);
  clearComments();
  renderComments(photoItem.comments);
};

export { renderModalPicture };
