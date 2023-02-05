import React from "react";
import Cards from "./Card/Cards";

const Featureproduct =() => {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-4">
            <Cards />
          </div>
          <div className="col-4">
            <Cards />
          </div>
          <div className="col-4">
            <Cards />
          </div>
        </div>
        <div className="row">
          <div className="col-4">
            <Cards />
          </div>
          <div className="col-4">
            <Cards />
          </div>
          <div className="col-4">
            <Cards />
          </div>
        </div>
      </div>
    </>
  );
};export default Featureproduct;
