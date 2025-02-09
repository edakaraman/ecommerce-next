import React from "react";
import { Button } from "primereact/button";

const CardRemove = ({ products, updateProducts, productId }) => {
  const handleRemove = () => {
    const updatedProducts = products.filter(
      (product) => product.id !== productId
    );
    updateProducts(updatedProducts);
  };

  return <Button icon="pi pi-trash" onClick={handleRemove} />;
};

export default CardRemove;