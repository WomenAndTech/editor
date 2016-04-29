import Ember from 'ember';

export default Ember.Controller.extend({
  _contentChanged: false,

  content: null,

  disableSave: function(){
    return this.get('_contentChanged') ? false : true;
  }.property('_contentChanged'),

  displaySettingsModal: false,

  actions: {
    _contentDidChange: function(){
      this.set('_contentChanged', true);
    },
    toggleSettingsModal: function(){
      let displayingModal = this.get('displaySettingsModal');
      
      displayingModal ? this.set('displaySettingsModal', false) : this.set('displaySettingsModal', true); 
    },
    save: function(){ 
      let model = this.get('model');
      let content = this.get('content');
      
      model.set('body', content.html());

      model.save()
        .then((post)=>{
          this.toast.success(`${post.get('type')} "${post.get('title')} " saved!`);
          this.set('_contentChanged', false);
        },(err)=>{
          console.log(err);
          this.toast.error(`Could not save ${model.get('post')} "${model.get('title')}"`);
        });
    }
  }
});