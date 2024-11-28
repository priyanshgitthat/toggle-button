let mode = document.querySelector('.mode')
console.log(mode);
let box = document.querySelector('.box')
console.log(box);
let ball = document.querySelector('.ball')
console.log(ball);
box.addEventListener('click', () => {
    mode.classList.toggle('dark-theme')
    ball.classList.toggle('light-theme')
})
