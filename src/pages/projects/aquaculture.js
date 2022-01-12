import React from 'react'
import Subteam from "../../components/projects/Subteam"
import aqua1 from "../../images/project_photos/aquaculture/aquaculture1.jpg"
import aqua2 from "../../images/project_photos/aquaculture/aquaculture2.jpg"
import aqua3 from "../../images/project_photos/aquaculture/aquaculture3.jpeg"
import aqua_header from "../../images/project_photos/aquaculture/aquaculture-header.jpg"

const info = {
  mission: "AquaCulture aims to promote educational and economic empowerment within coastal communities by creating an aquaculture system that is both financially and environmentally sustainable.",
  desc: [
    "In collaboration with Shoals Marine Laboratory, this project focuses on providing accessible, sustainable, and environmentally conscious options to the fishing industry through marine aquaculture. The goal of this project is to design and build an aquaculture module that can maintain multiple different species and withstand the turbulence of open waters. This project will rely on a combination of biological study of marine species and mechanical engineering principles to build a module that is efficient and effective."
  ],
  title: "AquaCulture",
  title2: "Revolutionizing Fishing Industry with Marine Aquaculture",
  parallax1: aqua_header,
  parallax2: aqua_header,
  images: [aqua1, aqua2, aqua3],
  facts: []
}

export default function aquaculture() {
  return (
    <div>
      <Subteam
        parallax1={info.parallax1}
        title={info.title}
        title2={info.title2}
        mission={info.mission}
        desc={info.desc}
        images={info.images}
        parallax2={info.parallax2}
        facts={info.facts}
      />
    </div>
  )
}
