import React from "react";
import PropTypes from "prop-types";

const Product = ({ image, name, price }) => {
  return (
    <div>
      <article className="product item">
        <h4>{name}</h4>
      </article>
    </div>
  );
};

Product.propTypes = {
  image:PropTypes.object.isRequired,
  name:PropTypes.object.isRequired,
  price:PropTypes.number.isRequired
}

export default Product;
