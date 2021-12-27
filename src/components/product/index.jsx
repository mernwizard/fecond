import React from "react";
import { ConveyorDetails } from "../../common";
import "./index.scss";
import ProductCard from "./productcard";

const Product = () => {
  return (
    <>
      <div className="productWrapper">
        <div className="productHeader  animate__animated animate__fadeInDown">
          <div className="bannerMask"></div>
          <h3>Our products</h3>
          <h1>PRODUCTS</h1>
        </div>
      </div>
      <div className="product-container">
        {ConveyorDetails.map((data) => {
          return (
            <ProductCard
              title={data.title}
              subTitle={data.subTitle}
              id={data.id}
              img={data.img}
              key={data.id}
            />
          );
        })}
      </div>
    </>
  );
};

export default Product;
