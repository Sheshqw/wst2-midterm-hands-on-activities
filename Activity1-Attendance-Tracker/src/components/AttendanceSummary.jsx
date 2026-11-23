// Absent and rate are derived from props, so they are not stored in state.
export default function AttendanceSummary({ present, total }) {
  const absent = total - present;
  const rate = (present / total) * 100;

  return (
    <section className="summary" aria-label="Attendance summary">
      <div className="stat stat-present">
        <span className="stat-value">{present}</span>
        <span className="stat-label">Present</span>
      </div>
      <div className="stat">
        <span className="stat-value">{absent}</span>
        <span className="stat-label">Absent</span>
      </div>
      <div className="stat">
        <span className="stat-value">{rate.toFixed(1)}%</span>
        <span className="stat-label">Attendance rate</span>
      </div>

      <div
        className="meter"
        role="progressbar"
        aria-label="Attendance rate"
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={Math.round(rate)}
      >
        <div className="meter-fill" style={{ width: `${rate}%` }} />
      </div>
      <p className="meter-caption">
        {present} of {total} students present
      </p>
    </section>
  );
}
