
let width = document.querySelector('#input__width');
let height = document.querySelector('#input__height');
let answer = document.querySelector('.answer');
let glassPrice = document.querySelector('#input__price')

let w_f = document.querySelector('.width')
let h_f = document.querySelector('.height')
let g_f = document.querySelector('.price')

let w_err = document.querySelector('.error__width');
let h_err = document.querySelector('.error__height');

setInterval(()=>{
  error();
  calculate();
},100);

let W = 3300;
let H = 2140;

function calculate() {
  let w_sc = W / width.value;
  let h_sc = H / height.value;
  
  let scale = (w_sc * h_sc);
  scale = scale - (scale % 1)
  answer.innerHTML = 'Glass Price: <b>₦' + (glassPrice.value / scale).toFixed(0) + '</b>'
}

function error() {
  width.addEventListener('keyup', ()=>{
    if (!width.value) {
      w_f.classList.add('wrong');
      w_err.textContent = 'Empty?'
    } else {
      if (width.value.length < 3) {
        w_f.classList.add('wrong');
        w_err.textContent = 'Is\'nt this too small?';
      } else if(width.value > W) {
        w_f.classList.add('wrong');
        w_err.textContent = 'That\'s way large than what we have (3300)';
      } else {
        w_f.classList.remove('wrong');
        w_err.textContent = '';
      }
    }
  })
  height.addEventListener('keyup', ()=>{
    if (!height.value) {
      h_f.classList.add('wrong');
      h_err.textContent = 'Empty?'
    } else {
      if (height.value.length < 3) {
        h_f.classList.add('wrong');
        h_err.textContent = 'Is\'nt this too small?';
      } else if(height.value > W) {
        h_f.classList.add('wrong');
        h_err.textContent = 'That\'s way large than what we have (2140)';
      } else {
        h_f.classList.remove('wrong');
        h_err.textContent = '';
      }
    }
  })
}

let reset = document.querySelector('.reset');
reset.addEventListener('click', ()=>{
  width.value = 0;
  height.value = 0;
})