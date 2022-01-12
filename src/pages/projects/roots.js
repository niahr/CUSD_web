import React from 'react'
import Subteam from "../../components/projects/Subteam"
import roots_header from "../../images/project_photos/roots/roots-header.jpg"

const info = {
  mission: "In collaboration with its stakeholder Social Awareness Newer Alternatives (SANA), Roots will focus on the development of an innovative and informative two-acre demonstration plot for small-holder farmers in India.",
  desc: [
    "This exhibit will be designed to showcase cutting-edge agricultural practices that will improve crop yield while reducing waste and resource usage.",
    "The project is currently in its research phase. Topics of study include the following: permaculture, crop rotation, hydroponics and aeroponics, vermicompost, rainwater harvesting, and sustainable irrigation methods."
  ],
  title: "Roots",
  title2: "Designing a two acre demonstration plot in Delhi, India",
  parallax1: roots_header,
  parallax2: roots_header,
  images: [],
  facts: []
}

export default function roots() {
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

