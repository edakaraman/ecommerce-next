import React from "react";
import { InputSwitch } from "primereact/inputswitch";

export default function MyInputSwitch({label,id,setEditedProduct,editedProduct}) {
    const handleSwitchChange = (e) => {
        setEditedProduct({
          ...editedProduct,
          active: e.value,
        });
      };
    
  return (
    <div className="p-field edit-field">
      <label className="label-txt block" htmlFor={id}>
        {label}
      </label>
      <InputSwitch
        label={label}
        id={id}
        checked={editedProduct.active}
        onChange={handleSwitchChange}
        type="toggle"
      />
    </div>
  );
}
