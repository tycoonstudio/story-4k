import React, { useState } from "react";
import "./_style.scss"
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faSun, faUser } from "@fortawesome/free-solid-svg-icons";
import ButtonHead from "../button/index.jsx"


const Header = () => {
  const [hamClick , setHamClick]=useState(false)
  
  const ToggleHam =()=>{
    if (hamClick===false) {
      setHamClick(true)
      console.log(true)
    }
    if (hamClick===true) {
      setHamClick(false)
      console.log(false);
    }
  }
  return (
    <header>
      <nav className="header-nav">
        <div className="navbar-left">
          <div className="hamburgar" onClick={ToggleHam}>
            <FontAwesomeIcon icon={faBars} size="2x" />
          </div>

          <div className="logo">
            Story 4k
          </div>
        </div>

        <div className="navbar-right">
          <div className="searchbar" >
            <input type="search" id="searchbar" name="search" placeholder="search" />
          </div>

          <div className="dark-icon">
            <FontAwesomeIcon icon={faSun} size="lg" />
          </div>

          <button className="user-profile">
            <FontAwesomeIcon icon={faUser} />
          </button>
        </div>
      </nav>

      {
      hamClick && <div className='sidebar'>
      <ButtonHead name="sign-in"/>
      <ButtonHead name="sign-up"/>
      <div className='token-sec'>
        <p>tokens:</p>      
      </div>
    </div>
    }
    </header> 
  );
};

export default Header;
