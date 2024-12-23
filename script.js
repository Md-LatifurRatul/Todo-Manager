function addTask() {
    const taskInput = document.getElementById('task-input');
    const taskValue = taskInput.value.trim();

    if (taskValue === '') {
        alert('Please enter a task');
        return;
    }

    const taskList = document.getElementById('task-list');


    const taskItem = document.createElement('li');
    taskItem.className = 'task-item';


    const checkBox = document.createElement('input');
    checkBox.type = 'checkbox';
    checkBox.className = 'task-checkbox';


    checkBox.addEventListener('change', function () {
        if (checkBox.checked) {
            taskItem.classList.add('completed');
            checkBox.disabled = false;
            taskItem.title = 'completed-task';
        } else {
            taskItem.classList.remove('completed');
            taskItem.style.pointerEvents = 'auto';
            taskItem.title = 'new-task';
        }
    });


    const taskText = document.createElement('span');
    taskText.className = 'task-text';
    taskText.textContent = taskValue;


    const modifyButton = document.createElement('button');
    modifyButton.className = 'modify-button';
    modifyButton.textContent = 'Modify';
    modifyButton.onclick = function () {
        if (checkBox.checked) {
            alert('Cannot modify a completed task');
            return;
        }

        const modifyInput = document.createElement('input');
        modifyInput.type = 'text';

        modifyInput.className = 'modify-input';

        modifyInput.value = taskText.textContent;

        const saveButton = document.createElement('button');
        saveButton.textContent = 'Save';
        saveButton.onclick = function () {
            const updatedText = modifyInput.value.trim();
            if (updatedText === '') {
                alert('Task cannot be empty');
                return;
            }

            taskText.textContent = updatedText;
            taskItem.title = 'modify-task';


            taskItem.textContent = '';
            taskItem.appendChild(checkBox);
            taskItem.appendChild(taskText);
            taskItem.appendChild(modifyButton);
            taskItem.appendChild(deleteButton);
        };


        taskItem.textContent = '';
        taskItem.appendChild(modifyInput);
        taskItem.appendChild(saveButton);
    };


    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.onclick = function () {
        taskList.removeChild(taskItem);
    };


    taskItem.appendChild(checkBox);
    taskItem.appendChild(taskText);
    taskItem.appendChild(modifyButton);
    taskItem.appendChild(deleteButton);


    taskList.appendChild(taskItem);


    taskInput.value = '';
}


function deleteAllTasks() {
    const taskList = document.getElementById('task-list');
    taskList.innerHTML = '';
}

document.getElementById('task-input').addEventListener('keydown', function (e) {
    if (e.key === 'Enter') {
        addTask();
    }
});
