import React from "react"

import "./Project.css"
import { NavLink } from "react-router-dom"

const Project= (props) =>{
    return (
        <div className="project-card">
        <img src={props.imgsrc} alt="image"/>
        <h2 className="project-title">{props.title}</h2>
        <div className="pro-detail">
            <p>{props.text}</p>
            <div className="pro-btn">
                <NavLink to={props.gitrepo} className="btn">
                    Git-repo
                </NavLink>
                <NavLink to={props.deployed} className="btn">
                    Deployed version
                </NavLink>
            </div>
        </div>
    </div>
    )
    }
    
    export default Project

