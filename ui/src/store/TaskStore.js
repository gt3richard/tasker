import {decorate, observable, action} from "mobx"

class TaskStore {
    tasks = [
        { "id": "1", "name":"Wells Fargo Credit Card", "date": "15th", "state":"not-done" },
        { "id": "2", "name":"Chase Credit Card", "date": "18th", "state":"done" },
        { "id": "3", "name":"Rent", "date": "1st", "state":"not-done" }
    ]

    getTask(id) {
        return this.tasks.filter((t) => t.id === id)[0]
    }

    updateTask(id, state) {
        this.tasks = this.tasks.map((t) => {
            if(t.id === id) { t.state = state }
            return t
        })
    }
}

decorate(TaskStore, {
    tasks: observable,
    updateTask: action,
    getTask: action
})

const store = new TaskStore();
export default store
export { TaskStore };