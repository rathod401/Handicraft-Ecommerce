import React from "react";
import "./Main.css";
import { Link } from "react-router-dom";
import "./ProductCategories.css";
function ProductCategories() {
  return (
    <div>
      <div className="conatiner-fluid">
        <div className="row">
          <div className="col-4">
            <div class="category-alone">
              <Link className="link" src="needlework-page.php">
                <img src="./Images/artwork.jpg" clannName="img-fluid" alt="#" />
                <div className="inner">
                  <center>
                    <h4>Needlework</h4>
                  </center>
                </div>
              </Link>
            </div>
          </div>
          <div className="col-4">
            <div class="category-alone">
              <Link className="link" src="needlework-page.php">
                <img
                  style={{ height: 240 }}
                  src="https://www.krishnajewellers.com/blog/wp-content/uploads/2021/12/Buy-Gold-Choker-Designs.jpg"
                  clannName="img-fluid"
                  alt="#"
                />
                <div className="inner">
                  <center>
                    <h4>Jewellery's</h4>
                  </center>
                </div>
              </Link>
            </div>
          </div>
          <div className="col-4">
            <div class="category-alone">
              <Link className="link" src="needlework-page.php">
                <img
                  style={{height: 250}}
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSillHM6pwcI2bDXQw2yJS-twCU2T62TyZszA&usqp=CAU"
                  clannName="img-fluid"
                  alt="#"
                />
                <div className="inner">
                  <center>
                    <h4>Paintings</h4>
                  </center>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductCategories;
