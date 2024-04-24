const container = document.querySelector('.tasks-container');

function loadTasks(tasksArray){
    const projectTitle = document.createElement('h2');
    projectTitle.classList.add('project-title');
    container.appendChild(projectTitle);
    const taskContainer = document.createElement('div');
    taskContainer.classList.add('task-container');
    container.appendChild(taskContainer);

    tasksArray.forEach(task => getTaskCard(task, taskContainer));
}

function getTaskCard(task, container){
    const priority = document.createElement('input');
    priority.setAttribute("type", "checkbox");
    container.appendChild(priority);
    const title = document.createElement('h3');
    title.classList.add('task-title');
    title.innerText = task.title;
    container.appendChild(title);
    const description = document.createElement('span');
    description.classList.add('task-description');
    description.innerText = task.description;
    container.appendChild(description);
    const date = document.createElement('span');
    date.classList.add('task-date');
    date.innerText = task.dueDate;
    container.appendChild(date);
}

function loadModalForm(){
    
}

export {loadTasks, getTaskCard};