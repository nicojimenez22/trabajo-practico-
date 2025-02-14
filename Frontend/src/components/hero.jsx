import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Carousel = () => {
  return (
    <div
      id="carouselExampleAutoplaying"
      className="carousel slide"
      data-bs-ride="carousel"
    >
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img
            src="https://placehold.co/1600x600"
            className="d-block w-100"
            alt="Imagen 1"
          />
        </div>
        <div className="carousel-item">
          <img
            src="https://placehold.co/1600x600"
            className="d-block w-100"
            alt="Imagen 2"
          />
        </div>
        <div className="carousel-item">
          <img
            src="https://placehold.co/1600x600"
            className="d-block w-100"
            alt="Imagen 3"
          />
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleAutoplaying"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleAutoplaying"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default Carousel;
