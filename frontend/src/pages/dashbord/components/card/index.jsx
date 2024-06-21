import React from "react";
import "./_style.scss";
import Grid from "../../../../assets/svg/Grid";
import cardImg1 from "../../../../assets/images/video-editing5.jpg";
const Card = () => {
  return (
    <div className="hero-card-container">
      <div className="card-container">
        <div className="feature-card">
          <div className="grid">
            <Grid className="grid-svg" />
            <div className="blur"></div>
          </div>

          <div className="feature-card-detail">
            <div className="feature-card-image">
              <img src={cardImg1} alt="Example" />
            </div>

            <div className="feature-card-text">
              <h2>Create</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Reprehenderit voluptatum cumque rem odio voluptates nostrum?
              </p>
            </div>
          </div>
        </div>

        <div className="feature-card">
          <div className="grid">
            <Grid className="grid-svg" />
            <div className="blur"></div>
          </div>

          <div className="feature-card-detail">
            <div className="feature-card-image">
              <img src={cardImg1} alt="Example" />
            </div>

            <div className="feature-card-text">
              <h2>Edit Video</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Reprehenderit voluptatum cumque rem odio voluptates nostrum?
              </p>
            </div>
          </div>
        </div>

        <div className="feature-card">
          <div className="grid">
            <Grid className="grid-svg" />
            <div className="blur"></div>
          </div>

          <div className="feature-card-detail">
            <div className="feature-card-image">
              <img src={cardImg1} alt="Example" />
            </div>

            <div className="feature-card-text">
              <h2>Transform</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Reprehenderit voluptatum cumque rem odio voluptates nostrum?
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
