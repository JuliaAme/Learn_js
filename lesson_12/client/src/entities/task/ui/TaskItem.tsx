import React, { type JSX } from 'react';
import type { Task } from '../types/taskTypes';
// import './TaskItem.scss';

type TaskItemProps = {
    task: Task;
    tasks: Task[];
    setTasks: React.Dispatch<React.SetStateAction<Task[]>>
}
const TaskItem = ({ task, tasks, setTasks }: TaskItemProps): JSX.Element => {
    const onHandleDelete = (): void => {
        // const updatedTasks = tasks.filter((t) => t.id !== task.id);
        // setTasks(updatedTasks);
        setTasks((prev) => prev.filter((t) => t.id !== task.id))
      };
return (
<div className=' TaskItem' key={task.id}>
        <h3>{task.title}</h3>
        <button onClick={onHandleDelete}>x</button>
 </div>
 );

}
export default TaskItem
