$(function() {
    $("#inpt-pw").focus(function() {
        $(this).siblings(".popb").hide();
        $(this).siblings(".option").show();
    })

    $("#inpt-pw").blur(function() {
        $(this).siblings(".option").hide();
        var value = $(this).val();
        if (value) {
            var reg = /^[A-z0-9]{8,20}$/;
            var res1 = reg.test(value);
            var reg1 = /^[0-9]{6,16}$/;
            var res2 = reg1.test(value);

            if (res1) {
                $(this).siblings(".popb").hide();
                if (res2) {
                    $(this).siblings(".err2").show();
                } else {
                    $(this).siblings(".succ").show();
                }
            } else {
                $(this).siblings(".popb").hide();
                $(this).siblings(".err2").show();
            }
        } else {
            $(this).siblings(".err3").show();
        }
    })


    $("#inpt-nm").focus(function() {
        $(this).siblings(".popb").hide();
        $(this).siblings(".option").show();
    })

    $("#inpt-nm").blur(function() {
        $(this).siblings(".option").hide();
        var value = $(this).val();
        if (value) {
            var reg = /^[\u4e00-\u9fa5]{0,7}$|^[\dA-Za-z_0-9]{1,14}$|/;
            var res1 = reg.test(value);
        } else {
            $(this).siblings(".err2").show();
        }
    })
})