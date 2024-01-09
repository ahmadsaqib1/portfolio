import React from "react";

import Header from "../components/Header";
import ProjectPage from "../components/ProjectPage";
import Projects from "../components/Projects";

const MyProjects = () =>{
return( 
<div>
    <Header/>
    <ProjectPage heading="PROJECTS." text="Some of my recent Projects"/>
    <Projects/>
</div>
)
}

export default MyProjects