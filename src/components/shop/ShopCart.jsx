import React, { useState } from "react";

const ShopCart = ({ shopItems, addToCart }) => {
  const [count, setCount] = useState(0);
  const increment = () => {
    setCount(count + 1);
  };
  console.log(shopItems);

  return (
    <>
      {shopItems.map((val, index) => {
        return (
          <div className="box">
            <div className="product mtop">
              <div className="img">
                <span className="discount">{val.discount} % off</span>
                <img src={val.cover} alt="" />
                <div className="product-like">
                  <label>{count}</label>
                  <br />
                  <i className="fa fa-heart" onClick={increment}></i>
                </div>
              </div>
              <div className="product-details">
                <h3>{val.name}</h3>
                <div className="rate">
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                </div>
                <div className="price">
                  <h4>
                    <span> Price :</span> {val.price} Taka
                  </h4>
                  <button>
                    <i
                      className="fa fa-plus"
                      onClick={() => addToCart(val)}
                    ></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default ShopCart;
