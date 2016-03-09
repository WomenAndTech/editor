import Ember from 'ember';

var $ = Ember.$;

export default Ember.Controller.extend({
  actions: {
    save: function(){
      var model = this.get('model');
      console.log(model.get('body'))
    }
  }
});