$(function() {
    let header = $('.header');
    console.log(header);
     
    $(window).scroll(function() {
        if($(this).scrollTop() > 84) {
            header.addClass('header--fixed');
        
            if($(this).scrollTop() > $(window).height()) {
                header.addClass('header--fixed-down');
            }
        } else {
            header.removeClass('header--fixed');
            header.removeClass('header--fixed-down');
        }
    });
});