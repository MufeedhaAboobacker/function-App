import React, { useState } from 'react';

const Count = () => {
  const [count, setCount] = useState(0);

  return (
    <div style={{ padding: '20px', maxWidth: '400px', margin: 'auto' }}>
      <h2>Counter: {count}</h2>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)} style={{ marginLeft: '10px' }}>Decrement</button>
      <button onClick={() => setCount(0)} style={{ marginLeft: '10px' }}>Reset</button>
    </div>
  );
};

export default Count;
