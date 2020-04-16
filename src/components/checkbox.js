import React, { useState } from "react";

export function CheckBox() {
  const [isClicked, setIsClicked] = useState(true);

  const ToggleIsShown = () => {
    setIsClicked(!isClicked);
  };

  return (
    <div>
      <input
        onClick={ToggleIsShown}
        type="checkbox"
        label="start date - end date"
      />
      {isClicked && <div>Text goes here</div>}
    </div>
  );
}
