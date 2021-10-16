import React from "react";
import { ConveyorDetails } from "../../../common";
import "./index.scss";

const ProductDetails = ({ selectedValue }) => {
  return (
    <div className="detailsContainer">
      {ConveyorDetails.filter(
        (data) => data.id === parseInt(selectedValue)
      ).map((data) => {
        return (
          <div className="centerCard" key={data.id}>
            <div className="cardTitle">
              <div className="productName">
                <h3 className="title">{data.title}</h3>
                <h5 className="subTitle">{data.subTitle}</h5>
              </div>
              <div className="imgContainer">
                <img src="" alt="" />
              </div>
            </div>
            <div className="cardBody">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Accusamus officia obcaecati inventore facilis cupiditate
              laboriosam minus perspiciatis nisi excepturi vel.
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ProductDetails;
