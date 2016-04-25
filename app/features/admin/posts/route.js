import Ember from 'ember';

export default Ember.Route.extend({
  model: function(){
    return this.store.findAll('post');
  },
  actions: {
    delete: function(model){
      if(window.confirm("Are you sure you want to delete this post?")){
        model.destroyRecord().then(()=>{
          this.toast.success('Post successfully deleted.');
        }, ()=>{
          this.toast.error('Could not delete post.');
        });
      }
    }
  }
});