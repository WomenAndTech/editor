import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return this.store.createRecord('post');
  },
  actions: {
    save: function(){
      var model = this.get('controller.model');
      model.save();
    }
  }
});