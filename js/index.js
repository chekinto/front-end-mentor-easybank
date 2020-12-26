const header = document.querySelector('header')
const burger = document.getElementById('burger');
const line = document.getElementById('line');
const overlay = document.getElementById('overlay');
const mobileNav = document.getElementById('mobileNav');
let isOpen = false;

const addClasses = () => {
  line.classList.add('active')
  overlay.classList.add('is-modalOpen')
  mobileNav.classList.add('is-mobileOpen')
  document.body.style.overflow = 'hidden'
  isOpen = true
}

const removeClasses = () => {
  line.classList.remove('active')
  overlay.classList.remove('is-modalOpen')
  mobileNav.classList.remove('is-mobileOpen')
  document.body.style.overflow = 'initial'
  isOpen = false
}

const toggleMobileNav = (e) => {
  if (!isOpen) {
    addClasses()
  } else {
    removeClasses()
  }
}

const handleToggleResize = () => {
  if (window.innerWidth < 800 && isOpen) {
    removeClasses()
  }
}

burger.addEventListener('click', toggleMobileNav)

overlay.addEventListener('click', (e) => {
  if (!e.target.contains(overlay)) return
  document.body.style.overflow = 'hidden'
  toggleMobileNav()
})

window.addEventListener('resize', handleToggleResize)
