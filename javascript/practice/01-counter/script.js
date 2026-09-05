const count = document.getElementById('count');
const incrementBtn = document.getElementById('increment');
const decrementBtn = document.getElementById('decrement');
const resetBtn = document.getElementById('reset');

let counter = 0;

incrementBtn.addEventListener('click',() =>{
    counter++;
    count.textContent = counter;
})

decrementBtn.addEventListener('click',() =>{
    counter--;
    count.textContent = counter;
})

resetBtn.addEventListener('click',() =>{
    counter = 0;
    count.textContent = counter;
})


