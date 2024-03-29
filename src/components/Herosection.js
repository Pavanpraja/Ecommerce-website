import React from "react";
import { NavLink } from "react-router-dom";

function Herosection({ myData }) {
  const { name, description } = myData;
  return (
    <>
      <div className="homesec01">
        <div className="Texts">
          <img src="hbacico.png" alt="icon" />
          <p>Welcome to</p>
          <h1>{name}</h1>
          <p>{description}</p>
          <NavLink>
            <button>Shop now</button>
          </NavLink>
        </div>
        <div className="bacimg">
          <h4>Minimalistic</h4>
          <img src="hbac.png" alt="backgroundimages" />
          <h4>
            <sub>i</sub>Super cozy!
          </h4>
        </div>
      </div>
    </>
  );
}

export default Herosection;
