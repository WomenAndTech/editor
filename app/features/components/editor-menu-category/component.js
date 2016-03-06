import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'li',
  mouseEnter: function(){
    var name = this.get('name');
    var selector = `#${name}-${name}`;

    Ember.$('#subMenu').addClass('visible');
    Ember.$('#subMenu ul').removeClass('visible');
    Ember.$(selector).addClass('visible');
  }
});