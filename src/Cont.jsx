import React from "react";
import { FaPhoneAlt, FaStar } from "react-icons/fa";
import { SlEnvolope } from "react-icons/sl";
import "./Contact.css";

function Cont() {
  return (
    <div>
      <div className="container">
        <div class="row mb-5">
          <div class="section_title text-center mb-5">
            <h1>Contact Us</h1>
          </div>
          <div class="col-md-4 col-12">
            <div class="border border-success rounded shadow text-center p-3">
              <div class="mb-4">
                <FaPhoneAlt size="3rem" />
              </div>
              <div>
                <h3>Let's Talk</h3>
                <p>
                  <b>Phone:</b> +91-9876543210
                </p>
              </div>
            </div>
          </div>
          <div class="col-md-4 col-12">
            <div class="border border-success rounded shadow text-center p-3">
              <div class="mb-4">
                <SlEnvolope size="3rem" />
              </div>
              <div>
                <h3>Drop a Line</h3>
                <p>
                  <b>Email:</b> shop@mail.com
                </p>
              </div>
            </div>
          </div>
          <div class="col-md-4 col-12">
            <div class="border border-success rounded shadow text-center p-3">
              <div class="mb-4">
                <FaStar size="3rem" />
              </div>
              <div>
                <h3>24x7 Support</h3>
                <p>
                  <b>Customer:</b> 1800 100 303
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="row">
                <div class="col-md-8 col-10 mx-auto mb-3 my-5 py-5 border shadow">
                    <h3 class="text-center mb-3">Form</h3>
                    <form action="contact.html" method="POST" id="form" onsubmit="return formValidation();">
                        <div class="form-group">
                            <label>Name</label>
                            <input name="name" id="name" type="text" placeholder="Name" class="form-control"/>
                        </div>
                        <div class="form-group">
                            <label>Email address</label>
                            <input name="email" id="email" type="email" placeholder="Email" class="form-control"/>
                        </div>
                        <div class="form-group">
                            <label>Message</label>
                            <textarea name="msg" id="msg" class="form-control" placeholder="Message"></textarea>
                        </div>
                        <button type="submit" class="btn btn-primary btn-block mt-5">Submit</button>
                    </form>
                </div>
            </div>
      </div>
    </div>
  );
}

export default Cont;
