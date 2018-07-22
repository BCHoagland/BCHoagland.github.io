$(document).ready(function() {
  $('.project-name').click(function() {
    if ($(this).css('left') == 'auto') {
      var distDown = $(this).css('height').replace(/[^-\d\.]/g, '') * 3;
      $(this).css('left', $(this).css('width'));
      $(this).animate({'font-size':'3em', 'height':distDown, 'width':'100%', 'border-bottom-left-radius':'0', 'border-bottom-right-radius':'0'});
    } else {
      var distUp = $(this).css('height').replace(/[^-\d\.]/g, '') / 3;
      $(this).animate({'font-size':'2em', 'height': distUp, 'width':$(this).css('left'), 'border-bottom-left-radius':'5px', 'border-bottom-right-radius':'5px'});
      $(this).css('left', 'auto');
    }
  });
});
