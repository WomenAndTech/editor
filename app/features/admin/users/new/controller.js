import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    createUser: function(){
      let model = this.get('model');

      model.save().then((user)=>{
        this.toast.success('User Created!');
        this.transitionTo('admin.users.show', user.id);
      }, (err)=>{
        console.log(err);
        this.toast.error(err.message);
      });
    },
    cancel: function(){
      let model = this.get('model');

      model.deleteRecord();

      this.transitionTo('admin.users');
    },
    willTransition: function(transition){
      let model = this.get('model');

      if(model.get('hasDirtyAttributes')) {
        if(window.confirm('You have unsaved changes.  Leaving will destroy unsaved changes.')){
          if(model.get('isNew')){
            model.deleteRecord();
          }
          else {
            model.rollbackAttributes();
          }
        }
        else {
          transition.abort();
        }
      }
    }
  }
});