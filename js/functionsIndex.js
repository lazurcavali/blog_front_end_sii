$(window).scroll(function() {

  var wScroll = $(this).scrollTop();

  $('.cover-content').css({
    'transform' : 'translate(0px, '+ wScroll /10 +'%)'
  });

  if(wScroll > $('.row').offset().top - ($(window).height() / 1.2)) {

    $('.row article').each(function(i){

      setTimeout(function(){
        $('.row article').eq(i).addClass('animated fadeInLeft');
      }, 150 * (i+1));

    });

  }
});
