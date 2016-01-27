$(document).ready(function() {

  $('li > div').addClass('popout').css('line-height','1');

//  $('li > div').each(function() {
//    $('li').hover(function() {
//      $(this).css('background-color', '#94854E').animate({height:'toggle'},200);
//    }, function() {
//      $(this).animate({height:'toggle'},100);
//  });
//});


$('#time1').hover(function() {
  $('#popout1').css('background-color', '#C26F39').css('text-indent', '0px').animate({height:'toggle'},200);
}, function() {
  $('#popout1').animate({height:'toggle'},100);
});

$('#time2').hover(function() {
  $('#popout2').css('background-color', '#94854E').animate({height:'toggle'},200);
}, function() {
  $('#popout2').animate({height:'toggle'},100);
});

$('#time3').hover(function() {
  $('#popout3').css('background-color', '#659A63').animate({height:'toggle'},200);
}, function() {
  $('#popout3').animate({height:'toggle'},100);
});

$('#time4').hover(function() {
  $('#popout4').css('background-color', '#C26F39').animate({height:'toggle'},200);
}, function() {
  $('#popout4').animate({height:'toggle'},100);
});

$('#time5').hover(function() {
  $('#popout5').css('background-color', '#37B079').animate({height:'toggle'},200);
}, function() {
  $('#popout5').animate({height:'toggle'},100);
});

$('#time6').hover(function() {
  $('#popout6').css('background-color', '#94854E').animate({height:'toggle'},200);
}, function() {
  $('#popout6').animate({height:'toggle'},100);
});

$('#time7').hover(function() {
  $('#popout7').css('background-color', '#F15A24').animate({height:'toggle'},200);
}, function() {
  $('#popout7').hide();
});

$('#time8').hover(function() {
  $('#popout8').css('background-color', '#C26F39').animate({height:'toggle'},200);
}, function() {
  $('#popout8').animate({height:'toggle'},100);
});

$('#time9').hover(function() {
  $('#popout9').css('background-color','#F15A24').animate({height:'toggle'},200);
}, function() {
  $('#popout9').animate({height:'toggle'},100);
});

}); //end ready
