import React from "react";
import PropTypes from "prop-types";
import { PeoplePageTemplate } from "../../templates/people-page";

const PeoplePagePreview = ({ entry, widgetFor }) => {
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
      content={widgetFor("body")}
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
  }),
  widgetFor: PropTypes.func
};

export default PeoplePagePreview;
