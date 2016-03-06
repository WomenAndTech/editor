import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'div',
  click: function(){
    Ember.$('#editor').toggleClass('open');
  }
});