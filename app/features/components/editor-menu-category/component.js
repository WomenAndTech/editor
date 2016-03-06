import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'li',
  mouseEnter: function(){
    Ember.$('#subMenu').addClass('visible');
  },
  mouseLeave: function(){
    Ember.$('#subMenu').removeClass('visible');
  }
});