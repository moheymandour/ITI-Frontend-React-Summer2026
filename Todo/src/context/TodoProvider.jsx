import { useState } from "react";
import { TodoContext } from "./TodoContext";

export function TodoProvider({ children }) {
  const [tasks, setTasks] = useState([]);

  const [filter, setFilter] = useState("all");

  function addTask(text) {
    if (text.trim() === "") return;

    const newTask = {
      id: Date.now(),
      text: text,
      completed: false,
    };

    setTasks((prevTasks) => [newTask, ...prevTasks]);
  }

  function toggleTask(id) {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id
          ? {
              ...task,
              completed: !task.completed,
            }
          : task
      )
    );
  }

  function deleteTask(id) {
    setTasks((prevTasks) =>
      prevTasks.filter((task) => task.id !== id)
    );
  }

  function clearCompleted() {
    setTasks((prevTasks) =>
      prevTasks.filter((task) => !task.completed)
    );
  }

  const filteredTasks = tasks.filter((task) => {
    if (filter === "active") {
      return !task.completed;
    }

    if (filter === "completed") {
      return task.completed;
    }

    return true;
  });

  const activeTasks = tasks.filter(
    (task) => !task.completed
  ).length;

  return (
    <TodoContext
      value={{
        tasks,
        filteredTasks,
        activeTasks,
        filter,
        setFilter,
        addTask,
        toggleTask,
        deleteTask,
        clearCompleted,
      }}
    >
      {children}
    </TodoContext>
  );
}