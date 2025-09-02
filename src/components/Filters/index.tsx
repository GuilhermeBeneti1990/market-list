import { useGlobalContext } from "../../context/GlobalContext";
import "./styles.css";

export default function Filters() {
    const { tasks, handleSetTasks, handleSetFilter} = useGlobalContext();
    const pendingTasksQuantity = tasks.filter((task) => !task.done).length;

    function handleUncheckAllCompletedTasks() {
         const filteredTasks = tasks.map(task => task.done ? { ...task, done: false } : task);

         handleSetTasks(filteredTasks);
    }

    return (
        <li className='content-tasks__actions'>
            <div>
                <a href="#">{pendingTasksQuantity} itens restantes</a>
            </div>
            <div>
                <a href="#" onClick={() => handleSetFilter("all")}>Todos</a>
                <a href="#" onClick={() => handleSetFilter("pending")}>Faltantes</a>
                <a href="#" onClick={() => handleSetFilter("done")}>Comprados</a>
            </div>
            <div>
                <a href="#" onClick={handleUncheckAllCompletedTasks}>Limpar comprados</a>
            </div>
        </li>
    )
}