// Shooting Particles:

// Explosions



// click event listener
$('body').on('click', function(e) {
    explode(e.pageX, e.pageY);
  })
  
  // explosion construction
  function explode(x, y) {
    var particles = 55,

      explosion = $('<div class="explosion"></div>');
  
    $('body').append(explosion);
  
    explosion.css('left', x - explosion.width() / 2);
    explosion.css('top', y - explosion.height() / 2);
  
    for (var i = 0; i < particles; i++) {
      
      var x = (explosion.width() / 2) + rand(200, 250) * Math.cos(2 * Math.PI * i / rand(particles - 10, particles + 10)),
        y = (explosion.height() / 2) + rand(200, 250) * Math.sin(2 * Math.PI * i / rand(particles - 10, particles + 10)),
        color = rand(0, 255) + ', ' + rand(0, 255) + ', ' + rand(0, 255), 

        elm = $('<div class="particle" style="' +
          'background-color: rgb(' + color + ') ;' +
          'top: ' + y + 'px; ' +
          'left: ' + x + 'px"></div>');
  
      if (i == 0) { 

        elm.one('webkitAnimationEnd oanimationend msAnimationEnd animationend', function(e) {
          explosion.remove(); 
        });
      }
      explosion.append(elm);
    }
  }
  
  // get random number between min and max value
  function rand(min, max) {
    return Math.floor(Math.random() * (max + 1)) + min;
  }


