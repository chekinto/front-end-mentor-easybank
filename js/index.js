const header = document.querySelector('header')
const burger = document.getElementById('burger');
const line = document.getElementById('line');
const overlay = document.getElementById('overlay');
const mobileNav = document.getElementById('mobileNav');
let isOpen = false;

const toggleMobileNav = (e) => {
  if (!isOpen) {
    line.classList.add('active')
    overlay.classList.add('is-modalOpen')
    mobileNav.classList.add('is-mobileOpen')
    document.body.style.overflow = 'hidden'
    isOpen = true
  } else {
    line.classList.remove('active')
    overlay.classList.remove('is-modalOpen')
    mobileNav.classList.remove('is-mobileOpen')
    document.body.style.overflow = 'initial'
    isOpen = false
  }
}

const handleToggleResize = () => {
  if (window.innerWidth < 800 && isOpen) {
    line.classList.remove('active')
    overlay.classList.remove('is-modalOpen')
    mobileNav.classList.remove('is-mobileOpen')
    document.body.style.overflow = 'initial'
    isOpen = false
  }
}

burger.addEventListener('click', toggleMobileNav)

overlay.addEventListener('click', (e) => {
  if (!e.target.contains(overlay)) return
  document.body.style.overflow = 'hidden'
  toggleMobileNav()
})

window.addEventListener('resize', handleToggleResize)
