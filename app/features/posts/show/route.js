import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params){
    return this.store.queryRecord('post', {slug: params.slug_name});
  }
});