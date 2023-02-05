import React from "react";
import { FaLock, FaShippingFast, FaHeadphones } from "react-icons/fa";
import "./Service.css"

function Carousel() {
  return (
    <div>
      <section class="feature py-5 mt-5" id="feature">
        <div class="container">
          <div class="section_title text-center mb-5">
            <h1>Our Features</h1>
          </div>
          <div class="row text-white">
            <div class="col-md-4 col-12 shadow p-3">
              <div class="text-center">
                <div class="mb-4">
                  <i class="fa-3x mb-3 pt-2">
                    <FaShippingFast />
                  </i>
                  <div>
                    <h3>Free Shipping Method</h3>
                  </div>
                </div>
                <div>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  
                </div>
              </div>
            </div>
            <div class="col-md-4 col-12 shadow p-3 mt-small-5 mb-small-5">
              <div class="text-center">
                <div class="mb-4">
                  <i class="fa-3x mb-3 pt-2">
                    <FaLock />
                  </i>
                  <div>
                    <h3>Secure Payment System</h3>
                  </div>
                </div>
                <div>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  
                </div>
              </div>
            </div>
            <div class="col-md-4 col-12 shadow p-3">
              <div class="text-center">
                <div class="mb-4">
                  <i class="fas fa-headphones fa-3x mb-3 pt-2">
                    {" "}
                    <FaHeadphones />
                  </i>
                  <div>
                    <h3>24/7 Support</h3>
                  </div>
                </div>
                <div>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Carousel;
