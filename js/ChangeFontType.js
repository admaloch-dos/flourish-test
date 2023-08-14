/////COOKIE SETTING FOR FONT TYPE
$(document).ready(function () {
  $("#ADA_widget #FT_Default").addClass("active");
});


/////COOKIE SETTING FOR FONT TYPE
$(document).ready(function () {
  $("#FT_Default").addClass("active");
});
//FOR FONT TYPE CHANGE -- ADDS ACTIVE CLASS TO LI WHEN CLICKED
//https://stackoverflow.com/questions/3972944/jquery-removeclass-on-parent-sibling-child
$(function () {
  $('.font_type_form .form-check ul li').click(function () {
      $(this).addClass('active').siblings().removeClass('active');
  });
});



const restoreDefaultFontType = () => {
  $('body').removeClass('DyslexicFont');
  $('body').removeClass('BaskervilleFont');
  $('#FT_Default').addClass('active').siblings().removeClass('active');
  if ($.cookie('BaskervilleFontCookie') == "yes") {
    $.cookie("BaskervilleFontCookie", null, { path: '/' });

  }
  if ($.cookie('DyslexicFontCookie') == "yes") {
    $.cookie("DyslexicFontCookie", null, { path: '/' });
  }
  widgetItemObj.isDyslexicFont = false
  widgetItemObj.isBaskervilleFont = false
  removeWidgetControls(['FontTypeDyslexic', 'FontTypeBaskerville'])

  checkIfWidgetActive()
}


$(document).ready(function () {
  // Cookie for DyslexicFontCookie
  // Check (onLoad) if DyslexicFontCookie is there and set the class to body if it is
  // Add active class to li
  if ($.cookie('DyslexicFontCookie') == "yes") {
    $("#ADA_widget #FT_Dyslexic").addClass("active");
    $("body").addClass("DyslexicFont");
    $('body').removeClass('BaskervilleFont');
    $("#ADA_widget #FT_Default").removeClass("active");
    $("#ADA_widget #FT_Baskerville").removeClass("active");
    $.cookie('BaskervilleFontCookie') == "no";
    $.cookie('BaskervilleFontCookie') == "undefined";
    $.cookie("BaskervilleFontCookie", null, {
      path: '/'
    });

  }

  // When input is clicked save cookie for 30days
  $("#ADA_widget a.FontTypeDyslexic").click(function () {
    $.cookie("BaskervilleFontCookie", null, {
      path: '/'
    });
    if ($.cookie('DyslexicFontCookie') == "undefined" || $.cookie('DyslexicFontCookie') == "no") {
      $.cookie('DyslexicFontCookie', 'yes', { path: '/' });
      $("body").addClass("DyslexicFont");
      $('body').removeClass('BaskervilleFont');

    } else {
      $.cookie('DyslexicFontCookie', 'yes', { path: '/' });
      $("body").addClass("DyslexicFont");
      $('body').removeClass('BaskervilleFont');

    }
    addWidgetControls('FontTypeDyslexic', 'Open-dyslexic font')
    removeWidgetControls(['FontTypeBaskerville'])
    widgetItemObj.isBaskervilleFont = false
    widgetItemObj.isDyslexicFont = true
    checkIfWidgetActive()

  });



});

$(document).ready(function () {
  // Cookie for BaskervilleFontCookie
  // Check (onLoad) if BaskervilleFontCookie is there and set the class to body if it is
  // Add active class to li
  if ($.cookie('BaskervilleFontCookie') == "yes") {
    $("#ADA_widget #FT_Baskerville").addClass("active");
    $("body").addClass("BaskervilleFont");
    $("#ADA_widget #FT_Default").removeClass("active");
    $("#ADA_widget #FT_Dyslexic").removeClass("active");
    $('body').removeClass('DyslexicFont');
    $.cookie('DyslexicFontCookie') == "no";
    $.cookie('DyslexicFontCookie') == "undefined";
    $.cookie("DyslexicFontCookie", null, { path: '/' });

  }

  // When input is clicked save cookie for 30days
  $("#ADA_widget a.FontTypeBaskerville").click(function () {
    $.cookie("DyslexicFontCookie", null, {
      path: '/'
    });
    if ($.cookie('BaskervilleFontCookie') == "undefined" || $.cookie('BaskervilleFontCookie') == "no") {
      $.cookie('BaskervilleFontCookie', 'yes', { path: '/' });
      $("body").addClass("BaskervilleFont");
      $('body').removeClass('DyslexicFont');

    } else {
      $.cookie('BaskervilleFontCookie', 'yes', { path: '/' });
      $("body").addClass("BaskervilleFont");
      $('body').removeClass('DyslexicFont');

    }
    addWidgetControls('FontTypeBaskerville', 'Libre-baskerville font')
    removeWidgetControls(['FontTypeDyslexic'])
    widgetItemObj.isBaskervilleFont = true
    widgetItemObj.isDyslexicFont = false
    checkIfWidgetActive()


  });





  //When 'a.FontTypeDefault' is clicked, removes 'DyslexicFont' and erases FontTypeCookie
  $("#ADA_widget a.FontTypeDefault").click(function () {
   restoreDefaultFontType()
  });
});
