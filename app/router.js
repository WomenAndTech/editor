import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('interviews', function(){
    this.route('show', {path: '/:interview_id'});
  });

  this.route('posts', function(){
    this.route('show', {path: '/:post_id'});
  });
  this.route('admin', function(){
    this.route('editor');
    this.route('posts');
    this.route('interviews');
    this.route('users', function(){
      this.route('new');
      this.route('show', {path: '/:user_id'});
    });
    this.route('settings');
  });

  this.route('editor');
});

export default Router;
