import React from "react";
import ArrCart from "./ArrCart";
import "./style.css";

const NewArrivals = () => {
  return (
    <section className="newarrivals background">
      <div className="container">
        <div className="heading d_flex">
          <div className="heading-left row f_flex">
            <img src="https://img.icons8.com/glyph-neue/64/26e07f/new.png" />
            <h2>Top Arrivals</h2>
          </div>
          <div className="heading-right row">
            <span>View all</span>
            <i className="fa fa-caret-right"></i>
          </div>
        </div>
        <ArrCart />
      </div>
    </section>
  );
};
export default NewArrivals;
