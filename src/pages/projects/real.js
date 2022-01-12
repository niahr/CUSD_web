import React from 'react'
import Subteam from "../../components/projects/Subteam"
import real1 from "../../images/project_photos/real/real1.jpg"
import real2 from "../../images/project_photos/real/real2.jpg"
import real3 from "../../images/project_photos/real/real3.jpeg"
import real_header from "../../images/project_photos/real/real-header.jpg"

const info = {
  mission: "REAL aims to address insecurities in the food system by designing a sustainable controlled environment agriculture system for cold climates to empower small, sustainable farms, increase the knowledge base surrounding sustainable agriculture, and make locally-sourced, healthy crops more accessible.",
  desc: [
    "This project is currently in the modeling and prototyping phase with the ultimate goals of creating thermodynamic models for our greenhouse, creating an online tool to help farmers create and monitor their plant beds, and determining the feasibility of this project in the local Ithaca area.",
  ],
  title: "REAL",
  title2: "Empowering local farms through the system of Aquaponics",
  parallax1: real_header,
  parallax2: real_header,
  images: [real1, real2, real3],
  facts: []
}

export default function real() {
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
