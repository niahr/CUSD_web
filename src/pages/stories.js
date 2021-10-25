import * as React from "react"
import Footer from '../components/Footer'
import { Link } from "gatsby"
import Connectwithus from '../components/connectwithus'
import VideoOverview from '../aboutcomponents/videooverview.js'
import Nav from '../components/nav'
import moviemid from '../images/aboutimg/ps9.jpg'
import Parallax from "../aboutcomponents/parallax.js"


// markup
const StoriesPage = () => {
  return (
    <main>
      <Nav />
      <Link to="/">Back to main</Link>
      <Link to="/about/">about</Link>
      <VideoOverview />
      <Parallax image={moviemid} caption={"Stories"} height={250}> </Parallax>
      <Footer />
      <Connectwithus />

    </main>
  )
}

export default StoriesPage
