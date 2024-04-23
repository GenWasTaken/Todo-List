import Project from "./classes/project.js";

let Projects = [];

function getNewProject(title){
    const newProject = new Project(title);
    return newProject;
}

function addProject(project){
    Projects.push(project);
}

function removeProject(projectToRemove){
    Projects = Projects.filter(project => project !== projectToRemove);
}

function getProjectIndex(project){
    let projectIndex;

    Projects.forEach((item, index) => {
        if(item === project){
            projectIndex = index;
        }
    });

    return projectIndex;
}

function editProject(project, newTitle){
    if(project.title !== newTitle && newTitle !== NaN){
        project.title = newTitle;
    }   
}

export {Projects, getNewProject, addProject, removeProject, getProjectIndex, editProject};