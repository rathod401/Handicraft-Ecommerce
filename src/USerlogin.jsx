import React from "react";
import "./styles.css";
import { Link } from "react-router-dom";
import { FaGoogle, FaFacebook, FaUserAlt } from "react-icons/fa";
import { FiLock } from "react-icons/fi";

const USerlogin = () => {
  return (
    <div>
      <div className="container">
        <div className="forms-container">
          <div className="signin-signup">
            <form action="dbconnect.php" className="sign-in-form" method="POST">
              <h2 className="title">Sign in</h2>
              <div className="input-field">
                <FaFacebook className="fas FaFacebook" />
                <input
                  type="text"
                  name="username"
                  value=""
                  placeholder="Username"
                />
              </div>
              <div className="input-field">
                <FiLock />
                <input
                  type="password"
                  name="password"
                  value=""
                  placeholder="Password"
                />
              </div>
              <input type="submit" value="Login" className="btn solid" />
              <p className="social-text">Or Sign in with social platforms</p>
              <div className="social-media">
                <Link to="#" className="social-icon">
                  <FaFacebook />
                </Link>
                <Link to="#" className="social-icon">
                  <FaGoogle />
                </Link>
              </div>
            </form>
          </div>
          <form action="signup.php" className="sign-up-form" method="POST" />
          <h2 className="title">Sign up</h2>
          <div className="input-field">
            <FaUserAlt />
            <input
              type="text"
              name="username"
              value=""
              placeholder="Username"
            />
          </div>
          <div className="input-field">
            <i className="fas fa-envelope"></i>
            <input type="email" name="email" value="" placeholder="Email" />
          </div>
          <div className="input-field">
            <FiLock />
            <input
              type="password"
              name="password"
              value=""
              placeholder="Password"
            />
          </div>
          <input type="submit" className="btn" value="Sign up" />
          <p className="social-text">Or Sign up with social platforms</p>

          <form />
          <div />
          <div />
          <div className="panels-container">
            <div className="panel left-panel">
              <div className="content">
                <h3>Don't have an account?</h3>
                <p>
                  Welcome to Online Handicrafts Store!
                  <br /> Create an account and start shopping!
                </p>
                <button className="btn transparent" id="sign-up-btn">
                  Sign up
                </button>
              </div>
            </div>
            <div className="panel right-panel">
              <div className="content">
                <h3>Already have an account?</h3>
                <p>Login back and get back to where you left off.</p>
                <button className="btn transparent" id="sign-in-btn">
                  Sign in
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default USerlogin;
