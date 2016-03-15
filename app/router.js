import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('editor', function(){

  });
  this.route('posts', function(){
    this.route('show', {path: '/:slug_name'});
  });
});

export default Router;
