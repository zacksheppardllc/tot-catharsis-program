import React from "react";
import { Link } from "gatsby";

const Navbar = class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false
    };
  }

  hideNavbar = () => {
    this.setState({ active: false });
  };

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
          <Link
            className="navbar-item"
            onClick={this.hideNavbar}
            to="/#welcome"
          >
            Welcome
          </Link>
          <div className="navbar-item has-dropdown is-hoverable">
            <Link
              onClick={this.hideNavbar}
              to="/people"
              className="navbar-link"
            >
              Brought to you by
            </Link>
            <div className="navbar-dropdown">
              <Link
                className="navbar-item"
                onClick={this.hideNavbar}
                to="/people#sponsors"
              >
                Our Sponsors
              </Link>
              <Link
                className="navbar-item"
                onClick={this.hideNavbar}
                to="/people#team"
              >
                Torn Out's Team
              </Link>
              <Link
                className="navbar-item"
                onClick={this.hideNavbar}
                to="/people#performers"
              >
                Performers
              </Link>
              <Link
                className="navbar-item"
                onClick={this.hideNavbar}
                to="/people#volunteers"
              >
                Volunteers
              </Link>
            </div>
          </div>
          <div className="navbar-item has-dropdown is-hoverable">
            <Link
              onClick={this.hideNavbar}
              to="/featuring"
              className="navbar-link"
            >
              Featuring
            </Link>
            <div className="navbar-dropdown">
              <Link
                className="navbar-item"
                onClick={this.hideNavbar}
                to="/featuring"
              >
                The Space
              </Link>
              <Link
                className="navbar-item"
                onClick={this.hideNavbar}
                to="/featuring#experiences"
              >
                Experiences
              </Link>
              <Link
                className="navbar-item"
                onClick={this.hideNavbar}
                to="/featuring#performances"
              >
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
