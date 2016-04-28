import Ember from 'ember';

var $ = Ember.$;

// borrowed from: http://stackoverflow.com/questions/2337630/find-html-element-nearest-to-position-relative-or-absolute
$.fn.closestToOffset = function(offset) {
    var el = null, elOffset, x = offset.left, y = offset.top, distance, dx, dy, minDistance;
    this.each(function() {
      elOffset = $(this).offset();

      if (
      (x >= elOffset.left)  && (x <= elOffset.right) &&
      (y >= elOffset.top)   && (y <= elOffset.bottom)
      ) {
        el = $(this);
        return false;
      }

      var offsets = [[elOffset.left, elOffset.top], [elOffset.right, elOffset.top], [elOffset.left, elOffset.bottom], [elOffset.right, elOffset.bottom]];
      for (var off in offsets) {
        dx = offsets[off][0] - x;
        dy = offsets[off][1] - y;
        distance = Math.sqrt((dx*dx) + (dy*dy));
        if (minDistance === undefined || distance < minDistance) {
          minDistance = distance;
          el = $(this);
        }
      }
    });
    return el;
};

export default Ember.Component.extend({
  tagName: 'article',
  currentSection: null,

  _setupContent: function() { 
    Ember.run.scheduleOnce('afterRender', this, ()=>{
      // get the model's body content...if it's blank or doesn't exist - use the component's HTML to start.
      var content = this.get('body') ? $(this.get('body')) : this.$();
      var mutationObserver = new MutationObserver(()=>{
        this.sendAction('_contentDidChange');
      });
      var mutationConfig = { 
        attributes: true, 
        childList: true, 
        characterData: true, 
        subtree: true, 
        attributeOldValue: true, 
        characterDataOldValue: true 
      };
      
      // make the content area editable - it's stripped off during a save operation
      content.attr('contenteditable', true);
      
      // drop the content into the compoent
      this.$().html(content);

      this.set('content', this.$());

      mutationObserver.observe(this.$().get(0), mutationConfig);
    });
  }.on('didInsertElement'),

  closeMenu: function(){
    $('#editor').removeClass('open');
  },
  click: function(){
    this.closeMenu();
  },

  dragOver: function(ev) {
    ev.preventDefault();
    
    var currentSection = $(ev.target).closestToOffset({left: 0, top: 0}).closest('section')[0];
    var placeholder = $('.placeholder');

    if(placeholder.length < 1) {
      placeholder = $('<div class="placeholder">');
      $('#editor-area').append(placeholder);
    }

    if(currentSection) {
      this.set('currentSection', currentSection);
      $(currentSection).after(placeholder);
    }
    else {
      this.set('currentSection', null);
    }

    $(window).scrollTop(placeholder);
  },
  drop: function(ev) {
    var currentSection = this.get('currentSection');
    var component = $(ev.dataTransfer.getData('text/data')) || null;

    if(!component) {
      this.get('toastr').error('The dropped component is empty');
      return true;
    }

    component.attr('contenteditable', true);

    if(currentSection) {
      $(currentSection).after(component);
    }
    else {
      this.$().append(component);
    }

    $('.placeholder').remove();

  }
});