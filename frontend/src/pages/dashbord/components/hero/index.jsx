import React from "react";

import Grid from "../../../../assets/svg/Grid";

import "./_style.scss";

const Hero = () => {
  return (
    <div className="hero-container">
      <div className="grid">
        <Grid className="grid-svg" />
        <div className="blur"></div>
      </div>

      <div className="hero-branding">
        <p className="pl-branding">
          Story <span>4K</span>
        </p>

        <div className="short-about">
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum
            doloremque odit repudiandae consectetur praesentium voluptates,
            repellendus voluptatum. Ipsum, soluta. Dolorem enim nesciunt vitae
            saepe inventore. Saepe suscipit maiores quia veritatis!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
