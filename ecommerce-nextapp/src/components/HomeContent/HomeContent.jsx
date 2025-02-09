import React, { useContext, useDeferredValue, useState } from "react";
import CardDetail from "../Card/CardDetail";
import EditModal from "../Card/EditModal";
import CardRemove from "../Card/CardRemove";
import CardItem from "../Card/CardItem";
import { ThemeContext } from "../../context/ThemeContext";
import SearchList from "./SearchList";

const withDataContent = ({ products, updateProducts }) => {
  const { theme } = useContext(ThemeContext);
  const homeContentClass =
    theme === "dark" ? "myContent-dark" : "myContent-light";

  const [searchQuery, setSearchQuery] = useState("");
  const deferredQuery = useDeferredValue(searchQuery);

  const updateProduct = (updatedProduct) => {
    const updatedProducts = products.map((product) =>
      product.id === updatedProduct.id ? updatedProduct : product
    );
    updateProducts(updatedProducts);
  };

    const filteredProducts = products
    .filter((product) => product.active && product.name.toLowerCase().includes(deferredQuery.toLowerCase()));


  return (
    <div className="flex flex-col">
      <SearchList onSearch={setSearchQuery} />
      <div className="myContent">
        {filteredProducts.map((product) => (
          <div key={product.id} className={homeContentClass}>
            <CardItem product={product} />
            <div className="icons">
              <CardRemove
                products={products}
                updateProducts={updateProducts}
                productId={product.id}
              />
              <EditModal product={product} updateProduct={updateProduct} />
              <CardDetail product={product} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default withDataContent;
