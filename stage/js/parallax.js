$(document).ready(function() {

  updateCurtainHeight();




  $(window).resize(function() {
    updateCurtainHeight();
  });

  function updateCurtainHeight() {
    $('#curtain').height($(window).height())
  }
});

window.onload = function() {
  $('#curtain #banner').delay(500).fadeIn(1200);
}