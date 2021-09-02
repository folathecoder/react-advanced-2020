import React, { useState } from 'react';

const UseStateObject = () => {

  const [person, setPerson] = useState({
    name: "Folarin",
    age: 24,
    message: 'random message'
  })

  const handleClick = () => {
    setPerson({...person, age: 25});
  }

  return (
    <React.Fragment>
      <h3>{person.name}</h3>
      <h3>{person.age}</h3>
      <h3>{person.message}</h3>
      <button className="btn" onClick={handleClick}>Change Message</button>
    </React.Fragment>
  );
};

export default UseStateObject;
