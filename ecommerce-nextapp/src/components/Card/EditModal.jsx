import React, { useRef, useState } from "react";
import { Button } from "primereact/button";
import { Dialog } from "primereact/dialog";

import MyInputField from "../Test/myInputField";
import MyInputSwitch from "../Test/myInputSwitch";
import MyAutoComp from "../Test/myAutoComp";
import MyStockDate from "../Test/myStockDate";


const EditModal = ({ product, updateProduct }) => {
  const [visible, setVisible] = useState(false);
  const [editedProduct, setEditedProduct] = useState({ ...product });

  const btnRef = useRef(0);

  const showEditModal = () => {
    setEditedProduct({ ...product });
    setVisible(true);
  };

  const handleInputChange = (name, value) => {
    setEditedProduct({
      ...editedProduct,
      [name]: value,
    });
  };

  const saveChanges = () => {
    updateProduct(editedProduct);  

    btnRef.current = btnRef.current +1 ;
    alert("You clicked " + btnRef.current + " times");

    setTimeout(() => {
      setVisible(false);
    },[5000])
  };

  return (
    <div>
      <Button icon="pi pi-pencil" onClick={showEditModal} />
      <Dialog
        header="Product Edit"
        visible={visible}
        style={{ width: "30vw" }}
        onHide={() => setVisible(false)}
      >
        <div className="p-fluid edit-container">
          <MyInputField
            label="Product Name"
            id="name"
            name="name"
            value={editedProduct.name}
            onChange={(name, value) => handleInputChange(name, value)}
          />
          <MyAutoComp
            label="Category"
            value={editedProduct.category}
            onChange={(value) => handleInputChange("category", value)}
          />
          <MyInputField
            label="Price"
            id="price"
            name="price"
            value={editedProduct.price}
            onChange={(name, value) => handleInputChange(name, value)}
            type="number"
          />
          <MyStockDate
            label="Product Stock Added Date"
            editedProduct={editedProduct}
            setEditedProduct={setEditedProduct}
            dateFormat="dd/mm/yy"
            placeholder={editedProduct.stockAddedDate}
          />
          <MyInputSwitch
            label="Product Active/Passive"
            id="activity"
            editedProduct={editedProduct}
            setEditedProduct={setEditedProduct}
          />
        </div>
        <div className="edit-btn">
          <Button label="Save" icon="pi pi-check" onClick={saveChanges} />
        </div>
      </Dialog>
    </div>
  );
};

export default EditModal;