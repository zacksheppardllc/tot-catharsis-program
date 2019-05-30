import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import Content, { HTMLContent } from "../components/Content";
import Hero from "../components/Hero";

const PersonBlock = ({ entity }) => {
  return (
    <div className="person">
      <div className="image">
        <img src={entity.image} alt={entity.name} />
      </div>
      <div className="text">
        <div className="meta">
          <h4>{entity.name}</h4>
          {entity.role && <h5>{entity.role}</h5>}
        </div>
        <p>{entity.description}</p>
      </div>
    </div>
  );
};

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
          <hr />
          <section className="content creativeTeam">
            <h2 name="team">Creative Team</h2>
            {creativeTeam.map((teammate, i) => {
              return (
                <PersonBlock entity={teammate} key={`creativeTeam-${i}`} />
              );
            })}
          </section>
          <hr />
          <section className="content sponsors">
            <h2 name="sponsors">Sponsors</h2>
            {sponsors.map((sponsor, i) => {
              return <PersonBlock entity={sponsor} key={`sponsors-${i}`} />;
            })}
          </section>
          <hr />
          <section className="content performers">
            <h2 name="performers">Performers</h2>
            {performers.map((performer, i) => {
              return <PersonBlock entity={performer} key={`performers-${i}`} />;
            })}
          </section>
          <hr />
          <section className="content volunteers">
            <h2 name="volunteers">Special Thanks</h2>
            {volunteers.map((volunteer, i) => {
              return (
                <div className="person" key={`volunteers-${i}`}>
                  <div className="image" />
                  <div className="text">
                    <div className="meta">
                      <h4>{volunteer.name}</h4>
                    </div>
                  </div>
                </div>
              );
            })}
          </section>
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
