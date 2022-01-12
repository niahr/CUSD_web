import React from 'react'
import Subteam from "../../components/projects/Subteam"
import nicaragua1 from "../../images/project_photos/nicaragua/nicaragua1.jpg"
import nicaragua2 from "../../images/project_photos/nicaragua/nicaragua2.jpg"
import nicaragua3 from "../../images/project_photos/nicaragua/nicaragua3.jpg"
import jan13 from "../../images/project_photos/nicaragua/jan13.jpg"
import nagarote from "../../images/project_photos/nicaragua/nagarote.png"
import sostenica from "../../images/project_photos/nicaragua/sostenica.jpg"

import nicaragua_header from "../../images/project_photos/nicaragua/nicaragua-header.jpg"

const info = {
  mission: "SosteNica and Cornell University Sustainable Design (CUSD)-SNN teamed up to design and construct a model home that relies on values of sustainability, health, beauty, and cultural continuity, while also addressing affordability. The model house will be built using local materials â€“ earthen adobe walls â€“ respecting tradition, using less embodied energy, and protecting inhabitants from tropical heat.",
  desc: [
    "The house includes four eco-technologies: a composting toilet, an efficient wood burning stove, rainwater capture, and grey water treatment. In addition, a patio garden provides food for the family, improving their food security and diversifies their diet with fruits and vegetables. The garden uses food forest permaculture principles, is fertilized by the compost from the toilet, and is watered from the grey water treatment system. This house is a showcase for more than 100 housing cooperatives throughout Nicaragua.",
    "In the Spring of 2012, students conducted thorough research during the semester and planned for a two week site visit to Nagarote in the Summer. The next Fall, a team in Ithaca planned the building designs which were successfully constructed when a group of 20 students travelled to Nicaragua in January. The construction has now been standing for over three years and recently withstood a strong earthquake that destroyed many building in the area."
  ],
  title: "Sustainable Neighborhoods Nicaragua",
  title2: "A model of healthy, sustainable, and low-cost housing for South America",
  parallax1: nicaragua_header,
  parallax2: nicaragua_header,
  images: [nicaragua1, nicaragua2, nicaragua3],
  facts: [
    {
      number: 0,
      numberLabel: 'January 2013',
      metric: 'Date Constructed',
      color: '#22a84a',
      background: jan13
    },
    {
      number: 0,
      numberLabel: 'Nagarote, Nicaragua',
      metric: 'Location',
      color: '#12a38d',
      background: nagarote
    },
    {
      number: 0,
      numberLabel: 'SosteNica',
      metric: 'Partnership With',
      color: '#02664b',
      background: sostenica
    }
  ],
  map: true
}

export default function nicaragua() {
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
        map={info.map}
      />
    </div>
  )
}

