import React, { useState, useEffect } from "react";
import { data } from "../../../data";

// more components
// fix - context api, redux (for more complex cases)

const PropDrilling = () => {
  const [people, setPeople] = useState(data);

  const removePerson = (id) => {
    const newPeople = people.filter((person) => person.id !== id);
    setPeople(newPeople);
  };

  useEffect(() => {
    const getLocalPeople = localStorage.getItem("localPeople");
    setPeople(JSON.parse(getLocalPeople))
  }, []);

  useEffect(() => {
    localStorage.setItem("localPeople", JSON.stringify(people));
  });

  return (
    <>
      <h3>prop drilling</h3>
      <List people={people} removePerson={removePerson} />
    </>
  );
};

const List = ({ people, removePerson }) => {
  return (
    <>
      {people.map((person) => {
        return (
          <SinglePerson
            key={person.id}
            {...person}
            removePerson={removePerson}
          />
        );
      })}
    </>
  );
};

const SinglePerson = ({ id, name, removePerson }) => {
  return (
    <div
      className="item"
      key={id}
      onClick={() => {
        removePerson(id);
      }}
    >
      <h3>{name}</h3>
    </div>
  );
};

export default PropDrilling;
