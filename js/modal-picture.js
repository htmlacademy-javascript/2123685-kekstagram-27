import { commentsModel } from './comments.js';

const bigPictureModal = document.querySelector('.big-picture');
const bigPictureImage = document.querySelector('.big-picture__img img');
const bigPictureComments = document.querySelector('.social__comments');
const bigPictureComment = document.querySelector('.social__comment');
const bigPictureModalClose = document.querySelector('.big-picture__cancel');

const totalComments = document.querySelector('.social__comment-count');
const loadButton = document.querySelector('.comments-loader');

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
};

const clearComments = () => {
  bigPictureComments.innerHTML = '';
};

const renderStatisticComments = (showed, total) => {
  totalComments.textContent = `${showed} из ${total} комментариев`;
};

const renderComments = (comments) => {
  const commentListFragment = document.createDocumentFragment();
  comments.forEach((comment) => {
    const commentElement = bigPictureComment.cloneNode(true);
    commentElement.querySelector('.social__picture').src = comment.avatar;
    commentElement.querySelector('.social__picture').alt = comment.name;
    commentElement.querySelector('.social__text').textContent = comment.message;
    commentListFragment.appendChild(commentElement);
  });
  bigPictureComments.append(commentListFragment);
};

const showLoadButton = () => {
  loadButton.classList.remove('hidden');
};

const hideLoadButton = () => {
  loadButton.classList.add('hidden');
};

const renderLoadButton = (showed, total) => {
  if (showed < total) {
    showLoadButton();
  } else {
    hideLoadButton();
  }
};

const loadButtonHandler = () => {
  commentsModel.setNextDose();
  renderStatisticComments(
    commentsModel.getCurrentNumber(),
    commentsModel.getTotalNumber()
  );
  renderComments(commentsModel.getDoseShowedComments());
  renderLoadButton(
    commentsModel.getCurrentNumber(),
    commentsModel.getTotalNumber()
  );
};

const renderLikes = (likes) => {
  bigPictureModal.querySelector('.likes-count').textContent = likes;
};

const renderDescription = (description) => {
  bigPictureModal.querySelector('.social__caption').textContent = description;
};

const onCloseModalHandler = () => {
  hideModal();
  document.removeEventListener('keydown', onEscapeKeydownHandler);
  loadButton.removeEventListener('click', loadButtonHandler);
};

function onEscapeKeydownHandler (evt) {
  if (evt.key === 'Escape') {
    evt.preventDefault();
    hideModal();
  }
}

bigPictureModalClose.addEventListener('click', onCloseModalHandler);

const renderModalPicture = (photoItem) => {
  commentsModel.setStartModel(photoItem.comments);
  showModal();
  document.addEventListener('keydown', onEscapeKeydownHandler);
  renderBigImage(photoItem.url);
  renderLikes(photoItem.likes);
  renderStatisticComments(
    commentsModel.getCurrentNumber(),
    commentsModel.getTotalNumber()
  );
  clearComments();
  renderComments(commentsModel.getDoseShowedComments());
  renderDescription(photoItem.description);
  renderLoadButton(
    commentsModel.getCurrentNumber(),
    commentsModel.getTotalNumber()
  );
  loadButton.addEventListener('click', loadButtonHandler);
};

export { renderModalPicture };
