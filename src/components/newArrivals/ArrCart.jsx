import React from "react";
import Ndata from "./Ndata";
import "./style.css";

const ArrCart = () => {
  return (
    <>
      <div className="content grid product">
        {Ndata.map((val, index) => {
          return (
            <div className="box" key={index}>
              <div className="img">
                <img src={val.cover} alt="images" />
              </div>
              <h4>{val.name}</h4>
              <span>{val.price}</span>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default ArrCart;
