import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'li',
  classNameBindings: ["dragging"],
  dragging: false,
  draggable: true,
  dragStart: function(event){
    var el = this.get('el');

    event.dataTransfer.setData('text/data', el);

    Ember.$('#editor').removeClass('open');
    Ember.$('#subMenu').removeClass('visible');
  },
  // doubleClick: function(){
  //   var el = this.get('el');

  //   Ember.$('#editor').removeClass('open');
  //   Ember.$('#subMenu').removeClass('visible');
  //   Ember.$('#editor-area').append($(el));
  // },
  el: `<section contentEditable>
        <div class="container">
          <h2>hello world</h2>
        </div>
      </section>`
});