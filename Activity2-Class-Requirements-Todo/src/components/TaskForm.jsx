import { useState } from "react";

export default function TaskForm({ onAdd }) {
  const [title, setTitle] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    const trimmed = title.trim();
    if (!trimmed) return; // ignore empty input
    onAdd(trimmed);
    setTitle("");
  }

  return (
    <form className="task-form" onSubmit={handleSubmit}>
      <label htmlFor="new-task" className="sr-only">New task</label>
      <input
        id="new-task"
        placeholder="e.g. Finish the database lab report"
        autoComplete="off"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <button type="submit" className="btn btn-primary">Add</button>
    </form>
  );
}
