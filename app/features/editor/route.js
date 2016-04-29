import Ember from 'ember';

export default Ember.Route.extend({
  session: Ember.inject.service(),
  queryParams: {
    id: {
      refreshModel: true
    },
    type: 'null'
  },
  model: function(params) {
    if(params.id) {
      return this.store.find('post', params.id);
    }
    else {
      let defaults = {};

      if(params.type) {
        defaults.type = params.type;
      }

      return this.store.createRecord('post', defaults);
    }
  },
  actions: {
    willTransition: function(transition){
      let model = this.get('controller.model');

      if(model.get('hasDirtyAttributes')) {
        if(window.confirm('You have unsaved changes.  Leaving this page will ')){
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
    },

    updateBody: function(content){
      let model = this.get('controller.model');
      console.log(content);
      model.set('body', content);
    },
  }
});