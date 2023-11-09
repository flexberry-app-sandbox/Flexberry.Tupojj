import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/ru/translations';

import IISTupojjГородLForm from './forms/i-i-s-tupojj-город-l';
import IISTupojjЗданиеLForm from './forms/i-i-s-tupojj-здание-l';
import IISTupojjГородEForm from './forms/i-i-s-tupojj-город-e';
import IISTupojjЗданиеEForm from './forms/i-i-s-tupojj-здание-e';
import IISTupojjГородModel from './models/i-i-s-tupojj-город';
import IISTupojjЗданиеModel from './models/i-i-s-tupojj-здание';

const translations = {};
$.extend(true, translations, EmberFlexberryTranslations);

$.extend(true, translations, {
  models: {
    'i-i-s-tupojj-город': IISTupojjГородModel,
    'i-i-s-tupojj-здание': IISTupojjЗданиеModel
  },

  'application-name': 'Tupojj',

  forms: {
    loading: {
      'spinner-caption': 'Данные загружаются, пожалуйста подождите...'
    },
    index: {
      greeting: 'Добро пожаловать на тестовый стенд ember-flexberry!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Меню'
          },
          'user-settings-service-checkbox': {
            caption: 'Использовать сервис сохранения пользовательских настроек'
          },
          'show-menu': {
            caption: 'Показать меню'
          },
          'hide-menu': {
            caption: 'Скрыть меню'
          },
          'language-dropdown': {
            caption: 'Язык приложения',
            placeholder: 'Выберите язык'
          }
        },
        login: {
          caption: 'Вход'
        },
        logout: {
          caption: 'Выход'
        }
      },

      footer: {
        'application-name': 'Tupojj',
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Tupojj',
          title: 'Tupojj'
        },
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        },
        index: {
          caption: 'Главная',
          title: ''
        },
        tupojj: {
          caption: 'Tupojj',
          title: 'Tupojj',
          'i-i-s-tupojj-город-l': {
            caption: 'Город',
            title: ''
          },
          'i-i-s-tupojj-здание-l': {
            caption: 'Здание',
            title: ''
          }
        }
      }
    },

    'edit-form': {
      'save-success-message-caption': 'Сохранение завершилось успешно',
      'save-success-message': 'Объект сохранен',
      'save-error-message-caption': 'Ошибка сохранения',
      'delete-success-message-caption': 'Удаление завершилось успешно',
      'delete-success-message': 'Объект удален',
      'delete-error-message-caption': 'Ошибка удаления'
    },
    'i-i-s-tupojj-город-l': IISTupojjГородLForm,
    'i-i-s-tupojj-здание-l': IISTupojjЗданиеLForm,
    'i-i-s-tupojj-город-e': IISTupojjГородEForm,
    'i-i-s-tupojj-здание-e': IISTupojjЗданиеEForm
  },

});

export default translations;
