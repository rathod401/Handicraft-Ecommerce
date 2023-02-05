import Carousel from "react-bootstrap/Carousel";
import React from "react";
import "./Caro.css";
function Carousels() {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="img-fluid"
          style={{ height: 500, width: 1400 }}
          src="https://indian.handicrafts.gov.in/files/scheme_file/g18.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          // className="d-block w-100"
          className="slider"
          style={{ height: 500, width: 1400 }}
          src="https://cdn.yehaindia.com/wp-content/uploads/2020/07/stone-art-feature-750x410-1.jpg"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="slider"
          // className="d-block w-100"
          src="https://cdn.yehaindia.com/wp-content/uploads/2020/07/stone-art-feature-750x410-1.jpg"
          style={{ height: 500, width: 1400 }}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Carousels;
