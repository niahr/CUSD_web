import React from 'react'
import Subteam from "../../components/projects/Subteam"
import sweep_header from "../../images/project_photos/sweep/sweep-header.jpg"

const info = {
  mission: "SWEEP is set to become the waste management equivalent of LEED certification.",
  desc: [
    "We're working on this project with Cornell Sustainability Consultants (CSC) and Rob Watson (creator of LEED).",
    "Set to launch in Fall 2018, this project entails collecting and analyzing data on waste management in Ithaca, and researching best practices for reducing waste and new technologies to reuse waste. We'll be focusing on conversion technology for waste materials and conducting an infrastructure analysis, while CSC focuses on governance."
  ],
  title: "Sweep",
  title2: "Solid Waste Environmental Excellence Protocol",
  parallax1: sweep_header,
  parallax2: sweep_header,
  images: [],
  facts: []
}

export default function sweep() {
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

