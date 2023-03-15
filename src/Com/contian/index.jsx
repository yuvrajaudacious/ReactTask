import React from "react";
import styles from "./styles.module.css";
const Contian = () => {
  return (
    <div className={styles.w}>
      <div
        id="carouselExampleControls"
        class="carousel slide"
        data-bs-ride="carousel"
      >
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img
              src="https://c0.wallpaperflare.com/preview/237/985/251/laptop-macbook-computer-work.jpg"
              class="d-block  w-100" height="600px"
              alt="..."
            />
          </div>
          <div class="carousel-item">
            <img
              src="https://c1.wallpaperflare.com/preview/811/367/789/technology-computer-creative-design.jpg"
              class="d-block  w-100" height="600px"
              alt="..."
            />
          </div>
          <div class="carousel-item">
            <img
              src="https://st1.latestly.com/wp-content/uploads/2022/11/Virat-10-1.jpg"
              class="d-block w-100" height="600px"
              alt="..."
            />
          </div>
        </div>
        <button
          class="carousel-control-prev"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
<div class="row gx-5">
  <div class="col-md-6 mb-4">
    <div class="bg-image hover-overlay ripple shadow-2-strong rounded-5" data-mdb-ripple-color="light">
      <img src="https://mdbcdn.b-cdn.net/img/new/slides/080.webp" class="img-fluid" />
      <a href="#!">
        <div class="mask" ></div>
      </a>
    </div>
  </div>

  <div class="col-md-6 mb-4">
    <span class="badge bg-danger px-2 py-1 shadow-1-strong mb-3">News of the day</span>
    <h4><strong>Facilis consequatur eligendi</strong></h4>
    <p class="text-muted">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis consequatur
      eligendi quisquam doloremque vero ex debitis veritatis placeat unde animi laborum
      sapiente illo possimus, commodi dignissimos obcaecati illum maiores corporis.
    </p>
    <button type="button" class="btn btn-primary">Read more</button>
  </div>
</div>
    </div>

  );
};

export default Contian;
