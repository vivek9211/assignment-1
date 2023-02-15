import React, { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  const increment = () => {
    if (count < 10) {
      setCount(count + 1);
    }
  };

  const decrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  let color = "green";
  if (count >= 5 && count <= 9) {
    color = "blue";
  } else if (count === 10) {
    color = "red";
  }

  return (
    <center>
    <div className="App">
      <h1 style={{ color: color }}>{count}</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>

      <p>Done By - Vivek Kumar, 12007412</p>
    </div>
    </center>
  );
}

export default App;
