$(document).ready(function () {
  /*nav script*/
  $(".menu_icon").click(function () {
    $(".menu").slideDown();
    $(".menu_icon").hide();
    $(".close_icon").show();
  });

  $(".close_icon").click(function () {
    $(".menu").slideUp();
    $(".close_icon").hide();
    $(".menu_icon").show();
  });

  $(window).resize(function () {
    if (window.innerWidth >= 768) {
      $(".menu").show();
      $(".menu_icon").hide();
      $(".close_icon").hide();
    }
  });

  $(window).resize(function () {
    if (window.innerWidth <= 767) {
      $(".menu").hide();
      $(".menu_icon").show();
      $(".close_icon").hide();
    }
  });
});