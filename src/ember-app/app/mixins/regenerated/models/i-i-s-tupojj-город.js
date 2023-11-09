import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  id: DS.attr('number'),
  name: DS.attr('string')
});

export let ValidationRules = {
  id: {
    descriptionKey: 'models.i-i-s-tupojj-город.validations.id.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  name: {
    descriptionKey: 'models.i-i-s-tupojj-город.validations.name.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ГородE', 'i-i-s-tupojj-город', {
    id: attr('Id', { index: 0 }),
    name: attr('Name', { index: 1 })
  });

  modelClass.defineProjection('ГородL', 'i-i-s-tupojj-город', {
    id: attr('Id', { index: 0 }),
    name: attr('Name', { index: 1 })
  });
};
