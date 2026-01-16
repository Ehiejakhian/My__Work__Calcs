let btn = document.querySelector('#compute');
let width = document.querySelector('#width__input');
let height = document.querySelector('#height__input');

var track = null;
var jamb = null;
var lobster = null;
var topWidth = null;
btn.addEventListener('click', ()=> {
  console.log('clicked')
  if (!width.value) {
    width.classList.add('error');
  } else if (!height.value) {
    height.classList.add('error');
  } else {
    width.classList.remove('error');
    height.classList.remove('error');
    calculate();
  }
})

function calculate() {
  track = width.value;
  jamb = height.value - 23;
  lobster = jamb - 27;
  topWidth = (track - 166) / 2;
  glassWidth = topWidth + 18;
  glassHeight = lobster - 80;
  display();
}

function display() {
  document.querySelector('.answers').classList.add('show');
  document.querySelector('.track-output').textContent = track;
  document.querySelector('.jamb-output').textContent = jamb;
  document.querySelector('.lobster-output').textContent = lobster;
  document.querySelector('.top-output').textContent = topWidth;
  document.querySelector('.glass-width-output').textContent = glassWidth;
  document.querySelector('.glass-height-output').textContent = glassHeight;
  
}