import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import Hero from "../components/Hero";

export const PeoplePageTemplate = ({
  creativeTeam,
  sponsors,
  performers,
  volunteers
}) => {
  return (
    <React.Fragment>
      <Hero />
      <section className="section">
        <div className="container">
          <p>People Page</p>
        </div>
      </section>
    </React.Fragment>
  );
};

PeoplePageTemplate.propTypes = {
  creativeTeam: PropTypes.array.isRequired,
  sponsors: PropTypes.array.isRequired,
  performers: PropTypes.array.isRequired,
  volunteers: PropTypes.array.isRequired
};

const PeoplePage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;

  return (
    <Layout
      metaTitle={frontmatter.title}
      metaDescription={frontmatter.description}
    >
      <PeoplePageTemplate
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
