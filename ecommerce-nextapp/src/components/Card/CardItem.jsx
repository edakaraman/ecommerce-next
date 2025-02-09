import React, { useContext } from "react";
import { Carousel } from "primereact/carousel";
import { ThemeContext } from "../../context/ThemeContext";
import Image from "next/image";

export default function CardObject({ product }) {
  const { theme } = useContext(ThemeContext);

  const itemTemplate = (image) => (
    <img
      key={image.id}
      src={image.source}
      alt={image.alt}
      className="myContent-img"
    />
  );
  return (
    <div>
      <div className="myContent-imgDiv">
        <Carousel
          value={product.images}
          numVisible={1}
          circular
          itemTemplate={itemTemplate}
        />
      </div>
      <div className="myContent-infos">
          <h3 className="myContent-lbl">{product.name}</h3>
          <p className="myContent-category">{product.category}</p>
          <div className="flex flex-row justify-between">
            <p className="myContent-lbl">${product.price.toFixed(2)}</p>
            <p className="myContent-category">
              {product.active ? "Active" : "Passive"}
            </p>
          </div>
      </div>
    </div>
  );
}
