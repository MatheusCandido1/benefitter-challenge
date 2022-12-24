import { createContext, useState } from "react";
import { v4 } from "uuid";

export const TaskContext = createContext();

export function TaskProvider({ children }) {
    const [tasks, setTasks] = useState([
        {id: 1, description: 'Read the book', isCompleted: false},
    ]);

    const [completedTasks] = useState(tasks.filter(task => task.isCompleted));

    console.log(completedTasks)


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