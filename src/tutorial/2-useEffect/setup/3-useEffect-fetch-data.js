import React, { useState, useEffect } from "react";

const url = "https://api.github.com/users";

const UseEffectFetchData = () => {
  const [users, setUsers] = useState([]);

  const loadUsers = async function () {
    try {
      const response = await fetch("https://api.github.com/users");
      if (!response.ok)
        throw new Error(`Users could not be fetched from the server`);
      const data = await response.json();
      setUsers(data);
      console.log(data);
    } catch (error) {
      alert(error);
    }
  };

  useEffect(() => {
    loadUsers();
  }, []);

  return (
    <>
      <h2>Github Users</h2>
      <ul className="users">
        {users.map((user) => {
          const { id, login, avatar_url, followers } = user;
          return (
            <li id={id}>
              <div>
                <img src={avatar_url} alt={login} />
              </div>
              <div>
                <h4>{login}</h4>
              </div>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default UseEffectFetchData;
