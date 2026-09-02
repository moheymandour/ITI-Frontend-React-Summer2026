import { useTodo } from "../hooks/useTodo";

function ListTask() {
  const {
    filteredTasks,
    toggleTask,
    deleteTask,
  } = useTodo();

  return (
    <div className="task-list">
      {filteredTasks.map((task) => (
        <div className="task" key={task.id}>

          <button
            className={`task-circle ${
              task.completed ? "checked" : ""
            }`}
            onClick={() => toggleTask(task.id)}
          >
            {task.completed && "✓"}
          </button>

          <span
            className={`task-text ${
              task.completed ? "done" : ""
            }`}
          >
            {task.text}
          </span>

          <button
            className="delete-btn"
            onClick={() => deleteTask(task.id)}
          >
            ×
          </button>

        </div>
      ))}
    </div>
  );
}

export default ListTask;