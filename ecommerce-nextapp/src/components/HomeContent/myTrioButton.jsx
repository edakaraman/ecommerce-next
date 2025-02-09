import React from "react";
import { Button } from "primereact/button";
import buttons from "../../data/buttons";

const withTrioButton = ({ updateProducts }) => {
  const actionHandlers = {
    all: (products) => [],
    first: (products) => products.slice(1),
    last: (products) => products.slice(0, -1),
  };

  const removeItems = (action) => {
    updateProducts((currentProducts) => {
      if (actionHandlers[action]) {
        return actionHandlers[action](currentProducts);
      }
      return currentProducts;
    });
  };

  return (
    <div className="card flex-col">
      {buttons.map((button, index) => (
        <Button
          key={index}
          label={button.label}
          onClick={() => removeItems(button.action)}
          className="myBtn"
        />
      ))}
    </div>
  );
};

export default withTrioButton;
