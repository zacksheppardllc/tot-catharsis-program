import React from "react";
import { Link } from "gatsby";

const Navbar = class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false
    };
  }

  render() {
    return (
      <nav
        className="navbar is-fixed-top"
        role="navigation"
        aria-label="main navigation"
      >
        <div className="navbar-brand">
          <button
            className={
              "navbar-burger" + (this.state.active ? " is-active" : "")
            }
            aria-label="menu"
            aria-expanded="false"
            data-target="navbarBasicExample"
            onClick={() => {
              this.setState({ active: !this.state.active });
            }}
          >
            <p>Navigate</p>
            <div className="navbar-burger burger">
              <span aria-hidden="true" />
              <span aria-hidden="true" />
              <span aria-hidden="true" />
            </div>
          </button>
        </div>
        <div
          className={"navbar-menu" + (this.state.active ? " is-active" : "")}
        >
          <div className="navbar-start" />
          <Link to="/#welcome" className="navbar-item">
            Welcome
          </Link>
          <div className="navbar-item has-dropdown is-hoverable">
            <Link to="/people" className="navbar-link">
              Brought to you by
            </Link>
            <div className="navbar-dropdown">
              <Link to="/people#sponsors" className="navbar-item">
                Our Sponsors
              </Link>
              <Link to="/people#team" className="navbar-item">
                Torn Out's Team
              </Link>
              <Link to="/people#performers" className="navbar-item">
                Performers
              </Link>
              <Link to="/people#volunteers" className="navbar-item">
                Volunteers
              </Link>
            </div>
          </div>
          <div className="navbar-item has-dropdown is-hoverable">
            <Link to="/featuring" className="navbar-link">
              Featuring
            </Link>
            <div className="navbar-dropdown">
              <Link to="/featuring" className="navbar-item">
                The Space
              </Link>
              <Link to="/featuring#experiences" className="navbar-item">
                Experiences
              </Link>
              <Link to="/featuring#performances" className="navbar-item">
                Performances
              </Link>
            </div>
          </div>

          <div className="navbar-end" />
        </div>
      </nav>
    );
  }
};

export default Navbar;
