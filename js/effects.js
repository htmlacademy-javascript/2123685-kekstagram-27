const sliderElement = document.querySelector('.effect-level__slider');
const valueElement = document.querySelector('.effect-level__value');
const effectsList = document.querySelector('.effects__list');
const sliderBlock = document.querySelector('.effect-level');
const uploadPreviewImage = document.querySelector('.img-upload__preview img');

const createSlider = () => {
  noUiSlider.create(sliderElement, {
    range: {
      min: 0,
      max: 100,
    },
    start: 80,
    step: 1,
    connect: 'lower',
  });
};

const addEffect = (effect) => {
  let filterStyle = '';
  switch (effect) {
    case 'chrome':
      filterStyle = `grayscale(${valueElement.value})`;
      break;
    case 'sepia':
      filterStyle = `sepia(${valueElement.value})`;
      break;
    case 'marvin':
      filterStyle = `invert(${valueElement.value}%)`;
      break;
    case 'phobos':
      filterStyle = `blur(${valueElement.value}px)`;
      break;
    case 'heat':
      filterStyle = `brightness(${valueElement.value})`;
      break;
  }
  uploadPreviewImage.style.filter = filterStyle;
};

const plugSliderListener = () => {
  sliderElement.noUiSlider.on('update', () => {
    valueElement.value = sliderElement.noUiSlider.get();
    addEffect(document.querySelector('.effects__radio:checked').value);
  });
};

const updateSliderOption = (effect) => {
  switch (effect) {
    case 'chrome':
      sliderElement.noUiSlider.updateOptions({
        range: {
          min: 0,
          max: 1,
        },
        start: 1,
        step: 0.1,
      });
      break;
    case 'sepia':
      sliderElement.noUiSlider.updateOptions({
        range: {
          min: 0,
          max: 1,
        },
        step: 0.1,
        start: 1,
      });
      break;
    case 'marvin':
      sliderElement.noUiSlider.updateOptions({
        range: {
          min: 0,
          max: 100,
        },
        step: 1,
        start: 100,
      });
      break;
    case 'phobos':
      sliderElement.noUiSlider.updateOptions({
        range: {
          min: 0,
          max: 3,
        },
        step: 0.1,
        start: 3,
      });
      break;
    case 'heat':
      sliderElement.noUiSlider.updateOptions({
        range: {
          min: 1,
          max: 3,
        },
        step: 0.1,
        start: 3,
      });
      break;
  }
};

const plugRadioListener = () => {
  effectsList.addEventListener('change', (evt) => {
    if (evt.target.name === 'effect') {
      updateSliderOption(evt.target.value);
      if (evt.target.value === 'none') {
        sliderBlock.classList.add('hidden');
        uploadPreviewImage.style.filter = '';
      } else {
        sliderBlock.classList.remove('hidden');
        addEffect(evt.target.value);
      }
    }
  });
};

const resetEffects = () => {
  sliderBlock.classList.add('hidden');
  uploadPreviewImage.style.filter = '';
  document.querySelector('#effect-none').checked = true;
};

const effects = () => {
  resetEffects();
  plugSliderListener();
  plugRadioListener();
};

export { effects, createSlider };
