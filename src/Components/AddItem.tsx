import { useState } from "react";

import { useTodoContext } from "../Context/TodoContext";

export function AddItem() {
  const [value, setValue] = useState("");
  const todoContext = useTodoContext();
  const handelSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    todoContext?.addTodoItem(value);
    setValue("");
  };

  return (
    <form onSubmit={handelSubmit}>
      <input value={value} onChange={(e) => setValue(e.target.value)} />
    </form>
  );
}
