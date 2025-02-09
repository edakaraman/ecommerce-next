import React, { useState, useEffect } from "react";
import { InputText } from "primereact/inputtext";

export default function SearchList({ onSearch }) {
  const [query, setQuery] = useState("");

  const handleChange = (e) => {
    const value = e.target.value;
    setQuery(value);
  };

  useEffect(() => {
    onSearch(query);
  }, [query, onSearch]);

  return (
    <div className="searchContainer">
      <InputText
        type="text"
        value={query}
        onChange={handleChange}
        placeholder="Search..."
        className="edit-input" 
      />
      <i className="pi pi-search searchIcon"></i>

    </div>
  );
}
