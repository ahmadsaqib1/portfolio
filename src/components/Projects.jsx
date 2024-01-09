import React from "react"

import "./Project.css"
import Project from "./Project"
import data from "./ProjectsData.json"

const Projects = () => {
    return (
    <div className="work-container">
        <h1 className="project-heading">
            Projects
        </h1>
        <div className="project-container">
            {data.map((val, ind)=>{
                 return(
                    <Project
                    key={ind}
                    imgsrc={val.imgsrc}
                    title={val.title}
                    text={val.text}
                    gitrepo={val.gitrepo}
                    deployed={val.deployed}
                    />
                )
            })}
        </div>
    </div>
    )
}
    
    export default Projects

