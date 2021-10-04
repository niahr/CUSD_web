import React from 'react'
import pic from '../images/weare.png'
import * as iconStyle from "./weare.module.css"
import { Link } from "gatsby"
import Animate from './Animate'

export default function team({ children }) {
  return <div className={iconStyle.weare}>{children}
  <div className={iconStyle.left}>
    <h1 className = {iconStyle.header }> We are a Team of </h1>
    <Animate/>
    <p className ={iconStyle.para}>Founded in 2009, Cornell University Sustainable Design (CUSD) is a student run, 
    interdisciplinary project team with a bias towards impact. We bring together students from across all seven colleges to work 
    alongside renowned faculty and knowledgeable professionals in our mission to create a network of proactively sustainable communities.</p>
    <Link to="/about/" className={iconStyle.link}>Learn more about the team</Link>
  </div>
  <div className={iconStyle.image}> <img src ={pic} height = '400px'/> </div>
  </div>
}