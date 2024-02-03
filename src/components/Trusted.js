import React from "react";

const Trusted = ({ourData}) => {
  const {trusttitle} = ourData;
  return (
    <>
      <div className="Trusted-con">
        <div className="Tinn-con">
          <div className="Thead-con">
            <h3>{trusttitle}</h3>
            <div className="allslide">
              <div className="slide">
                <img src="emitech.png" alt="icon" />
              </div>
              <div className="slide">
                <img src="amazon.png" alt="icon" />
              </div>
              <div className="slide">
                <img src="magneto.png" alt="icon" />
              </div>
              <div className="slide">
                <img src="infinixsysLogo.png" alt="icon" />
              </div>
              <div className="slide">
                <img src="shopy.png" alt="icon" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Trusted;
