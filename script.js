let mode = document.querySelector('.mode')
let control = document.querySelector('.mode-control')
let body = document.querySelector('body')

mode.addEventListener('click', function (e) {
    e.defaultPrevented;
    mode.classList.toggle('dark')
    body.classList.toggle('dark2')
    control.classList.toggle('yur')
}
)