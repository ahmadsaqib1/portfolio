import React from "react";
import Header from "../components/Header";
import ProjectPage from "../components/ProjectPage";
import Contact from "../components/Contact";


const ContactMe = () =>{
return (
<div>
    <Header/>
    <ProjectPage heading="CONTACT." text="Lets have a Chat."/>
    <Contact/>
</div>
)
}

export default ContactMe