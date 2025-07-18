import React from "react";
import DCard from "./DCard";

const Discount = () => {
  return (
    <section className="disocunt background">
      <div className="container">
        <div className="heading d_flex">
          <div className="heading-left row f_flex">
            <img src="" alt="" />
            <h2>Big Discount</h2>
          </div>
          <div className="heading-right row">
            <span>View all</span>
            <i className="fa fa-caret-right"></i>
          </div>
        </div>
        <DCard />
      </div>
    </section>
  );
};
export default Discount;
