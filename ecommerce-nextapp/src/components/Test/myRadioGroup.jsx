import React from 'react';
import { RadioButton } from 'primereact/radiobutton';

const RadioGroup = ({ name, value, onChange, options }) => (
  <div className="form-input-container">
    <label className="label-txt" htmlFor={name}>
      {name}
    </label>
    <div className="radio-btn">
      {options.map((option) => (
        <div key={option.value}>
          <RadioButton
            inputId={option.value}
            name={name}
            value={option.value}
            onChange={onChange}
            checked={value === option.value}
          />
          <label htmlFor={option.value}>
            {option.label}
          </label>
        </div>
      ))}
    </div>
  </div>
);

export default RadioGroup;
