import { useState } from "react";
import { HeaderContainer, Input, Button } from "./styles";
import { useTasks } from "../../hooks/useTasks";

export function Header() {
    const { addTask } = useTasks();
    const [description, setDescription] = useState("");
    
    function handleCreateTask() {
        if(description === "") return;

        addTask(description);

        setDescription("");
    }


    return (
        <HeaderContainer>
            <Input value={description} onChange={(e) => setDescription(e.target.value)} />
            <Button onClick={handleCreateTask}>+</Button>
        </HeaderContainer>
    )
}