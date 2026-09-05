const count = document.getElementById('count');
const incrementBtn = document.getElementById('increase');
const decrementBtn = document.getElementById('decrease');
const resetBtn = document.getElementById('reset');
const doubleBtn = document.getElementById('double');

let counter = 0;

incrementBtn.addEventListener('click',() =>{
    counter++;
    count.textContent = counter;
})

decrementBtn.addEventListener('click',() =>{
    counter--;
    count.textContent = counter;
})

doubleBtn.addEventListener('click',() =>{
    counter *= 2;
    count.textContent = counter;
})

resetBtn.addEventListener('click',() =>{
    counter = 0;
    count.textContent = counter;
})


