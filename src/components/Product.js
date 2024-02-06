import React from "react";
import { NavLink } from "react-router-dom";
import FormatPrice from "../Helpers/FormatPrice";

const Product = (curElem) => {
  const { id, name, image, price } = curElem;
  return (
    <>
      <div className="pro_item">
        <NavLink to={`/singleproduct/${id}`}>
          <div className="pro_card">
            <figure>
              <img src={image} alt={name} />
            </figure>
            <div className="pcard_data">
              <div className="pcard-d-flex">
                <h4>{name}</h4>
                <p className="pcard-d-price">{<FormatPrice price={price} />}</p>
              </div>
            </div>
          </div>
        </NavLink>
      </div>
    </>
  );
};

export default Product;
