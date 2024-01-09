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
                //https://vitejs.dev/guide/assets#new-url-url-import-meta-url
                const imgUrl = new URL(val.imgsrc, import.meta.url).href

                return(
                    <Project
                    key={ind}
                    imgsrc={imgUrl}
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

