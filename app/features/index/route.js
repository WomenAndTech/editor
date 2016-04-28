import Ember from 'ember';
import config from 'editor/config/environment';

export default Ember.Route.extend({
  model: function(){
    let url = `${config.APIServer}/posts/latest?type=interview`;

    return Ember.$.getJSON(url).then((response)=>{
      this.store.pushPayload('post', response);
      return this.store.peekRecord('post', response.posts[0].id);
    });
  }
});