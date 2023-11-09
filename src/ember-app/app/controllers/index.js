import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({
  sitemap: computed('i18n.locale', function () {
    let i18n = this.get('i18n');

    return {
      nodes: [
        {
          link: 'index',
          icon: 'home',
          caption: i18n.t('forms.application.sitemap.index.caption'),
          title: i18n.t('forms.application.sitemap.index.title'),
          children: null
        }, {
          link: null,
          icon: 'list',
          caption: i18n.t('forms.application.sitemap.tupojj.caption'),
          title: i18n.t('forms.application.sitemap.tupojj.title'),
          children: [{
            link: 'i-i-s-tupojj-город-l',
            caption: i18n.t('forms.application.sitemap.tupojj.i-i-s-tupojj-город-l.caption'),
            title: i18n.t('forms.application.sitemap.tupojj.i-i-s-tupojj-город-l.title'),
            icon: 'suitcase',
            children: null
          }, {
            link: 'i-i-s-tupojj-здание-l',
            caption: i18n.t('forms.application.sitemap.tupojj.i-i-s-tupojj-здание-l.caption'),
            title: i18n.t('forms.application.sitemap.tupojj.i-i-s-tupojj-здание-l.title'),
            icon: 'list',
            children: null
          }]
        }
      ]
    };
  }),
})