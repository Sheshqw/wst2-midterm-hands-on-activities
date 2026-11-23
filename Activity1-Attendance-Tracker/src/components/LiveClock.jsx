import { useState, useEffect } from "react";

export default function LiveClock() {
  const [now, setNow] = useState(new Date());

  useEffect(() => {
    // Start ticking once when the component mounts...
    const id = setInterval(() => setNow(new Date()), 1000);
    // ...and stop the interval when it unmounts.
    return () => clearInterval(id);
  }, []);

  return (
    <div className="clock">
      <span className="clock-time">{now.toLocaleTimeString()}</span>
      <span className="clock-date">
        {now.toLocaleDateString(undefined, { weekday: "long", month: "long", day: "numeric" })}
      </span>
    </div>
  );
}
