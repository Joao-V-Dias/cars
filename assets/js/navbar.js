const menuIcon = document.querySelector('.menu-icon')

menuIcon.addEventListener("click", () => {
  menuIcon.classList.toggle('active')
  document.querySelector('.menu').classList.toggle('active')
  document.querySelector('body').classList.toggle('active')
})