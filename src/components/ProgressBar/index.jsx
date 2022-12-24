import { ProgressBarContainer, ProgressBarFiller} from './styles'
import { useTasks } from '../../hooks/useTasks'

export function ProgressBar() {
    const { tasks, completedTasks } = useTasks();
    let fill = 0;

    if (tasks.length > 0) {
        fill = (completedTasks.length / tasks.length) * 100;
    }

    return (
        <ProgressBarContainer>
            <ProgressBarFiller fill={fill}
                style={{
                    transition: '1s ease',
                    transitionDelay: '0.1s'
                }}
            >
            <p>
                <strong>{completedTasks.length} </strong>
                <span>of </span>
                <strong>{tasks.length} </strong>
                tasks done
            </p>
            </ProgressBarFiller>
        </ProgressBarContainer>
    )
}