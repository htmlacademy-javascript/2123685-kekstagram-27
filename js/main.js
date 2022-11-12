import {PHOTOS_AMOUNT} from './constants.js';
import {getSetPhotoObjects} from './data.js';
import {renderThumbs} from './render.js';

//Возвращает массив объектов:
const data = getSetPhotoObjects(PHOTOS_AMOUNT);
renderThumbs(data);
