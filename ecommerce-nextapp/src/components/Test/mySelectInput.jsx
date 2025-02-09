import React from 'react';
import { MultiSelect } from 'primereact/multiselect';

const DropdownInput = ({ id, name, value,label, options, onChange, placeholder }) => (
  <div className="form-input-container">
    <label className="label-txt" htmlFor={id}>
      {label}
    </label>
    <MultiSelect
      id={id}
      name={name}
      value={value}
      options={options}
      onChange={onChange}
      className="dropdown-select"
      placeholder={placeholder}
    />
  </div>
);

export default DropdownInput;
