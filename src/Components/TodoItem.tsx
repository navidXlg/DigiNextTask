import { useState } from "react";

import { useTodoContext } from "../Context/TodoContext";
import { ITodo } from "../types";

export function TodoItem({ todo }: { todo: ITodo }) {
  const todoContext = useTodoContext();
  const [isEditable, setIsEditable] = useState(false);
  const [value, setValue] = useState(todo.value);

  const handelSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    todoContext?.editTodoItem(todo.id, value);
    setValue("");
    setIsEditable(false);
  };

  return (
    <div>
      {isEditable ? (
        <form onSubmit={handelSubmit}>
          <input value={value} onChange={(e) => setValue(e.target.value)} />
          <button type="submit">Save</button>
        </form>
      ) : (
        <>
          <p>
            {todo.value}/{todo.isPending ? "Pending" : "Done"}
          </p>
          <button onClick={() => setIsEditable(!isEditable)}>Edit</button>
        </>
      )}
      <button onClick={() => todoContext?.changeTodoItemState(todo.id)}>
        {todo.isPending ? "Make as Done" : "pending"}
      </button>
      <button onClick={() => todoContext?.clearTodoItem(todo.id)}>
        Delete
      </button>
    </div>
  );
}
