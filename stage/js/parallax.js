$(document).ready(function() {

  updateCurtainHeight();

  $(window).resize(function() {
    updateCurtainHeight();
  });

  $(window).scroll(function() {
    scaleImage();
  });

  function updateCurtainHeight() {
    $('#curtain').height($(window).height())
  }

  function scaleImage() {
    var scrolled     = $(window).scrollTop();
    var bgScrollRate = 0.001;

    $('#map-translate').css('transform', 'scale(' + scrolled*bgScrollRate + ',' + scrolled*bgScrollRate + ')');
  }
});
