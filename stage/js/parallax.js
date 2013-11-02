$(document).ready(function() {

  // intitalize
  updateCurtainHeight();

  $(window).bind('scroll',function(e){
    parallaxScroll();
  });

  $(window).resize(function() {
    updateCurtainHeight();
  });

  function updateCurtainHeight() {
    $('#curtain').height($(window).height())
  }

  function parallaxScroll(){
    var bgScrollRate = 0.10;
    var scrolled = $(window).scrollTop();
    $('#banner').css('top',(80-(scrolled*bgScrollRate))+'%');
  }
});

window.onload = function() {
  $('#curtain #banner').delay(200).fadeIn(1200);
}

