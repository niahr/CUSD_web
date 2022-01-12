import React from 'react'
import Subteam from "../../components/projects/Subteam"
import svi1 from "../../images/project_photos/svi/svi1.jpg"
import svi2 from "../../images/project_photos/svi/svi2.jpg"
import svi3 from "../../images/project_photos/svi/svi3.jpg"
import svi_header from "../../images/project_photos/svi/svi-header.jpg"

const info = {
  mission: "The SVI team is working to research, design, and implement sustainable resource management systems in a small, resource-limited village in the Chikkaballpur district of Karnataka, India. Among the core solutions SVI intends to deliver are adequate water storage, sustainable energy practices, solid waste management, and a cost-efficient irrigation system.",
  desc: [
    "As water is the most essential and critical component of the multidimensional issues the village faces, this semester will be focused on research and design behind rainwater harvesting systems to provide villagers with a sustainable source of clean water. SVI will simultaneously work on collecting the necessary data to establish a long term strategy for the project.",
    "Some of the core challenges the village currently faces include relying solely on rainwater from the monsoon season, and extracting that water from bore wells in the ground. Not only is this method unsustainable because it depletes the water table, but the water is also often contaminated with dangerous levels of fluoride and bacteria from lack of a proper waste management system. Their primary agricultural crops include millet and table grapes and involve water intensive cultivation. While the village is technically on the grid, they only receive about three hours of electricity per day, and do not utilize the great potential that exists for solar and wind energy systems."
  ],
  title: "Smart Village India",
  title2: "Creating smart, sustainable resource management systems in a resource limited region",
  parallax1: svi_header,
  parallax2: svi_header,
  images: [svi1, svi2, svi3],
  facts: [
    {
      number: 233,
      numberLabel: '233',
      metric: 'Population of Village',
      color: '#22a84a'
    },
    {
      number: 48,
      numberLabel: '48',
      metric: 'Number of Households/Families',
      color: '#12a38d'
    },
    {
      number: 31,
      numberLabel: '31 Inches',
      metric: 'Average Natural Rainfall Per Year',
      color: '#02664b'
    }
  ]
}

export default function svi() {
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

