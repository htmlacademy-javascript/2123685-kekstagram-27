const GET_USER_PHOTOS = 'https://27.javascript.pages.academy/kekstagram/data';
const POST_USER_PHOTO = 'https://27.javascript.pages.academy/kekstagram1';

//чтобы взять с сервера данные и нарисовать карточки
const getData = (onSuccess) => {
  fetch(GET_USER_PHOTOS)
    .then((response) => {
      if (response.ok) {
        response.json()
          .then((data) => {
            onSuccess(data);
          })
      } else {
        console.log('Неверный сервер else')
      }
    })
    .catch(() => {
      console.log('Неверный сервер');
    })
}

const postData = (onSuccess, onFail, payload) => {
  fetch(POST_USER_PHOTO, {
    method: 'POST',
    body: payload
  })
    .then((response) => {
      if(response.ok) {
        onSuccess();
      } else {
        onFail();
      }
    })
}

export { getData, postData };
