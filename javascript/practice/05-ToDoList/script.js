const taskInput = document.getElementById('taskInput');
const addBtn = document.getElementById('addBtn');
const taskList = document.getElementById('taskList');

addBtn.addEventListener('click' , () => {

   if (taskInput.value.trim() === '') {
    return;
}  
   const li = document.createElement('li');
   const deleteBtn = document.createElement('button');
deleteBtn.textContent = 'Delete';

   li.textContent = taskInput.value;
   li.appendChild(deleteBtn);
   taskList.appendChild(li);

   deleteBtn.addEventListener('click', () => {
    li.remove();

});
    
});


