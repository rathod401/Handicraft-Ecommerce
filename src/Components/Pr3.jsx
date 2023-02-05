import React from "react";
import { Link } from "react-router-dom";

function Pr3() {
  return (
    <div>
      <div className="conatiner-fluid">
        <div className="row">
          <div className="col-6 ">
            <div class="category-alone">
              <Link className="link" src="needlework-page.php">
                <img
                  style={{ height: 420}}
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXMP9zS-uIYQ-GKLf6EqMAqCIlVcS3lmxaPg&usqp=CAU"
                  clannName="img-fluid"
                  alt="img"
                />
                <div className="inner">
                  <center>
                    <h4>Xyx</h4>
                  </center>
                </div>
              </Link>
            </div>
          </div>
          <div className="col-6">
            <div class="category-alone">
              <Link className="link" src="needlework-page.php">
                <img
                  style={{ height:418}}
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaPSSg9okBl0n0oUYyd5_RhYLSGo5-ikS6kQ&usqp=CAU"
                  clannName="img-fluid"
                  alt="img"
                />
                <div className="inner">
                  <center>
                    <h4>Bamboo Made Product</h4>
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

export default Pr3;
