import React from "react";
import { Link } from "react-router-dom";
const Cart = () => {
  return (
    <>
      <div>
        <li className="nav-item">
          <Link href="#" className="nav-link">
            <i className=" fas fa-shopping-cart fa-2x">ICON</i>
          </Link>
        </li>
        {/* <li className="nav-item">
          <Link href="UserLoginPage.html" className="nav-link">
            <i className=" fas fa-user fa-2x">SIGN</i>
          </Link>
        </li> */}
      </div>
    </>
  );
};
export default Cart;
