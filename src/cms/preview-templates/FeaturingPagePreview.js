import React from "react";
import PropTypes from "prop-types";
import { FeaturingPageTemplate } from "../../templates/featuring-page";

const FeaturingPagePreview = ({ entry, widgetFor }) => {
  const entryExperiences = entry.getIn(["data", "experiences"]);
  const experiences = entryExperiences ? entryExperiences.toJS() : [];

  const entryPerformances = entry.getIn(["data", "performances"]);
  const performances = entryPerformances ? entryPerformances.toJS() : [];

  return (
    <FeaturingPageTemplate
      title={entry.getIn(["data", "title"])}
      description={entry.getIn(["data", "description"])}
      content={widgetFor("body")}
      experiences={experiences}
      performances={performances}
    />
  );
};

FeaturingPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func
  }),
  widgetFor: PropTypes.func
};

export default FeaturingPagePreview;
