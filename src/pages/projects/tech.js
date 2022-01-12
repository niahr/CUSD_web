import React from 'react'
import Subteam from "../../components/projects/Subteam"
import tech1 from "../../images/project_photos/tech/tech1.jpg"
import tech2 from "../../images/project_photos/tech/tech2.jpg"
import tech3 from "../../images/project_photos/tech/tech3.jpg"
import tech_header from "../../images/project_photos/tech/tech-header.jpg"

const info = {
  mission: "As the only student group working on the tech campus, CUSD has performed comprehensive analyses of wind, solar, hydro, and geothermal energy production for Roosevelt Island and beyond.",
  desc: [
    "Using sophisticated models and comprehensive research, CUSD has worked closely with Facilities to pursue a floating solar park, campus wide geothermal installations, and innovative wind power solutions. CUSD has provided strategic, technical research, and rigorous design resources to numerous parts of the Tech Campus.",
    "CUSD has been involved with the Cornell Tech Campus since the intial RFP phase in 2012. Students have played a large role in the multi-phase master plan and LEED certification of the entire campus. In producing a mast plan for the next phases of the campus, the team incorporates local and transportation and logistical constraints, while simultaneously embracing community engaged design practices.",
    "Currently, CUSD's involvement in Cornell Tech is in a scoping phase as we determine the next major initiative to pursue."
  ],
  title: "Cornell Tech",
  title2: "Designing a sustainable future for Cornell in NYC",
  parallax1: tech_header,
  parallax2: tech_header,
  images: [tech1, tech2, tech3],
  facts: [
    {
      number: 300,
      numberLabel: '$900M',
      metric: 'Project Budget',
      color: '#22a84a'
    },
    {
      number: 5,
      numberLabel: '5',
      metric: 'Years Involved',
      color: '#12a38d'
    },
    {
      number: 100,
      numberLabel: '14,000',
      metric: 'Island Residents',
      color: '#02664b'
    }
  ]
}

export default function tech() {
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

