/* JUST TESTING */

import * as React from "react"
import "../components/join/content.css"
import Nav from '../components/navbar/nav'
import Parallax from "../components/parallax/parallax.js"
import Connectwithus from '../components/footer/connectwithus'
import Footer from '../components/footer/footer.js'
import JoinContent from '../components/join/content.js'
import joinpic from '../images/background_images/cusdcornell.png'
import Divider from '../components/join/divider.js'
import JoinTimeLine from '../components/join/timeline.js'
import Information from '../components/join/information.js'


const JoinPage = () => {
  return (

    <main>
      <Nav />
      <Parallax image={joinpic} caption={"Join Us!"} height={350}> </Parallax>
      <Divider />
      <JoinContent />
      <JoinTimeLine />
      <Information />
      <Footer />
      <Connectwithus />
    </main>
  )
}
export default JoinPage