import {uploadForm} from './form.js';
import { filters } from './filters.js';
import {getData} from './api.js';
import { showAlert } from './util.js';


getData(
    (data) => {
      uploadForm();
      filters(data);
    },
    () => {
      showAlert('Упс! Данные не подгрузились :( Попробуйте позже!');
    }
  );
