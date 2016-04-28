import Ember from 'ember';

export default Ember.Component.extend({
  authorized: function(){
    let session = this.get('session');
    let user = this.get('user');
    console.log(session.admin);
    if(session.admin || session.id === user.id) {
      return true;
    }
    else {
      return false;
    }
  }.property('session', 'user'),
  actions: {
    deleteUser: function(user){
      this.sendAction('deleteUser', user);
    }
  }
});