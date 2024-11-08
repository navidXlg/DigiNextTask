import { useTodoContext } from "../Context/TodoContext";
import { AddItem } from "./AddItem";
import { TodoItem } from "./TodoItem";

export function TodoList(): JSX.Element {
  const todoContext = useTodoContext();
  return (
    <div>
      <p>Todo list Application</p>
      <AddItem />
      {todoContext?.todoItems?.map((item) => (
        <TodoItem todo={item} key={item.id} />
      ))}
    </div>
  );
}
