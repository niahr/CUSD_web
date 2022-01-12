import React from 'react'
import Subteam from "../../components/projects/Subteam"
import redo1 from "../../images/project_photos/redo/redo1.jpg"
import redo2 from "../../images/project_photos/redo/redo2.jpg"
import redo3 from "../../images/project_photos/redo/redo3.jpg"
import redo_header from "../../images/project_photos/redo/redo-header.png"

const info = {
  mission: "Project REDO aims to set the Green Standard of integrative waste management for zoological parks through solutions that minimize wastefulness and maximize environmental consciousness, economic sustainability, and community enrichment.",
  desc: [
    "Through a partnership with the Smithsonian Institution National Zoo, REDO is building innovative solutions for zoos to manage their animal manure and food waste. Our composting solutions set the Gold Standard for zoos to make use of their waste products. We see waste and doo not as a problem, but as unique assets with educational, social, environmental, and financial benefits.",
  ],
  title: "REDO",
  title2: "Rethinking waste at the Smithsonian National Zoo",
  parallax1: redo_header,
  parallax2: redo_header,
  images: [redo1, redo2, redo3],
  facts: [
    {
      number: 15,
      numberLabel: '15',
      metric: 'Tons of Waste',
      color: '#22a84a'
    },
    {
      number: 10,
      numberLabel: '10',
      metric: 'Students',
      color: '#12a38d'
    },
    {
      number: 90,
      numberLabel: '90%',
      metric: 'Waste Diverted',
      color: '#02664b'
    }
  ]
}

export default function redo() {
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

