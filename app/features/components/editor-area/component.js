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
  didInsertElement: function(){
    var body = this.get('body');
    this.$().append(body);
  },
  closeMenu: function(){
    $('#editor').removeClass('open');
  },
  click: function(){
    this.closeMenu();
  },
  dragOver: function(event) {
    event.preventDefault();
    
    var currentSection = $(event.target).closestToOffset({left: 0, top: 0}).closest('section')[0];
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
    // scroll to placeholder
    $(window).scrollTop(placeholder);
  },
  drop: function(event) {
    var block = $(event.dataTransfer.getData('text/data')) || null;
    var body = this.get('body');
    var currentSection = this.get('currentSection');

    block.append(`<p>Date-${Date.now()}</p>`);

    if(currentSection) {
      $(currentSection).after(block);
    }
    else {
      this.$().append(block);
    }

    this.set('body', this.$().html().replace("<!---->", ""));

    $('.placeholder').remove();
    this.closeMenu();
  }
});