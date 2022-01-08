import React from "react";

function footer() {
  return (
    <>
      <footer>
        <div className="footer-row">
            <div className="footer-col">
                <h5>Company</h5>
                <a href="#">Fresh</a>
                <a href="#">Mens</a>
                <a href="#">Womens</a>
                <a href="#">Kids</a>
            </div>
            <div className="footer-col">
                <h5>Support</h5>
                <a href="#">Policy</a>
                <a href="#">Outlet</a>
                <a href="#">Apply as Retailer</a>
            </div>
            <div className="footer-col">
                <h5>Contact Us</h5>
                <a href="#">Fresh</a>
                <a href="#">Mens</a>
                <a href="#">Womens</a>
                <a href="#">Kids</a>
            </div>
            <div className="footer-col media-links">
                <h5>Follow Us</h5>
                <div className="">
                    <a className="media-link" href="#"><i class="fab fa-pinterest-square"></i></a>
                    <a className="media-link" href="#"><i class="fab fa-twitter-square"></i></a>
                    <a className="media-link" href="#"><i class="fab fa-instagram-square"></i></a>
                </div>
            </div>
        </div>
        <hr/>
        <div className="mt-5">
        <p className="main-hero-para text-center width 100">
            Copyright @ 2021 SneakerStore.Ind All Rights Reserved
        </p>
        </div>
      </footer>
    </>
  );
}

export default footer;
