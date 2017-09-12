$(window).scroll(function() {

  var wScroll = $(this).scrollTop();

  $('.paralax-content').css({
    'transform' : 'translate(0px, '+ wScroll /2 +'%)'
  });

});
