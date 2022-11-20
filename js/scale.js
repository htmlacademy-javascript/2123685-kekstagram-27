const scaleControlSmaller = document.querySelector('.scale__control--smaller');
const scaleControlBigger = document.querySelector('.scale__control--bigger');
const scaleControlValue = document.querySelector('.scale__control--value');
const uploadPreviewImage = document.querySelector('.img-upload__preview img');

const scaleModel = {
  scale: 100,
  step: 25,
  max: 100,
  min: 25,
};

const renderScaleImage = () => {
  uploadPreviewImage.style.transform = `scale(${scaleModel.scale * 0.01})`;
};

const resetScaleModel = () => {
  scaleModel.scale = 100;
};

const renderScaleValue = () => {
  scaleControlValue.value = `${scaleModel.scale}%`;
};

const decreaseScale = () => {
  if (scaleModel.scale - scaleModel.step >= scaleModel.min) {
    scaleModel.scale -= scaleModel.step;
    renderScaleValue();
    renderScaleImage();
  }
};

const increaseScale = () => {
  if (scaleModel.scale + scaleModel.step <= scaleModel.max) {
    scaleModel.scale += scaleModel.step;
    renderScaleValue();
    renderScaleImage();
  }
};

const scale = () => {
  scaleControlSmaller.addEventListener('click', decreaseScale);
  scaleControlBigger.addEventListener('click', increaseScale);
  resetScaleModel();
  renderScaleValue();
  renderScaleImage();
};

const scaleDestroy = () => {
  scaleControlSmaller.removeEventListener('click', decreaseScale);
  scaleControlBigger.removeEventListener('click', increaseScale);
};

export { scale, scaleDestroy };
