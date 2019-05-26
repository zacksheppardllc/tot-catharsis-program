import React from "react";
import PropTypes from "prop-types";

const Hero = ({ fullheight }) => {
  const sizeClass = fullheight ? "is-fullheight-with-navbar" : "is-large";
  return (
    <section className={`hero ${sizeClass}`}>
      <div className="hero-start">
        <p className="small attribution">
          Photo by{" "}
          <a href="https://jaridblue.com" rel="noopener noreferrer">
            Jarid Blue[King Mallard]
          </a>
        </p>
      </div>
      <div className="hero-end">
        <div className="container">
          <div className="compound-header">
            <p className="subtitle">Torn Out Theater's</p>
            <p className="title">
              <span>Catharsis</span>
              <span>Fest</span>
            </p>
            <p className="subtitle">2019</p>
          </div>
        </div>
      </div>
    </section>
  );
};

Hero.propTypes = {
  fullheight: PropTypes.bool
};

export default Hero;
