import React, { useState } from 'react'
import { Link } from "gatsby"
import * as iconStyle from "../components/nav.module.css"
import CUSDlogo from '../images/CUSDLogoTypeGray.svg'
import hamburger from '../images/icons/hamburger.png'
import styled from 'styled-components'



function NavBar() {
  const [click, setClick] = useState(false);
  const [dropdown, setDropdown] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
 
  return (
    /* Nav wrapper for entire Nav bar */
    <nav>
      {/* Left side of Nav Bar containing logo and CUSD text */}
      <div className={iconStyle.leftwrap}>
        {/* <a href=""> */}

        {/* CUSD Logo*/}
        <div className={iconStyle.logo}>
          <img className={iconStyle.img} src={CUSDlogo} width="60px" height="60px" />
        </div>
        
        {/* CUSD Text */}
        <span className={iconStyle.header}>
          Cornell University
          <br></br>
          Sustainable Design
        </span>
        {/* </a> */}
      </div>

      {/* Mobile Nav bar Icon*/}
      <select className={iconStyle.select}>
        <option value="Home"> Menu </option>
        <option value="Projects"> Projects</option>
        <option value="About"> About</option>
        <option value="Stories"> Stories</option>
        <option value="Connect"> Connect</option>
        <option value="Join" href="https://forms.gle/3w9ajjVbN1PUzP3A8" > Join</option>
      </select>

      
      {/* Right side of Nav Bar containing navigation elements */}
      <div className={iconStyle.rightwrap}>
        <a href="" className={iconStyle.navA}>Projects</a>
        <a href="" className={iconStyle.navA}>About</a>
        <a href="" className={iconStyle.navA}>Stories</a>
        <a href="" className={iconStyle.navA}>Connect</a>
        <div className={iconStyle.joinButton}>
          <a href="https://forms.gle/3w9ajjVbN1PUzP3A8" className={iconStyle.joinButtonInner}> Join </a>
        </div>
      </div>
    </nav>
  )
}

export default NavBar;