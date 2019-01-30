var names = ['home', 'about', 'rl', 'proj'];

function showPane(name) {
  for (var i = 0; i < names.length; i += 1) {
    if (names[i] != name) {
      $('#' + names[i]).css('display', 'none');
      $('#' + names[i] + '-btn').css({'border-color': 'transparent', 'background-color': 'transparent', 'color': 'black'});
    } else {
      $('#' + name).css('display', 'inherit');
      $('#' + names[i] + '-btn').css({'border-color': 'black', 'background-color': '#f8f8f8', 'color': 'black'});
    }
  }
}

$(document).ready(function() {

  showPane('about');

  $('#nav div').click(function() {
    var name = $(this).attr('name');
    if (name != 'home') {
      showPane(name);
    }
  });

  $('.section-btn').mouseenter(function() {
    $(this).css('border-color', 'black');
  });

  $('.section-btn').mouseleave(function() {
    if ($(this).css('background-color') != 'rgb(248, 248, 248)') {
      $(this).css('border-color', 'transparent');
    }
  });
});
