import Task from "./task.js";

export default class Project {
    constructor(title){
        this.title = title;
        this.tasks = [];
    }

    getTasks(){
        return this.tasks;
    }

    getNewTask(title, description, dueDate, priority, checked){
        const newTask = new Task(title, description, dueDate, priority, checked);

        return newTask;
    }

    addTask(task){
        this.tasks.push(task);
    }

    removeTask(taskToRemove) {
        this.tasks = this.tasks.filter(task => task !== taskToRemove);
    }    

    editTask(task, newTitle, newDescription, newDate, newPriority, newChecked){
        if(task.title !== newTitle && newTitle !== NaN){
            task.title = newTitle;
        }
        if(task.description !== newDescription && newDescription !== NaN){
            task.description = newDescription;
        }
        if(task.dueDate !== newDate && newDate !== NaN){
            task.dueDate = newDate;
        }
        if(task.priority !== newPriority && newPriority !== NaN){
            task.priority = newPriority;
        }
        if(task.checked !== newChecked && newChecked !== NaN){
            task.checked = newChecked;
        }
    }

    getPositionOf(task){
        let taskIndex;
        this.tasks.forEach((item, index) => {
            if(item === task){
                taskIndex = index;
            }
        });

        return taskIndex;
    }
}
