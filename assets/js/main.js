window.addEventListener('scroll', function () {
  let header = document.querySelector('header');
  let windowPosition = window.scrollY > 0;

  header.classList.toggle('scrolling-active', windowPosition);
})

let x  = 6 + 3 + "3";
console.log(x);

let navbar = document.querySelector('header nav');

document.querySelector('#menu-btn').onclick = () => {
  navbar.classList.add('active');
}

document.querySelector('#nav-close').onclick = () => {
  navbar.classList.remove('active');
}

window.onscroll = () => {
  navbar.classList.remove('active');
}