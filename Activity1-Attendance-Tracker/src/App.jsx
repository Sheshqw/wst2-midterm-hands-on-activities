import { useState, useEffect } from "react";
import AttendanceControls from "./components/AttendanceControls.jsx";
import AttendanceSummary from "./components/AttendanceSummary.jsx";
import LiveClock from "./components/LiveClock.jsx";

const TOTAL = 40;

export default function App() {
  // The only piece of state lives here in App; the children receive it as props.
  const [present, setPresent] = useState(0);

  // Never go above TOTAL.
  function handleAdd() {
    setPresent((prev) => Math.min(prev + 1, TOTAL));
  }

  // Never go below 0.
  function handleRemove() {
    setPresent((prev) => Math.max(prev - 1, 0));
  }

  // Bonus: reset using the functional update form.
  function handleReset() {
    setPresent(() => 0);
  }

  // Keep the browser tab title in sync with the count.
  useEffect(() => {
    document.title = `Present: ${present}/${TOTAL}`;
  }, [present]);

  return (
    <main className="page">
      <header className="page-header">
        <div>
          <p className="course">WST 2 · Hands-On Activity 1 · Shekainah Agustin</p>
          <h1>Attendance Tracker</h1>
          <p className="subtitle">Class size: {TOTAL} students</p>
        </div>
        <LiveClock />
      </header>

      <AttendanceSummary present={present} total={TOTAL} />

      <AttendanceControls
        present={present}
        total={TOTAL}
        onAdd={handleAdd}
        onRemove={handleRemove}
        onReset={handleReset}
      />
    </main>
  );
}
