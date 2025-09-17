import React, { useState } from 'react';

const Counter: React.FC = () => {
  const [count, setCount] = useState<number>(0);

  const handleIncrement = () => {
    setCount(prevCount => prevCount + 1);
  };

  const handleDecrement = () => {
    setCount(prevCount => prevCount - 1);
  };

  const handleReset = () => {
    setCount(0);
  };

  return (
    <div className="counter-container">
      <h2>Counter Exercise</h2>
      <h3>{count}</h3>
      <div className="counter-buttons">
        <button onClick={handleIncrement} className="btn btn-green">
          + เพิ่ม
        </button>
        <button onClick={handleDecrement} className="btn btn-red">
          - ลด
        </button>
        <button onClick={handleReset} className="btn btn-orange">
          Reset
        </button>
      </div>
    </div>
  );
};

export default Counter;