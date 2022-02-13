import React, { useState, useEffect } from "react";

export default function SearchFilter() {
  const [filteredList, setFilteredList] = useState([""]);
  const [list, setList] = useState(["Apple", "bannana", "blue"]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    console.log("HRER");
    setFilteredList(() =>
      list.filter(
        (item) =>
          item.substring(0, search.length).toLowerCase() ===
          search.toLowerCase()
      )
    );
  }, [search, setSearch]);

  return (
    <div>
      <input
        name="query"
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <h1>
        {filteredList.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </h1>
    </div>
  );
}
