import { useState } from "react";
import { TaskContainer } from "./styles";
import { useTasks } from "../../hooks/useTasks";

export function Task({ task }) {
    const [isCompleted, setIsCompleted] = useState(task.isCompleted);
    const { toggleTask, removeTask } = useTasks();

    function handleToggleTaskCompletion() {
        setIsCompleted((prevState) => !prevState);
        toggleTask(task.id);
    }

    function handleRemoveTask() {
        removeTask(task.id);
    }
    return (
        <TaskContainer>
            <input type="checkbox" onChange={handleToggleTaskCompletion} checked={isCompleted} />
            <h2
                style={{
                    textDecoration: isCompleted ? "line-through" : "none",
                }}
            >{task.description}</h2>
            <button onClick={handleRemoveTask}>X</button>
        </TaskContainer>
    )
}