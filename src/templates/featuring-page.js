import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import Content, { HTMLContent } from "../components/Content";
import Hero from "../components/Hero";

export const FeaturingPageTemplate = ({
  content,
  experiences,
  performances,
  contentComponent
}) => {
  const PageContent = contentComponent || Content;

  return (
    <React.Fragment>
      <Hero />
      <section className="section">
        <div className="container">
          <PageContent className="content" content={content} />
          <p>Experiences: {experiences.length}</p>
          <p>performances: {performances.length}</p>
        </div>
      </section>
    </React.Fragment>
  );
};

FeaturingPageTemplate.propTypes = {
  content: PropTypes.any,
  experiences: PropTypes.array,
  performances: PropTypes.array
};

const FeaturingPage = ({ data }) => {
  const { frontmatter, html } = data.markdownRemark;

  return (
    <Layout
      metaTitle={frontmatter.title}
      metaDescription={frontmatter.description}
    >
      <FeaturingPageTemplate
        contentComponent={HTMLContent}
        content={html}
        experiences={frontmatter.experiences}
        performances={frontmatter.performances}
      />
    </Layout>
  );
};

FeaturingPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      html: PropTypes.any.isRequired,
      frontmatter: PropTypes.object
    })
  })
};

export default FeaturingPage;

export const featuringPageQuery = graphql`
  query FeaturingPage {
    markdownRemark(frontmatter: { templateKey: { eq: "featuring-page" } }) {
      html
      frontmatter {
        title
        description
        experiences {
          name
          price
          description
        }
        performances {
          name
          start_time
          description
        }
      }
    }
  }
`;
