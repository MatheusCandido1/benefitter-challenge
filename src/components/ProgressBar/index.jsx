import { ProgressBarContainer, ProgressBarFiller} from './styles'
import { useTasks } from '../../hooks/useTasks'

export function ProgressBar() {
    const { tasks, completedTasks } = useTasks();

    const fill = (completedTasks.length / tasks.length) * 100;

    return (
        <ProgressBarContainer>
            {tasks.length}
            {completedTasks.length}
            <ProgressBarFiller fill={fill}>

            </ProgressBarFiller>
        </ProgressBarContainer>
    )
}