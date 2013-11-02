$(document).ready(function() {

  // intitalize
  updateCurtainHeight();

  $(window).bind('scroll',function(e){
    parallaxScroll();
    zoomImage('#first-image');
  });

  $(window).resize(function() {
    updateCurtainHeight();
  });

  function updateCurtainHeight() {
    $('#curtain').height($(window).height());
  }

  function parallaxScroll(){
    var bgScrollRate = 0.10;
    var scrolled = $(window).scrollTop();
    $('#banner').css('top',(80-(scrolled*bgScrollRate))+'%');
  }

  function zoomImage(target) {
    var zoomRate = ($(window).scrollTop() / 4000) + 1;
    if (zoomRate > 1) {
      $(target).css('transform', 'scale(' + zoomRate + ',' + zoomRate + ')');
      $(target).css('-ms-transform', 'scale(' + zoomRate + ',' + zoomRate + ')');
      $(target).css('-webkit-transform', 'scale(' + zoomRate + ',' + zoomRate + ')');
    }
  }
});

window.onload = function() {
  $('#curtain #banner').delay(200).fadeIn(1200);
}

