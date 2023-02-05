import React from "react";
import { FiStar } from "react-icons/fi";
import { Link } from "react-router-dom";
import "./LatestProducts.css";

function LatestProducts() {
  return (
    <div>
      <section className="products py-5 my-5 " id="products">
        <div className="container ">
          <div className="section_title text-center mb-5">
            <h1 className="text-capitalize">Latest Products</h1>
          </div>
          <div className="row mb-5">
            <div className="col-md-4 col-12">
              <div className="single_product shadow text-center p-1">
                <div className="product_img">
                  <Link to="product_detail.html">
                  <img style={{height:430}}
                      src="https://handtex.telangana.gov.in//Assets/images/slider/11.jpg"
                      className="img img-fluid rounded"
                      alt=""
                    />
                  </Link>
                  <div className="new_product">
                    <span className="badge py-2 px-3 badge-pill">New</span>
                  </div>
                </div>
                <div className="product-caption my-3">
                  <div className="product-ratting">
                    <FiStar />
                    <FiStar />
                    <FiStar />
                    <FiStar />
                    <FiStar />
                  </div>
                  <h4>
                    <Link to="product_detail.html">New Gold Colour Saree</Link>
                  </h4>
                  <div className="price">
                    <b>
                      <span className="mr-1">₹</span>
                      <span>400</span>
                    </b>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-12">
              <div className="single_product shadow text-center p-1 mt-small-5 mb-small-5">
                <div className="product_img">
                  <Link to="product_detail.html">
                  <img style={{height:430}}
                      src="https://rukminim1.flixcart.com/image/832/832/jucz98w0/showpiece-figurine/c/g/e/mpchildmonkbuddha002-miss-peach-original-imaffhgbgpk5dff7.jpeg?q=70"
                      className="img img-fluid rounded"
                      alt=""
                    />
                  </Link>
                  <div className="new_product">
                    <span className="badge py-2 px-3 badge-pill badge-danger">
                      New
                    </span>
                  </div>
                </div>
                <div className="product-caption my-3">
                  <div className="product-ratting">
                    <FiStar />
                    <FiStar />
                    <FiStar />
                    <FiStar />
                    <FiStar />
                  </div>
                  <h4>
                    <Link to="product_detail.html">
                      Handmade Monk Budha idol
                    </Link>
                  </h4>
                  <div className="price">
                    <b>
                      <span className="mr-1">₹</span>
                      <span>400</span>
                    </b>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-12">
              <div className="single_product shadow text-center p-1">
                <div className="product_img">
                  <Link to="product_detail.html">
                  <img style={{height:430}}
                      src="https://n1.sdlcdn.com/imgs/a/4/z/Kutch-Craft-Multicolour-Shoulder-Bag-SDL766770872-1-45fa5.jpg"
                      className="img img-fluid rounded"
                      alt=""
                    />
                  </Link>
                  <div className="new_product">
                    <span className="badge py-2 px-3 badge-pill badge-danger">
                      New
                    </span>
                  </div>
                </div>
                <div className="product-caption my-3">
                  <div className="product-ratting">
                    <FiStar />
                    <FiStar />
                    <FiStar />
                    <FiStar />
                    <FiStar />
                  </div>
                  <h4>
                    <Link to="product_detail.html">
                      Handmade Cloth Bag
                    </Link>
                  </h4>
                  <div className="price">
                    <b>
                      <span className="mr-1">₹</span>
                      <span>400</span>
                    </b>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4 col-12">
              <div className="single_product shadow text-center p-1">
                <div className="product_img">
                  <Link to="product_detail.html">
                  <img style={{height:430}}
                      src="https://indianonlinespices.com/wp-content/uploads/2020/04/38fe26ff-4005-478a-a3a3-7e3e1de3744f.jpg"
                      className="img img-fluid rounded"
                      alt=""
                    />
                  </Link>
                  <div className="new_product">
                    <span className="badge py-2 px-3 badge-pill badge-danger">
                      New
                    </span>
                  </div>
                </div>
                <div className="product-caption my-3">
                  <div className="product-ratting">
                    <FiStar />
                    <FiStar />
                    <FiStar />
                    <FiStar />
                    <FiStar />
                  </div>
                  <h4>
                    <Link to="product_detail.html">
                      Kerala Khathakali Mask
                    </Link>
                  </h4>
                  <div className="price">
                    <b>
                      <span className="mr-1">₹</span>
                      <span>400</span>
                    </b>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-12">
              <div className="single_product shadow text-center p-1 mt-small-5 mb-small-5">
                <div className="product_img">
                  <Link to="product_detail.html">
                  <img style={{height:430}}
                      src="https://m.media-amazon.com/images/I/71rMiGbA1hL._SX679_.jpg"
                      className="img img-fluid rounded"
                      alt=""
                    />
                  </Link>
                  <div className="new_product">
                    <span className="badge py-2 px-3 badge-pill badge-danger">
                      New
                    </span>
                  </div>
                </div>
                <div className="product-caption my-3">
                  <div className="product-ratting">
                    <FiStar />
                    <FiStar />
                    <FiStar />
                    <FiStar />
                    <FiStar />
                  </div>
                  <h4>
                    <Link to="product_detail.html">Wooden Idol</Link>
                  </h4>
                  <div className="price">
                    <b>
                      <span className="mr-1">₹</span>
                      <span>400</span>
                    </b>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-12">
              <div className="single_product shadow text-center p-1">
                <div className="product_img">
                  <Link to="product_detail.html">
                  <img style={{height:430}}
                      src="https://n1.sdlcdn.com/imgs/a/4/z/Kutch-Craft-Multicolour-Shoulder-Bag-SDL766770872-1-45fa5.jpg"
                      className="img img-fluid rounded"
                      alt=""
                    />
                  </Link>
                  <div className="new_product">
                    <span className="badge py-2 px-3 badge-pill badge-danger">
                      New
                    </span>
                  </div>
                </div>
                <div className="product-caption my-3">
                  <div className="product-ratting">
                    <FiStar />
                    <FiStar />
                    <FiStar />
                    <FiStar />
                    <FiStar />
                  </div>
                  <h5>
                    <Link to="product_detail.html">
                      Gold Colour Cloth Bag 
                    </Link>
                  </h5>
                  <div className="price">
                    <b>
                      <span className="mr-1">₹</span>
                      <span>400</span>
                    </b>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default LatestProducts;
