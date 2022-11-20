import { postData } from './api.js';
import { effects, createSlider } from './effects.js';
import { scale, scaleDestroy } from './scale.js';
import { renderSuccessModal, renderErrorModal } from './modals.js';
import { checkForm } from './validation.js';

const controlUpload = document.querySelector('#upload-file');
const uploadModal = document.querySelector('.img-upload__overlay');
const imagePreview = document.querySelector('.img-upload__preview img');
const closeButton = document.querySelector('.img-upload__cancel');
const uploadUserForm = document.querySelector('.img-upload__form');
const hashtagsField = document.querySelector('.text__hashtags');
const descriptionField =  document.querySelector('.text__description');
const imageField = document.querySelector('.img-upload__input');

const escapeHandler = (evt) => {
  if (evt.key === 'Escape') {
    evt.preventDefault();
    closeUploadModal();
  }
}

const submitHandler = (evt) => {
  evt.preventDefault();
  const isValid = checkForm();
  if (isValid) {
    postData(
      () => {
        closeUploadModal();
        renderSuccessModal();
      },
      () => {
        renderErrorModal();
      },
      new FormData(uploadUserForm)
    );
  }
}

const clearForm = () => {
  hashtagsField.value = '';
  descriptionField.value = '';
  imageField.value = '';
};

const openUploadModal = () => {
  uploadModal.classList.remove('hidden');
  document.body.classList.add('modal-open');
  scale();
  effects();
  const fileImage = controlUpload.files[0];
  imagePreview.src = URL.createObjectURL(fileImage);
  document.addEventListener('keydown', escapeHandler);
  uploadUserForm.addEventListener('submit', submitHandler);
}

const closeUploadModal = () => {
  clearForm();
  scaleDestroy();
  uploadModal.classList.add('hidden');
  document.body.classList.remove('modal-open');
  document.removeEventListener('keydown', escapeHandler);
  uploadUserForm.removeEventListener('submit', submitHandler);
}

closeButton.addEventListener('click', closeUploadModal);

const uploadFileChangeHandler = () => {
  openUploadModal();
}

const uploadForm = () => {
  createSlider();
  controlUpload.addEventListener('change', uploadFileChangeHandler);
}

export { uploadForm }
