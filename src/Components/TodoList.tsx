import { useTodoContext } from "../Context/TodoContext";
import { AddItem } from "./AddItem";
import { TodoItem } from "./TodoItem";

export function TodoList(): JSX.Element {
  const contexItems = useTodoContext();
  console.log(contexItems);
  return (
    <div>
      <AddItem />
      {contexItems?.todoItems?.map((item) => (
        <TodoItem todo={item} />
      ))}
    </div>
  );
}
