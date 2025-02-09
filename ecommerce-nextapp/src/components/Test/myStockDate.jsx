import React from "react";
import { Calendar } from "primereact/calendar";

export default function MyStockDate({
  label,
  editedProduct,
  setEditedProduct,
  dateFormat,
}) {
  const handleDate = (e) => {
    setEditedProduct({
      ...editedProduct,
      stockAddedDate: e.value,
    });
  };

  return (
    <div className="p-field edit-field">
      <label className="label-txt block">{label}</label>
      <Calendar
        value={editedProduct.stockAddedDate ? new Date(editedProduct.stockAddedDate) : null}
        onChange={handleDate}
        dateFormat={dateFormat}
        className="edit-input"
        showIcon
      />
    </div>
  );
}
