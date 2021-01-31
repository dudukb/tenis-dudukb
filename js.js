const tenisGreen = document.querySelector('#green');
const tenisBlue = document.querySelector('#blue');

const tenisRed = document.querySelector('#red');
const button = document.querySelector('.button');
const divTamanho = document.querySelector('.tamanho');
tenisGreen.onclick = changeToGreen;
function changeToGreen() {
  button.style.backgroundColor = '#acd43b';
  document.querySelector('#img').src ='https://i.postimg.cc/pdNz54Zp/tenis-green.png';
}
