import React, { useState } from "react";

const ReactState = () => {
  // getter and setter         //initial value=0
  const [counter, setCounter] = React.useState(0);

  const subtractClick = () => {
    setCounter(counter - 1);
    console.log(counter);
  };

  const addClick = () => {
    setCounter(counter + 1);
    console.log(counter);
  };

  return (
    <div className="container">
      <div className="numDisplay">
        <p>{counter}</p>
      </div>
      <div className="ops">
        {/* add and subtract elements on webpage */}
        <button onClick={subtractClick}> - </button>
        <button onClick={addClick}> + </button>
      </div>
    </div>
  );
};

export default ReactState;
