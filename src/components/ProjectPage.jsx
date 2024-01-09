import React, {Component} from "react";

import "./ProjectPage.css"

const ProjectPage = (props) => {
    return (
      <div className="hero-img">
        <div className="heading">
          <h1>{props.heading}</h1>
          <p>{props.text}</p>
        </div>
      </div>
    );
  };
    
export default ProjectPage