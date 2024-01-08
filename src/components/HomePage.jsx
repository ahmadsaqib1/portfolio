import React from "react";

import { Link } from "react-router-dom"

import IntroImg from "../assets/hero.jpg";
import "./HomePage.css";

const HomePage = () =>{
return <div className="hero">
    <div className="mask">
        <img className="into-img" src={IntroImg} alt="IntroImage"/>
    </div>
    <div className="content">
        <h1>Ahmad Saqib.</h1>
        <p>Welcome to Ahmad Saqib's Freelance Web Development Studio! As a seasoned web developer, I bring a passion for turning ideas into immersive online experiences..</p>
        <h1>Front-End Developer</h1>
    </div>
</div>
}

export default HomePage