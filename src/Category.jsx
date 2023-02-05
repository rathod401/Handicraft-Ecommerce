import React from "react";
import { Link } from "react-router-dom";
import "./Category.css";
import Footer from "./Footer";

function Category() {
  return (
    <div>
      {/* <!-- ==============category starts here============== --> */}
      <section className="products py-4  " id="products">
        <div className="container ">
          <div className="section_title text-center mb-5">
            <h1 className="text-capitalizes" id="caty">
              Products
            </h1>
          </div>
          <div className="row mb-5">
            <div className="col-md-4 col-12">
              <div className="single_product shadow text-center p-1">
                <div className="product_img">
                  <Link href="product.html">
                    <img
                      style={{ height: 365 }}
                      src="https://handtex.telangana.gov.in//Assets/images/slider/11.jpg"
                      className="img img-fluid rounded"
                      alt=""
                    />
                  </Link>
                </div>
                <div className="product-caption my-3">
                  <div className="inner">
                    <h4>
                      <Link href="/addtocart"> Saree</Link>
                    </h4>
                  </div>
                </div>
                <div className="mt-3">
                  <Link to="/addtocart">
                    <button className="btn bg-secondary text-white">
                      Add to cart
                    </button>
                  </Link>
                  <h3>Price: Rs.500</h3>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-12">
              <div className="single_product shadow text-center p-1 mt-small-5 mb-small-5">
                <div className="product_img">
                  <Link href="product.html">
                    <img
                      style={{ height: 365 }}
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
                  <h4>
                    <Link href="product.html">Wooden Items</Link>
                  </h4>
                </div>
                <div className="mt-3">
                  <div className="mt-3">
                    <Link to="/addtocart">
                      <button className="btn bg-secondary text-white">
                        Add to cart
                      </button>
                      <h3>Price: Rs.250</h3>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-12">
              <div className="single_product shadow text-center p-1">
                <div className="product_img">
                  <Link href="product.html">
                    <img
                      style={{ height: 365 }}
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
                  <h4>
                    <Link href="product.html">Cloths Items</Link>
                  </h4>
                </div>
                <div className="mt-3">
                    <Link to="/addtocart">
                      <button className="btn bg-secondary text-white">
                        Add to cart
                      </button>
                      <h3>Price: Rs.480</h3>
                    </Link>
                  </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4 col-12">
              <div className="single_product shadow text-center p-1">
                <div className="product_img">
                  <Link href="product.html">
                    <img
                      style={{ height: 430 }}
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
                  <h4>
                    <Link href="product.html">Kerala's Tradition Items</Link>
                  </h4>
                </div>
                <div className="mt-3">
                  <button className="btn bg-secondary text-white">
                    Add to cart
                  </button>
                  <h3>Price: Rs.180</h3>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-12">
              <div className="single_product shadow text-center p-1 mt-small-5 mb-small-5">
                <div className="product_img">
                  <Link href="product.html">
                    <img
                      style={{ height: 430 }}
                      src="https://www.woodhandicraftgifts.com/wp-content/uploads/2018/03/traditional-handicrafts-of-jaipur.jpg"
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
                  <h4>
                    <Link href="product.html">Home Decarator Items</Link>
                  </h4>
                </div>
                <div className="mt-3">
                    <Link to="/addtocart">
                      <button className="btn bg-secondary text-white">
                        Add to cart
                      </button>
                      <h3>Price: Rs.250</h3>
                    </Link>
                  </div>
              </div>
            </div>
            <div className="col-md-4 col-12">
              <div className="single_product shadow text-center p-1">
                <div className="product_img">
                  <Link href="product.html">
                    <img
                      style={{ height: 430, width: 300 }}
                      src="https://m.media-amazon.com/images/I/81TH3Y9emeL._SL1500_.jpg"
                      className="img img-fluid rounded"
                      alt=""
                    />
                  </Link>
                </div>
                <div className="product-caption my-3">
                  <h4>
                    <Link href="product.html">Woodens items</Link>
                  </h4>
                </div>
                <div className="mt-3">
                    <Link to="/addtocart">
                      <button className="btn bg-secondary text-white">
                        Add to cart
                      </button>
                      <h3>Price: Rs.150</h3>
                    </Link>
                  </div>
              </div>
            </div>
          </div>
          <br />
          <div className="row mb-5">
            <div className="col-md-4 col-12">
              <div className="single_product shadow text-center p-1">
                <div className="product_img">
                  <Link href="product.html">
                    <img
                      style={{ height: 430 }}
                      src="https://poompuhar.com/themes/frontend/img/category/lamp.jpg"
                      className="img img-fluid rounded"
                      alt=""
                    />
                  </Link>
                </div>
                <div className="product-caption my-3">
                  <h4>
                    <Link href="product.html">Pooja Samagris</Link>
                  </h4>
                </div>
                <div className="mt-3">
                    <Link to="/addtocart">
                      <button className="btn bg-secondary text-white">
                        Add to cart
                      </button>
                      <h3>Price: Rs.180</h3>
                    </Link>
                  </div>
              </div>
            </div>
            <div className="col-md-4 col-12">
              <div className="single_product shadow text-center p-1 mt-small-5 mb-small-5">
                <div className="product_img">
                  <Link href="product.html">
                    <img
                      style={{ height: 430 }}
                      src="https://images-eu.ssl-images-amazon.com/images/G/31/img16/apparel/women/events/Handlooms_Handicrafts/ik_homefurnishing._V531992332_.jpg"
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
                  <h4>
                    <Link href="product.html">Gadwal Sarre's </Link>
                  </h4>
                </div>
                <div className="mt-3">
                    <Link to="/addtocart">
                      <button className="btn bg-secondary text-white">
                        Add to cart
                      </button>
                      <h3>Price: Rs.400</h3>
                    </Link>
                  </div>
              </div>
            </div>
            <div className="col-md-4 col-12">
              <div className="single_product shadow text-center p-1">
                <div className="product_img">
                  <Link href="product.html">
                    <img
                      style={{ height: 430 }}
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
                  <h4>
                    <Link href="product.html">Clays Made Itemss</Link>
                  </h4>
                </div>
                <div className="mt-3">
                    <Link to="/addtocart">
                      <button className="btn bg-secondary text-white">
                        Add to cart
                      </button>
                      <h3>Price: Rs.380</h3>
                    </Link>
                  </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4 col-12">
              <div className="single_product shadow text-center p-1">
                <div className="product_img">
                  <Link href="product.html">
                    <img
                      style={{ height: 430 }}
                      src="https://rukminim1.flixcart.com/image/832/832/l34ry4w0/candle-tealight-holder/j/k/q/5-1-in-1021-westonchoice-8-original-imagebfturgy8g3h.jpeg?q=70"
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
                  <h4>
                    <Link href="product.html">Handmade Lamp</Link>
                  </h4>
                </div>
                <div className="mt-3">
                    <Link to="/addtocart">
                      <button className="btn bg-secondary text-white">
                        Add to cart
                      </button>
                      <h3>Price: Rs.250</h3>
                    </Link>
                  </div>
              </div>
            </div>
            <div className="col-md-4 col-12">
              <div className="single_product shadow text-center p-1 mt-small-5 mb-small-5">
                <div className="product_img">
                  <Link href="product.html">
                    <img
                      style={{ height: 430 }}
                      src="https://rukminim1.flixcart.com/image/612/612/ktx9si80/art-craft-kit/o/c/5/4-best-buy-ultra-light-modelling-mind-sharpening-and-bouncing-original-imag76yuzawhrkxf.jpeg?q=70"
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
                  <h4>
                    <Link href="/addtocart">Handicraft Material</Link>
                  </h4>
                </div>
                <div className="mt-3">
                    <Link to="/addtocart">
                      <button className="btn bg-secondary text-white">
                        Add to cart
                      </button>
                      <h3>Price: Rs.600</h3>
                    </Link>
                  </div>
              </div>
            </div>
            <div className="col-md-4 col-12">
              <div className="single_product shadow text-center p-1">
                <div className="product_img">
                  <Link href="product.html">
                    <img
                      style={{ height: 430 }}
                      src="https://rukminim1.flixcart.com/image/612/612/xif0q/sandal/q/m/h/-original-imagg5qnkwkvafw6.jpeg?q=70"
                      className="img img-fluid rounded"
                      alt=""
                    />
                  </Link>
                </div>
                <div className="product-caption my-3">
                  <h4>
                    <Link href="product.html">Kolapuri Mens Footwear</Link>
                  </h4>
                </div>
                <div className="mt-3">
                    <Link to="/addtocart">
                      <button className="btn bg-secondary text-white">
                        Add to cart
                      </button>
                      <h3>Price: Rs.100</h3>
                    </Link>
                  </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />

      {/* <!-- ==============category ends here============== --> */}
    </div>
  );
}

export default Category;
