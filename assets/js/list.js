$(function() {
    var index = 0,
        len = $("#gallery li").length / 4,
        timer = null;

    $("#gallery li:first").clone(true).appendTo($("#gallery"));
    $("#gallery li").eq(1).clone(true).appendTo($("#gallery"));
    $("#gallery li").eq(2).clone(true).appendTo($("#gallery"));
    $("#gallery li").eq(3).clone(true).appendTo($("#gallery"));

    function run() {
        timer = setInterval(function() {
            index++;
            $("#gallery").stop().animate({ left: -index * 600 }, 500, function() {
                if (index == len) {
                    index = 0;
                    $(this).css("left", 0)
                }
                $(".ui-slide-counter").text(function() {
                    return (index + 1) + "/" + len

                })
                if (index == 0) {
                    $(".btn-prev").addClass("btn-prev-disabled");
                } else {
                    $(".btn-prev").removeClass("btn-prev-disabled");
                }
            })
        }, 5000)
    }
    run();

    $("#db-events-guess").mouseover(function() {
        clearInterval(timer);
    }).mouseout(function() {
        run();
    })

    $(".btn-prev").click(function() {
        if (index != 0) {
            index--;
            $("#gallery").stop().animate({
                left: -index * 600
            }, 500)
            $(".ui-slide-counter").text(function() {
                return (index + 1) + "/" + len
            })
            if (index == 0) {
                $(this).addClass("btn-prev-disabled");
            } else {
                $(this).removeClass("btn-prev-disabled");
            }
        }
    })

    $(".btn-next").click(function() {
        if (index == len) {
            $("#gallery").css("left", 0);
            index = 0;
            $(".btn-prev").addClass("btn-prev-disabled");
        }
        index++;
        $(".btn-prev").removeClass("btn-prev-disabled");
        $("#gallery").stop().animate({
            left: -index * 600
        }, 500)
        $(".ui-slide-counter").text(function() {
            return (index + 1) + "/" + len
        })
    })


    var slow = null,
        gindex = 0,
        high = $("#tb").height();


    $("#tb li:first").clone(true).appendTo($("#tb"));
    $("#tb li").eq(1).clone(true).appendTo($("#tb"));
    $("#tb li").eq(2).clone(true).appendTo($("#tb"));
    $("#tb li").eq(3).clone(true).appendTo($("#tb"));
    $("#tb li").eq(4).clone(true).appendTo($("#tb"));
    $("#tb li").eq(5).clone(true).appendTo($("#tb"));
    $("#tb li").eq(6).clone(true).appendTo($("#tb"));

    function gfrun() {
        $("#tb").stop().animate({ top: -high + "px" }, 50000, function() {
            if ($(this).css("top") == -high + "px") {
                $(this).css("top", 0);
                gfrun();
            }
        })
    }
    gfrun();

})