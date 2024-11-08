import { createContext, useContext, useState } from "react";

import { ITodo, ITodoContextProviderProps, ITodoContextType } from "../types";

export const TodoContext = createContext<ITodoContextType | null>(null);

export default function TodoContextProvider({
  children,
}: ITodoContextProviderProps): JSX.Element {
  const [todoItems, setTodoItems] = useState<ITodo[]>([]);

  const addTodoItem = (value: string) => {
    const newTodoItems: ITodo[] = [
      ...todoItems,
      {
        id: Math.random(),
        value,
        isPending: true,
      },
    ];
    setTodoItems(newTodoItems);
  };

  const clearTodoItem = (todoId: number) => {
    const newTodoItems: ITodo[] = todoItems.filter(
      (item) => item.id === todoId
    );
    setTodoItems(newTodoItems);
  };

  const editTodoItem = (todoId: number, newValue: string) => {
    const newTodoItems: ITodo[] = todoItems.map((item) =>
      item.id === todoId ? { ...item, value: newValue } : item
    );
    setTodoItems(newTodoItems);
  };

  const changeTodoItemState = (todoId: number) => {
    const newTodoITems: ITodo[] = todoItems.map((item) =>
      item.id === todoId ? { ...item, isPending: !item.isPending } : item
    );
    setTodoItems(newTodoITems);
  };

  return (
    <TodoContext.Provider
      value={{
        todoItems,
        addTodoItem,
        clearTodoItem,
        editTodoItem,
        changeTodoItemState,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
}

// export function useTodoContext(): ITodoContextType | null {
//   return useContext(TodoContext);
// }
export const useTodoContext = (): ITodoContextType | null => {
  const context = useContext(TodoContext);
  return context;
};
