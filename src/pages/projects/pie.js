import React from 'react'
import Subteam from "../../components/projects/Subteam"
import pie1 from "../../images/project_photos/pie/pie1.jpg"
import pie2 from "../../images/project_photos/pie/pie2.jpg"
import pie3 from "../../images/project_photos/pie/pie3.jpg"
import pie_header from "../../images/project_photos/pie/pie-header.jpg"

const info = {
  mission: "Project Identification + Expansion",
  desc: [
    "Project Identification and Expansion (PIE) is tasked with developing, expanding, and sustaining CUSD's mission. Members of PIE are the liaison between new projects and CUSD. They target companies, NGO's, and groups that align with CUSD's mission of making a more sustainable world through design. PIE searches for projects in the Ithaca community, domestically, and internationally.",
  ],
  title: "PIE",
  title2: "Identifying the next big CUSD project",
  parallax1: pie_header,
  parallax2: pie_header,
  images: [pie1, pie2, pie3],
  facts: [
    {
      number: 50,
      numberLabel: '50',
      metric: 'Contacts with Stakeholders',
      color: '#22a84a'
    },
    {
      number: 7,
      numberLabel: '7',
      metric: 'Members',
      color: '#12a38d'
    },
    {
      number: 4,
      numberLabel: '4',
      metric: 'Countries',
      color: '#02664b'
    }
  ]
}

export default function pie() {
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

