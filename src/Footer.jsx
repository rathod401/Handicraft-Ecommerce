import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

function Footer() {
  return (
    <div>
      <section className="footer_section pt-5 pb-2" id="footer_section">
        <footer>
          <div className="container-fluid">
            <div className="row">
              {/* <div className="col-md- col-6 pl-5 pl-small-15">
              </div> */}
              <div className="col-md-4 col-6">
                <div className="footer_title pt-3 mb-3">
                  <h3>Quick Links</h3>
                </div>
                <div className="footer_links">
                  <ul>
                    <li>
                      <Link href="about.html">About</Link>
                    </li>
                    <li>
                      <Link href="#">Offers & Discounts</Link>
                    </li>
                    <li>
                      <Link href="#">Get Coupon</Link>
                    </li>
                    <li>
                      <Link href="contact.html">Contact Us</Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-md-4 col-6">
                <div className="footer_title pt-3 mb-3">
                  <h3>New Products</h3>
                </div>
                <div className="footer_links">
                  <ul>
                    <li>
                      <Link href="#">Woman Cloth</Link>
                    </li>
                    <li>
                      <Link href="#">Fashion Accessories</Link>
                    </li>
                    <li>
                      <Link href="#">Man Accessories</Link>
                    </li>
                    <li>
                      <Link href="#">Rubber made Toys</Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-md-4 col-6">
                <div className="footer_title pt-3 mb-3">
                  <h3>Support</h3>
                </div>
                <div className="footer_links">
                  <ul>
                    <li>
                      <Link href="#">Frequently Asked Questions</Link>
                    </li>
                    <li>
                      <Link href="#">Terms & Conditions</Link>
                    </li>
                    <li>
                      <Link href="#">Privacy Policy</Link>
                    </li>
                    <li>
                      <Link href="#">Report a Payment Issue</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="border-top">
            <h6 className="text-center mt-3">
              Copyright ©2022 Handicraft_online
            </h6>
          </div>
        </footer>
      </section>
      <div className="backtop">
        <Link
          id="button"
          href="#top"
          className="btn btn-lg btn-outline-danger"
          role="button"
        >
          <i className="fas fa-chevron-up text-dark"></i>
        </Link>
      </div>
    </div>
  );
}

export default Footer;
