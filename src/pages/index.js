import * as React from "react"
import Footer from '../components/Footer'
import { Link } from "gatsby"
import Connectwithus from '../components/connectwithus'
import Team from '../components/weareateam'
import Nav from '../components/nav'

// markup
const IndexPage = () => {
  return (
    <main>
      <Link to="/about/">about</Link>
      <Nav/>
      <Team/>
      <Footer />
      <Connectwithus/>
      
    </main>
  )
}

export default IndexPage
