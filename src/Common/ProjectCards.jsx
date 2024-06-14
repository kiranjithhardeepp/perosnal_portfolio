import React from "react";

function ProjectCards({ src, link,p }) {
  return (
    <a href={link} target="_blank">
      <img src={src} className="hover" alt="${p} logos" />
      <p>{p}</p>
    </a>
  );
}

export default ProjectCards;
