import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/en/translations';

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
      'spinner-caption': 'Loading stuff, please wait for a moment...'
    },
    index: {
      greeting: 'Welcome to ember-flexberry test stand!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Menu'
          },
          'user-settings-service-checkbox': {
            caption: 'Use service to save user settings'
          },
          'show-menu': {
            caption: 'Show menu'
          },
          'hide-menu': {
            caption: 'Hide menu'
          },
          'language-dropdown': {
            caption: 'Application language',
            placeholder: 'Choose language'
          }
        },
        login: {
          caption: 'Login'
        },
        logout: {
          caption: 'Logout'
        }
      },

      footer: {
        'application-name': 'Tupojj',
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Tupojj',
          title: 'Tupojj'
        },
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        },
        index: {
          caption: 'Home',
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
      'save-success-message-caption': 'Save operation succeed',
      'save-success-message': 'Object saved',
      'save-error-message-caption': 'Save operation failed',
      'delete-success-message-caption': 'Delete operation succeed',
      'delete-success-message': 'Object deleted',
      'delete-error-message-caption': 'Delete operation failed'
    },
    'i-i-s-tupojj-город-l': IISTupojjГородLForm,
    'i-i-s-tupojj-здание-l': IISTupojjЗданиеLForm,
    'i-i-s-tupojj-город-e': IISTupojjГородEForm,
    'i-i-s-tupojj-здание-e': IISTupojjЗданиеEForm
  },

});

export default translations;
