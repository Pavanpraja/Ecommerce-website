import React from "react";
import "./styles/App.css";
import Herosection from "./components/Herosection";
import Services from "./components/Services";
import Trusted from "./components/Trusted";
import FeatureProducts from "./components/FeatureProducts";

function Home() {
  const data = {
    name: "QuickCart",
    description:
      "We've partnered with restaurants, convenience stores, pharmacies and more to bring just about anything you might need, right to your door. QuickCart Delivery (formerly QuickPlate) makes it super easy for you to order online and get the things you want, fast.",
    trusttitle: "Trusted by 1000+ Companies",
  };
  return (
    <div className="test">
      <Herosection myData={data} />
      <FeatureProducts />
      <Services />
      <Trusted ourData={data} />
    </div>
  );
}

export default Home;
