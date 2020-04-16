/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";

export default function MobileMenu() {
  const [isShown, setIsShown] = useState(false);

  const ToggleIsShown = () => {
    setIsShown(!isShown);
  };
  return (
    <div>
      <button onClick={ToggleIsShown} type="button">
        Menu
      </button>
      {isShown && (
        <nav>
          <a href="#">Home</a>
          <a href="#">About</a>
          <a href="#">contact</a>
        </nav>
      )}
    </div>
  );
}
