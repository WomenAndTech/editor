import Ember from 'ember';

export default Ember.Component.extend({
  session: Ember.inject.service(),
  tagName: 'nav',
  classNames: ['adminMenu'],
  actions: {
    logout: function(){
      let session = this.get('session');

      session.invalidate();
    }
  }
});