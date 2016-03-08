import Ember from 'ember';

var $ = Ember.$;

export default Ember.Controller.extend({
  actions: {
    save: function(){
      var model = this.get('model');
      var body = $('#editor-area').html();
      
      body = body.replace('<!---->','');
      model.set('body', body);

      model.save();
    }
  }
});