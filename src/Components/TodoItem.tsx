import { useTodoContext } from "../Context/TodoContext";
import { ITodo } from "../types";

export function TodoItem({ todo }: { todo: ITodo }) {
  const todoContext = useTodoContext();

  return (
    <div>
      <p>{todo.value}</p>
      <button onClick={() => todoContext?.changeTodoItemState(todo.id)}>
        Make as Done
      </button>
      <button>Edit</button>
      <button onClick={() => todoContext?.clearTodoItem(todo.id)}>Clear</button>
    </div>
  );
}
