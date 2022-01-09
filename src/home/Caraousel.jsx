import React from "react";

import manphoto from "../Resources/Carousel Images/MAN CARAOUSEL.png";
import manphoto1 from "../Resources/Carousel Images/MAN CARAOUSEL (1).jpeg";
import shoephoto from "../Resources/Carousel Images/SHOE CARAOUSEL.jpeg";
import shoephoto1 from "../Resources/Carousel Images/SHOE CARAOUSEL (1).jpeg";
import womanphoto from "../Resources/Carousel Images/WOMAN CARAOUSEL.jpeg";
import kidsphoto from "../Resources/Carousel Images/KIDS CARAOUSEL.png";
import kidsphoto1 from "../Resources/Carousel Images/KIDS CARAOUSEL (1).png";

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
            <img src={manphoto} className="carouselImage d-block w-100 " data-bs-carousel="4000" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={shoephoto} className="carouselImage d-block w-100 " data-bs-carousel="4000" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={womanphoto} className="carouselImage d-block w-100 " data-bs-carousel="4000" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={kidsphoto1} className="carouselImage d-block w-100 " data-bs-carousel="4000" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={shoephoto1} className="carouselImage d-block w-100 " data-bs-carousel="4000" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={manphoto1} className="carouselImage d-block w-100 " data-bs-carousel="4000" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={kidsphoto} className="carouselImage d-block w-100 " data-bs-carousel="4000" alt="..." />
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
