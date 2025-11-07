// src/components/Counter.jsx
import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div style={{
      textAlign: 'center',
      border: '2px solid #ddd',
      borderRadius: '8px',
      padding: '20px',
      width: '250px',
      margin: '20px auto',
      backgroundColor: '#f9f9f9'
    }}>
      <h2>React Counter</h2>
      <p style={{ fontSize: '24px', fontWeight: 'bold' }}>Current Count: {count}</p>
      <div style={{ display: 'flex', justifyContent: 'center', gap: '10px' }}>
        <button onClick={() => setCount(count + 1)} style={{ padding: '8px 12px' }}>Increment</button>
        <button onClick={() => setCount(count - 1)} style={{ padding: '8px 12px' }}>Decrement</button>
        <button onClick={() => setCount(0)} style={{ padding: '8px 12px' }}>Reset</button>
      </div>
    </div>
  );
}

export default Counter;
