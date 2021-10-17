import React from "react";
import { ConveyorDetails } from "../../common";
import "./index.scss";
import ProductCard from "./productcard";
import ProductModal from "./productmodal";

const Product = () => {
  const [open, setOpen] = React.useState(false);
  const [selectedId, setSelectedId] = React.useState(1);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <div className="productWrapper">
        <div className="productHeader  animate__animated animate__fadeInDown">
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
              setId={setSelectedId}
              openModal={handleOpen}
            />
          );
        })}
        <ProductModal open={open} close={handleClose} selectedId={selectedId} />
      </div>
    </>
  );
};

export default Product;