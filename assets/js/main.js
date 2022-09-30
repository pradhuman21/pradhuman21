// Burger Menu JS
(function ($) {
  $(".burger-toggle").on("click", function () {
    $(this).toggleClass("active");
    $(".page-content").toggleClass("hide-sidemenu-area");
    $(".sidebar-menu").toggleClass("toggle-sidemenu-area");
    $(".top-navbar").toggleClass("toggle-navbar-area");
    $(".footer-area").toggleClass("toggle-navbar-area");
  });
  $(".burger-toggle-responsive").on("click", function () {
    $(".burger-toggle-responsive").toggleClass("active");
    $(".sidebar-menu").toggleClass("active-sidemenu-area");
  });
  $(".collapsed-nav-link").on("click", function () {
    $(".sidemenu-nav-second-level").toggleClass("mm-show");
    $(".nav-item-2").toggleClass("mm-active");
  });
})(jQuery);

// Full screen Js
function toggleFullscreen(elem) {
  elem = elem || document.documentElement;
  if (
    !document.fullscreenElement &&
    !document.mozFullScreenElement &&
    !document.webkitFullscreenElement &&
    !document.msFullscreenElement
  ) {
    if (elem.requestFullscreen) {
      elem.requestFullscreen();
    } else if (elem.msRequestFullscreen) {
      elem.msRequestFullscreen();
    } else if (elem.mozRequestFullScreen) {
      elem.mozRequestFullScreen();
    } else if (elem.webkitRequestFullscreen) {
      elem.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);
    }
  } else {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    } else if (document.msExitFullscreen) {
      document.msExitFullscreen();
    } else if (document.mozCancelFullScreen) {
      document.mozCancelFullScreen();
    } else if (document.webkitExitFullscreen) {
      document.webkitExitFullscreen();
    }
  }
}

document.getElementById("btnFullscreen").addEventListener("click", function () {
  toggleFullscreen();
});

