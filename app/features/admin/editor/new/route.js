import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params) {
    return this.store.createRecord('post', {body: "", type: 'interview'});
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