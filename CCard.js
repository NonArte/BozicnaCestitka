const card = document.querySelector('.card');
const cardFront = document.querySelector('.cardFront');
function play() {
    var audio = document.getElementById("audio");
    audio.play();
  }

card.addEventListener('click', function() {
    card.classList.toggle('open');
    
});

cardFront.addEventListener('click', function() {
  play()
});