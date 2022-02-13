import React, { useState } from "react";

export default function CreateList() {
  const [name, setName] = useState("");
  const [names, setNames] = useState([]);

  const handleSubmit = (e) => {
    setNames((prev) => [...prev, name]);
    setName("");
  };

  return (
    <div>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input type="submit" onClick={handleSubmit} />
      <h1>
        {names.map((name, index) => (
          <li key={index}>{name}</li>
        ))}
      </h1>
    </div>
  );
}

{
  /* <input
type="text"
value={name}
onChange={(e) => setName(e.target.value)}
/>
<input type="submit" onClick={handleSubmit} />
<h1>
{names.map((name, index) => (
  <li key={index}>{name}</li>
))}
</h1> */
}
