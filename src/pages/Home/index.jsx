import { Header } from "../../components/Header";
import { MainContainer, MainSection  } from "./styles";
import { useTasks } from "../../hooks/useTasks";
import { Task } from "../../components/Task";
import { ProgressBar } from "../../components/ProgressBar";

export function Home() {
    const { tasks } = useTasks();
    return (
        <MainContainer>
            <h1>To Do List</h1>
            <Header />
            <MainSection>
            {tasks.map((task) => (
                <Task key={task.id} task={task} />
            ))}
            <ProgressBar />
            </MainSection>
        </MainContainer>
    );
}