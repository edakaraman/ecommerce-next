import React from "react";

const TableButton = ({ icon, onClick }) => {
  return (
    <button onClick={onClick}>
      {icon && <i  style={{ fontSize: '12px' }} className={icon}></i>}
    </button>
  );
};

export default TableButton;
