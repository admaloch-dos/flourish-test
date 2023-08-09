$(document).ready(function () {
    $("#ADA_widget #FS_Default").addClass("active");
});


$(document).ready(function () {
    // Cookie for FontSizeMedium
    // Check (onLoad) if FontSizeCookie is there and set the class to body if it is
    // Add active class to li
    if ($.cookie('FontSizeCookie') == "yes") {
        $("#ADA_widget #FS_Medium").addClass("active");
        $("body").addClass("fontSizeMedium");
        $("#ADA_widget #FS_Default").removeClass("active");
    }


    // When 'a.FontSizeMedium' is clicked remove DesaturatedBackgroundCookie and set FontSizeCookie
    // When input is clicked save cookie for 30days
    $("#ADA_widget a.FontSizeMedium").click(function () {

        if ($.cookie('FontSizeCookie') == "undefined" || $.cookie('FontSizeCookie') == "no") {
            $.cookie('FontSizeCookie', 'yes', { path: '/' });
            $("body").addClass("fontSizeMedium");

        } else {
            $.cookie('FontSizeCookie', 'yes', { path: '/' });
            $("body").addClass("fontSizeMedium");

            addWidgetControls('FontSizeMedium', 'Change font size')
            widgetItemObj.isFontBig = true
            checkIfWidgetActive()
        }

    });



    //When 'a.FontSizeDefault' is clicked, removes 'fontSizeMedium' and erases FontSizeCookie
    $("#ADA_widget a.FontSizeDefault").click(function () {
        // $('body').removeClass('fontSizeMedium');
        // if ($.cookie('FontSizeCookie') == "yes") {
        //     $.cookie("FontSizeCookie", null, {
        //         path: '/'
        //     });
        // }
        // removeWidgetControls(['FontSizeMedium'])
        // widgetItemObj.isFontBig = false
        // checkIfWidgetActive()
        restoreDefaultOnClick('fontSizeMedium', 'FontSizeCookie', widgetItemObj.isFontBig, ['FontSizeMedium'], '#ADA_widget #FS_Default')

        widgetItemObj.isFontBig = false
      
    });

});

// console.log(widgetItemObj.isFontBig)