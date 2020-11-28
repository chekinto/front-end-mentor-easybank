const burger = document.getElementById('burger');
const line = document.getElementById('line');
let isOpen = false;

burger.addEventListener('click', () => {
  line.classList.toggle('active')
})