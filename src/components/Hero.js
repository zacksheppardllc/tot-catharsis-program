import React from "react";

const Hero = class extends React.Component {
  render() {
    return (
      <section className="hero is-fullheight-with-navbar">
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
              <p className="title">CatharsisFest</p>
              <p className="subtitle">2019</p>
            </div>
          </div>
        </div>
      </section>
    );
  }
};

export default Hero;
