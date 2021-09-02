import React from 'react';
import { data } from '../../../data';

const UseStateArray = () => {
  const [people, setPeople] = React.useState(data)

  const handleClick = (id, e) => {
    let newPeople = people.filter(person => {
      return person.id !== id;
    })
    
    setPeople(newPeople);


  }

  return (
    <>
      {
        people.map(person => {
          const { id, name } = person;
          return (
            <div className="item" key={id}>
              <h4>{name}</h4>
              <button className="btn" onClick={(e) => handleClick(id, e)}>
                Delete
              </button>
            </div>
          );
        })
      }
    </>
  );
};

export default UseStateArray;
