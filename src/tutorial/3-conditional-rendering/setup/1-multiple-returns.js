import React, { useState, useEffect } from "react";
const url = "https://api.github.com/users/QuincyLarson";
const MultipleReturns = () => {
  const [user, setUser] = useState("Not a User!");
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const loadUser = async function () {
    try {
      const response = await fetch(url);
      console.log(response);

      //Catch Error
      if (!response.ok) {
        setIsLoading(false);
        setIsError(true);
      } else {
        const data = await response.json();
        setUser(data);
        setIsLoading(false);
        setIsError(false);
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    loadUser();
  }, []);

  if (isLoading) {
    return (
      <>
        <section className="spinner">
          <div className="spin">
            <i className="fas fa-spinner"></i>
          </div>
        </section>
      </>
    );
  }

  if (isError) {
    return (
      <>
        <section className="spinner">
          <h2 style={{ color: "red" }}>Error!</h2>
          <h1>User Data Could Not Be Fetched</h1>
        </section>
      </>
    );
  }

  return (
    <>
      <section>
        <h1>User Found</h1>
      </section>
    </>
  );
};

export default MultipleReturns;
