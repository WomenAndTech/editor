import Ember from 'ember';

export default Ember.Route.extend({
  queryParams: {
    id: {
      refreshModel: true
    },
    type: 'null'
  },
  model: function(params) {
    if(params.id) {
      return this.store.find('post', params.id)
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

    save: function(){
      var model = this.get('controller.model');
      var body = model.get('body');

      $(body)
        .removeAttr('contenteditable')
        .removeAttr('contentEditable')
        .removeAttr('style')
        .find('*') //find all children
          .removeAttr('contenteditable')
          .removeAttr('contentEditable')
          .removeAttr('style')

      body = $(body).html();

      model.set('body', body);

      model.save()
        .then((post)=>{
          this.toast.success(`${post.get('type')} "${post.get('title')} " saved!`);
        },(error)=>{
          this.toast.error(`Could not save ${model.get('post')} "${model.get('title')}"`);
        });
    }
  }
});