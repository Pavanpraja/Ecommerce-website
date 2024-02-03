import React from "react";
import { MdDeliveryDining } from "react-icons/md";
import "../styles/App.css";

const Services = () => {
  return (
    <div className="Ser_container">
      <div className="Sinn-con">
        <div className="ser01-con">
          <MdDeliveryDining />
          <h1>Delivery is guaranteed to arrive the same day</h1>
        </div>
        <div className="ser01-con">
          <img src="protection.png" alt="icon" />
          <h1>Protocols that guarantee protected internet transactions</h1>
        </div>
        <div className="ser01-con">
          <img src="money-back.png" alt="icon" />
          <h1>Money Back Guarantee Policy is essential</h1>
        </div>
        <div className="ser01-con">
          <img src="special.png" alt="icon" />
          <h1>Discounts and Many offers</h1>
        </div>
        <div className="ser01-con">
          <img src="order-tracking.png" alt="icon" />
          <h1>Track one or multiple parcels with Delhivery Tracking</h1>
        </div>
      </div>
    </div>
  );
};

export default Services;
