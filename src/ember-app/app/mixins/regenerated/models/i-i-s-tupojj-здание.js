import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  nomer: DS.attr('number'),
  этаж: DS.attr('number'),
  город: DS.belongsTo('i-i-s-tupojj-город', { inverse: null, async: false })
});

export let ValidationRules = {
  nomer: {
    descriptionKey: 'models.i-i-s-tupojj-здание.validations.nomer.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  этаж: {
    descriptionKey: 'models.i-i-s-tupojj-здание.validations.этаж.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  город: {
    descriptionKey: 'models.i-i-s-tupojj-здание.validations.город.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ЗданиеE', 'i-i-s-tupojj-здание', {
    nomer: attr('Nomer', { index: 0 }),
    этаж: attr('Этаж', { index: 1 }),
    город: belongsTo('i-i-s-tupojj-город', 'Город', {
      name: attr('Name', { index: 3, hidden: true })
    }, { index: 2, displayMemberPath: 'name' })
  });

  modelClass.defineProjection('ЗданиеL', 'i-i-s-tupojj-здание', {
    nomer: attr('Nomer', { index: 0 }),
    этаж: attr('Этаж', { index: 1 }),
    город: belongsTo('i-i-s-tupojj-город', 'Name', {
      name: attr('Name', { index: 2 })
    }, { index: -1, hidden: true })
  });
};
