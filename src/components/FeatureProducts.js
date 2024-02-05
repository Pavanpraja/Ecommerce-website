import React from "react";
import { useProductContext } from "../context/ProductContext";
import "../styles/App.css";
import Product from "./Product";
import Loading from "./Loading";

const FeatureProducts = () => {
  const { isLoading, featureProducts } = useProductContext();

  if (isLoading) {
    return (
      <div className="p-loading">
        <Loading data="...Loading Wait"/>
      </div>
    );
  }

  //   console.log(featureProducts);
  return (
    <div className="pro_data_con">
      <div className="exp_con">
      <h3>Take a Look...</h3>
      <div className="fpro-heading">
        <h2>Our Feature Services</h2>
        <div className="prod_items">
            {
                featureProducts.map((curElem)=>{
                    return <Product key={curElem.id} {...curElem} />
                })
            }
        </div>
      </div>
      </div>
    </div>
  );
};

export default FeatureProducts;
