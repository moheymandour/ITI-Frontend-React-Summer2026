import {  useState } from "react";
import { useTodo } from "../hooks/useTodo";

function InputTask() {
  const [text, setText] = useState("");

  const { addTask } = useTodo();

  function handleSubmit(e) {
    e.preventDefault();

    addTask(text);

    setText("");
  }

  return (
    <form
      className="input-task"
      onSubmit={handleSubmit}
    >
      <span className="circle"></span>

      <input
        type="text"
        placeholder="Create a new todo..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
    </form>
  );
}

export default InputTask;