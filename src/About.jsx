import React from "react";
import { FaRegCreditCard, FaLaptop, FaGifts } from "react-icons/fa";
import Footer from "./Footer";

function About() {
  return (
    <div>
      <div classNameName="comtainer">
        <div class="section_title text-center mb-5">
          <h1>About Us</h1>
          <div className="row">
            <div className="col-md-6">
              <div className="row">
                <div className="col-md-12">
                  <img
                    src="images/new24.png"
                    className="img img-fluid rounded shadow-lg"
                    alt="img"
                  />
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="row">
                <div className="col-md-12">
                  <div className="title">
                    <h3>Our Mission</h3>
                  </div>
                  <div className="about_text mt-sm-5">
                    <p>
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      Dolor nisi natus, rem accusamus sunt numquam debitis et
                      nemo mollitia saepe veniam illo magnam impedit? Odio iure
                      reprehenderit nihil eius quibusdam quisquam, tempora cum
                      asperiores similique sequi rem, exercitationem
                      perspiciatis non!
                    </p>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Incidunt provident odio tempora natus et consequatur
                      distinctio, minima, porro libero officia, eos voluptatibus
                      ad dolore expedita repudiandae. Vel exercitationem
                      corrupti rem nisi, fuga deserunt suscipit minus quisquam
                      voluptatem?
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            {/* <!-- ==============testimonial starts here============== --> */}
            <section className="text-center bg-info my-5 py-5 rounded">
              <div className="col-md-10 col-10 mx-auto">
                {/* <!-- Carousel Wrapper --> */}
                <div
                  id="carousel-example-1"
                  className="carousel slide carousel-fade"
                  data-ride="carousel"
                  data-interval="false"
                >
                  {/* <!--Slides--> */}
                  <div className="carousel-inner">
                    {/* <!--First slide--> */}
                    <div className="carousel-item active">
                      <div className="testimonial">
                        {/* <!--Avatar--> */}
                        <div className="avatar mx-auto mb-4">
                          <img
                            src="images/new26.jpeg"
                            className="rounded-circle img-fluid"
                            width="200px"
                            height="400px"
                            alt="First sample avatar"
                          />
                        </div>
                        {/* <!--Content--> */}
                        <p>
                          <i className="fas fa-quote-left"></i> Lorem ipsum
                          dolor sit amet, consectetur adipisicing elit. Quod eos
                          id officiis hic tenetur quae quaerat ad velit ab.
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit. Dolore cum accusamus eveniet molestias
                          voluptatum inventore laboriosam labore sit, aspernatur
                          praesentium iste impedit quidem dolor veniam.
                        </p>
                        <h4 className="font-weight-bold">Sia Kross</h4>
                        <h6 className="font-weight-bold my-3">
                          Founder of Shopify Company
                        </h6>
                        {/* <!--Review--> */}
                        <i className="fas fa-star blue-text"> </i>
                        <i className="fas fa-star blue-text"> </i>
                        <i className="fas fa-star blue-text"> </i>
                        <i className="fas fa-star blue-text"> </i>
                        <i className="fas fa-star-half-alt blue-text"> </i>
                      </div>
                    </div>
                    {/* <!--First slide--> */}
                    {/* <!--Second slide--> */}
                    <div className="carousel-item">
                      <div className="testimonial">
                        {/* <!--Avatar--> */}
                        <div className="avatar mx-auto mb-4">
                          <img
                            src="images/new27.jpeg"
                            className="rounded-circle img-fluid"
                            width="200px"
                            height="200px"
                            alt="Second sample avatar"
                          />
                        </div>
                        {/* <!--Content--> */}
                        <p>
                          <i className="fas fa-quote-left"></i> Nemo enim ipsam
                          voluptatem quia voluptas sit aspernatur aut odit aut
                          fugit, sed quia consequuntur magni dolores eos qui
                          ratione voluptatem sequi nesciunt. Neque porro
                          quisquam est, qui dolorem ipsum quia dolor sit amet,
                          consectetur, adipisci velit, sed quia non numquam eius
                          modi tempora incidunt ut labore.{" "}
                        </p>
                        <h4 className="font-weight-bold">Daniel Jue</h4>
                        <h6 className="font-weight-bold my-3">
                          Photographer at Studio LA
                        </h6>
                        {/* <!--Review--> */}
                        <i className="fas fa-star blue-text"> </i>
                        <i className="fas fa-star blue-text"> </i>
                        <i className="fas fa-star blue-text"> </i>
                        <i className="fas fa-star blue-text"> </i>
                        <i className="fas fa-star blue-text"> </i>
                      </div>
                    </div>
                    {/* <!--Second slide--> */}
                    {/* <!--Third slide--> */}
                    <div className="carousel-item">
                      <div className="testimonial">
                        {/* <!--Avatar--> */}
                        <div className="avatar mx-auto mb-4">
                          <img
                            src="images/new28.jpeg"
                            className="rounded-circle img-fluid"
                            width="200px"
                            alt="Third sample avatar "
                          />
                        </div>
                        {/* <!--Content--> */}
                        <p>
                          <i className="fas fa-quote-left"></i> Duis aute irure
                          dolor in reprehenderit in voluptate velit esse cillum
                          dolore eu fugiat nulla pariatur. Excepteur sint
                          occaecat cupidatat non proident, sunt in culpa qui
                          officia deserunt mollit anim id est laborum. Sed ut
                          perspiciatis unde omnis iste natus error sit
                          voluptatem accusantium doloremque laudantium.
                        </p>
                        <h4 className="font-weight-bold">Josh Allan</h4>
                        <h6 className="font-weight-bold my-3">
                          Front-end Developer in NY
                        </h6>
                        {/* <!--Review--> */}
                        <i className="fas fa-star blue-text"> </i>
                        <i className="fas fa-star blue-text"> </i>
                        <i className="fas fa-star blue-text"> </i>
                        <i className="fas fa-star blue-text"> </i>
                        <i className="far fa-star blue-text"> </i>
                      </div>
                    </div>
                    {/* <!--Third slide--> */}
                  </div>
                  {/* <!--Slides--> */}
                  {/* <!--Controls--> */}
                  <a
                    className="carousel-control-prev left carousel-control"
                    href="#carousel-example-1"
                    role="button"
                    data-slide="prev"
                  >
                    <span
                      className="carousel-control-prev-icon"
                      aria-hidden="true"
                    ></span>
                    <span className="sr-only">Previous</span>
                  </a>
                  <a
                    className="carousel-control-next right carousel-control"
                    href="#carousel-example-1"
                    role="button"
                    data-slide="next"
                  >
                    <span
                      className="carousel-control-next-icon"
                      aria-hidden="true"
                    ></span>
                    <span className="sr-only">Next</span>
                  </a>
                  {/* <!--Controls--> */}
                </div>
                {/* <!-- Carousel Wrapper --> */}
              </div>
            </section>
            {/* <!-- ==============testimonial ends here============== --> */}
          </div>
          <div className="row">
            <div className="col-3">
              <div className="border border-dark rounded shadow text-center p-3">
                <div className="mb-4">
                  <FaRegCreditCard size="3rem" />
                </div>
                <div>
                  <h5>Credit Card Support</h5>
                </div>
              </div>
            </div>
            <div className="col-md-3 col-6 mt-small-2 mb-small-2">
              <div className="border border-primary rounded shadow text-center p-3">
                <div className="mb-4">
                  <FaLaptop size="3rem" />
                </div>
                <div>
                  <h5>Online Order</h5>
                </div>
              </div>
            </div>
            <div className="col-md-3 col-6">
              <div className="border border-success rounded shadow text-center p-3">
                <div className="mb-4">
                  <FaRegCreditCard size="3rem" />
                </div>
                <div>
                  <h5>Fast Delivery</h5>
                </div>
              </div>
            </div>
            <div className="col-md-3 col-6">
              <div className="border border-danger rounded shadow text-center p-3">
                <div className="mb-4">
                  <FaGifts size="3rem" />
                </div>
                <div>
                  <h5>Product with Gift</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default About;
