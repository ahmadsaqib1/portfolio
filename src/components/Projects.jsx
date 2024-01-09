import React from "react"

import "./Project.css"
import Project from "./Project"
import ProjectCards from "./ProjectCards"
const Projects = () =>{
    return (
    <div className="work-container">
        <h1 className="project-heading">
            Projects
        </h1>
        <div className="project-container">
            {ProjectCards.map((val, ind)=>{
                return(
                    <Project
                    key={ind}
                    imgsrc={val.imgsrc}
                    title={val.title}
                    text={val.text}
                    gitrepo={val.gitrepo}
                    />
                )
            })}
        </div>
    </div>
    )
    }
    
    export default Projects

