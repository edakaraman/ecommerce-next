"use client"
import React, { useState, useEffect } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Rating } from "primereact/rating";
import productsData from "../../data/products";
import StockCounter from "./StockCounter";

const withDataTable = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setProducts(productsData);
      setLoading(false);
    }, 1000);
  }, []);

  const formatCurrency = (value) => {
    return value.toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
    });
  };

  const imageBodyTemplate = (product) => {
    const imageUrl = product.images[0].source;
    const imageAlt = product.images[0].alt ;
  
    return product.images.length > 0 ? (
      <img
        src={imageUrl}
        alt={imageAlt}
        className="table-img"
      />
    ) : null;
  };
  

  const priceBodyTemplate = (product) => {
    return formatCurrency(product.price);
  };

  const ratingBodyTemplate = (product) => {
    return <Rating value={product.rating} readOnly cancel={false} />;
  };

  const stockBodyTemplate = (product) => {
    return (
      <StockCounter
        product={product}
        products={products}
        setProducts={setProducts}
      />
    );
  };

  const header = (
    <div className="table-header">
      <span className="header-span">Products</span>
    </div>
  );

  return (

    <div className="card m-auto">
        <DataTable
          value={products}
          header={header}
          tableStyle={{ minWidth: "60rem" }}
        >
          <Column field="name" header="Name"></Column>
          <Column header="Image" body={imageBodyTemplate}></Column>
          <Column field="price" header="Price" body={priceBodyTemplate}></Column>
          <Column field="category" header="Category"></Column>
          <Column field="brand" header="Brand"></Column>
          <Column field="stock" header="Stock" body={stockBodyTemplate} />
          <Column
            field="rating"
            header="Reviews"
            body={ratingBodyTemplate}
          ></Column>
        </DataTable>
    </div>
  );
};
export default withDataTable;