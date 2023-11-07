import { useState, useEffect } from "react";

function App() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    setInterval(() => {
      setTime(new Date());
    }, 1000);
  }, []);

  return (
    <div>
      <h1>Clock</h1>
      <span>{time.toLocaleTimeString()}</span>
    </div>
  );
}

export default App;
