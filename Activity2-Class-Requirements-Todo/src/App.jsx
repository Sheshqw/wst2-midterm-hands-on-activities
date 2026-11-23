import { useState } from "react";
import TaskForm from "./components/TaskForm.jsx";
import FilterBar from "./components/FilterBar.jsx";
import TaskList from "./components/TaskList.jsx";

const SAMPLE_TASKS = [
  { id: "t1", title: "Submit Activity 1: Attendance Tracker", done: true },
  { id: "t2", title: "Review useEffect before the quiz", done: false },
  { id: "t3", title: "Push Activity 2 to GitHub", done: false },
];

// Each filter maps to a test that decides whether a task is shown.
const FILTER_TESTS = {
  all: () => true,
  active: (task) => !task.done,
  completed: (task) => task.done,
};

function createId() {
  return typeof crypto !== "undefined" && crypto.randomUUID
    ? crypto.randomUUID()
    : String(Date.now());
}

export default function App() {
  const [tasks, setTasks] = useState(SAMPLE_TASKS);
  const [filter, setFilter] = useState("all");

  function addTask(title) {
    const newTask = { id: createId(), title, done: false };
    setTasks((prev) => [...prev, newTask]);
  }

  function toggleTask(id) {
    setTasks((prev) =>
      prev.map((task) => (task.id === id ? { ...task, done: !task.done } : task))
    );
  }

  function deleteTask(id) {
    setTasks((prev) => prev.filter((task) => task.id !== id));
  }

  const completed = tasks.filter((task) => task.done).length;
  const visibleTasks = tasks.filter(FILTER_TESTS[filter]);

  return (
    <main className="page">
      <header className="page-header">
        <div>
          <p className="course">WST 2 · Hands-On Activity 2 · Shekainah Agustin</p>
          <h1>Class Requirements</h1>
          <p className="subtitle">Keep track of what you still need to submit.</p>
        </div>
      </header>

      <section className="card">
        <TaskForm onAdd={addTask} />

        {tasks.length === 0 ? (
          <div className="empty">
            <strong>No tasks yet!</strong>
            Add your first class requirement above.
          </div>
        ) : (
          <>
            <div className="toolbar">
              <p className="progress">
                <strong>{completed} of {tasks.length}</strong> completed
              </p>
              <FilterBar value={filter} onChange={setFilter} />
            </div>

            {visibleTasks.length === 0 ? (
              <div className="empty">
                <strong>Nothing here.</strong>
                No {filter} tasks to show.
              </div>
            ) : (
              <TaskList tasks={visibleTasks} onToggle={toggleTask} onDelete={deleteTask} />
            )}
          </>
        )}
      </section>
    </main>
  );
}
