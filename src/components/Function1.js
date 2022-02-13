import React, { useState, useEffect } from "react";

export default function Function1(props) {
  const handleClick = () => {
    props.setItem((prev) => prev + 1);
  };
  return (
    <div>
      <button onClick={handleClick}>PressME</button>
    </div>
  );
}
