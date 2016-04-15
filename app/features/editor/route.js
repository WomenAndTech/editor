import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return this.store.createRecord('post', {body: ""});
  },
  actions: {
    save: function(){
      var model = this.get('controller.model');
      var body = model.get('body');

      body
        .removeAttr('contenteditable')
        .removeAttr('contentEditable')
        .removeAttr('style')
        .find('*') //find all children
          .removeAttr('contenteditable')
          .removeAttr('contentEditable')
          .removeAttr('style')

      body = body.html();

      model.set('body', body);

      model.save()
        .then((post)=>{
          this.transitionTo('posts.show', post.id);
        });
    }
  }
});