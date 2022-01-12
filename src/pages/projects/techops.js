import React from 'react'
import Subteam from "../../components/projects/Subteam"
import techops1 from "../../images/project_photos/techops/techops1.jpg"
import techops2 from "../../images/project_photos/techops/techops2.jpg"
import techops3 from "../../images/project_photos/techops/techops3.jpg"
import techops_header from "../../images/project_photos/techops/techops-header.jpg"

const info = {
  mission: "Technical Operations supports all of CUSD's digital resources, both as an organization as a whole, and through each subproject.",
  desc: [
    "The Technical Operations team (TechOps) is in charge of managing the digital resources of CUSD to better communicate our mission and values. Tech Ops not only oversees our general website, but they also work with our Marketing & Communications team to build web platforms that support our Vertical Teams. These specialized websites enable us to engage with and educate target audiences during outreach events.",
  ],
  title: "Tech Ops",
  title2: "Developing the digital resources of CUSD",
  parallax1: techops_header,
  parallax2: techops_header,
  images: [techops1, techops2, techops3],
  facts: [
    {
      number: 2,
      numberLabel: '2.6',
      metric: 'Lines of Code Written by Members in Millions',
      color: '#22a84a'
    }
  ]
}

export default function techops() {
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

