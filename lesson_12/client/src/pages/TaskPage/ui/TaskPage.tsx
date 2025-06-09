import { TaskApi } from '@/entities/task/api/TaskApi'
import type { Task } from '@/entities/task/types/taskTypes'
import TaskItem from '@/entities/task/ui/TaskItem'
import { useEffect, useState, type JSX } from 'react'

export function TaskPage(): JSX.Element {

    const [tasks, setTasks] = useState<Task[]>([])
    //  console.log(tasks);
     
    useEffect(() => {
        // TaskApi.getTasks().then(setTasks)
        TaskApi.getTasks().then((data) => setTasks(data))
    }, [])

    return (
        <div>
            <h1>Task Page</h1>
            {/* <button onClick={() => TaskApi.getTasks()}>Get Tasks</button> */}
            {tasks && tasks.slice(0, 20).map((task) => <TaskItem task={task} tasks={tasks} setTasks={setTasks} key={task.id}/>)}
        </div>
    )
}