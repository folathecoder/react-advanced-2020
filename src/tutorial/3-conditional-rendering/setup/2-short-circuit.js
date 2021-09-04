import React, { useState } from "react";
// short-circuit evaluation
// ternary operator

const ShortCircuit = () => {
  const [theme, setTheme] = useState(true);
  // const modeText = theme === "dark" ? `Dark Mode` : `Light Mode`;

  return (
    <>
      <section className={theme && "dark"}>
        Example
        <button className="btn" onClick={() => setTheme(!theme)}>
          Theme Switch
        </button>
      </section>
    </>
  );
};

export default ShortCircuit;
