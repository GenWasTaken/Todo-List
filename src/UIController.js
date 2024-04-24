import Task from "./classes/task.js";
import Project from "./classes/project.js";
import {Projects, getNewProject, addProject, removeProject, getProjectIndex, editProject} from "./projectController.js";
import {loadTasks, getTaskCard} from "./UIGenerator.js";
import {closeTaskModal, openTaskModal} from "./modalButtonEvent.js";
import { clearInput } from "./modalForumEvent.js";

//**get the base task container done**
//add a simple button for creating a new task inside each Project
//could work on this by having a pre-made Project (instead of starting to work on the sidebar)
//**the new task button will be connected to a function that generates an UI for creating a TASK
//                                                           The UI for creating a task will have a Done and Cancel button
//                                                              Done button will run the getNewTask() function and addTask() right after
//                                                              Cancel button will close the UI

//Sidebar new task button
const toggleSidebarModal = (function(){
    const button = document.getElementById("newTaskBtn");
    const closeBtn = document.getElementById("closeButton");

    button.addEventListener('click', function(){
        openTaskModal();
    });

    closeBtn.addEventListener('click', function(){
        closeTaskModal();
    });
})()



// const toggleTaskCards = (function(){
//     const tasksArray = Project.getTasks();

//     loadTasks(tasksArray);
// })();


export {toggleSidebarModal};