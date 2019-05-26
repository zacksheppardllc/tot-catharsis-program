import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import useSiteMetadata from "./SiteMetadata";

import "./styles/fonts/alpha_echo.css";
import "./styles/master.scss";

const TemplateWrapper = ({ children, metaTitle, metaDescription }) => {
  const { title: siteTitle, description: siteDescription } = useSiteMetadata();
  const title = metaTitle || siteTitle;
  const description = metaDescription || siteDescription;

  return (
    <React.Fragment>
      <Helmet>
        <html lang="en" className="has-navbar-fixed-top" />
        <meta charset="utf-8" />
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <meta name="theme-color" content="#000" />

        <meta property="og:type" content="website" />
        <meta property="og:title" content={title} />
        <meta property="og:url" content="/" />
        <meta property="og:image" content="/img/og-image.jpg" />
        <meta property="og:image:width" content="1200px" />
        <meta property="og:image:height" content="1200px" />
      </Helmet>
      <Navbar />
      {children}
      <Footer />
    </React.Fragment>
  );
};

TemplateWrapper.propTypes = {
  metaTitle: PropTypes.string,
  metaDescription: PropTypes.string
};

export default TemplateWrapper;
