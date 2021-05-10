import React from 'react'
import tweet from '../images/icons/twitterconnect.png'
import face from '../images/icons/facebookconnect.png'
import linked from '../images/icons/linkedconnect.png'
import insta from '../images/icons/instaconnect.png'
import * as iconStyle from "./cwu.module.css"

<<<<<<< HEAD
export default function cws({ children }) {
  return <div className={iconStyle.connectwithus}>{children}
  <div className={iconStyle.connecticons}>
        <h1 className ={iconStyle.header} > Connect With Us</h1>
        <div className = {iconStyle.eachicon}>
          <a className={iconStyle.images} href= "https://twitter.com/CUSD">  <img src={tweet} width="50px" height="50px" /> </a>
          <a className={iconStyle.images} href= "https://www.facebook.com/CUSustainableDesign/?fref=ts"><img src={face} width="50px" height="50px"/> </a>
          <a className={iconStyle.images} href = "https://www.linkedin.com/company/cornellusd"><img src={linked} width="50px" height="50px"/> </a>
          <a className={iconStyle.images} href = "https://www.instagram.com/cusustainabledesign/?hl=en"> <img src={insta} width="50px" height="50px"/> </a>
=======

const img = {
  marginLeft: 10
}
const icons = {
  marginLeft: 10

}
const Footer = () => {
  return (
    <div>
      <div className="connecticons">
        <h1> Connect with us</h1>
        <div style={icons}>
          <img src={tweet} alt="https://twitter.com/CUSD" width="100px" height="100px" />
          <img src={face} alt="https://www.facebook.com/CUSustainableDesign/?fref=ts" width="100px" height="100px"/>
          <img src={linked} alt="https://www.linkedin.com/company/cornellusd" width="100px" height="100px"/>
          <img src={insta} alt="https://www.instagram.com/cusustainabledesign/?hl=en" width="100px" height="100px"/>
>>>>>>> a36ee21cca5124e635837568a3b3732692d2680e
        </div>
      </div>
      <p className= {iconStyle.copyright}>&copy; 2011-2021 Cornell University Sustainable Design</p>
      </div>
}


