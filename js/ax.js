jQuery(document).ready(function($) {

    var menuBtn = $('.hamburger'),
        menu = $('#offcanvas');

    menuBtn.click(function() {

        if (menu.hasClass('offcanvas-open')) {
            menu.removeClass('offcanvas-open').toggle();
        } else {
            menu.addClass('offcanvas-open').toggle();
        }
    });
});


function NavHorizontal($el) {
    var self = this;
    var mousewheelevt = (/Firefox/i.test(navigator.userAgent)) ? "DOMMouseScroll" : "mousewheel";
    var $nav = $el.find('.nav');
    var $lastItem = $nav.find('li').last();

    this.target = $el;
    this.scroll = 0;
    this.scrollMax = $lastItem.offset().left + $lastItem.width() - $nav.offset().left - $nav.width();

    $(self.target).on(mousewheelevt, function(e) {
        e.preventDefault();

        if ((e.originalEvent.wheelDelta || e.originalEvent.detail) > 0) {
            if (self.scroll >= 0) self.scroll -= 10;
        } else {
            if (self.scroll <= self.scrollMax) self.scroll += 10;
        }

        $nav.scrollLeft(self.scroll);
    });
}

$(document).ready(function() {
    $('[data-toggle="navHorizontal"]').each(function() {
        new NavHorizontal($(this));
    });
});