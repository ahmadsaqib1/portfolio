import React from "react";

import IntroImg from "../assets/hero.jpg";
import AvatarImg from "../assets/avatar.jpg";
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
        <div className="avatar-container">
          <img className="avatar-img" src={AvatarImg} alt="Avatar" />
        </div>
    </div>
</div>
}

export default HomePage