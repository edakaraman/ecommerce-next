import React, { useEffect, useState } from 'react';
import { Button } from 'primereact/button';
import { Dialog } from 'primereact/dialog';
import { ProgressSpinner } from 'primereact/progressspinner';

const CardDetailModal = ({ product }) => { 
  const [visible, setVisible] = useState(false);
  const [loading, setLoading] = useState(true);
  const defaultValue = "Not Entry";

  useEffect(() => {
    if (product) {
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
      }, 1000);
    } else {
      setLoading(false);
    }
  }, [product]);

  return (
    <div className="detail-div">
      <Button icon="pi pi-external-link" onClick={() => setVisible(true)} />
      <Dialog 
        header="Product Detail" 
        visible={visible} 
        style={{ width: '50vw' }} 
        onHide={() => setVisible(false)}
      >
        {loading ? (
          <ProgressSpinner />
        ) : (
          product ? (
            <div>
              <div>
                <label className='label-txt' htmlFor="name">Product Name: </label>
                <span id="name">{product.name || defaultValue}</span>
              </div>
              <div>
                <label className='label-txt' htmlFor="category">Category: </label>
                <span id="category">{product.category || defaultValue}</span>
              </div>
              <div>
                <label className='label-txt' htmlFor="price">Price: </label>
                <span id="price">${product.price.toFixed(2) || defaultValue}</span>
              </div>
              <div>
                <label className='label-txt' htmlFor="brand">Brand: </label>
                <span id="brand">{product.brand || defaultValue}</span>
              </div>
              <div>
                <label className='label-txt' htmlFor="description">Description: </label>
                <span id="description">{product.description || defaultValue}</span>
              </div>
              <div>
                <label className='label-txt' htmlFor="stockAddedDate">Stock Added Date: </label>
                <span id="stockAddedDate">
                  {product.stockAddedDate 
                    ? new Date(product.stockAddedDate).toLocaleDateString() 
                    : defaultValue}
                </span>
              </div>
            </div>
          ) : (
            <p>Product information not found.</p>
          )
        )}
      </Dialog>
    </div>
  );
};

export default CardDetailModal;
