import React, {useState} from "react"
import {FaBars, FaTimes} from "react-icons/fa"
import { Link } from "react-router-dom"


import "./Header.css"
const Header = () =>{

    const[click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    return (
    <div className="header">
        <Link to="/">
            <h1>Ahmad Saqib.</h1>
        </Link>
        <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/projects">Projects</Link>
            </li>
            <li>
                <Link to="/contact">Contact</Link>
            </li>
        </ul>
        <div className="hamburger" onClick={handleClick}>
            {click ? (<FaTimes size={20} style={{color: "#fff"}}/>)
            :(<FaBars size={20} style={{color: "#fff"}}/>)
            
            }
            
            

        </div>
    </div>
    )
    }
    
export default Header