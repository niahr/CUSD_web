import React from 'react'
import { Link } from "gatsby"
import * as iconStyle from "../components/nav.module.css"
import CUSDlogo from '../images/CUSDLogoTypeGray.svg' 

export default function NavBar() {
  return (
    <nav>
      <div className={iconStyle.Left}>
        <img src={CUSDlogo} width="60px" height="60px" />
          <div className={iconStyle.header}>
            <h1>Cornell University</h1>
            <h1>Sustainable Design</h1>
          </div>
      </div>
      
      <div className={iconStyle.Right}>
        <a href="">Projects</a>
        <Link to="">About</Link>
        <Link to="">Stories</Link>
        <Link to="">Connect</Link>
        <Link href="">Join</Link>
      </div>
    </nav>
  )
}