const barre = document.querySelector('.menu')
const menu = document.querySelector('.open-menu');
const close = document.querySelector('.close')


barre.addEventListener("click", () => {
    menu.classList.toggle("active")
})

close.addEventListener("click", () => {
    menu.classList.toggle("active")
})