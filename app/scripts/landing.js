$(document).ready(function() {
  $('.hero-content h3').click(function() {
    var subText = $(this).text();
    $(this).text(subText + "!");
    $(this).fadeOut( "slow" );
  });

var onHoverAction = function(event) {
  console.log('Hover action triggered.');
  $(this).css('color', '#FB70FF');
  $(this).animate({'margin-top': '10px'}); 
};

var offHoverAction = function(event) {
  $(this).css('color', '#FFFFFF');
  $(this).animate({'margin-top': '0px'});
};
  console.log('Hover action triggered.');

$('.selling-points .point').hover(onHoverAction, offHoverAction);
});


