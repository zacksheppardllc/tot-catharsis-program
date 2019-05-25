import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Layout from "../components/Layout";

export const PeoplePageTemplate = ({
  title,
  description,
  creativeTeam,
  sponsors,
  performers,
  volunteers
}) => {
  return (
    <div>
      <p>Title: {title}</p>
      <p>description: {description}</p>
    </div>
  );
};

PeoplePageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  creativeTeam: PropTypes.array.isRequired,
  sponsors: PropTypes.array.isRequired,
  performers: PropTypes.array.isRequired,
  volunteers: PropTypes.array.isRequired
};

const PeoplePage = ({ data }) => {
  const { markdownRemark } = data;

  return (
    <Layout>
      <PeoplePageTemplate
        title={markdownRemark.frontmatter.title}
        description={markdownRemark.frontmatter.description}
        sponsors={markdownRemark.frontmatter.sponsors}
        creativeTeam={markdownRemark.frontmatter.creative_team}
        volunteers={markdownRemark.frontmatter.volunteers}
        performers={markdownRemark.frontmatter.performers}
      />
    </Layout>
  );
};

PeoplePage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.shape({
        title: PropTypes.string.isRequired,
        description: PropTypes.string,
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
        title
        description
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
