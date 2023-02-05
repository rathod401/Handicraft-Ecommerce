import React from "react";
import { Link } from "react-router-dom";
import { FaShoppingCart, FaUser } from "react-icons/fa";
import "./Addtocart.jsx";
import "./Navbar.css";
const Navbar = () => {
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-12 bg-grey">
            <nav className="navbar navbar-expand-sm navbar-black bg-grey">
              <Link
                activeClassName="menu_active"
                className="navbar-brand offset-1"
                to="/"
              >
                HandiCraft
              </Link>
              <div
                className="collapse navbar-collapse"
                id="navbarTogglerDemo03"
              >
                <ul className="navbar-nav offset-1 mt-2 mt-lg-0 text-white">
                  <li className="nav-item active">
                    <Link
                      activeClassName="menu_active"
                      className="nav-link"
                      to="/"
                    >
                      Home
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      activeClassName="menu_active"
                      className="nav-link"
                      to="/products"
                    >
                      CATEGORIES
                    </Link>
                  </li>
                  {/* <li className="nav-item">
                    <Link
                      activeClassName="menu_active"className="nav-link" to="/about">Department</Link>
                  </li> */}
                  <li className="nav-item">
                    <Link
                      activeClassName="menu_active"
                      className="nav-link"
                      to="/category"
                    >
                      Products
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      activeClassName="menu_active"
                      className="nav-link"
                      to="/about"
                    >
                      About
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      activeClassName="menu_active"
                      className="nav-link"
                      to="/contact"
                    >
                      Contact
                    </Link>
                  </li>
                  <li>
                    <div className="nav-item px-1">
                      <Link
                        activeClassName="menu_active"
                        className="nav-link"
                        to="/addtocart"
                      >
                        <FaShoppingCart />
                      </Link>
                    </div>
                  </li>
                  <li>
                    <div className="nav-item px-1">
                      <Link
                        activeClassName="menu_active"
                        className="nav-link"
                        to="/contact"
                      >
                        <FaUser />
                      </Link>
                    </div>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Navbar;
