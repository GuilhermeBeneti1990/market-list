import type { ReactNode } from "react";
import type { FilterType } from "../types/FilterType";
import type { TaskType } from "../types/TaskType";

export interface IGlobalContext {
    input: string;
    filter: FilterType;
    tasks: TaskType[];
    handleSetInput: (value: string) => void;
    handleSetFilter: (filter: FilterType) => void;
    handleSetTasks: (tasks: TaskType[]) => void;
    handleKeyDown: (event: React.KeyboardEvent<HTMLInputElement>) => void;
    handleTaskToogle: (id: string) => void;
    filteredTasks: () => TaskType[];
}

export interface IGlobalContextProps {
    children: ReactNode;
}