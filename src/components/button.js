import React, { useState } from "react";

export function Button() {
  const [isShown, setIsShown] = useState(true);

  const ToggleIsShown = () => {
    setIsShown(!isShown);
  };

  return (
    <div>
      <button onClick={ToggleIsShown} type="button">
        Toggle
      </button>
      {isShown && <div>Text goes here</div>}
    </div>
  );
}
