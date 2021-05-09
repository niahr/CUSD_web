import * as React from "react"
import ConnectFooter from '../components/connectwithus'
import Footer from '../components/Footer'
import { Link } from "gatsby"

// markup
const IndexPage = () => {
  return (
    <main>
      <Link to="/about/">about</Link>
      <Footer />
      <ConnectFooter/>
      
    </main>
  )
}

export default IndexPage
