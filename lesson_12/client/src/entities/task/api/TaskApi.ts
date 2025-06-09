import type { Task } from "../types/taskTypes";

export class TaskApi {
    static getTasks(): Promise<Task[]> {
        return fetch('https://jsonplaceholder.typicode.com/todos')
            .then(response => response.json())
    }
}

