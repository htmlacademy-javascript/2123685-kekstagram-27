import {postData} from './api.js';
import {renderSuccessModal, renderErrorModal} from './modals.js';

const controlUpload = document.querySelector('#upload-file');
const uploadModal = document.querySelector('.img-upload__overlay');
const imagePreview = document.querySelector('.img-upload__preview img');
const closeButton = document.querySelector('.img-upload__cancel');
const submitButton = document.querySelector('.img-upload__submit');
const uploadUserForm = document.querySelector('.img-upload__form');

const escapeHandler = (evt) => {
  if (evt.key === 'Escape') {
    evt.preventDefault();
    closeUploadModal(); //? функция объявлена ниже
  }
}

const submitHandler = (evt) => {
  evt.preventDefault();
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

const openUploadModal = () => {
  uploadModal.classList.remove('hidden');
  document.body.classList.add('modal-open');
  const fileImage = controlUpload.files[0]; //выбирает файл
  imagePreview.src = URL.createObjectURL(fileImage); //подставляет фотографию в src
  document.addEventListener('keydown', escapeHandler);
  uploadUserForm.addEventListener('submit', submitHandler);
}

const closeUploadModal = () => {
  uploadModal.classList.add('hidden');
  document.body.classList.remove('modal-open');
  document.removeEventListener('keydown', escapeHandler);
  uploadUserForm.removeEventListener('submit', submitHandler);
}

closeButton.addEventListener('click', closeUploadModal);



//Обработчик события изменения значения в инпуте выбора файла (выбор файла)
const uploadFileChangeHandler = () => {
  openUploadModal();
}

//
const uploadForm = () => {
  controlUpload.addEventListener('change', uploadFileChangeHandler);
}

export {uploadForm}
