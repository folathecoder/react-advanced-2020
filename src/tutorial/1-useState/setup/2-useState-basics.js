import React, { useState } from "react";

const UseStateBasics = () => {

  const [title, setTitle] = useState("Fontend Developer");

  const handleClick = () => {
    setTitle("Blockchain Developer");

    if (title === "Frontend Developer") {
      setTitle("Blockchain Developer");
    } else {
      setTitle("Frontend Developer");
    }
  }

  return (
    <React.Fragment>
      <h2>{title}</h2>
      <button className="btn" type="button" onClick={handleClick}>change title</button>
    </React.Fragment>
  );
};

export default UseStateBasics;
