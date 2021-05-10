import React from 'react'
import pic from '../images/weare.png'
import * as iconStyle from "./weare.module.css"

export default function team({ children }) {
  return <div className={iconStyle.weare}>{children}
  <div className={iconStyle.left}>
    <h1 className = {iconStyle.header }> We are a Team of Strategists </h1>
    <p className ={iconStyle.para}>Founded in 2009, Cornell University Sustainable Design (CUSD) is a student run, 
    interdisciplinary project team with a bias towards impact. We bring together students from across all seven colleges to work 
    alongside renowned faculty and knowledgeable professionals in our mission to create a network of proactively sustainable communities.</p>
  </div>
  <div className={iconStyle.image}> <img src ={pic} height = '400px'/> </div>
  </div>
}