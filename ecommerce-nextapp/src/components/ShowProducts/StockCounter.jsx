import React, { useCallback } from "react";
import MyTableButton from "./myTableButton";

const StockCounter = ({ product, products, setProducts }) => {

  const incrementStock = useCallback(() => {
    const updatedProducts = products.map((p) => {
      if (p.id === product.id) {
        return { ...p, stock: p.stock + 1 };
      }
      return p;
    });
    setProducts(updatedProducts);
  }, [product.stock]);

  const decrementStock = useCallback(() => {
    if (product.stock > 0) {
      const updatedProducts = products.map((p) => {
        if (p.id === product.id) {
          return { ...p, stock: p.stock - 1 };
        }
        return p;
      });
      setProducts(updatedProducts);
    }
  }, [product.stock]);

  return (
    <div className="table-btns">
      <span>{product.stock}</span>
      <div className="incdec-btn">
        <MyTableButton
          icon="pi pi-plus"
          onClick={incrementStock}
        />
        <MyTableButton
          icon="pi pi-minus"
          onClick={decrementStock}
        />
      </div>
    </div>
  );
};

export default StockCounter;