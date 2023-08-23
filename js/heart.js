$(document).ready(function () {
  /*heart*/
  $(".nonclick").click(function () {
    $(".click").show();
    $(".nonclick").hide();
  });

  $(".click").click(function () {
    $(".nonclick").show();
    $(".click").hide();
  });
});