import React, { useState, useReducer, useEffect } from "react";
import Modal from "./Modal";
import { data } from "../../../data";
// reducer function

const reducer = (state, action) => {};
const defaultState = {
  people: [],
  isModalOpen: false,
  modalContent: "hello world",
};

const Index = () => {
  const [name, setName] = useState("");
  const [state, dispatch] = useReducer(reducer, defaultState);

  const handleSubmit = (e) => {
    e.preventDefault();

    // if (name) {
    //   setPeople([...people, { id: new Date().getTime().toString(), name }]);
    //   setName("");

    //   console.log(people);
    // } else {
    //   setShowModal(true);
    // }
  };

  // useEffect(() => {
  //   const newPeople = localStorage.getItem("localState");
  //   if (newPeople) setPeople(JSON.parse(newPeople));
  // },[]);

  // useEffect(() => {
  //   localStorage.setItem("localState", JSON.stringify(people));
  // });

  return (
    <>
      {state.isModalOpen && <Modal />}

      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <button className="btn" type="submit">
          add
        </button>
      </form>

      {state.people.map((person) => {
        const { id, name } = person;
        return (
          <>
            <div key={id} className="item">
              <p>{name}</p>
            </div>
          </>
        );
      })}
    </>
  );
};

export default Index;
