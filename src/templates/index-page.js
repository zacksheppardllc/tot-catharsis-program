import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";

import Layout from "../components/Layout";
import Content, { HTMLContent } from "../components/Content";
import Hero from "../components/Hero";

export const IndexPageTemplate = ({ content, contentComponent }) => {
  const PageContent = contentComponent || Content;

  return (
    <React.Fragment>
      <Hero fullheight={true} />
      <section className="section">
        <div className="container">
          <PageContent className="content" content={content} />
        </div>
      </section>
    </React.Fragment>
  );
};

IndexPageTemplate.propTypes = {
  content: PropTypes.any.isRequired
};

const IndexPage = ({ data }) => {
  const { frontmatter, html } = data.markdownRemark;

  return (
    <Layout
      metaTitle={frontmatter.title}
      metaDescription={frontmatter.description}
    >
      <IndexPageTemplate contentComponent={HTMLContent} content={html} />
    </Layout>
  );
};

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      html: PropTypes.any.isRequired,
      frontmatter: PropTypes.shape({
        title: PropTypes.string.isRequired,
        description: PropTypes.string
      }).isRequired
    })
  })
};

export default IndexPage;

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      html
      frontmatter {
        title
        description
      }
    }
  }
`;
