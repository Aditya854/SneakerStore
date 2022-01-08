import React from "react";

function footer() {
  return (
    <>
      <footer>
        <div className="container">
          <div className="row">
            <div className="mx-auto">
              <div className="row">
                <div className="col-lg-3 footer-col">
                  <h5>Company</h5>
                  <ul>
                    <li>
                      <a href="#">Fresh</a>
                    </li>
                    <li>
                      <a href="#">Mens</a>
                    </li>
                    <li>
                      <a href="#">Womens</a>
                    </li>
                    <li>
                      <a href="#">Kids</a>
                    </li>
                  </ul>
                </div>

                <div className="col-lg-3 footer-col">
                  <h5>Support</h5>
                  <ul>
                    <li>
                      <a href="#">Policy</a>
                    </li>
                    <li>
                      <a href="#">Outlets</a>
                    </li>
                    <li>
                      <a href="#">Apply as Retailer</a>
                    </li>
                  </ul>
                </div>

                <div className="col-lg-3 footer-col">
                  <h5>Contact us</h5>
                  <ul>
                    <li>
                      <a href="#">Email</a>
                    </li>
                    <li>
                      <a href="#">Address</a>
                    </li>
                    <li>
                      <a href="#">About</a>
                    </li>
                  </ul>
                </div>

                <div className="col-lg-3 footer-col">
                  <h5>Follow Us</h5>
                  <div className="row">
                    <div className="col-2 mx-auto">
                      <a href="#">
                        <i class="fab fa-2x fa-instagram"></i>
                      </a>
                    </div>
                    <div className="col-2 mx-auto">
                      <a href="#">
                        <i class="fab fa-2x fa-pinterest"></i>
                      </a>
                    </div>
                    <div className="col-2 mx-auto">
                      <a href="#">
                        <i class="fab fa-2x fa-twitter"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <hr />
              <div className="mt-5">
                <p className="main-hero-para text-center width 100">
                  Copyright @ 2021 SneakerStore.Ind All Rights Reserved
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default footer;
