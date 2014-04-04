$(document).ready(function() {
  $(window).bind('scroll',function(e){
    parallaxScroll();
  });
});

function parallaxScroll(){
  var bgScrollRate = 0.25;
  var scrolled     = $(window).scrollTop();

  $('#bg-1').css('top',(0-(scrolled*bgScrollRate))+'px');
  $('#bg-2').css('top',(0-(scrolled*bgScrollRate))+'px');
  $('#bg-3').css('top',(0-(scrolled*bgScrollRate))+'px');
}