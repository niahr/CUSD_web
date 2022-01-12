import React from 'react'
import Subteam from "../../components/projects/Subteam"
import stonebarns1 from "../../images/project_photos/stonebarns/stonebarns1.jpg"
import stonebarns2 from "../../images/project_photos/stonebarns/stonebarns2.jpg"
import stonebarns3 from "../../images/project_photos/stonebarns/stonebarns3.jpg"
import stonebarns4 from "../../images/project_photos/stonebarns/stonebarns4.jpg"
import stonebarns5 from "../../images/project_photos/stonebarns/stonebarns5.jpg"
import stonebarns_header from "../../images/project_photos/stonebarns/stonebarns-header.png"

const info = {
  mission: "Stone Barns Recycling",
  desc: [
    "The Stone Barns Team is working with the Stone Barns Center for Food and Agriculture to reimagine waste management by seeing decaying farm matter as free, usable energy for the farm. Our specific area of focus for this semester involves designing a system to replace a hot water heater in a barn using the heat generated from a nearby compost pile. This system will include a heart collector in the compost pile, a heat exchanger, and a heated water tank inside the barn which will dispense water for all utilities. The Stone Barns Center is a pioneer in sustainable farming, educating farms nationwide, and we hope that our optimized designs can be showcased as innovative, easily implementable systems for all.",
  ],
  title: "Stone Barns",
  title2: "Rethinking recycling with Blue Hill Farms",
  parallax1: stonebarns_header,
  parallax2: stonebarns_header,
  images: [stonebarns1, stonebarns2, stonebarns3, stonebarns4, stonebarns5],
  facts: [
    {
      number: 40,
      numberLabel: '40%',
      metric: 'Food Wasted in America',
      color: '#22a84a'
    }
  ]
}

export default function stonebarns() {
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

