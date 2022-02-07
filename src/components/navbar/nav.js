import React from 'react'
import { Link } from "gatsby"
import * as iconStyle from "./nav.module.css"
import CUSDlogo from '../../images/CUSDLogoTypeGray.svg'

function NavBar() {

  const handleChange = (e) => {
    const isBrowser = () => typeof window !== `undefined`;
    if (isBrowser()) {
      if (e.currentTarget.value === "join") {
        window.open('https://forms.gle/3w9ajjVbN1PUzP3A8', '_blank');
      } else {
        window.location = e.currentTarget.value;
      }
    }
  }

  return (
    /* wrapper for entire Nav bar */
    <div className={iconStyle.nav}>
      {/* Left side of Nav Bar containing logo and CUSD text */}
      <div className={iconStyle.leftwrap}>
        {/* CUSD Logo*/}
        <a href="/">
          <div className={iconStyle.logo}>
            <img alt="logo" className={iconStyle.img} src={CUSDlogo} width="60px" height="60px" />
          </div>
        </a>
        <a href="/">
          {/* CUSD Text */}
          <span className={iconStyle.header}>
            Cornell University
            <br></br>
            Sustainable Design
          </span>
        </a>

      </div>


      {/* Mobile Nav bar Icon*/}
      <select className={iconStyle.select} onChange={handleChange}>
        <option value="/"> Menu </option>
        <option value="/projects">Project Teams</option>
        <option value="/about"> About</option>
        <option value="/stories"> Stories</option>
        <option value="/connect"> Connect</option>
        <option value="/join"> Join</option>
      </select>


      {/* Right side of Nav Bar containing navigation elements */}
      <div className={iconStyle.rightwrap}>
        <a href="/projects/" className={iconStyle.navA}>Project Teams</a>
        <a href="/about/" className={iconStyle.navA}>About</a>
        <a href="/stories/" className={iconStyle.navA}>Stories</a>
        <a href="/connect/" className={iconStyle.navA}>Connect</a>
        <a href="/join/" className={iconStyle.navA}> Join </a>
      </div>
    </div>
  )
}

export default NavBar;