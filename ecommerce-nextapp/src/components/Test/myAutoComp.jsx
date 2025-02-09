import React, { useState, useEffect, useTransition } from "react";
import { AutoComplete } from "primereact/autocomplete";
import products from "../../data/products";

const MyAutoComp = ({ value, onChange,label }) => {
  const [categories, setCategories] = useState([]);
  const [filteredCategories, setFilteredCategories] = useState([]);
  
  const [isPending,startTransition] = useTransition();

  useEffect(() => {
    const uniqueCategories = Array.from(new Set(products.map(p => p.category)));
    setCategories(uniqueCategories);
  }, []);

  const filterCategories = (event) => {
    const query = event.query.toLowerCase();
    startTransition(() => {
      const filtered = categories.filter(cat => cat.toLowerCase().includes(query));
      setFilteredCategories(filtered);
    })
  };

  return (
    <div className="p-field edit-field">
      <label className="label-txt block" htmlFor="category">{label}</label>
      <AutoComplete
        id="category"
        value={value}
        suggestions={filteredCategories}
        completeMethod={filterCategories}
        onChange={(e) => onChange(e.target.value)}
        className="edit-input"
      />
      {isPending && <p> Loading </p>}
    </div>
  );
};

export default MyAutoComp;