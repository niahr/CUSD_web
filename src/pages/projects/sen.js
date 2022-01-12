import React from 'react'
import Subteam from "../../components/projects/Subteam"
import sen1 from "../../images/project_photos/sen/sen1.png"
import sen2 from "../../images/project_photos/sen/sen2.png"
import sen3 from "../../images/project_photos/sen/sen3.png"
import sen_header from "../../images/project_photos/sen/sen-header.jpg"
// import CarouselComp from "../../components/projects/carousel.js"

const info = {
  mission: "In collaboration with United World Schools (UWS), CUSD is improving the architectural design of primary schools system to create a sustainable and conducive space for fostering education. We will examine the local community, culture, and resources, to fulfill the needs of local students, providing them equal opportunities for education.",
  desc: [
    "Sustainable Education is a team within Cornell University Sustainable Design focused on projects related to global education. Starting in 2009, Sustainable Education has worked in South Africa, Nicaragua, Haiti, and Ghana. In collaboration with Cornell University Systems Engineering, the aim of SE is to utilize a human-centered design process to work with collaborators, primarily non-profit organizations, to consult on architectural design, sustainability analysis, engineering, and branding.",
    "The project has progressed through its research and school design phase, and it is currently in its analysis and master planning phase. The objective is to deliver a cohesive proposal of the UWS school system by using a micro and macro approach: the team is widening the scope of design considerations into the classroom interiors and the landscape, namely a reading nook and an outdoor pavilion. By the end of the semester, SEN will produce a cumulative portfolio of design suggestions for the UWS school in Aahale, Nepal."
  ],
  title: "Sustainable Education Nepal",
  title2: "CUSD x United World Schools",
  parallax1: sen1,
  parallax2: sen1,
  images: [sen1, sen2, sen3],
  facts: [{
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
  }],
  map: true
}

export default function sen() {
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
