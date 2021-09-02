import React, { useState } from "react";

const UseStateCounter = () => {
  const [value, setValue] = useState(0);

  const increaseCount = () => {
    setTimeout(()=>{
      setValue((prevValue) => prevValue + 1)
    }, 5000)
  };

  const decreaseCount = () => {
    if (value >= 1) {
      let newValue = value - 1;
      setValue(newValue);
    } else {
      let newValue = 0;
      setValue(newValue);
    }
  };

  const resetCount = () => {
    let newValue = 0;
    setValue(newValue);
  };

  return (
    <>
      <section style={{ margin: "1rem 0rem" }} className="container">
        <h2>regular counter</h2>
        <h1>{value}</h1>
        <button className="btn" onClick={increaseCount}>
          INCREASE
        </button>
        <button
          style={{ backgroundColor: "black" }}
          className="btn"
          onClick={resetCount}
        >
          RESET
        </button>
        <button
          style={{ backgroundColor: "red" }}
          className="btn"
          onClick={decreaseCount}
        >
          DECREASE
        </button>
      </section>

      <section style={{ margin: "5rem 0rem" }} className="container">
        <h2>regular counter</h2>
        <h1>{value}</h1>
        <button className="btn" onClick={increaseCount}>
          INCREASE
        </button>
      </section>
    </>
  );
};

export default UseStateCounter;
