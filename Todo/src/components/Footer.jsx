import { useTodo } from "../hooks/useTodo";
function Footer() {
  const {
    activeTasks,
    filter,
    setFilter,
    clearCompleted,
  } = useTodo();

  return (
    <footer className="footer">

      <span className="items-left">
        {activeTasks} items left
      </span>

      <div className="filters">

        <button
          className={filter === "all" ? "active" : ""}
          onClick={() => setFilter("all")}
        >
          All
        </button>

        <button
          className={filter === "active" ? "active" : ""}
          onClick={() => setFilter("active")}
        >
          Active
        </button>

        <button
          className={filter === "completed" ? "active" : ""}
          onClick={() => setFilter("completed")}
        >
          Completed
        </button>

      </div>

      <button
        className="clear-btn"
        onClick={clearCompleted}
      >
        Clear Completed
      </button>

    </footer>
  );
}

export default Footer;