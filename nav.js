import React from 'react'
import { Link } from "gatsby"
import '../components/nav.module.css'

export default function NavBar() {
  return (
    <nav>
      <h1>CUSD</h1>
      <a href="">Projects</a>
      <Link to="">About</Link>
      <Link to="">Stories</Link>
      <Link to="">Connect</Link>
      <div> 
        <a href="">Join</a>
      </div>
    </nav>
  )
}