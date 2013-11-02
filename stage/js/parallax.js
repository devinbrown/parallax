$(document).ready(function() {

  updateCurtainHeight();

  $(window).resize(function() {
    updateCurtainHeight();
  });

  function updateCurtainHeight() {
    $('#curtain').height($(window).height())
  }
});
