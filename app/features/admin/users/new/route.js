import Ember from 'ember';

export default Ember.Route.extend({
  model: function(){
    return this.store.createRecord('user');
  },
  actions: {
    willTransition: function(transition){
      let model = this.get('controller.model');

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