import React from 'react'
import Subteam from "../../components/projects/Subteam"
import sac1 from "../../images/project_photos/sac/sac1.jpg"
import sac2 from "../../images/project_photos/sac/sac2.jpg"
import sac3 from "../../images/project_photos/sac/sac3.jpg"
import sac_header from "../../images/project_photos/sac/sac-header.jpg"

const info = {
  mission: "Solar Automated Composter",
  desc: [
    "Solar Automated Composter is a team of five engineers striving to promote sustainability at the Ithaca High School through the fabrication of a solar automatic composter. Ithaca High School currently tries to compost through Cayuga Compost, but there is a fundamental disconnect on how to properly compost, thus the majority of their compost ends up in the trash because of impurity. They aim to make composting simple and easy for the students by being able to make it in their back yard with 21st-century technology. They are redesigning the traditional 'tumbling composter' by making it run on solar technology and turns itself automatically.",
  ],
  title: "SAC",
  title2: "Solar Automated Composter",
  parallax1: sac_header,
  parallax2: sac_header,
  images: [sac1, sac2, sac3],
  facts: [
    {
      number: 5,
      numberLabel: '5',
      metric: 'Engineers',
      color: '#22a84a'
    },
    {
      number: 40,
      numberLabel: '40%',
      metric: 'Food Wasted in America',
      color: '#12a38d'
    }
  ]
}

export default function sac() {
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

