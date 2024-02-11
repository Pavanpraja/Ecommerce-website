import React, { useState } from "react";
import { FaCheck } from "react-icons/fa";
import { MdInvertColors } from "react-icons/md";
import CardAmountToggle from "./CardAmountToggle";
import { NavLink } from "react-router-dom";

const AddToCart = ({ product }) => {
  const { id, colors, stock } = product;

  const [color, setColor] = useState(colors[1]);
  const [amount, setAmount] = useState(1);

  const setDecrease = () =>{
    amount > 1 ? setAmount(amount-1) : setAmount(1);
  }
  const setIncrease = () =>{
    amount < stock ? setAmount(amount+1) : setAmount(stock);
  }
  return (
    <>
      <p>
        Colors:
        {colors.map((curColor, index) => {
          return (
            <button
              key={index}
              style={{ backgroundColor: curColor }}
              className={color === curColor ? "btnStyle active" : "btnStyle"}
              onClick={() => setColor(curColor)}
            >
              {color === curColor ? (
                <FaCheck style={{ color: "white" }} />
              ) : null}
            </button>
          );
        })}
      </p>

      {/* add to cart  */}
      <CardAmountToggle
        amount={amount}
        setDecrease={setDecrease}
        setIncrease={setIncrease}
      />

      {/* addtocart button  */}

      <NavLink to="/cart">
        <button className="addtocartbtn">Add To Cart</button>
      </NavLink>
    </>
  );
};

export default AddToCart;
