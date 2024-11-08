export interface ITodo {
  id: number;
  value: string;
  isPending: boolean;
}

export interface ITodoContextType {
  todoItems: ITodo[] | null;
  addTodoItem: (value: string) => void;
  clearTodoItem: (id: number) => void;
  editTodoItem: (todoId: number, newValue: string) => void;
  changeTodoItemState: (todoId: number) => void;
}

export interface ITodoContextProviderProps {
  children: React.ReactNode;
}
