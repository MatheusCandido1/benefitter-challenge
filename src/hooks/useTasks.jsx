import { useContext} from 'react';

import { TaskContext } from '../contexts/TaskContext';

export function useTasks() {
    const context = useContext(TaskContext);

    return context;
}   