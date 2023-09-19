// ImageLink.js

import React from "react";

const ImageLink = ({ src, alt, to }) => (
  <a href={to} target="_blank" rel="noopener noreferrer">
    <img src={src} alt={alt} />
  </a>
);

export default ImageLink;
