import { Header } from "../../components/Header";
import { MainContainer, MainSection, MainTitle, MainBody } from "./styles";
import { useTasks } from "../../hooks/useTasks";
import { Task } from "../../components/Task";
import { ProgressBar } from "../../components/ProgressBar";

export function Home() {
    const { tasks } = useTasks();
    return (
        <MainContainer>
            <MainBody>
                <MainTitle>To Do List</MainTitle>
                <Header />
                <MainSection>
                {tasks.map((task) => (
                    <Task key={task.id} task={task} />
                ))}
                </MainSection>
            </MainBody>
            <ProgressBar />
        </MainContainer>
    );
}