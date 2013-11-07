$(document).ready(function() {

  // intitalize
  updateCurtainHeight();

  $(window).bind('scroll',function(e){

    var scrolled = $(window).scrollTop();

    zoomImage(scrolled, '#first-image');
    parallaxScroll(scrolled, '#banner');
  });

  $(window).resize(function() {
    updateCurtainHeight();
  });

  function updateCurtainHeight() {
    $('#curtain').height($(window).height());
  }

  function zoomImage(scrolled, target) {
    var zoomRate = (scrolled / 3500) + 1;
    if (zoomRate > 1) {
      $(target).css('transform', 'scale(' + zoomRate + ',' + zoomRate + ')');
      $(target).css('-ms-transform', 'scale(' + zoomRate + ',' + zoomRate + ')');
      $(target).css('-webkit-transform', 'scale(' + zoomRate + ',' + zoomRate + ')');
    }
  }

  function parallaxScroll(scrolled, target){
    $(target).css('top',(80-(scrolled*0.10))+'%');
  }
});

window.onload = function() {
  $('#curtain #banner').delay(200).fadeIn(1200);
}

