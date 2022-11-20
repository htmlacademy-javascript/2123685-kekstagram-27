const successMessageTemplate = document.querySelector('#success').content.querySelector('.success');
const errorMessageTemplate = document.querySelector('#error').content.querySelector('.error');

const closeModalSuccessHandler = (modal) => {
  modal.remove();
};

const escapeHandler = (modal, evt) => {
  if(evt.key === 'Escape') {
    modal.remove();
  }
};

const outsideClickHandler = (evt, modal) => {
  if (evt.target === evt.currentTarget) {
    modal.remove();
  }
};

const renderSuccessModal = () => {
  const successMessageElement = successMessageTemplate.cloneNode(true);
  document.body.append(successMessageElement);
  successMessageElement.querySelector('.success__button').addEventListener('click', () => {
    closeModalSuccessHandler(successMessageElement);
  });
  document.addEventListener('keydown', (evt) => {
    escapeHandler(successMessageElement, evt);
  });
  successMessageElement.addEventListener('click', (evt) => {
    outsideClickHandler(evt, successMessageElement);
  });
}

const renderErrorModal = () => {
  const errorMessageElement = errorMessageTemplate.cloneNode(true);
  document.body.append(errorMessageElement);
  errorMessageElement.querySelector('.error__button').addEventListener('click', () => {
    closeModalSuccessHandler(errorMessageElement);
  });
  document.addEventListener('keydown', (evt) => {
    escapeHandler(errorMessageElement, evt);
  });
  errorMessageElement.addEventListener('click', (evt) => {
    outsideClickHandler(evt, errorMessageElement);
  });
};

export {renderSuccessModal, renderErrorModal};
