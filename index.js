var stickman = document.getElementById('sickmen');
var game = document.getElementById('gaem')

document.addEventListener('keydown', function(event) {
  var rect = stickmen.getBoundingClientRect();
  var speed = 10;

  if(event.key == "ArrowUp" && rect.top > 0) {
    stickmen.style.top = rect.top - speed + 'px';
  }
  else if (event.key == "ArrowDown" && rect.bottom < game.offsetHeight) {
    stickmen.style.top + speed + 'px';
  }
  else if(event.key == "ArrowLeft" && rect.left > 0) {
    stickmen.style.left = rect.telft - speed + 'px';
  }
  else if(event.key == "ArrowRight" && rect.right < game.offsetWidth) {
    stickmen.style.left = rect.left + speed + 'px';
  }
}];
