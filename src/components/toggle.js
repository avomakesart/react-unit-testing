import React, { useState } from "react";

export default function Toggle() {
  const [state, setState] = useState(false);

  const onChange = () => {
    setState(!state);
  };

  return (
    <button
      onClick={() => {
        setState(previousState => !previousState);
      }}
      onChange={onChange}
      data-testid="toggle"
    >
      {state === true ? "Turn off" : "Turn on"}
    </button>
  );
}
