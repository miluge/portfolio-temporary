console.log('Hello World');

var jquery = require("jquery");
window.$ = window.jQuery = jquery; // notice the definition of global variables here

$(window).scroll(function () {
    // selectors
    var $window = $(window),
        $body = $('body'),
        $panel = $('.panel');

    // Change 33% earlier than scroll position so colour is there when you arrive.
    var scroll = $window.scrollTop() + ($window.height() / 3);

    $panel.each(function () {
        var $this = $(this);
        // if position is within range of this panel.
        // So position of (position of top of div <= scroll position) && (position of bottom of div > scroll position).
        // Remember we set the scroll to 33% earlier in scroll var.
        if ($this.position().top <= scroll && $this.position().top + $this.height() > scroll) {

            // Remove all classes on body with color-
            $body.removeClass(function (index, css) {
                return (css.match(/(^|\s)bg-\S+/g) || []).join(' ');
            });

            // Add class of currently active div
            $body.addClass('bg-' + $(this).data('color'));
        }
    });

}).scroll();