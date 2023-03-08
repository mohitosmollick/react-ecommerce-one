import React from "react";
import Slider from "react-slick/lib/slider";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import Ddata from "./Ddata";

const DCard = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
  };
  return (
    <>
      <Slider {...settings}>
        {Ddata.map((val, index) => {
          return (
            <>
              <div className="box product" key={index}>
                <div className="img">
                  <img src={val.cover} alt="" width="100%" />
                </div>
                <h4>{val.name}</h4>
                <span>{val.price}</span>
              </div>
            </>
          );
        })}
      </Slider>
    </>
  );
};
export default DCard;
