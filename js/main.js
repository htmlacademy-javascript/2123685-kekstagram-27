// import {PHOTOS_AMOUNT} from './constants.js';
// import {getSetPhotoObjects} from './data.js';
import {renderThumbs} from './render.js';
import {uploadForm} from './form.js';
import {getData} from './api.js';

//Возвращает массив объектов:
// const data = getSetPhotoObjects(PHOTOS_AMOUNT);
// renderThumbs(data);
uploadForm();
getData(renderThumbs);
