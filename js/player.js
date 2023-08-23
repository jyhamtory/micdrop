$(document).ready(function () {
  /*music_player script*/
  $(".play").click(function () {
    $(".stop").show();
    $(".play").hide();
  });

  $(".stop").click(function () {
    $(".play").show();
    $(".stop").hide();
  });

  $(".volumn").click(function () {
    $(".mute").show();
    $(".volumn").hide();
    $(".volumn_bar_value").hide();
  });

  $(".mute").click(function () {
    $(".volumn").show();
    $(".mute").hide();
    $(".volumn_bar_value").show();
  });
});