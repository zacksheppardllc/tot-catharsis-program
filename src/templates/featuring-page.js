import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import Content, { HTMLContent } from "../components/Content";

export const FeaturingPageTemplate = ({
  title,
  description,
  content,
  experiences,
  performances,
  contentComponent
}) => {
  const PageContent = contentComponent || Content;

  return (
    <div>
      <p>Title: {title}</p>
      <p>description: {description}</p>
      <PageContent className="content" content={content} />
      <p>Experiences: {experiences.length}</p>
      <p>performances: {performances.length}</p>
    </div>
  );
};

FeaturingPageTemplate.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  content: PropTypes.any,
  experiences: PropTypes.array,
  performances: PropTypes.array
};

const FeaturingPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;

  return (
    <Layout>
      <FeaturingPageTemplate
        contentComponent={HTMLContent}
        title={frontmatter.title}
        description={frontmatter.description}
        content={data.html}
        experiences={frontmatter.experiences}
        performances={frontmatter.performances}
      />
    </Layout>
  );
};

FeaturingPage.propTypes = {
  data: PropTypes.shape({
    html: PropTypes.object.isRequired,
    markdownRemark: PropTypes.shape({
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
