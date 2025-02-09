"use client";
import React, { useContext, useState, useEffect, Suspense, lazy } from "react";
import MyTrioButton from "./myTrioButton";
import { ThemeContext } from "../../context/ThemeContext";
import axiosInstance from "../../app/config/axiosConfig";
import Loading from "../Loading";

const HomeContent = lazy(() => import('./HomeContent'));
const ProductTable = lazy(() => import('../ShowProducts/ProductTable'));

function HomePage() {
  const [prolist, setProlist] = useState([]);
  const [contentComponent, setContentComponent] = useState("HomeContent");
  const { theme } = useContext(ThemeContext);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axiosInstance.get("/api/pros");
        setProlist(response.data);
        console.log("API URL:", process.env.NEXT_PUBLIC_API_URL);

      } catch (error) {
        console.error("Ürün bulunamadı.", error);
      }
    };

    fetchProducts();
  }, []);

  const updateProducts = (updatedProducts) => {
    setProlist(updatedProducts);
  };

  return (
    <div
      className="home-div"
      style={{
        background: theme === "light" ? "#fff" : "#333",
        color: theme === "light" ? "#000" : "#fff",
      }}
    >
      <Suspense fallback={<Loading />}>
        {contentComponent === "ProductTable" && <ProductTable />}
        {contentComponent === "HomeContent" && (
          <HomeContent products={prolist} updateProducts={updateProducts} />
        )}
      </Suspense>
      <div className="home-sub">
        {contentComponent === "HomeContent" && (
          <MyTrioButton updateProducts={updateProducts} />
        )}
      </div>
    </div>
  );
}

export default HomePage;
