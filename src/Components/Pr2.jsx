import React from "react";
import { Link } from "react-router-dom";

function Pr2() {
  return (
    <div>
      <div className="conatiner-fluid">
        <div className="row">
          <div className="col-8">
            <div class="category-alone">
              <Link className="link" src="needlework-page.php">
                <img  style={{height:460,width:860}}
                  src="https://previews.123rf.com/images/asawinklabma/asawinklabma1510/asawinklabma151000030/47188017-coconut-shell-carving-handicraft-of-indigenous-people-in-bali-indonesia-.jpg"
                  clannName="img-fluid" alt="img"
                />
                <div className="inner">
                  <center>
                    <h4>Coir Products</h4>
                  </center>
                </div>
              </Link>
            </div>
          </div>
          <div className="col-4">
            <div class="category-alone">
              <Link className="link" src="needlework-page.php">
                <img style={{height:265}}
                  src="https://www.dsource.in/sites/default/files/resource/screw-pine-craft-thrissur-kerala/products/minigallery/14915/14.jpg"
                  clannName="img-fluid"
                  alt="#"
                />
                <div className="inner">
                  <center>
                    <h4>Screw Pine Products</h4>
                  </center>
                </div>
              </Link>
              <div className="row">
                <div className="col-12">
                  <Link className="link" src="needlework-page.php">
                    <img style={{height:165}}
                      src="./Images/decorations.jpg"
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
      </div>
    </div>
  );
}

export default Pr2;
