export default class Project {
    constructor(title){
        this.title = title;
        this.tasks = [];
    }

    getTasks(){
        return this.tasks;
    }

    addTask(task){
        this.tasks.push(task);
    }

    removeTask(taskToRemove) {
        this.tasks = this.tasks.filter(task => task !== taskToRemove);
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
