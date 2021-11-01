import React from 'react'
import tweet from '../images/icons/twitterconnect.png'
import face from '../images/icons/facebookconnect.png'
import linked from '../images/icons/linkedconnect.png'
import insta from '../images/icons/instaconnect.png'
import * as iconStyle from "./cwu.module.css"

export default function cws({ children }) {
  return <div className={iconStyle.connectwithus}>{children}
    <div className={iconStyle.connecticons}>
      <h1 className={iconStyle.header} > Connect With Us</h1>
      <div className={iconStyle.eachicon}>
        <span className={iconStyle.column}>
          <a className={iconStyle.images} href="https://twitter.com/CUSD"> <img src={tweet} width="65px" height="65px" alt="CUSD twitter" /></a>
        </span>
        <span className={iconStyle.column}>
          <a className={iconStyle.images} href="https://www.facebook.com/CUSustainableDesign/?fref=ts"><img src={face} width="65px" height="65px" alt="CUSD Facebook" /></a>
        </span>
        <span className={iconStyle.column}>
          <a className={iconStyle.images} href="https://www.linkedin.com/company/cornellusd"><img src={linked} width="65px" height="65px" alt="CUSD LinkedIn" /></a>
        </span>
        <span className={iconStyle.column}>
          <a className={iconStyle.images} href="https://www.instagram.com/cusustainabledesign/?hl=en"><img src={insta} width="70px" height="70px" alt="CUSD Instagram" /></a>
        </span>
      </div>
    </div>
    <p className={iconStyle.copyright}>&copy; 2011-2021 Cornell University Sustainable Design</p>
  </div>
}


