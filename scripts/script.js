//Click Functions to New Pages
$('.menu button:nth-child(1)').click(function(){
    $('.menu').addClass('activated');
    $('.menu button').addClass('activated');
    $('.jerry').addClass('displayed')
    $('button#demo-menu-lower-left').addClass('displayed')
});
$('.menu button:nth-child(2)').click(function(){
  $('.menu').addClass('activated');
  $('.menu button').addClass('activated');
  $('.experience').addClass('displayed')
  $('button#demo-menu-lower-left').addClass('displayed')
});
$('.menu button:nth-child(3)').click(function(){
  $('.menu').addClass('activated');
  $('.menu button').addClass('activated');
  $('.projects').addClass('displayed')
  $('button#demo-menu-lower-left').addClass('displayed')
});
$('.menu button:nth-child(4)').click(function(){
  $('.menu').addClass('activated');
  $('.menu button').addClass('activated');
  $('.resume').addClass('displayed')
  $('button#demo-menu-lower-left').addClass('displayed')
});
//button function
$('button#demo-menu-lower-left').click(function(){
  window.scrollTo(0, 0);
  $('.displayed').removeClass('displayed');
  $('.menu').removeClass('activated');
  $('.menu button').removeClass('activated');
  $('button#demo-menu-lower-left').removeClass('displayed')});
