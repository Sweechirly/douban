$(function() {
    var oTop = $(".scrol").offset().top;
    var sTop = 0;
    $(window).scroll(function() {
        sTop = $(this).scrollTop();
        if (sTop >= oTop) {
            $(".scrol").css({ "position": "fixed", "top": "0" });
        } else {
            $(".scrol").css({ "position": "static" });
        }
    });
})