/* eslint-disable react-hooks/rules-of-hooks */
import { createContext, useReducer, type Dispatch } from "react";
import type { Task, ArrTaskType } from "../types/taskTypes";

type TaskActionType = 
    | {type: "ADD_TASK", payload: Task} //create
    | { type: "SET_TASKS", payload: Task[] } //read
    | { type: "UPDATE_TASK", payload: Task } //update
    | {type: "DELETE_TASK", payload: number} //delete 

type TaskContextType = {
    state: ArrTaskType,
    dispatch: Dispatch<TaskActionType> 
}
type StateType = {
    tasks: ArrTaskType,
    info: string
}
const initialState : StateType = {
    tasks: [],
    info: ''
}
const taskReducer = (state: StateType, action: TaskActionType): StateType => {
    switch (action.type) {
        case 'SET_TASKS':
            
        return {...state, tasks: action.payload}

        default:
            return state;
    }
}

export const tasksContext = createContext<TaskContextType | undefined>(undefined)
export const taskProvider = ({children}: {children: React.ReactNode}): React.ReactElement => {
    const [state, dispatch] = useReducer(taskReducer, initialState)
    return (
        <tasksContext.Provider value={{state, dispatch}}>
            {children}
        </tasksContext.Provider>
    )
}