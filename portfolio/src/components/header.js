import React from "react";


function Header() {
    return ( <header>
        <nav>
        <img src="https://img.icons8.com/ios/50/ffffff/computer-support.png"/> 
        <ul>
            <li><a>About</a></li>
            <li><a>Skills</a></li>
            <li><a>Portfolio</a></li>
            <li><a>Contact</a></li>
        </ul>
        </nav>
        <div className="hero-text-box">
        <h1>Sebastian Silva</h1>
        <h3>Full-Stack Web Developer</h3>
         <a className="" href="#" >Resume</a>
       </div>
    </header>
    )
}

export default Header;