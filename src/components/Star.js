import React from "react";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import { AiOutlineStar } from "react-icons/ai";
import '../styles/App.css'

const Star = ({ stars, reviews }) => {
  // debugger;
  const ratingStar = Array.from({ length: 5 }, (elem, index) => {
    // console.log(stars)
    let number = index + 0.5;
    return (
      <>
        <span key={index}>
          {stars >= index + 1 ? (
            <FaStar className="icon" />
          ) : stars >= number ? (
            <FaStarHalfAlt className="icon" />
          ) : (
            <AiOutlineStar className="icon" style={{fontSize: "2.5rem"}}/>
          )}
        </span>
      </>
    );

  });
  return(
    <div className="icon-style">
      {ratingStar}
      <p>({reviews} Customer reviews)</p>
    </div>
  )
};

export default Star;
