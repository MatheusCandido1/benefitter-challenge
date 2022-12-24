import { useState } from "react";
import { TaskContainer, CloseButton, TaskTitle } from "./styles";
import { useTasks } from "../../hooks/useTasks";
import Checkbox from "react-custom-checkbox";


import { IoClose } from "react-icons/io5";
import { BsCheck } from "react-icons/bs";

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
            <div>
                <Checkbox 
                    checked={isCompleted}
                    onChange={handleToggleTaskCompletion}
                    icon={
                        <div
                            style={{
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                border: 'none'
                            }}
                        >
                        <BsCheck size={24} color="#18819D" />
                        </div>
                    }
                    borderColor="#B7D8E1"
                    borderRadius={2}
                    borderWidth={1}
                    size={20}
                />
                <TaskTitle isCompleted={task.isCompleted}>{task.description}</TaskTitle>
            </div>
            <CloseButton onClick={handleRemoveTask}>
                <IoClose size={24} />
            </CloseButton>
        </TaskContainer>
    )
}