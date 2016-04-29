import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'div',
  classNames: ["editorModal"],
  classNameBindings: ["visible"],
  actions: {
    toggleSettingsModal: function(){
      this.sendAction('toggleSettingsModal');
    },
    stopPropagation: function(e){
      e.preventDefault();
    },
    closeModal: function(){
      this.set('visible', false);
    }
  }
});