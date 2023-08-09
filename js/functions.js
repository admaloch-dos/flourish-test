// functino to reset all cookies
const removeAllCookies = () => {
    for (let i = 0; i < cookiesArr.length; i++) {
        $.removeCookie(cookiesArr[i]);
    }
  }

  const isCookieActive = (input, value) => {
    if (input && input !== value) {
        return true
    } else {
        return false
    }
  }

// complete reset- all cookies removed and refresh - runs on reset button and shift-q
function resetAdaModal() {
    removeAllCookies()
    if (document.querySelector('#ADA_widget').style.display === 'flex') {
        sessionStorage.setItem("reloadModalOpen", "true");
    }
    storeMainScrollPosition()
    forceReload()
}

const displayModal = () => {
    const overlay = document.querySelector('#ADA_widget')
    if (overlay.style.display !== "flex") {
        $("#ada-triggers").fadeOut(700);
        $("#ADA_widget").css('opacity', '0');
        $("#ADA_widget").css("display", "flex")
        $("#ADA_widget").fadeTo(0, 1);
        $(".modal_content").fadeToggle(0);
        document.body.classList.add("prevent-body-overflow");
        $(".modal_body").scrollTop(0);
        $('body').css("overflow", "hidden");
    } else {
        $("#ADA_widget").fadeTo(400, 0);
        $(".modal_content").fadeToggle(400);
        setTimeout(() => {
            $("#ADA_widget").css("display", "none")
            document.body.classList.remove("prevent-body-overflow");
            $("#ada-triggers").fadeIn();
            $('body').css("overflow", "auto");
        }, 800);
    }
}

// store scroll positions for forced pageload/cookie removal
const storeMainScrollPosition = () => {
    var mainScrollPosition = $("html, body").scrollTop();
    sessionStorage.setItem("mainScrollPosition", mainScrollPosition);
}

const storeModalScrollPosition = () => {
    var modalScrollPosition = $(".modal_body").scrollTop();
    sessionStorage.setItem("modalScrollPosition", modalScrollPosition);
}

const modalDisplayOpenOrClose = () => {
    const adaWidget = document.querySelector('#ADA_widget')
    if (adaWidget.style.display === 'flex') {
        sessionStorage.setItem("reloadModalOpen", "true");
    } else {
        sessionStorage.setItem("reloadModalClosed", "true");
    }
}

const forceReload = () => {
    $("body").fadeOut()
    setTimeout(() => {
        document.location.reload();
    }, 200);
}