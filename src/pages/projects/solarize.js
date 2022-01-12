import React from 'react'
import Subteam from "../../components/projects/Subteam"
import sol1 from "../../images/project_photos/solarize/sol1.jpg"
import sol2 from "../../images/project_photos/solarize/sol2.jpg"
import sol3 from "../../images/project_photos/solarize/sol3.png"

const info = {
  mission: "Solarize aims to spark Cornell Grounds' transition to carbon neutrality by replacing traditional energy sources with solar technology.",
  desc: [
    "Our first project involves developing a solar trailer which will provide on-the-go sustainable energy for the maintenance of Cornell's campus. Once this is implemented, we hope to expand our efforts to additional renewable energy projects within Cornell Grounds and the surrounding community.",
  ],
  title: "Solarize",
  title2: "Electrifying Cornell Grounds with sustainable energy sources",
  parallax1: sol1,
  parallax2: sol1,
  images: [sol1, sol2, sol3],
  facts: [
    {
      number: 100,
      numberLabel: '318,625',
      metric: '2008 Cornell CO2 Emissions',
      color: '#22a84a'
    },
    {
      number: 50,
      numberLabel: '203,001',
      metric: '2019 Cornell CO2 Emissions',
      color: '#12a38d'
    },
    {
      number: 0,
      numberLabel: '0',
      metric: '2035 Cornell CO2 Emissions Goal',
      color: '#02664b'
    }
  ],
  solarize: true
}

export default function solarize() {
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
        solarize={info.solarize}
      />
    </div>
  )
}

