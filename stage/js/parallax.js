$(document).ready(function() {

  // intitalize
  updateCurtainHeight();

  $(window).bind('scroll',function(e){
    parallaxScroll($(window).scrollTop(), '#banner');
  });

  $(window).resize(function() {
    updateCurtainHeight();
  });

  function updateCurtainHeight() {
    $('#curtain').height($(window).height());
  }

  function parallaxScroll(scrolled, target){
    $(target).css('top',(80-(scrolled*0.10))+'%');
  }
});

window.onload = function() {
  $('#curtain #banner').delay(200).fadeIn(1500);
}

