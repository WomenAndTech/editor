import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'article',
  closeMenu: function(){
    Ember.$('#editor').removeClass('open');
  },
  click: function(){
    this.closeMenu();
  },
  dragOver: function(event) {
    event.preventDefault();

    var placeholder = Ember.$('.placeholder');

    if(placeholder.length < 1) {
      var p = $('<div class="placeholder">');
      Ember.$('#editor-area').append(p);
    }
    else {

    }
  },
  drop: function(event) {
    event.preventDefault();
    var placeholder = Ember.$('.placeholder');
    var name = event.dataTransfer.getData('text/data');

    this.$(placeholder).remove();
    this.$().append(name);

    this.closeMenu();
  }
});