import React, { useState } from "react";

function HookCounter() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>Count = {count}</div>
      <button onClick={() => setCount(count + 1)}>Increment Count</button>
    </>
  );
}

export default HookCounter;
