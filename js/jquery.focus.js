jQuery.fn.extend({
    getFocusPos: function() {
      if (document.selection) { // IE
        var sel = document.selection.createRange();
        var stored_range = sel.duplicate();
        stored_range.moveToElementText(this[0]);
        stored_range.setEndPoint('EndToEnd', sel);
        return stored_range.text.length - sel.text.length;
      } else if (this[0].selectionStart) { // FF/Chrome
         return this[0].selectionStart;
      }
    },
    focusOnPos: function(pos) {
      jQuery.each(this, function(i, obj) {
        if (this.createTextRange) { // IE
          var range = this.createTextRange();
          range.move("character", pos);
          range.select();
        } else if (this.setSelectionRange) { // FF/Chrome
          this.focus();
          this.setSelectionRange(pos, pos);
        } else { // Default
          this.focus();
        }
      });
    },
    insertOnFocus: function(content) {
      jQuery.each(this, function(i, obj) {
        if (document.selection) { // IE
          var sel = document.selection.createRange();
          sel.text = content;
        } else if (this.selectionStart !== undefined) { // FF/Chrome
          var pos = this.selectionStart;
          this.value = this.value.substring(0, pos) + content + this.value.substring(pos);
          jQuery(this).focusOnPos(pos + content.length);
        } else { // Default
          this.value += content;
        }
      });
    }
  });