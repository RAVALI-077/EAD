import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);
  const [dark, setDark] = useState(false);

  const style = {
    backgroundColor: dark ? "black" : "white",
    color: dark ? "white" : "black",
    height: "100vh",
    textAlign: "center",
    padding: "20px"
  };

  return (
    <div style={style}>
      <h2>Count: {count}</h2>

      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => count > 0 && setCount(count - 1)}>Decrement</button>
      <button onClick={() => setCount(0)}>Reset</button>
      <br /><br />

      <button onClick={() => setDark(!dark)}>Toggle Theme</button>
    </div>
  );
}

export default Counter;