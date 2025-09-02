import { useGlobalContext } from "../../context/GlobalContext";
import type { TaskType } from "../../types/TaskType";
import "./styles.css";

interface ITaskProps {
    task: TaskType;
}

export function Task({ task }: ITaskProps) {
    const { handleTaskToogle } = useGlobalContext();
    const { id, title, done } = task;

    return (
        <li className={`task-item ${done ? "task-item__done" : ""}`} key={id}>
            <input type='checkbox' checked={done} onChange={() => handleTaskToogle(id)} />
            {title}
        </li>
    )
}