import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./product.css";

const Product = (props) => {
  const [showFullDescription, setShowFullDescription] = useState(false);

  const truncateDescription = (description) => {
    const maxLength = 100;
    if (description.length <= maxLength) {
      return description;
    }
    return showFullDescription
      ? description
      : `${description.slice(0, maxLength)}...`;
  };

  const productsData = props.propsData.map((productData) => (
    <div className="col-md-4 col-sm-6 mb-5 " key={productData.id}>
      <div className="card animated-border">
        <img src={productData.thumbnail} alt="" className="card-img-top" />
        <div className="card-body justify-content-center">
          <h5 className="card-title">{productData.title}</h5>
          <p className="card-text">{truncateDescription(productData.description)}</p>
          <p className="card-title">${productData.price}</p>

        </div>
        <br />
        <div className="card-footer">
          <a href="#" className="btn">
            Add 
          </a>
        </div>
      </div>
    </div>
  ));

  return (
    <div className="container text-center ">
      <div className="row equal-height justify-content-center">{productsData}</div>
    </div>
  );
};

export default Product;
