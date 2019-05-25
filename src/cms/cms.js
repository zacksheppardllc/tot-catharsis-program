import CMS from "netlify-cms-app";
import uploadcare from "netlify-cms-media-library-uploadcare";
import cloudinary from "netlify-cms-media-library-cloudinary";

import PeoplePagePreview from "./preview-templates/PeoplePagePreview";
import FeaturingPagePreview from "./preview-templates/FeaturingPagePreview";
import IndexPagePreview from "./preview-templates/IndexPagePreview";

CMS.registerMediaLibrary(uploadcare);
CMS.registerMediaLibrary(cloudinary);

CMS.registerPreviewTemplate("index", IndexPagePreview);
CMS.registerPreviewTemplate("people", PeoplePagePreview);
CMS.registerPreviewTemplate("featuring", FeaturingPagePreview);
