let typed = new Typed('#typed', {
  strings: [
    'Morgan Freeman.',
    'A Graphic Designer.',
    'A JavaScript Developer.',
  ],
  typeSpeed: 60,
  backSpeed: 40,
  loop: true,
});

window.addEventListener('scroll', function () {
  let header = document.querySelector('#nav');
  let toggleBtn = document.querySelector('.navbar-toggler');
  let windowPosition = window.scrollY > 0;
  header.classList.toggle('scrolling-active', windowPosition);
  toggleBtn.classList.toggle('dark', windowPosition);
});
