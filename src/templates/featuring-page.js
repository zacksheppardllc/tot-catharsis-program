import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import Content, { HTMLContent } from "../components/Content";
import Hero from "../components/Hero";

const FeaturingBlock = ({ name, description, meta }) => {
  return (
    <div className="featured">
      <div className="meta">
        <h4>{name}</h4>
        <h5>{meta}</h5>
      </div>
      <p>{description}</p>
    </div>
  );
};

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
        <div className="container" name="space">
          <PageContent className="content" content={content} />
          <hr />
          <section className="content experiences">
            <h2 name="experiences">Experiences</h2>
            {experiences.map((experience, i) => {
              return (
                <FeaturingBlock
                  {...experience}
                  meta={`$${experience.price}`}
                  key={`experiences-${i}`}
                />
              );
            })}
          </section>
          <hr />
          <section className="content performances">
            <h2 name="performances">Performances</h2>
            {performances.map((performance, i) => {
              const startTimeDate = new Date(performance.start_time);
              const startTime = startTimeDate.toLocaleTimeString([], {
                hour: "2-digit",
                minute: "2-digit"
              });
              return (
                <FeaturingBlock
                  {...performance}
                  meta={startTime}
                  key={`performances-${i}`}
                />
              );
            })}
          </section>
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
