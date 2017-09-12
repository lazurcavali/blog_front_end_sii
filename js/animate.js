$(document).ready( function() {
  $('.submitBt').addClass('animated bounceInUp');
  $('.submitBt').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
    $(this).removeClass('animated bounceInUp');
  });
});

$('.iinfo').hover( function() {
  $('.fa-info').addClass('animated rubberBand');
  $('.fa-info').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
    $(this).removeClass('animated rubberBand');
  });
});

$('.iheart').hover( function() {
  $('.fa-heart').addClass('animated pulse');
  $('.fa-heart').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
    $(this).removeClass('animated pulse');
  });
});

$('.irocket').hover( function() {
  $('.fa-rocket').addClass('animated rotateInUpRight');
  $('.fa-rocket').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
    $(this).removeClass('animated rotateInUpRight');
  });
});
