import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    deleteUser: function(user){
      user.destroyRecord().then((user)=>{
        this.toast.success(`User deleted...Bye bye ${user.firstname}`);
      },(err)=>{
        this.toast.error(`${err.message}`);
      });
    }
  }
});