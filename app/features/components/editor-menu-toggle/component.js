import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'div',
  click: function(){
    var editor = Ember.$('#editor');
    if(editor.hasClass('open')){
      Ember.$('#subMenu').removeClass('visible');
    }
    editor.toggleClass('open');
  }
});