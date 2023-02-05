import { useState } from "react";
import React from "react";

const Hooks = () => {
  const [num, setnum] = useState(0);

  const Increment = () => {
    setnum(num + 1);
  };

  const Decrement = () => {
    if (num > 0) {
      setnum(num - 1);
    } else {
      setnum(1);
    }
  };

  // const changename =? ;
  return (
    <div>
      <div className="text-center">
        <h1>{num}</h1>

        <button className="btn btn-primary mt-15" onClick={Increment}>
          Increment
        </button>
        <button className="btn btn-primary mx-5" onClick={Decrement}>
          Decrement
        </button>
      </div>
    </div>
  );
};

export default Hooks;
