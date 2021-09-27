import * as React from "react"
import Footer from '../components/Footer'
import { Link } from "gatsby"
import Connectwithus from '../components/connectwithus'
import Team from '../components/weareateam'
import Buildanimpact from '../components/buildanimpact'

// markup
const IndexPage = () => {
  return (
    <main>
      <Link to="/about/">about</Link>
      <Footer />
      <Team/>
      <Buildanimpact/>
      <Connectwithus/>
      
    </main>
  )
}

export default IndexPage
