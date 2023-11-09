import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType
});

Router.map(function () {
  this.route('i-i-s-tupojj-город-l');
  this.route('i-i-s-tupojj-город-e',
  { path: 'i-i-s-tupojj-город-e/:id' });
  this.route('i-i-s-tupojj-город-e.new',
  { path: 'i-i-s-tupojj-город-e/new' });
  this.route('i-i-s-tupojj-здание-l');
  this.route('i-i-s-tupojj-здание-e',
  { path: 'i-i-s-tupojj-здание-e/:id' });
  this.route('i-i-s-tupojj-здание-e.new',
  { path: 'i-i-s-tupojj-здание-e/new' });
});

export default Router;
