import { createContext, useState } from "react";
import { v4 } from "uuid";

export const TaskContext = createContext();

export function TaskProvider({ children }) {
    const [tasks, setTasks] = useState([
        {id: v4(), description: 'Read the book', isCompleted: false},
        {id: v4(), description: 'Buy dog food', isCompleted: false},
    ]);

    const completedTasks = tasks.filter(task => task.isCompleted);


    function addTask(description) {
        const newTask = {
            id: v4(),
            description,
            isCompleted: false,
        }

        setTasks([...tasks, newTask]);
    }

    function removeTask(id) {
        setTasks(tasks.filter(task => task.id !== id));
    }

    function toggleTask(id) {
        console.l
        setTasks(tasks.map((task) => task.id === id ? {...task, isCompleted: !task.isCompleted} : task));
    }

    return (
        <TaskContext.Provider value={{ tasks, addTask, removeTask, toggleTask, completedTasks }}>
            {children}
        </TaskContext.Provider>
    )
}