import React, { useState } from "react";
import "./index.scss";
import BgImg from "../../assets/products-bg.jpeg";
import ProductsCard from "./card/index";
import { ConveyorList } from "../../common/index";
import { NavLink } from "react-router-dom";
import ProductDetails from "./productdetails";

const Products = (Props) => {
  const [selectedId, setSelectedId] = useState("1");
  const { match } = Props;
  console.log(selectedId);
  return (
    <>
      <div className="productsWrapper">
        <div className="sidebar">
          {ConveyorList.map((conveyor) => {
            return (
              <ul
                className="navLink"
                onClick={() => setSelectedId(conveyor.id)}
                key={conveyor.id}
              >
                <li>{conveyor.name}</li>
              </ul>
            );
          })}
        </div>
        <ProductDetails className="mainCard" selectedValue={selectedId} />
      </div>
      <div className="ProductsContainer">
        <div className="bgWrapper"></div>
        <img className="bgImg" src={BgImg} alt="" />
        {/* <ProductsCard /> */}
      </div>
    </>
  );
};

export default Products;
