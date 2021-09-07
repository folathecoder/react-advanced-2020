import React, { useEffect, useRef } from "react";

// preserves value
// DOES NOT trigger re-render
// target DOM nodes/elements

const UseRefBasics = () => {
  const divContainer = useRef();

  useEffect(() => {
    console.log(divContainer.current.textContent);
  }, []);
 
  return (
    <>
      <article ref={divContainer}>
        <h1>Heading Content</h1>
        <p>Body content</p>
      </article>
    </>
  );
};

export default UseRefBasics;
