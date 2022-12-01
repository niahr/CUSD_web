import * as React from "react";
import Footer from "../components/footer/footer";
import Connectwithus from "../components/footer/connectwithus";
import VideoOverview from "../components/stories/videooverview.js";
import Nav from "../components/navbar/nav";
import videohead from "../images/background_images/SNNGroup.jpg";
import videomid from "../images/background_images/ourpassion.png";
import Parallax from "../components/parallax/parallax.js";
import image1 from "../images/stories_photos/replacepic.jpg";

// markup
const StoriesPage = () => {
  return (
    <main>
      <Nav />
      <Parallax image={videohead} caption={"Stories"} height={550}></Parallax>
      <VideoOverview image1={image1} />
      <Parallax image={videomid} height={350}></Parallax>
      <Footer />
      <Connectwithus />
    </main>
  );
};

export default StoriesPage;
