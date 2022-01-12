import React from 'react'
import Subteam from "../../components/projects/Subteam"
import marcomm1 from "../../images/project_photos/marcomm/marcomm1.png"
import marcomm2 from "../../images/project_photos/marcomm/marcomm2.jpg"
import marcomm3 from "../../images/project_photos/marcomm/marcomm3.jpg"
import marcomm_header from "../../images/project_photos/marcomm/marcomm-header.jpg"

const info = {
  mission: "Marketing and Communications connects stakeholders, students and members with CUSD through storytelling and experiential marketing, both offline and online.",
  desc: [
    "We bring inspirations to our audience and bring their passion and insights to search for ways to involve them in our journey to create sustainable impact around the world. We also play a vital role in setting directions for and ensuring consistency in CUSD's visual identity. We are responsible for communicating our values through recruitment, events, social and partnership. Examples of our projects include redesigning the website, creating a style guide, presenting weekly member's spotlight and strategizing a fundraising campaign.",
  ],
  title: "Marketing & Communications",
  title2: "Defining the next generation of sustainable design",
  parallax1: marcomm_header,
  parallax2: marcomm_header,
  images: [marcomm1, marcomm2, marcomm3],
  facts: [
    {
      number: 3,
      numberLabel: '3',
      metric: 'Multimedia Designers',
      color: '#22a84a'
    },
    {
      number: 2,
      numberLabel: '2',
      metric: 'Visual Designers',
      color: '#12a38d'
    },
    {
      number: 2,
      numberLabel: '2',
      metric: 'Content Curators',
      color: '#02664b'
    }
  ]
}

export default function marcomm() {
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

