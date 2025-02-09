import React from 'react';
import { Calendar } from 'primereact/calendar';

const DateInput = ({ id, name,label, value, onChange, dateFormat }) => (
  <div className="form-input-container">
    <label className="label-txt" htmlFor={id}>
     {label}
    </label>
    <Calendar
      id={id}
      name={name}
      value={value}
      onChange={onChange}
      className="form-input"
      dateFormat={dateFormat}
    />
  </div>
);

export default DateInput;
