/* eslint-disable */
function goto(section) {
  window.location.replace(`#${section}`);
  menuClose();
}

function modalOpen(num) {
  console.log(num);
}

function menuClose() {
  const mmenu = document.querySelector('#mobile_menu');
  mmenu.style.display = 'none';
}

function menuOpen() {
  const mmenu = document.querySelector('#mobile_menu');
  mmenu.style.display = 'block';
}
/* eslint-enable */