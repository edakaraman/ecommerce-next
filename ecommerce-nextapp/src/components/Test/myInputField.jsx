import React from "react";
import { InputText } from "primereact/inputtext";
import { InputNumber } from "primereact/inputnumber";


const InputField = ({ label, id, name, value, onChange, type = "text",placeholder="" }) => {
    const handleChange = (event) => {
      onChange(name, event.target.value); 
    };
    return (
      <div className="p-field edit-field">
        <label className="label-txt block" htmlFor={id}>
          {label}
        </label>
        {type === "text" ? (
          <InputText
            id={id}
            name={name}
            value={value}
            onChange={handleChange}
            className="edit-input"
            placeholder={placeholder}
          />
        ) : (
          <InputNumber
            id={id}
            name={name}
            value={value}
            onValueChange={(e) => onChange(name, e.value)} 
            mode="decimal"
            minFractionDigits={2}
            className="edit-input"
          />
        )
        }
      </div>
    );
  };

  export default InputField;