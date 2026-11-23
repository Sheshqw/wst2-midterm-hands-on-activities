// Stateless: it only calls the callbacks it receives from App.
export default function AttendanceControls({ present, total, onAdd, onRemove, onReset }) {
  return (
    <section className="controls" aria-label="Attendance controls">
      <button className="btn btn-primary" onClick={onAdd} disabled={present >= total}>
        + Present
      </button>

      <button className="btn" onClick={onRemove} disabled={present <= 0}>
        − Present
      </button>

      <button className="btn btn-reset" onClick={onReset} disabled={present === 0}>
        Reset
      </button>
    </section>
  );
}
