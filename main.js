const moon = document.querySelector('.moon');
const wrapper = document.querySelector('.wrapper');
moon.onclick = () => {
  wrapper.classList.toggle('dark');
};

const menu = document.querySelector('.menu');
const nav = document.querySelector('nav');
menu.onclick = () => {
  nav.classList.toggle('show');
};
