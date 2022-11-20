import { checkStringLength } from './util.js'

const MAX_COMMENT_LENGTH = 140;
const MAX_HASHTAG_COUNT = 5;
const form = document.querySelector('.img-upload__form');

const pristine = new Pristine(form, {
  classTo: 'img-upload__field-wrapper',
  errorTextParent: 'img-upload__field-wrapper'
});

const validateHashtag = (value) => {
  const hashtagRegularExpression = /^#[a-zа-яё0-9]{1,19}$/i;
  const hashtags = value.split(' ').filter((item) => item.length > 0);
  const hashtagIsValid = hashtags.every((item) => hashtagRegularExpression.test(item));
  const duplicatedHashtags = hashtags.filter((hashtag, index, hashtags) => hashtags.indexOf(hashtag) !== index);
  return (hashtagIsValid && hashtags.length <= MAX_HASHTAG_COUNT && duplicatedHashtags.length === 0);
};

const validateDescription = (value) => {
  return checkStringLength(value, MAX_COMMENT_LENGTH)
}

pristine.addValidator(
  form.querySelector('.text__hashtags'),
  validateHashtag,
  'Хэштэг должен начинаться с #'
  );
pristine.addValidator(
  form.querySelector('.text__description'),
  validateDescription,
  'Длина комментария не должна превышать 140 символов'
  );


const checkForm = () => {
  return pristine.validate();
}
export { checkForm }
