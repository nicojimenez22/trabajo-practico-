import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

const Carousel = () => {
  return (
    <div className="container my-4">
      <div id="carouselExampleAutoplaying" className="carousel slide shadow-lg rounded" data-bs-ride="carousel">
        <div className="carousel-inner">
          {[1, 2, 3].map((num, index) => (
            <div key={num} className={`carousel-item ${index === 0 ? "active" : ""}`}>
              <img
                src={`/imagenes/${num}.png`}
                className="d-block w-100 rounded"
                alt={`Imagen ${num}`}
                style={{ width: "500px", height: "350px", objectFit: "cover" }}
              />
            </div>
          ))}
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default Carousel;
