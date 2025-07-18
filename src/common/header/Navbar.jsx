import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [MobileMenu, setMobileMenu] = useState();
  return (
    <>
      <header className="header">
        <div className="container d_flex">
          <div className="catgrories d_flex">
            <span className="fa fa-list"></span>
            <h4>
              Categories <i className="fa fa-chevron-down"></i>
            </h4>
          </div>
          <div className="navlink">
            <ul
              className={
                MobileMenu ? "nav-links-mobile" : "link f_flex capitalize "
              }
              onClick={() => setMobileMenu(false)}
            >
              <li>
                <Link to="/">home</Link>
              </li>
              <li>
                <Link to="/pages">pages</Link>
              </li>
              <li>
                <Link to="/user">user account</Link>
              </li>
              <li>
                <Link to="/vendor">vendor account</Link>
              </li>
              <li>
                <Link to="/track">track my order</Link>
              </li>
            </ul>

            <button
              className="toggle"
              onClick={() => setMobileMenu(!MobileMenu)}
            >
              {MobileMenu ? (
                <i className="fa fa-times close home-btn"></i>
              ) : (
                <i className="fa fa-bars  open"></i>
              )}
            </button>
          </div>
        </div>
      </header>
    </>
  );
};
export default Navbar;
