import React from "react";
import Herosection from "./components/Herosection";

function About() {
  const data = {
    name: "Ecommerce Website",
    description:
      "A unique feature of QuickCart is its free development shopping cart, which enables customers to completely set up their online stores by entering products.",
  };
  return (
    <>
      <Herosection myData={data} />
    </>
  );
}

export default About;
