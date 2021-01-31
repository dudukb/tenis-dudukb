const tenisGreen = document.querySelector('#green');
const tenisBlue = document.querySelector('#blue');

const tenisRed = document.querySelector('#red');
const button = document.querySelector('.button');
const divTamanho = document.querySelector('.tamanho');
tenisBlue.onclick = changeToBlue;
tenisGreen.onclick = changeToGreen;
tenisRed.onclick = changeToRed;
function changeToBlue() {
  button.style.backgroundColor = '#3864ff';
  document.querySelector('#img').src ='https://i.postimg.cc/43K2sD3y/tenis-blue.png';
}
function changeToGreen() {
  button.style.backgroundColor = '#acd43b';
  document.querySelector('#img').src ='https://i.postimg.cc/pdNz54Zp/tenis-green.png';
}
function changeToRed() {
  button.style.backgroundColor = '#ff3838';
  document.querySelector('#img').src ='https://i.postimg.cc/DztjZxWg/tenis-red.png';
}
