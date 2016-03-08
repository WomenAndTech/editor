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
    var x = event.originalEvent.clientX;
    var y = event.originalEvent.clientY;

    var placeholder = Ember.$('.placeholder');

    if(placeholder.length < 1) {
      var pholder = $('<div class="placeholder">');
      Ember.$('#editor-area').append(pholder);
    }

  },
  drop: function(event) {
    event.preventDefault();

    var name = event.dataTransfer.getData('text/data');

    this.$().append(name);

    this.closeMenu();
  }
});