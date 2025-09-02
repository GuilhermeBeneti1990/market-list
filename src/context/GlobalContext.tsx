import { createContext, useContext, useState } from "react";
import type { IGlobalContext, IGlobalContextProps } from "./types";
import type { FilterType } from "../types/FilterType";
import type { TaskType } from "../types/TaskType";
import { useLocalStorage } from "usehooks-ts";
import { v4 as uuidv4 } from "uuid";

const GlobalContext = createContext({} as IGlobalContext);

export default function GlobalContextProvider({ children }: IGlobalContextProps) {
    const [input, setInput] = useState("");
    const [filter, setFilter] = useState<FilterType>("all");
    const [tasks, setTasks] = useLocalStorage<TaskType[]>('task-list', []);

    function handleSetInput(value: string) {
        setInput(value);
    }

    function handleSetFilter(newFilter: FilterType) {
        setFilter(newFilter)
    }

    function handleSetTasks(newTasks: TaskType[]) {
        setTasks(newTasks)
    }

    function handleKeyDown(event: React.KeyboardEvent<HTMLInputElement>) {
        if (input.length && event.key === 'Enter') {
            setTasks([...tasks, {
                id: uuidv4(),
                title: input,
                done: false
            }]);
            setInput("");
        }
    }

    function handleTaskToogle(id: string) {
        setTasks((prevState) => prevState.map((task) => task.id === id ? { ...task, done: !task.done } : task));
    }

    function filteredTasks() {
        switch (filter) {
            case "all":
                return tasks;
            case "done":
                return tasks.filter(task => task.done)
            case "pending":
                return tasks.filter(task => !task.done)
            default:
                return tasks;
        }
    }
    return (
        <GlobalContext.Provider value={{
            input,
            filter,
            tasks,
            handleSetInput,
            handleSetFilter,
            handleSetTasks,
            handleKeyDown,
            handleTaskToogle,
            filteredTasks
        }}>
            {children}
        </GlobalContext.Provider>
    )
}

export function useGlobalContext() {
    return useContext(GlobalContext);
}