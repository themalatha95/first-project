import React from 'react';
import logo from '../Images/logo.png';
import {Link, NavLink} from 'react-router-dom';
import 'animate.css';

const Header = () => {
  return(
    <div>
       <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <Link  to="/" className="navbar-brand"><img src={logo} alt="vivan projects" height="70" /></Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto flex-nowrap">
                <li className="nav-item">
                <Link to ="/about" className="nav-link">About</Link>
              </li>
                  <li className="nav-item"> <Link to="/digital-marketing" className="nav-link" >Digital Marketing</Link> </li>
                    <li className="nav-item"> <Link to ="/web-development" className="nav-link">Web Development</Link> </li>
             
              <li className="nav-item"> <Link to="skill-development" className="nav-link">Skill-Development</Link> </li>
              
            
             <li className="nav-item"> <Link to="out-sourcing" className="nav-link" >Out Sourcing</Link> </li>
                 
                <li className="nav-item"> <Link to="contact-us" className="nav-link" >Contact Us</Link> </li>
             
             
            </ul>
            
          </div>
        </div>
      </nav>

    </div>

  );

}
export default Header;



