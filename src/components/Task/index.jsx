import { useState } from "react";
import { TaskContainer, CloseButton, TaskTitle } from "./styles";
import { useTasks } from "../../hooks/useTasks";

import { IoClose } from "react-icons/io5";

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
            <TaskTitle isCompleted={task.isCompleted}>{task.description}</TaskTitle>
            <CloseButton onClick={handleRemoveTask}>
                <IoClose size={24} />
            </CloseButton>
        </TaskContainer>
    )
}