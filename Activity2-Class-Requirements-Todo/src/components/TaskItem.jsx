export default function TaskItem({ task, onToggle, onDelete }) {
  return (
    <li className={task.done ? "task done" : "task"}>
      <button
        type="button"
        className="task-toggle"
        aria-pressed={task.done}
        onClick={() => onToggle(task.id)}
      >
        <span className="check" aria-hidden="true">{task.done ? "✓" : ""}</span>
        <span className="task-title">{task.title}</span>
      </button>
      <button
        type="button"
        className="btn btn-danger"
        aria-label={`Delete "${task.title}"`}
        onClick={() => onDelete(task.id)}
      >
        Delete
      </button>
    </li>
  );
}
