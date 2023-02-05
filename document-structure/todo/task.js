const taskInput = document.getElementById('task__input');
const taskList = document.getElementById('tasks__list');
const taskAdd = document.getElementById('tasks__add');
let taskRemove = [];

taskAdd.onclick = function() {
    return false;
};

taskAdd.addEventListener('click', function(e) {
    if(taskInput.value.trim() === '') {
        alert('Введите новое дело');
    } else {
        taskList.innerHTML +=`
            <div class="task">
                <div class="task__title">
                    ${taskInput.value}
                </div>
                <a href="#" class="task__remove">&times;</a>
            </div>
        `
    };
    taskInput.value = '';

    taskRemove = [...taskList.querySelectorAll('.task__remove')];
    taskRemove.forEach((element) => {
        element.addEventListener('click', function() {
            const parent = element.closest('.task')
            parent.remove();            
        });
        
    });
})





