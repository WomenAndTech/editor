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
  el: `<header class="row">
        <div class="span9">
          <div class="interview-number double-digits interview-number-18">18</div>
          <h1 class="clearfix" id="twitter-handle" data-twitter-handle="saralouhicks">
          Sara Hicks</h1>
          <address>
            <div class="author-image"></div>
            <div class="author-info">
              <p class="author">An interview with <a target="_blank" href="https://twitter.com/sophiehe" rel="author" title="<Sophie He's twitter profile"> <strong>Sophie He</strong>
              </a>
            </p>
            <p class="date">
            May 6, 2015</p>
            </div>
          </address>
        </div>
      </header>`
});