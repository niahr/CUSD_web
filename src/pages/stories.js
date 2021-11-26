import * as React from "react"
import Footer from '../components/footer/footer'
import { Link } from "gatsby"
import Connectwithus from '../components/footer/connectwithus'
import VideoOverview from '../components/about/videooverview.js'
import Nav from '../components/navbar/nav'
import moviemid from '../images/aboutimg/ps9.jpg'
import Parallax from "../components/parallax/parallax.js"


// markup
const StoriesPage = () => {
  return (
    <main>
      <Nav />
      <VideoOverview />
      <Parallax image={moviemid} caption={"Stories"} height={250}> </Parallax>
      <Footer />
      <Connectwithus />

    </main>
  )
}

export default StoriesPage
