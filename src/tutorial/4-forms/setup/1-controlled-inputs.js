import React, { useState } from "react";
// JS
// const input = document.getElementById('myText');
// const inputValue = input.value
// React
// value, onChange

const ControlledInputs = () => {
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [people, setPeople] = useState([]);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (firstName && email) {
      const Person = { firstName, email };
      setPeople((prevState) => {
        return [...prevState, Person];
      });
    } else {
      console.log(`Fail`);
    }
  };
  return (
    <>
      <article>
        <form className="form" onSubmit={handleFormSubmit}>
          <div className="form-control">
            <label htmlFor="firstName">Name: </label>
            <input
              type="text"
              name="firstName"
              id="firstName"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </div>
          <div className="form-control">
            <label htmlFor="email">Email: </label>
            <input
              type="email"
              name="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <button className="btn" type="submit">
            add person
          </button>
        </form>
      </article>

      <article>
        {people.map((person) => {
          const {firstName, email} = person;
          return (
            <>
              <section className="item">
                <p>{firstName}</p>
                <p>{email}</p>
              </section>
            </>
          );
        })}
      </article>
    </>
  );
};

export default ControlledInputs;
