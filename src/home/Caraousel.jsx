import React from "react";

import photo1 from "../Resources/SneakPeek/1.png";
import photo2 from "../Resources/SneakPeek/2.png";
import photo3 from "../Resources/SneakPeek/3.png";
import photo4 from "../Resources/SneakPeek/4.png";
// import photo5 from "../Resources/SneakPeek/5.png";
// import photo6 from "../Resources/SneakPeek/6.png";
// import photo7 from "../Resources/SneakPeek/7.png";
// import photo8 from "../Resources/SneakPeek/8.png";
// import video1 from "../Resources/SneakPeek/wow1.mp4";

export default function Caraosuel() {
  return (
    <div className="caraousel">
      <div
        id="carouselExampleControls"
        class="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={photo1} className="carouselImage d-block w-100 " data-bs-carousel="4000" alt="..." />
            <p className="text3">HAVE IT</p>
            <p className="text4">YOUR WAY</p>
          </div>
          <div className="carousel-item">
            <img src={photo2} className="carouselImage d-block w-100 " data-bs-carousel="4000" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={photo3} className="carouselImage d-block w-100 " data-bs-carousel="4000" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={photo4} className="carouselImage d-block w-100 " data-bs-carousel="4000" alt="..." />
            <p className="text1">NIKE</p>
            <p className="text2">FLYING EDITION</p>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}
