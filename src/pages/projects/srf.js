import React from 'react'
import Subteam from "../../components/projects/Subteam"
import srf1 from "../../images/project_photos/srf/srf1.jpg"
import srf2 from "../../images/project_photos/srf/srf2.jpg"
import srf3 from "../../images/project_photos/srf/srf3.jpg"
import solar from "../../images/project_photos/srf/solar.jpg"
import srf_header from "../../images/project_photos/srf/srf-header.jpg"

const info = {
  mission: "The Sustainability Research Facility was an interdisciplinary student-led design-build project and research endeavor orchestrated by Cornell University Sustainable Design.",
  desc: [
    "We partnered with the Institute for Computational Sustainability to design and construct a 3000 square foot modular building dedicated to catalyzing a new era in sustainable education and research. Born out of the innovative heritage of Cornell's Solar Decathlon team, the structure was to be reconfigurable to emulate the building's lifecycle, enabling exploration of methods and technologies that affect building system design and operation.",
    "The center not only offered a unique opportunity to integrate complex technology with engaging architectural features but promoted dynamic public interaction with its innovative components."
  ],
  title: "Sustainable Research Facility",
  title2: "A first-of-its-kind facility for interdisciplinary sustainability research",
  parallax1: srf_header,
  parallax2: srf_header,
  images: [srf1, srf2, srf3],
  facts: [
    {
      number: 0,
      numberLabel: 'Hydroelectric, BioFuel, Wind, Solar',
      metric: 'Energies Implemented',
      color: '#22a84a',
      background: solar
    },
    {
      number: 13,
      numberLabel: '13',
      metric: 'Professors advising the project',
      color: '#12a38d'
    },
    {
      number: 300,
      numberLabel: '3000',
      metric: 'Projected Size (Sq. Ft.)',
      color: '#02664b'
    }
  ]
}

export default function srf() {
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

