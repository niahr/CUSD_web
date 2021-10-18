import React from 'react'
import { Link } from "gatsby"
import * as iconStyle from "../components/nav.module.css"
import CUSDlogo from '../images/CUSDLogoTypeGray.svg' 


export default function NavBar() {
  return (
    /* Nav wrapper for entire Nav bar */
    <nav>
      {/* Left side of Nav Bar containing logo and CUSD text */}
      <div className={iconStyle.leftwrap}> 
        {/* <a href=""> */}

        {/* CUSD Logo*/}
        <div className={iconStyle.logo}>
          <img src={CUSDlogo} width="60px" height="60px" />
        </div>

        {/* CUSD Text */}
        <span className={iconStyle.header}>
            Cornell University
            <br></br>
            Sustainable Design
        </span>
        {/* </a> */}
      </div>

      {/* Right side of Nav Bar containing navigation elements */}
      <div className={iconStyle.rightwrap}>
        <a href="" className={iconStyle.changecolor}>Projects</a>
        <a href="" className={iconStyle.changecolor}>About</a>
        <a href="" className={iconStyle.changecolor}>Stories</a>
        <a href="" className={iconStyle.changecolor}>Connect</a>
        <a href="https://forms.gle/3w9ajjVbN1PUzP3A8" className={iconStyle.joinButton}> Join </a>
      </div>
    </nav>
        )
}