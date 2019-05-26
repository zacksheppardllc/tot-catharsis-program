import React from "react";

const Footer = class extends React.Component {
  render() {
    return (
      <footer class="footer">
        <div class="content has-text-centered">
          <h5>Catharsisfest 2019</h5>
          <p>
            This site is &copy; 2019{" "}
            <a href="https://www.tornouttheater.org" rel="nofollow noopener">
              Torn Out Theater
            </a>
            .<br />
            The site was built by{" "}
            <a
              href="https://www.zacksheppard.com"
              rel="nofollow noopener external"
            >
              Zack Sheppard
            </a>
            .<br />
            Header photo is by{" "}
            <a href="https://jaridblue.com" rel="noopener noreferrer external">
              Jarid Blue[King Mallard]
            </a>
            .
          </p>
        </div>
      </footer>
    );
  }
};

export default Footer;
