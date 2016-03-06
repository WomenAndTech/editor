import Ember from 'ember';

export default Ember.Component.extend({
  tagName: "nav",
  mouseEnter: function(){
    Ember.$('#subMenu').addClass('visible');
  },
  mouseLeave: function(){
    Ember.$('#subMenu').removeClass('visible');
  }
})