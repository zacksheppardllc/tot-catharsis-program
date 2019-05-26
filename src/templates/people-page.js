import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import Content, { HTMLContent } from "../components/Content";
import Hero from "../components/Hero";

export const PeoplePageTemplate = ({
  creativeTeam,
  sponsors,
  performers,
  volunteers,
  content,
  contentComponent
}) => {
  const PageContent = contentComponent || Content;

  return (
    <React.Fragment>
      <Hero />
      <section className="section">
        <div className="container">
          <PageContent className="content" content={content} />
        </div>
      </section>
    </React.Fragment>
  );
};

PeoplePageTemplate.propTypes = {
  content: PropTypes.any,
  creativeTeam: PropTypes.array.isRequired,
  sponsors: PropTypes.array.isRequired,
  performers: PropTypes.array.isRequired,
  volunteers: PropTypes.array.isRequired
};

const PeoplePage = ({ data }) => {
  const { frontmatter, html } = data.markdownRemark;

  return (
    <Layout
      metaTitle={frontmatter.title}
      metaDescription={frontmatter.description}
    >
      <PeoplePageTemplate
        contentComponent={HTMLContent}
        content={html}
        sponsors={frontmatter.sponsors}
        creativeTeam={frontmatter.creative_team}
        volunteers={frontmatter.volunteers}
        performers={frontmatter.performers}
      />
    </Layout>
  );
};

PeoplePage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      html: PropTypes.any.isRequired,
      frontmatter: PropTypes.shape({
        sponsors: PropTypes.array,
        creative_team: PropTypes.array,
        volunteers: PropTypes.array,
        performers: PropTypes.array
      }).isRequired
    })
  })
};

export default PeoplePage;

export const peoplePageQuery = graphql`
  query PeoplePage {
    markdownRemark(frontmatter: { templateKey: { eq: "people-page" } }) {
      html
      frontmatter {
        sponsors {
          name
          description
          image
        }
        creative_team {
          name
          role
          description
          image
        }
        performers {
          name
          role
          description
          image
        }
        volunteers {
          name
          role
          description
          image
        }
      }
    }
  }
`;
