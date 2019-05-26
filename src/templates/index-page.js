import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";

import Layout from "../components/Layout";
import Content, { HTMLContent } from "../components/Content";
import Hero from "../components/Hero";

export const IndexPageTemplate = ({
  image,
  title,
  description,
  content,
  contentComponent
}) => {
  const PageContent = contentComponent || Content;

  return (
    <React.Fragment>
      <Hero />
      <section className="section">
        <div className="container">
          <p>Title: {title}</p>
          <p>description: {description}</p>
          <PageContent className="content" content={content} />
        </div>
      </section>
    </React.Fragment>
  );
};

IndexPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  description: PropTypes.string,
  content: PropTypes.any.isRequired
};

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;

  return (
    <Layout>
      <IndexPageTemplate
        contentComponent={HTMLContent}
        image={frontmatter.image}
        title={frontmatter.title}
        description={frontmatter.description}
        content={data.html}
      />
    </Layout>
  );
};

IndexPage.propTypes = {
  data: PropTypes.shape({
    html: PropTypes.object.isRequired,
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.shape({
        title: PropTypes.string.isRequired,
        image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
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
        image {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        description
      }
    }
  }
`;
