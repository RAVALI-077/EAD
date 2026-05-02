import { useState, useEffect } from "react";

function Timer() {
  const [sec, setSec] = useState(0);
  const [run, setRun] = useState(false);
  const [laps, setLaps] = useState([]);

  useEffect(() => {
    let interval;
    if (run) {
      interval = setInterval(() => {
        setSec(s => s + 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [run]);

  const format = (s) => {
    let m = Math.floor(s / 60);
    let sec = s % 60;
    return `${m}:${sec < 10 ? "0" : ""}${sec}`;
  };

  return (
    <div style={{ textAlign: "center" }}>
      <h2>{format(sec)}</h2>

      <button onClick={() => setRun(true)}>Start</button>
      <button onClick={() => setRun(false)}>Pause</button>
      <button onClick={() => { setSec(0); setLaps([]); }}>Reset</button>
      <button onClick={() => setLaps([...laps, format(sec)])}>Lap</button>

      <ul>
        {laps.map((l, i) => <li key={i}>{l}</li>)}
      </ul>
    </div>
  );
}

export default Timer;
