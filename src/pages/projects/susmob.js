import React from 'react'
import Subteam from "../../components/projects/Subteam"
import susmob1 from "../../images/project_photos/susmob/susmob1.jpg"
import susmob2 from "../../images/project_photos/susmob/susmob2.jpg"
import susmob3 from "../../images/project_photos/susmob/susmob3.jpg"
import TCAT from "../../images/project_photos/susmob/TCAT.jpg"
import susmob_header from "../../images/project_photos/susmob/susmob-header.jpg"

const info = {
  mission: "Changing the face of the TCAT bus system",
  desc: [
    "The project team has grown from its initial partnership with the Tompkins Consolidated Area Transit (TCAT) into three teams focused on setting a new standard for infrastructure. The Shelter Team has been designing a new modular bus shelter that will incorporate elements of technology, sustainability, and comfort to improve the user experience while waiting at TCAT's designated stops. The Garage Team has been tasked by the City of Ithaca to create renovation plans for Seneca Garage in Downtown Ithaca that will restructure the wayfinding and informational signage systems. The Road-train Team is partnering with The Campaign for Greater Buffalo to pioneer a high-speed bus system that would offer a sustainable and efficient means of transportation across New York. These teams are a mix of engineers, designers, architects, planners, and more that have been making creative solutions informed by empathy fieldwork. These projects are a great opportunity to apply Systems Design Thinking and quantitative analytical tools to a complex infrastructural problem, as well as incorporate cutting-edge sustainable technologies. The goal is to provide insights about the systems behavior and performance to help prioritize development efforts. Members will be empowered to design solutions for our community and work closely with regional stakeholders. This is a real project with full-scale prototypes and real implementations."
  ],
  title: "Sustainable Mobility",
  title2: "Re-design the current public transportation system in Tompkins County, NY",
  parallax1: susmob_header,
  parallax2: susmob_header,
  images: [susmob1, susmob2, susmob3],
  facts: [
    {
      number: 3,
      numberLabel: '3',
      metric: 'Research Groups Committed',
      color: '#22a84a'
    },
    {
      number: 22,
      numberLabel: '22',
      metric: 'Team Members',
      color: '#12a38d'
    },
    {
      number: 0,
      numberLabel: 'TCAT',
      metric: 'Official Partnership With',
      color: '#02664b',
      background: TCAT
    }
  ]
}

export default function susmob() {
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
