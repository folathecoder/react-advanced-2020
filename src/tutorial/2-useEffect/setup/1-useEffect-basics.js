import React, { useState, useEffect } from "react";
// by default runs after every re-render
// cleanup function
// second parameter
const UseEffectBasics = () => {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (value >= 1) {
      const notification = value > 1 ? "Notifications" : "Notification";
      document.title = `${notification} (${value})`;
    }
  });

  const handleIncrease = () => {
    let newValue = value + 1;
    setValue(newValue);
  };

  const handleDecrease = () => {
    if (value > 0) {
      let newValue = value - 1;
      setValue(newValue);
    }
  };

  return (
    <>
      <h2>{value}</h2>
      <button className="btn" onClick={handleIncrease}>
        Increase
      </button>
      <button className="btn" onClick={handleDecrease}>
        Decrease
      </button>
    </>
  );
};

export default UseEffectBasics;
