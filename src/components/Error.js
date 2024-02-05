import React from "react";
import "../styles/App.css";
import { NavLink } from "react-router-dom";
const Error = () => {
  return (
    <>
      <div className="Errorp-con">
        <div className="errorinn-con">
          <div className="error-texts">
            <h1>404</h1>
            <h2>OOPS! PAGE NOT FOUND</h2>
            <p>
              Sorry, the page you are looking for doesn't exist. If you think
              something is broken, report a problem.
            </p>
            <div className="err-buttons">
              <NavLink to="/">
                <button>Return Home</button>
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Error;
