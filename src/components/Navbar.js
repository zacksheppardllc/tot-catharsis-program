import React from "react";

const Navbar = class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false,
      navBarActiveClass: ""
    };
  }

  render() {
    return <nav />;
  }
};

export default Navbar;
