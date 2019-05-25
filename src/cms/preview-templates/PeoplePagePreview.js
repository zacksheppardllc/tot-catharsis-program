import React from "react";
import PropTypes from "prop-types";
import { PeoplePageTemplate } from "../../templates/people-page";

const PeoplePagePreview = ({ entry }) => {
  const creativeTeamIn = entry.getIn(["data", "creative_team"]);
  const creativeTeam = creativeTeamIn ? creativeTeamIn.toJS() : [];

  const sponsorsIn = entry.getIn(["data", "sponsors"]);
  const sponsors = sponsorsIn ? sponsorsIn.toJS() : [];

  const performersIn = entry.getIn(["data", "performers"]);
  const performers = performersIn ? performersIn.toJS() : [];

  const volunteersIn = entry.getIn(["data", "volunteers"]);
  const volunteers = volunteersIn ? volunteersIn.toJS() : [];

  return (
    <PeoplePageTemplate
      title={entry.getIn(["data", "title"])}
      description={entry.getIn(["data", "description"])}
      creativeTeam={creativeTeam}
      sponsors={sponsors}
      performers={performers}
      volunteers={volunteers}
    />
  );
};

PeoplePagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func
  })
};

export default PeoplePagePreview;
