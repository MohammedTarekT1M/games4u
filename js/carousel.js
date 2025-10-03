const previous = document.querySelector('.previous');
const next = document.querySelector('.next');
const btn1 = document.querySelector('.btn1');
const btn2 = document.querySelector('.btn2');
const btn3 = document.querySelector('.btn3');
const btn4 = document.querySelector('.btn4');
const btn5 = document.querySelector('.btn5');
const btn6 = document.querySelector('.btn6');
const nextBtn = document.querySelector('.nextBtn');
const array = document.querySelectorAll('.slide');
const btn = document.querySelectorAll('.bn')
const previousBtn = document.querySelector('.previousBtn');
let timer = null;

start();

btn1.addEventListener('click', () => {
    clearInterval(timer)
    let active;
    let nextDiv;
    for (let index = 0; index < array.length; index++) {
        const element = array[index];
        if (element.classList.contains('active')) {
            active = index;
            nextDiv = 0;
        }
    }
    array[active].classList.remove('active');
    array[nextDiv].classList.add('active');
    btn[active].classList.remove('bi-circle-fill');
    btn[nextDiv].classList.add('bi-circle-fill');
    btn[active].classList.add('bi-circle');
    btn[nextDiv].classList.remove('bi-circle');
});
btn2.addEventListener('click', () => {
    clearInterval(timer)
    let active;     
    let nextDiv;
    for (let index = 0; index < array.length; index++) {
        const element = array[index];
        if (element.classList.contains('active')) {
            active = index;
            nextDiv = 1;
        }
    }
    array[active].classList.remove('active');
    array[nextDiv].classList.add('active');
    btn[active].classList.remove('bi-circle-fill');
    btn[nextDiv].classList.add('bi-circle-fill');
    btn[active].classList.add('bi-circle');
    btn[nextDiv].classList.remove('bi-circle');
});
btn3.addEventListener('click', () => {
    clearInterval(timer)
    let active;
    let nextDiv;
    for (let index = 0; index < array.length; index++) {
        const element = array[index];
        if (element.classList.contains('active')) {
            active = index;
            nextDiv = 2;
        }
    }
    array[active].classList.remove('active');
    array[nextDiv].classList.add('active');
    btn[active].classList.remove('bi-circle-fill');
    btn[nextDiv].classList.add('bi-circle-fill');
    btn[active].classList.add('bi-circle');
    btn[nextDiv].classList.remove('bi-circle');
});
btn4.addEventListener('click', () => {
    clearInterval(timer)
    let active;
    let nextDiv;
    for (let index = 0; index < array.length; index++) {
        const element = array[index];
        if (element.classList.contains('active')) {
            active = index;
            nextDiv = 3;
        }
    }
    array[active].classList.remove('active');
    array[nextDiv].classList.add('active');
    btn[active].classList.remove('bi-circle-fill');
    btn[nextDiv].classList.add('bi-circle-fill');
    btn[active].classList.add('bi-circle');
    btn[nextDiv].classList.remove('bi-circle');
});
btn5.addEventListener('click', () => {
    clearInterval(timer)
    let active;
    let nextDiv;
    for (let index = 0; index < array.length; index++) {
        const element = array[index];
        if (element.classList.contains('active')) {
            active = index;
            nextDiv = 4;
        }
    }
    array[active].classList.remove('active');
    array[nextDiv].classList.add('active');
    btn[active].classList.remove('bi-circle-fill');
    btn[nextDiv].classList.add('bi-circle-fill');
    btn[active].classList.add('bi-circle');
    btn[nextDiv].classList.remove('bi-circle');
});
btn6.addEventListener('click', () => {
    clearInterval(timer)
    let active;
    let nextDiv;
    for (let index = 0; index < array.length; index++) {
        const element = array[index];
        if (element.classList.contains('active')) {
            active = index;
            nextDiv = 5;
        }
    }
    array[active].classList.remove('active');
    array[nextDiv].classList.add('active');
    btn[active].classList.remove('bi-circle-fill');
    btn[nextDiv].classList.add('bi-circle-fill');
    btn[active].classList.add('bi-circle');
    btn[nextDiv].classList.remove('bi-circle');
});

next.addEventListener('click', () => {
    clearInterval(timer)
    let active;
    let nextDiv;
    for (let index = 0; index < array.length; index++) {
        const element = array[index];
        if (element.classList.contains('active')) {
            active = index;
            nextDiv = active + 1;
        }
        if (nextDiv >= array.length) {
            nextDiv = 0;
        }
    }
    array[active].classList.remove('active');
    array[nextDiv].classList.add('active');
    btn[active].classList.remove('bi-circle-fill');
    btn[nextDiv].classList.add('bi-circle-fill');
    btn[active].classList.add('bi-circle');
    btn[nextDiv].classList.remove('bi-circle');
});



previous.addEventListener('click', () => {
    clearInterval(timer)
    let active;
    let nextDiv;
    for (let index = 0; index < array.length; index++) {
        const element = array[index];
        if (element.classList.contains('active')) {
            active = index;
            nextDiv = active - 1;
        }
        if (nextDiv < 0) {
            nextDiv = array.length - 1;
        }
    }
    array[active].classList.remove('active');
    array[nextDiv].classList.add('active');
    btn[active].classList.remove('bi-circle-fill');
    btn[nextDiv].classList.add('bi-circle-fill');
    btn[active].classList.add('bi-circle');
    btn[nextDiv].classList.remove('bi-circle');
});

function start() {
    timer = setInterval(tamplate, 3000)
}

function tamplate() {
    let active;
    let nextDiv;
    for (let index = 0; index < array.length; index++) {
        const element = array[index];
        if (element.classList.contains('active')) {
            active = index;
            nextDiv = active + 1;
        }
        if (nextDiv >= array.length) {
            nextDiv = 0;
        }
    }
    array[active].classList.remove('active');
    array[nextDiv].classList.add('active');
    btn[active].classList.remove('bi-circle-fill');
    btn[nextDiv].classList.add('bi-circle-fill');
    btn[active].classList.add('bi-circle');
    btn[nextDiv].classList.remove('bi-circle');
};
