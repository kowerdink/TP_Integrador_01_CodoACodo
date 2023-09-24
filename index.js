
const nav = document.getElementById('nav')
const label = document.getElementById('label')

label.addEventListener('click', (e)=> {
    e.preventDefault();
    nav.classList.toggle('flex')
})